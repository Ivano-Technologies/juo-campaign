import {
  buildContactAutoReply,
  isSafeAutoReplyRecipient,
  type AutoReplyMailer,
} from "@/lib/contact-auto-reply";
import {
  CONTACT_SUCCESS,
  FORM_SUBMIT_FAILED,
  FORM_UNAVAILABLE,
  isFormError,
  validateContactSubmission,
  type FormErrorBody,
} from "@/lib/forms";

/** Row written to `public.contact_messages` (insert only, anon key). */
export type ContactMessageRow = {
  id?: string;
  name: string;
  email: string;
  message: string;
  privacy_accepted: true;
  source: "contact";
};

export type ContactStoreError = { message: string; code?: string };

export type ContactStore = {
  insertContactMessage(
    row: ContactMessageRow,
  ): Promise<{ error: ContactStoreError | null }>;
};

type Logger = Pick<Console, "error" | "warn">;

export type ContactHandlerDeps = {
  getStore: () => ContactStore | null;
  getMailer: () => AutoReplyMailer | null;
  /**
   * Run work after the response is sent (Next `after`). When omitted the
   * auto reply is awaited inline. Either way it never fails the request.
   */
  defer?: (task: () => Promise<void>) => void;
  logger?: Logger;
};

export type AutoReplyOutcome =
  | "sent"
  | "skipped_invalid_recipient"
  | "skipped_not_configured"
  | "failed";

/** Postgres unique violation: the same submission id was already stored. */
const UNIQUE_VIOLATION = "23505";

export function createContactPostHandler(deps: ContactHandlerDeps) {
  const logger = deps.logger ?? console;

  return async function POST(request: Request): Promise<Response> {
    let payload: unknown;

    try {
      payload = await request.json();
    } catch {
      return jsonError(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "Request body must be valid JSON.",
        },
        400,
      );
    }

    const parsed = validateContactSubmission(payload);
    if (isFormError(parsed)) {
      return jsonError(parsed, 400);
    }

    const store = deps.getStore();
    if (!store) {
      return jsonError(FORM_UNAVAILABLE, 503);
    }

    const row: ContactMessageRow = {
      name: parsed.name,
      email: parsed.email,
      message: parsed.message,
      privacy_accepted: parsed.privacy_accepted,
      source: parsed.source,
    };
    if (parsed.submission_id) {
      row.id = parsed.submission_id;
    }

    const { error } = await store.insertContactMessage(row);

    if (error) {
      if (parsed.submission_id && error.code === UNIQUE_VIOLATION) {
        // A retry of a submission we already stored: report success again,
        // but do not store or auto reply a second time.
        return Response.json(CONTACT_SUCCESS, { status: 201 });
      }
      logger.error("contact_messages insert failed:", error.message);
      return jsonError(FORM_SUBMIT_FAILED, 503);
    }

    const task = async () => {
      await sendContactAutoReply(parsed.email, deps.getMailer, logger);
    };

    if (deps.defer) {
      try {
        deps.defer(task);
      } catch {
        await task();
      }
    } else {
      await task();
    }

    return Response.json(CONTACT_SUCCESS, { status: 201 });
  };
}

/**
 * Send the approved auto reply. Never throws: every failure is logged
 * (without the recipient address) and reported as an outcome.
 */
export async function sendContactAutoReply(
  email: string,
  getMailer: () => AutoReplyMailer | null,
  logger: Logger = console,
): Promise<AutoReplyOutcome> {
  if (!isSafeAutoReplyRecipient(email)) {
    logger.warn("contact auto reply skipped: recipient address failed the strict check");
    return "skipped_invalid_recipient";
  }

  let mailer: AutoReplyMailer | null;
  try {
    mailer = getMailer();
  } catch (error) {
    logger.error("contact auto reply failed: transport setup", describeError(error, email));
    return "failed";
  }
  if (!mailer) {
    logger.warn("contact auto reply skipped: SMTP_HOST, SMTP_USER or SMTP_PASS not set");
    return "skipped_not_configured";
  }

  try {
    await mailer.sendMail(buildContactAutoReply(email));
    return "sent";
  } catch (error) {
    logger.error("contact auto reply failed:", describeError(error, email));
    return "failed";
  }
}

function describeError(error: unknown, email: string): string {
  if (!(error instanceof Error)) {
    return "unknown error";
  }
  const details = error as Error & { code?: unknown; responseCode?: unknown };
  const parts = [
    typeof details.code === "string" ? details.code : null,
    typeof details.responseCode === "number" ? String(details.responseCode) : null,
    error.message.split(email).join("[recipient]").slice(0, 300),
  ].filter(Boolean);
  return parts.join(" ");
}

function jsonError(body: FormErrorBody, status: 400 | 503) {
  return Response.json(body, { status });
}
