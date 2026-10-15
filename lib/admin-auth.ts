import { canApproveConsent, parseEmailList } from "@/lib/consent-approver";
import { createServerSupabaseClient } from "@/lib/supabase/server";

/** Staff emails allowed into /admin, from the ADMIN_EMAILS env var (comma separated). */
export function adminEmailAllowlist(): Set<string> {
  return parseEmailList(process.env.ADMIN_EMAILS);
}

function approverEnv() {
  return {
    ADMIN_EMAILS: process.env.ADMIN_EMAILS,
    CONSENT_APPROVER_EMAILS: process.env.CONSENT_APPROVER_EMAILS,
  };
}

export type AdminSession =
  | { state: "signed_out" }
  | { state: "not_allowed"; email: string; canApproveConsent: boolean }
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
        canApproveConsent: canApproveConsent(email, approverEnv()),
      }
    : { state: "not_allowed", email, canApproveConsent: canApproveConsent(email, approverEnv()) };
}
