import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
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
        lede="The approved spine is already public. The downloadable manifesto PDF is still with the campaign (IVA-17). This page will host the file and a web summary as soon as it arrives."
      >
        <Button href="/policies" variant="gold">
          Policies
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <ol className="grid gap-6">
          {[
            site.tagline,
            site.unityLine,
            site.prosperityLine,
            "10 Commitments",
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
        <p className="mt-8 text-sm text-muted">
          No invented policy claims. When the PDF is approved, Shipping will
          attach it here and expand the web summary from that source only.
        </p>
      </section>
    </>
  );
}
