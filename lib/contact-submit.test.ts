import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CONTACT_AUTO_REPLY_HTML,
  buildContactAutoReply,
  isSafeAutoReplyRecipient,
  type AutoReplyMailer,
  type ContactAutoReplyMessage,
} from "./contact-auto-reply.ts";
import {
  createContactPostHandler,
  type ContactMessageRow,
  type ContactStoreError,
} from "./contact-submit.ts";
import { readSmtpConfig } from "./smtp-mailer.ts";

// Approved copy, typed out by hand so any edit to the constants fails here.
const EXPECTED_SUBJECT = "Thank you for contacting the John Upan Odey Campaign";
const EXPECTED_TEXT =
  "Thank you for reaching out to the John Upan Odey Campaign. We have received your message, and a member of our team will get back to you as soon as possible.\n\nCampaign Team";

const VALID_BODY = {
  name: "Ada Test",
  email: "Ada.Test@Example.com",
  message: "Hello campaign, this is my message with secret words.",
  privacy: true,
};

function makeDeps(options: {
  insertError?: ContactStoreError | null;
  sendError?: Error;
  mailer?: "none";
  store?: "none";
  defer?: boolean;
} = {}) {
  const rows: ContactMessageRow[] = [];
  const sent: ContactAutoReplyMessage[] = [];
  const logs: { level: string; args: unknown[] }[] = [];
  const deferred: (() => Promise<void>)[] = [];

  const mailer: AutoReplyMailer = {
    async sendMail(message) {
      if (options.sendError) throw options.sendError;
      sent.push(message);
      return { messageId: "<test@local>" };
    },
  };

  const handler = createContactPostHandler({
    getStore: () =>
      options.store === "none"
        ? null
        : {
            async insertContactMessage(row) {
              if (options.insertError) return { error: options.insertError };
              if (row.id && rows.some((existing) => existing.id === row.id)) {
                return { error: { message: "duplicate key", code: "23505" } };
              }
              rows.push(row);
              return { error: null };
            },
          },
    getMailer: () => (options.mailer === "none" ? null : mailer),
    defer: options.defer ? (task) => void deferred.push(task) : undefined,
    logger: {
      error: (...args: unknown[]) => void logs.push({ level: "error", args }),
      warn: (...args: unknown[]) => void logs.push({ level: "warn", args }),
    },
  });

  return { handler, rows, sent, logs, deferred };
}

