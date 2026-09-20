import { createClient } from "@supabase/supabase-js";
import { getSupabasePublicConfig } from "@/lib/supabase/env";

/**
 * Anon-key client for public form inserts.
 * Uses the same public config as the existing browser/server helpers.
 * Do not chain `.select()` — RLS is insert-only (no select policies).
 */
export function createAnonSupabaseClient() {
  const config = getSupabasePublicConfig();
  if (!config) {
    return null;
  }

  return createClient(config.url, config.anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
