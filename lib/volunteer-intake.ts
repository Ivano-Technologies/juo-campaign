import { normalizeNigerianPhone } from "@/lib/phone";
import { crossRiverLgas, joinInterests } from "@/lib/site";
import { normalizeWardText, validateWard } from "@/lib/wards";

/**
 * IVA-152 offline volunteer roles.
 * Placeholder list for Chris to confirm before launch.
 */
export const volunteerRoles = [
  "Volunteer",
  "Ward coordinator",
  "LGA coordinator",
  "Polling unit agent",
] as const;

export const COMMUNITY_MAX_LENGTH = 80;

export const DUPLICATE_PHONE_MESSAGE =
  "This phone number is already registered. The existing record has not been changed.";

export const OFFLINE_INTAKE_SUCCESS =
  "Volunteer saved. You can enter the next one.";

export type OfflineIntakeInput = {
  name: string;
  phone: string;
  phone_e164: string;
  lga: string;
  ward: string | null;
  community: string;
  interest: string;
  role: string;
};

export type OfflineIntakeResult =
  | { ok: true; value: OfflineIntakeInput }
  | { ok: false; message: string };

const LGA_VALUES = new Set<string>(crossRiverLgas);
const INTEREST_VALUES = new Set<string>(joinInterests);
const ROLE_VALUES = new Set<string>(volunteerRoles);

function readString(record: Record<string, unknown>, key: string): string {
  const value = record[key];
  return typeof value === "string" ? value.trim() : "";
}

export function validateOfflineIntake(value: unknown): OfflineIntakeResult {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return { ok: false, message: "Request body must be a JSON object." };
  }
  const record = value as Record<string, unknown>;
  const name = readString(record, "name");
  const phone = readString(record, "phone");
  const lga = readString(record, "lga");
  const community = normalizeWardText(record.community);
  const interest = readString(record, "interest");
  const role = readString(record, "role");

  if (!name || name.length > 200) {
    return { ok: false, message: "Please enter the volunteer's full name." };
  }
  const phoneE164 = normalizeNigerianPhone(phone);
  if (!phoneE164) {
    return {
      ok: false,
      message: "Please enter a Nigerian mobile number, for example 0803 123 4567.",
    };
  }
  if (!lga || !LGA_VALUES.has(lga)) {
    return { ok: false, message: "Please select a local government or location." };
  }
  const ward = validateWard({
    lga,
    ward: record.ward,
    wardUnlisted: record.ward_unlisted === true,
  });
  if (!ward.ok) {
    return { ok: false, message: ward.message };
  }
  if (community.length < 2) {
    return { ok: false, message: "Please enter the volunteer's community." };
  }
  if (community.length > COMMUNITY_MAX_LENGTH) {
    return {
      ok: false,
      message: `Please keep the community under ${COMMUNITY_MAX_LENGTH} characters.`,
    };
  }
  if (!INTEREST_VALUES.has(interest)) {
    return { ok: false, message: "Please select how the volunteer wants to help." };
  }
  if (!ROLE_VALUES.has(role)) {
    return { ok: false, message: "Please select a role." };
  }

  return {
    ok: true,
    value: {
      name,
      phone,
      phone_e164: phoneE164,
      lga,
      ward: ward.ward,
      community,
      interest,
      role,
    },
  };
}
