import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import {
  DUPLICATE_PHONE_MESSAGE,
  OFFLINE_INTAKE_SUCCESS,
  validateOfflineIntake,
} from "@/lib/volunteer-intake";

function reply(status: number, ok: boolean, message: string) {
  return NextResponse.json({ ok, message }, { status });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (session.state !== "allowed") {
    return reply(401, false, "Please sign in with an allowed staff email.");
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return reply(400, false, "Request body must be valid JSON.");
  }

  const parsed = validateOfflineIntake(payload);
  if (!parsed.ok) {
    return reply(400, false, parsed.message);
  }

  const supabase = createServiceSupabaseClient();
  if (!supabase) {
    return reply(503, false, "Offline intake is not configured yet.");
  }

  // Reject any phone that already exists, web or offline. Never update.
  const existing = await supabase
    .from("join_submissions")
    .select("id", { head: true, count: "exact" })
    .eq("phone_e164", parsed.value.phone_e164);
  if (existing.error) {
    console.error("offline intake duplicate check failed:", existing.error.message);
    return reply(503, false, "We could not save this volunteer. Please try again.");
  }
  if ((existing.count ?? 0) > 0) {
    return reply(409, false, DUPLICATE_PHONE_MESSAGE);
  }

  const { error } = await supabase.from("join_submissions").insert({
    name: parsed.value.name,
    email: null,
    phone: parsed.value.phone,
    lga: parsed.value.lga,
    ward: parsed.value.ward,
    community: parsed.value.community,
    interest: parsed.value.interest,
    role: parsed.value.role,
    // Offline rows are never auto consented: Chris approves consent later.
    privacy_accepted: false,
    consent_status: "pending",
    source: "offline",
    intake_channel: "offline",
    entered_by: session.email,
  });

  if (error) {
    if (error.code === "23505") {
      return reply(409, false, DUPLICATE_PHONE_MESSAGE);
    }
    console.error("offline intake insert failed:", error.message);
    return reply(503, false, "We could not save this volunteer. Please try again.");
  }

  return reply(201, true, OFFLINE_INTAKE_SUCCESS);
}
