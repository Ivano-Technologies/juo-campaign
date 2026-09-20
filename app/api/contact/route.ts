import { NextResponse } from "next/server";
import {
  CONTACT_SUCCESS,
  FORM_SUBMIT_FAILED,
  FORM_UNAVAILABLE,
  isFormError,
  validateContactSubmission,
  type FormErrorBody,
} from "@/lib/forms";
import { createAnonSupabaseClient } from "@/lib/supabase/anon";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return jsonError(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        message: "Request body must be valid JSON.",
      },
      400,
    );
  }

  const parsed = validateContactSubmission(payload);
  if (isFormError(parsed)) {
    return jsonError(parsed, 400);
  }

  const supabase = createAnonSupabaseClient();
  if (!supabase) {
    return jsonError(FORM_UNAVAILABLE, 503);
  }

  const { error } = await supabase.from("contact_messages").insert({
    name: parsed.name,
    email: parsed.email,
    message: parsed.message,
    privacy_accepted: parsed.privacy_accepted,
    source: parsed.source,
  });

  if (error) {
    console.error("contact_messages insert failed:", error.message);
    return jsonError(FORM_SUBMIT_FAILED, 503);
  }

  return NextResponse.json(CONTACT_SUCCESS, { status: 201 });
}

function jsonError(body: FormErrorBody, status: 400 | 503) {
  return NextResponse.json(body, { status });
}
