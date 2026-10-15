"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function ConsentApproveButton({ id }: { id: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function approve() {
    setPending(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/volunteers/${id}/approve`, { method: "POST" });
      const payload = (await response.json().catch(() => ({}))) as { message?: string };
      if (!response.ok) {
        setError(payload.message ?? "Could not approve consent.");
        return;
      }
      router.refresh();
    } catch {
      setError("Could not reach the campaign server.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="grid justify-items-start gap-1">
      <button
        type="button"
        onClick={approve}
        disabled={pending}
        className="inline-flex min-h-11 items-center rounded-full bg-brand-red px-4 text-sm font-semibold text-brand-white disabled:opacity-60"
      >
        {pending ? "Approving" : "Approve consent"}
      </button>
      {error ? <p className="text-xs text-brand-red">{error}</p> : null}
    </div>
  );
}
