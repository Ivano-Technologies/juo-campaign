import { ConsentApproveButton } from "@/components/consent-approve-button";
import { consentStatusLabels, sharedPhoneLegacyLabel } from "@/lib/volunteer-intake";

export type PendingRow = {
  id: string;
  name: string;
  lga: string | null;
  ward: string | null;
  community: string | null;
  role: string | null;
  created_at: string;
  entered_by: string | null;
};

export type LegacyRow = {
  id: string;
  name: string;
  lga: string | null;
  created_at: string;
};

const watDate = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

function when(value: string): string {
  return `${watDate.format(new Date(value))} WAT`;
}

export function PendingConsentList({
  rows,
  canApprove,
}: {
  rows: PendingRow[];
  canApprove: boolean;
}) {
  return (
    <section className="space-y-4" aria-labelledby="pending-consent-title">
      <h2 id="pending-consent-title" className="font-serif text-2xl text-ink">
        {consentStatusLabels.pending} ({rows.length})
      </h2>
      {rows.length === 0 ? (
        <p className="text-muted">No offline volunteers are waiting for consent approval</p>
      ) : (
        <ul className="grid gap-3">
          {rows.map((row) => (
            <li
              key={row.id}
              className="grid gap-3 rounded-xl border border-line bg-brand-white p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
            >
              <div className="min-w-0 text-sm">
                <p className="font-semibold text-ink">{row.name}</p>
                <p className="text-muted">
                  {[row.lga, row.ward, row.community].filter(Boolean).join(", ")}
                  {row.role ? ` · ${row.role}` : ""}
                </p>
                <p className="text-xs text-muted">
                  Entered {when(row.created_at)}
                  {row.entered_by ? ` by ${row.entered_by}` : ""}
                </p>
                <p className="mt-1 inline-flex rounded-full bg-brand-red/10 px-2 py-0.5 text-xs font-semibold text-brand-red">
                  {consentStatusLabels.pending}
                </p>
              </div>
              {canApprove ? <ConsentApproveButton id={row.id} /> : null}
            </li>
          ))}
        </ul>
      )}
      {!canApprove && rows.length > 0 ? (
        <p className="text-xs text-muted">Only the consent approver can approve consent.</p>
      ) : null}
    </section>
  );
}

export function LegacySharedPhoneList({ rows }: { rows: LegacyRow[] }) {
  return (
    <section className="space-y-4" aria-labelledby="legacy-shared-title">
      <h2 id="legacy-shared-title" className="font-serif text-2xl text-ink">
        {sharedPhoneLegacyLabel} ({rows.length})
      </h2>
      <p className="text-sm text-muted">
        These web signups share a phone number with another signup. They are kept as they are.
      </p>
      {rows.length === 0 ? null : (
        <ul className="grid gap-2 text-sm">
          {rows.map((row) => (
            <li
              key={row.id}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-brand-white px-4 py-3"
            >
              <span className="min-w-0 font-semibold text-ink">{row.name}</span>
              <span className="text-muted">
                {row.lga ?? "No LGA"} · {when(row.created_at)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
