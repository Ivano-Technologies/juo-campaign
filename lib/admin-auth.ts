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

export type AdminSession =
  | { state: "signed_out" }
  | { state: "not_allowed"; email: string }
  | { state: "allowed"; email: string };

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
    ? { state: "allowed", email }
    : { state: "not_allowed", email };
}