function post(body: unknown): Request {
  return new Request("https://example.test/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

test("successful submission is stored and gets the approved auto reply", async () => {
  const { handler, rows, sent } = makeDeps();
  const response = await handler(post(VALID_BODY));

  assert.equal(response.status, 201);
  assert.deepEqual(await response.json(), {
    ok: true,
    message:
      "Thank you. The campaign desk has received your message and will reply if a response is needed.",
  });

  assert.equal(rows.length, 1);
  assert.equal(rows[0].email, "ada.test@example.com");
  assert.equal(rows[0].source, "contact");

  assert.equal(sent.length, 1);
  const mail = sent[0];
  assert.equal(mail.from.address, "campaign@votejohnupanodey.com");
  assert.equal(mail.from.name, "John Upan Odey Campaign");
  assert.deepEqual(mail.to, { name: "", address: "ada.test@example.com" });
  assert.equal(mail.replyTo.address, "campaign@votejohnupanodey.com");
  assert.equal(mail.subject, EXPECTED_SUBJECT);
  assert.equal(mail.text, EXPECTED_TEXT);
  assert.equal(mail.headers["Auto-Submitted"], "auto-replied");
});

test("auto reply copy is exact, in text and HTML, with no dashes, Jnr, or phone", () => {
  const mail = buildContactAutoReply("someone@example.org");
  assert.equal(mail.subject, EXPECTED_SUBJECT);
  assert.equal(mail.text, EXPECTED_TEXT);

  const htmlText = CONTACT_AUTO_REPLY_HTML.replace(/<title>.*?<\/title>/s, "")
    .replace(/<[^>]+>/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  assert.deepEqual(htmlText, EXPECTED_TEXT.split("\n\n"));
  assert.equal(mail.html, CONTACT_AUTO_REPLY_HTML);

  for (const copy of [mail.subject, mail.text, htmlText.join(" ")]) {
    assert.doesNotMatch(copy, /[-\u2010-\u2015\u2212]/);
    assert.doesNotMatch(copy, /Jnr/i);
    assert.doesNotMatch(copy, /\d/);
  }
});

test("auto reply never echoes the person's name or message", async () => {
  const { handler, sent } = makeDeps();
  await handler(post(VALID_BODY));
  const serialized = JSON.stringify(sent[0]);
  assert.doesNotMatch(serialized, /secret words/);
  assert.doesNotMatch(serialized, /Ada Test/);
});

test("invalid email is rejected with 400, nothing stored, nothing sent", async () => {
  for (const email of [
    "",
    "not-an-email",
    "a@b",
    "a@b.com\r\nBcc: victim@example.com",
    "a@b.com\nSubject: hi",
    "two words@example.com",
    "victim@example.com,attacker@example.com",
    `${"x".repeat(250)}@example.com`,
  ]) {
    const { handler, rows, sent } = makeDeps();
    const response = await handler(post({ ...VALID_BODY, email }));
    assert.equal(response.status, 400, `expected 400 for ${JSON.stringify(email)}`);
    const body = await response.json();
    assert.equal(body.code, "VALIDATION_ERROR");
    assert.equal(rows.length, 0);
    assert.equal(sent.length, 0);
  }
});

test("addresses that pass the form check but could inject headers get no auto reply", async () => {
  for (const email of [
    "a,b@example.com",
    "<a>@example.com",
    '"quoted"@example.com',
    "a;b@example.com",
  ]) {
    const { handler, rows, sent, logs } = makeDeps();
    const response = await handler(post({ ...VALID_BODY, email }));
    assert.equal(response.status, 201, `submission still accepted for ${email}`);
    assert.equal(rows.length, 1);
    assert.equal(sent.length, 0, `no auto reply for ${email}`);
    assert.ok(logs.some((entry) => entry.level === "warn"));
    assert.throws(() => buildContactAutoReply(email));
  }
});

test("strict recipient check", () => {
  for (const ok of [
    "campaign@votejohnupanodey.com",
    "first.last+tag@sub.example.co.uk",
    "o'brien@example.ng",
  ]) {
    assert.equal(isSafeAutoReplyRecipient(ok), true, ok);
  }
  for (const bad of [
    "a@b.com\r\nBcc: x@y.com",
    "a@b.com ",
    "a..b@example.com",
    ".a@example.com",
    "a@-example.com",
    "a@example",
    "a@[127.0.0.1]",
    "a@b@example.com",
    "a@example.c0m",
    42,
    null,
  ]) {
    assert.equal(isSafeAutoReplyRecipient(bad), false, String(bad));
  }
});

test("transport failure still returns success and is logged without the address", async () => {
  const { handler, rows, logs } = makeDeps({
    sendError: Object.assign(
      new Error("550 5.1.1 <ada.test@example.com>: Recipient address rejected"),
      { code: "EENVELOPE", responseCode: 550 },
    ),
  });
  const response = await handler(post(VALID_BODY));
  assert.equal(response.status, 201);
  assert.equal((await response.json()).ok, true);
  assert.equal(rows.length, 1);

  const errors = logs.filter((entry) => entry.level === "error");
  assert.equal(errors.length, 1);
  const logged = errors[0].args.join(" ");
  assert.match(logged, /contact auto reply failed/);
  assert.match(logged, /EENVELOPE 550/);
  assert.doesNotMatch(logged, /ada\.test@example\.com/);
});

test("deferred send: response first, failure inside the deferred task does not throw", async () => {
  const { handler, rows, deferred, logs } = makeDeps({
    defer: true,
    sendError: new Error("ETIMEDOUT"),
  });
  const response = await handler(post(VALID_BODY));
  assert.equal(response.status, 201);
  assert.equal(rows.length, 1);
  assert.equal(deferred.length, 1);
  await assert.doesNotReject(deferred[0]());
  assert.ok(logs.some((entry) => entry.level === "error"));
});

test("missing SMTP config skips the auto reply but keeps the submission", async () => {
  const { handler, rows, sent, logs } = makeDeps({ mailer: "none" });
  const response = await handler(post(VALID_BODY));
  assert.equal(response.status, 201);
  assert.equal(rows.length, 1);
  assert.equal(sent.length, 0);
  assert.ok(logs.some((entry) => String(entry.args[0]).includes("SMTP")));
});

test("a retried submission id is not stored or auto replied to twice", async () => {
  const { handler, rows, sent } = makeDeps();
  const submission_id = "3f2b8c1e-9d4a-4b7e-8c21-5a6f7e8d9c0b";

  const first = await handler(post({ ...VALID_BODY, submission_id }));
  const retry = await handler(post({ ...VALID_BODY, submission_id }));

  assert.equal(first.status, 201);
  assert.equal(retry.status, 201);
  assert.equal(rows.length, 1);
  assert.equal(rows[0].id, submission_id);
  assert.equal(sent.length, 1);
});

test("a malformed submission id is ignored (row gets a database id)", async () => {
  const { handler, rows, sent } = makeDeps();
  const response = await handler(post({ ...VALID_BODY, submission_id: "x'; drop" }));
  assert.equal(response.status, 201);
  assert.equal(rows[0].id, undefined);
  assert.equal(sent.length, 1);
});

test("storage failure returns 503 and sends nothing", async () => {
  const { handler, sent } = makeDeps({
    insertError: { message: "boom", code: "XX000" },
  });
  const response = await handler(post(VALID_BODY));
  assert.equal(response.status, 503);
  assert.equal(sent.length, 0);
});

test("missing Supabase config returns 503 and sends nothing", async () => {
  const { handler, sent } = makeDeps({ store: "none" });
  const response = await handler(post(VALID_BODY));
  assert.equal(response.status, 503);
  assert.equal(sent.length, 0);
});

test("invalid JSON returns 400", async () => {
  const { handler, sent } = makeDeps();
  const response = await handler(post("{not json"));
  assert.equal(response.status, 400);
  assert.equal(sent.length, 0);
});

test("SMTP config reads env and needs host, user, and pass", () => {
  assert.equal(readSmtpConfig({}), null);
  assert.equal(readSmtpConfig({ SMTP_HOST: "smtp.example.com", SMTP_USER: "u" }), null);
  assert.deepEqual(
    readSmtpConfig({ SMTP_HOST: "smtp.example.com", SMTP_USER: "u", SMTP_PASS: "p" }),
    { host: "smtp.example.com", port: 465, secure: true, user: "u", pass: "p" },
  );
  assert.equal(
    readSmtpConfig({ SMTP_HOST: "h", SMTP_USER: "u", SMTP_PASS: "p", SMTP_PORT: "587" })?.secure,
    false,
  );
  assert.equal(
    readSmtpConfig({ SMTP_HOST: "h", SMTP_USER: "u", SMTP_PASS: "p", SMTP_PORT: "abc" }),
    null,
  );
});

test("real nodemailer composition (stream transport, no network) has the right headers", async () => {
  const nodemailer = (await import("nodemailer")).default;
  const transport = nodemailer.createTransport({ streamTransport: true, buffer: true, newline: "unix" });
  const info = await transport.sendMail(buildContactAutoReply("ada.test@example.com"));
  const raw = (info.message as Buffer).toString("utf8");
  const headerBlock = raw.split("\n\n")[0];

  assert.match(headerBlock, /^From: John Upan Odey Campaign <campaign@votejohnupanodey\.com>$/m);
  assert.match(headerBlock, /^To: ada\.test@example\.com$/m);
  assert.match(headerBlock, /^Reply-To: campaign@votejohnupanodey\.com$/m);
  assert.match(headerBlock, /^Subject: Thank you for contacting the John Upan Odey Campaign$/m);
  assert.match(headerBlock, /^Auto-Submitted: auto-replied$/m);
  assert.match(raw, /Content-Type: text\/plain/);
  assert.match(raw, /Content-Type: text\/html/);
  assert.deepEqual(info.envelope, {
    from: "campaign@votejohnupanodey.com",
    to: ["ada.test@example.com"],
  });
});
