/**
 * Normalise a Nigerian mobile number to +234XXXXXXXXXX.
 * Mirrors public.normalize_ng_phone in the IVA-152 migration.
 * Returns null when the number is not a recognisable Nigerian mobile.
 */
export function normalizeNigerianPhone(raw: unknown): string | null {
  if (typeof raw !== "string") {
    return null;
  }
  const digits = raw.replace(/[^0-9]/g, "");
  if (/^234[0-9]{10}$/.test(digits)) {
    return `+${digits}`;
  }
  if (/^0[0-9]{10}$/.test(digits)) {
    return `+234${digits.slice(1)}`;
  }
  if (/^[789][01][0-9]{8}$/.test(digits)) {
    return `+234${digits}`;
  }
  return null;
}
