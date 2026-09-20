import { NextResponse } from "next/server";
import { FORM_NOT_READY } from "@/lib/forms";

export async function POST() {
  return NextResponse.json(FORM_NOT_READY, { status: 501 });
}
