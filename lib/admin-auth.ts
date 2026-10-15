import { createServerSupabaseClient } from "@/lib/supabase/server";

/** Staff emails allowed into /admin, from the ADMIN_EMAILS env var (comma separated). */
export function adminEmailAllowlist(): Set<string> {
  return new Set(
    (process.env.ADMIN_EMAILS ?? "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );
}

/**
 * Staff allowed to approve consent on offline rows, from CONSENT_APPROVER_EMAILS
 * (comma separated). Expected value: Chris Adah's email. Approvers must also be
 * listed in ADMIN_EMAILS.
 */
export function consentApproverAllowlist(): Set<string> {
  return new Set(
    (process.env.CONSENT_APPROVER_EMAILS ?? "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );
}

export type AdminSession =
  | { state: "signed_out" }
  | { state: "not_allowed"; email: string }
  | { state: "allowed"; email: string; canApproveConsent: boolean };

export async function getAdminSession(): Promise<AdminSession> {
  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return { state: "signed_out" };
  }
  const { data } = await supabase.auth.getUser();
  const email = data.user?.email?.toLowerCase();
  if (!email) {
    return { state: "signed_out" };
  }
  return adminEmailAllowlist().has(email)
    ? {
        state: "allowed",
        email,
        canApproveConsent: consentApproverAllowlist().has(email),
      }
    : { state: "not_allowed", email };
}
