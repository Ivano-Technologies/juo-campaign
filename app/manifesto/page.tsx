import type { Metadata } from "next";
import { Button } from "@/components/button";
import { ManifestoPlayer } from "@/components/manifesto-player";
import { PageHero } from "@/components/page-hero";
import { manifestoPlaceholderLabel } from "@/lib/manifesto";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "A Fresh Start — One People, One Cross River. The campaign manifesto PDF will be published here when IVA-17 lands.",
};

export default function ManifestoPage() {
  return (
    <>
      <PageHero
        kicker="Read the plan"
        title="Manifesto"
        lede="Listen to the public spine, or download the PDF when IVA-17 lands. Until then this page is a shell with a readout and a gated download — not invented policy."
      >
        <Button href="/join" variant="white">
          Join the Movement
        </Button>
        <Button href="/donate" variant="ghost">
          Donate
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </PageHero>
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6">
        <ManifestoPlayer />
        <ol className="grid gap-6">
          {[
            site.tagline,
            site.unityLine,
            site.prosperityLine,
            "10 Commitments — in the approved PDF",
            site.agenda,
          ].map((step, index) => (
            <li
              key={step}
              className="rounded-2xl border border-line bg-brand-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-serif text-2xl">{step}</h2>
            </li>
          ))}
        </ol>
        <p className="text-sm text-muted">{manifestoPlaceholderLabel}</p>
      </section>
    </>
  );
}
