import { createClient } from "@supabase/supabase-js";

/**
 * Service role client for staff only server routes (IVA-152).
 * Bypasses RLS: never import from client components.
 * Returns null when SUPABASE_SERVICE_ROLE_KEY is not configured.
 */
export function createServiceSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return null;
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
