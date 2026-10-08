import { normalizeCampaignSource } from "@/lib/campaign-source";
import { crossRiverLgas, joinInterests } from "@/lib/site";
import { validateWard } from "@/lib/wards";

export const FORM_UNAVAILABLE = {
  ok: false,
  code: "FORM_UNAVAILABLE",
  message:
    "Form submissions are temporarily unavailable. Please try again later.",
} as const;

export const FORM_SUBMIT_FAILED = {
  ok: false,
  code: "SUBMIT_FAILED",
  message:
    "We could not save your submission. Please try again later.",
} as const;

export const JOIN_SUCCESS = {
  ok: true,
  message:
    "Thank you. A volunteer coordinator will follow up on how you want to help, including Diaspora Connect if you selected it.",
} as const;

export const CONTACT_SUCCESS = {
  ok: true,
  message:
    "Thank you. The campaign desk has received your message and will reply if a response is needed.",
} as const;

export type FormErrorCode =
  | "VALIDATION_ERROR"
  | "FORM_UNAVAILABLE"
  | "SUBMIT_FAILED";

export type FormErrorBody = {
  ok: false;
  code: FormErrorCode;
  message: string;
};

export type FormSuccessBody = {
  ok: true;
  message: string;
};

export type FormJsonBody = FormErrorBody | FormSuccessBody;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LGA_VALUES = new Set<string>(crossRiverLgas);
const INTEREST_VALUES = new Set<string>(joinInterests);

function asRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return null;
  }
  return value as Record<string, unknown>;
}

function readString(record: Record<string, unknown>, key: string): string {
  const value = record[key];
  return typeof value === "string" ? value.trim() : "";
}

function readPrivacyAccepted(record: Record<string, unknown>): boolean {
  return record.privacy === true || record.privacy_accepted === true;
}

export type JoinSubmissionInput = {
  name: string;
  email: string;
  phone: string;
  lga: string;
  /**
   * INEC ward name for the selected LGA, or the volunteer's own text when
   * their ward isn't listed. Null for Diaspora / outside Cross River.
   */
  ward: string | null;
  interest: string;
  privacy_accepted: true;
  /** Form-type label for this table. Not the field campaign tag. */
  source: "join";
  /** Tagged-link slug from `?source=` / `utm_source`. Null when untagged. */
  campaign_source: string | null;
};

export type ContactSubmissionInput = {
  name: string;
  email: string;
  message: string;
  privacy_accepted: true;
  source: "contact";
  /**
   * Client generated UUID for this form fill, used as the row id so a retry
   * of the same submission is not stored or auto replied to twice.
   * Null when the client did not send one (older clients).
   */
  submission_id: string | null;
};

const SUBMISSION_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

/** Accepts a lowercase or uppercase UUID string; anything else becomes null. */
export function normalizeSubmissionId(raw: unknown): string | null {
  if (typeof raw !== "string") {
    return null;
  }
  const value = raw.trim().toLowerCase();
  return SUBMISSION_ID_PATTERN.test(value) ? value : null;
}

export function parseJsonRequestBody(value: unknown): Record<string, unknown> {
  const record = asRecord(value);
  if (!record) {
    throw new Error("Request body must be a JSON object.");
  }
  return record;
}

export function validateJoinSubmission(
  value: unknown,
): JoinSubmissionInput | FormErrorBody {
  try {
    const record = parseJsonRequestBody(value);
    const name = readString(record, "name");
    const email = readString(record, "email").toLowerCase();
    const phone = readString(record, "phone");
    const lga = readString(record, "lga");
    const interest = readString(record, "interest");
    const privacyAccepted = readPrivacyAccepted(record);

    if (!name || name.length > 200) {
      return validationError("Please enter your full name.");
    }
    if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return validationError("Please enter a valid email address.");
    }
    if (!phone || phone.length < 7 || phone.length > 40) {
      return validationError("Please enter a phone number we can reach you on.");
    }
    if (!lga || !LGA_VALUES.has(lga)) {
      return validationError("Please select a local government or location.");
    }
    const ward = validateWard({
      lga,
      ward: record.ward,
      wardUnlisted: record.ward_unlisted === true,
    });
    if (!ward.ok) {
      return validationError(ward.message);
    }
    if (!interest || !INTEREST_VALUES.has(interest)) {
      return validationError("Please select how you want to help.");
    }
    if (!privacyAccepted) {
      return validationError(
        "Please confirm you have read the privacy notice and agree to be contacted.",
      );
    }

    return {
      name,
      email,
      phone,
      lga,
      ward: ward.ward,
      interest,
      privacy_accepted: true,
      source: "join",
      campaign_source: normalizeCampaignSource(record.campaign_source),
    };
  } catch (error) {
    return validationError(
      error instanceof Error ? error.message : "Invalid form submission.",
    );
  }
}

export function validateContactSubmission(
  value: unknown,
): ContactSubmissionInput | FormErrorBody {
  try {
    const record = parseJsonRequestBody(value);
    const name = readString(record, "name");
    const email = readString(record, "email").toLowerCase();
    const message = readString(record, "message");
    const privacyAccepted = readPrivacyAccepted(record);

    if (!name || name.length > 200) {
      return validationError("Please enter your full name.");
    }
    if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return validationError("Please enter a valid email address.");
    }
    if (!message || message.length < 10 || message.length > 4000) {
      return validationError("Please enter a message (at least 10 characters).");
    }
    if (!privacyAccepted) {
      return validationError(
        "Please confirm you have read the privacy notice.",
      );
    }

    return {
      name,
      email,
      message,
      privacy_accepted: true,
      source: "contact",
      submission_id: normalizeSubmissionId(record.submission_id),
    };
  } catch (error) {
    return validationError(
      error instanceof Error ? error.message : "Invalid form submission.",
    );
  }
}

export function isFormError(
  value: JoinSubmissionInput | ContactSubmissionInput | FormErrorBody,
): value is FormErrorBody {
  return "ok" in value && value.ok === false;
}

export async function readJsonMessage(
  response: Response,
): Promise<{ message?: string }> {
  try {
    const payload: unknown = await response.json();
    if (
      typeof payload === "object" &&
      payload !== null &&
      "message" in payload &&
      typeof payload.message === "string"
    ) {
      return { message: payload.message };
    }
    return {};
  } catch {
    return {};
  }
}

function validationError(message: string): FormErrorBody {
  return {
    ok: false,
    code: "VALIDATION_ERROR",
    message,
  };
}
