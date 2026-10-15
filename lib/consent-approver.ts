/** Parse a comma separated email list into a lowercase set. */
export function parseEmailList(value: string | undefined): Set<string> {
  return new Set(
    (value ?? "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );
}

/**
 * Consent approval is open to every admin. An email may approve when it is in
 * ADMIN_EMAILS or in the optional extra list CONSENT_APPROVER_EMAILS (kept for
 * backward compatibility). Everyone else is refused.
 */
export function canApproveConsent(
  email: string | null | undefined,
  env: { ADMIN_EMAILS?: string; CONSENT_APPROVER_EMAILS?: string },
): boolean {
  const normalised = email?.trim().toLowerCase();
  if (!normalised) return false;
  return (
    parseEmailList(env.ADMIN_EMAILS).has(normalised) ||
    parseEmailList(env.CONSENT_APPROVER_EMAILS).has(normalised)
  );
}
