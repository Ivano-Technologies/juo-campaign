import { redirect } from "next/navigation";
import {
  LegacySharedPhoneList,
  PendingConsentList,
  type LegacyRow,
  type PendingRow,
} from "@/components/admin-volunteer-lists";
import { OfflineIntakeForm } from "@/components/offline-intake-form";
import { getAdminSession } from "@/lib/admin-auth";
import { createServiceSupabaseClient } from "@/lib/supabase/service";

export const dynamic = "force-dynamic";

export default async function AdminVolunteersPage() {
  const session = await getAdminSession();
  if (session.state === "signed_out") {
    redirect("/admin/login");
  }

  let pendingRows: PendingRow[] = [];
  let legacyRows: LegacyRow[] = [];
  const supabase = session.state === "allowed" ? createServiceSupabaseClient() : null;
  if (supabase) {
    const [pending, legacy] = await Promise.all([
      supabase
        .from("join_submissions")
        .select("id, name, lga, ward, community, role, created_at, entered_by")
        .eq("consent_status", "pending")
        .order("created_at", { ascending: true }),
      supabase
        .from("join_submissions")
        .select("id, name, lga, created_at")
        .eq("shared_phone_legacy", true)
        .order("created_at", { ascending: true }),
    ]);
    pendingRows = (pending.data ?? []) as PendingRow[];
    legacyRows = (legacy.data ?? []) as LegacyRow[];
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-serif text-3xl text-ink">Offline volunteer intake</h1>
        <form action="/api/admin/signout" method="post">
          <button type="submit" className="text-sm text-brand-blue underline">
            Sign out
          </button>
        </form>
      </div>
      {session.state === "allowed" ? (
        <>
          <p className="text-muted">
            Enter one volunteer at a time from a paper sheet. Signed in as{" "}
            {session.email}.
          </p>
          <OfflineIntakeForm />
          <PendingConsentList rows={pendingRows} canApprove={session.canApproveConsent} />
          <LegacySharedPhoneList rows={legacyRows} />
        </>
      ) : (
        <p className="text-muted">
          {session.email} is not on the staff list. Ask the campaign desk to add
          you.
        </p>
      )}
    </div>
  );
}
