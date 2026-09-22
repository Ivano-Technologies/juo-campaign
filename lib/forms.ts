import { crossRiverLgas, joinInterests } from "@/lib/site";

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
  interest: string;
  privacy_accepted: true;
  source: "join";
};

export type ContactSubmissionInput = {
  name: string;
  email: string;
  message: string;
  privacy_accepted: true;
  source: "contact";
};

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
      interest,
      privacy_accepted: true,
      source: "join",
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
