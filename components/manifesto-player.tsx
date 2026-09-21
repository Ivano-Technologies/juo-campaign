import { Button } from "@/components/button";
import {
  manifestoDownloadLabel,
  manifestoDownloadStatus,
  manifestoPdfHref,
} from "@/lib/manifesto";

export function ManifestoPlayer() {
  return (
    <div className="rounded-2xl border border-line bg-brand-white p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-[0.2em] text-brand-red uppercase">
        {manifestoDownloadStatus}
      </p>
      {manifestoPdfHref ? (
        <a
          href={manifestoPdfHref}
          download
          className="mt-6 inline-flex items-center justify-center rounded-full border border-transparent bg-brand-red px-5 py-2.5 text-sm font-semibold tracking-wide text-brand-white transition hover:bg-brand-red/90"
        >
          Download PDF
        </a>
      ) : (
        <Button type="button" variant="primary" className="mt-6" disabled>
          {manifestoDownloadLabel}
        </Button>
      )}
    </div>
  );
}
