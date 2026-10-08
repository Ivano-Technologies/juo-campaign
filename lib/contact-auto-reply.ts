/**
 * Automatic reply sent to people who submit the /contact form (IVA-47).
 *
 * The copy below is approved word for word. Do not edit it, add a greeting,
 * add a phone number, or echo the person's message back.
 *
 * Only the recipient address comes from user input. It must pass
 * `isSafeAutoReplyRecipient` first and is handed to the transport as a bare
 * address object, so it can never add headers or extra recipients.
 */

export const CONTACT_AUTO_REPLY_FROM_ADDRESS = "campaign@votejohnupanodey.com";
export const CONTACT_AUTO_REPLY_FROM_NAME = "John Upan Odey Campaign";
export const CONTACT_AUTO_REPLY_REPLY_TO = "campaign@votejohnupanodey.com";

export const CONTACT_AUTO_REPLY_SUBJECT =
  "Thank you for contacting the John Upan Odey Campaign";

export const CONTACT_AUTO_REPLY_PARAGRAPHS = [
  "Thank you for reaching out to the John Upan Odey Campaign. We have received your message, and a member of our team will get back to you as soon as possible.",
  "Campaign Team",
] as const;

export const CONTACT_AUTO_REPLY_TEXT = CONTACT_AUTO_REPLY_PARAGRAPHS.join("\n\n");

export const CONTACT_AUTO_REPLY_HTML = [
  "<!doctype html>",
  '<html lang="en">',
  '<head><meta charset="utf-8"><title>John Upan Odey Campaign</title></head>',
  '<body style="margin:0;padding:24px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;color:#1a1a1a;">',
  ...CONTACT_AUTO_REPLY_PARAGRAPHS.map(
    (paragraph) => `<p style="margin:0 0 16px;">${paragraph}</p>`,
  ),
  "</body>",
  "</html>",
].join("\n");

export type AutoReplyAddress = { name: string; address: string };

export type ContactAutoReplyMessage = {
  from: AutoReplyAddress;
  to: AutoReplyAddress;
  replyTo: AutoReplyAddress;
  subject: string;
  text: string;
  html: string;
  headers: Record<string, string>;
};

/** Minimal transport surface (matches nodemailer's `Transporter#sendMail`). */
export type AutoReplyMailer = {
  sendMail(message: ContactAutoReplyMessage): Promise<unknown>;
};

const LOCAL_PART = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*$/;
const DOMAIN_LABEL = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/;
const TOP_LEVEL = /^[A-Za-z]{2,63}$|^xn--[A-Za-z0-9-]{1,59}$/;

/**
 * Strict check for the auto reply recipient. Stricter than the form's own
 * validation: plain ASCII `local@domain.tld` only. No whitespace, CR/LF,
 * commas, semicolons, quotes, angle brackets, comments, or IP literals.
 */
export function isSafeAutoReplyRecipient(value: unknown): value is string {
  if (typeof value !== "string") return false;
  if (value.length < 6 || value.length > 254) return false;

  const at = value.indexOf("@");
  if (at <= 0 || at !== value.lastIndexOf("@")) return false;

  const local = value.slice(0, at);
  const domain = value.slice(at + 1);
  if (local.length > 64 || !LOCAL_PART.test(local)) return false;

  const labels = domain.split(".");
  if (labels.length < 2) return false;
  if (!labels.every((label) => DOMAIN_LABEL.test(label))) return false;
  return TOP_LEVEL.test(labels[labels.length - 1]);
}

/** Build the auto reply for a recipient that already passed the safety check. */
export function buildContactAutoReply(to: string): ContactAutoReplyMessage {
  if (!isSafeAutoReplyRecipient(to)) {
    throw new Error("Refusing to build an auto reply for an unsafe address.");
  }

  return {
    from: {
      name: CONTACT_AUTO_REPLY_FROM_NAME,
      address: CONTACT_AUTO_REPLY_FROM_ADDRESS,
    },
    to: { name: "", address: to },
    replyTo: { name: "", address: CONTACT_AUTO_REPLY_REPLY_TO },
    subject: CONTACT_AUTO_REPLY_SUBJECT,
    text: CONTACT_AUTO_REPLY_TEXT,
    html: CONTACT_AUTO_REPLY_HTML,
    headers: {
      // RFC 3834: mark as an automatic reply so other autoresponders stay quiet.
      "Auto-Submitted": "auto-replied",
      "X-Auto-Response-Suppress": "All",
    },
  };
}
