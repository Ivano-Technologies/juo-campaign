import { Button } from "@/components/button";
import { manifestoDownloadLabel, manifestoPdfHref } from "@/lib/manifesto";

export function ManifestoPlayer() {
  return (
    <div className="rounded-2xl border border-line bg-brand-white p-6 sm:p-8">
      {manifestoPdfHref ? (
        <a
          href={manifestoPdfHref}
          download="manifesto-john-upan-odey.pdf"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-transparent bg-brand-red px-5 py-2.5 text-sm font-semibold tracking-wide text-brand-white transition hover:bg-brand-red/90"
        >
          {manifestoDownloadLabel}
        </a>
      ) : (
        <Button type="button" variant="primary" disabled>
          {manifestoDownloadLabel}
        </Button>
      )}
    </div>
  );
}
