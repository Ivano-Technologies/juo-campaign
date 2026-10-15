import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { createServiceSupabaseClient } from "@/lib/supabase/service";

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function reply(status: number, ok: boolean, message: string) {
  return NextResponse.json({ ok, message }, { status });
}

/** Approve consent on one pending offline row. Any admin (ADMIN_EMAILS or CONSENT_APPROVER_EMAILS). */
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getAdminSession();
  if (session.state === "signed_out") {
    return reply(401, false, "Please sign in with an allowed staff email.");
  }
  if (!session.canApproveConsent) {
    return reply(403, false, "Only an admin can approve consent.");
  }

  const { id } = await params;
  if (!UUID_PATTERN.test(id)) {
    return reply(400, false, "Unknown volunteer record.");
  }

  const supabase = createServiceSupabaseClient();
  if (!supabase) {
    return reply(503, false, "Offline intake is not configured yet.");
  }

  const { data, error } = await supabase
    .from("join_submissions")
    .update({
      consent_status: "vetted",
      privacy_accepted: true,
      vetted_by: session.email,
      vetted_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("consent_status", "pending")
    .select("id");

  if (error) {
    console.error("consent approval failed:", error.message);
    return reply(503, false, "We could not approve consent. Please try again.");
  }
  if (!data || data.length === 0) {
    return reply(404, false, "This record is not waiting for consent approval.");
  }
  return reply(200, true, "Consent approved.");
}
