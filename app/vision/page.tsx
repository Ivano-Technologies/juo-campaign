import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";
import {
  visionHeadline,
  visionJsonLd,
  visionPageDescription,
  visionPageTitle,
  visionPageUrl,
  visionPillars,
} from "@/lib/vision";

export const metadata: Metadata = {
  title: {
    absolute: visionPageTitle,
  },
  description: visionPageDescription,
  alternates: {
    canonical: visionPageUrl,
  },
  openGraph: {
    type: "website",
    url: visionPageUrl,
    title: visionPageTitle,
    description: visionPageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: visionPageTitle,
    description: visionPageDescription,
  },
};

export default function VisionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(visionJsonLd) }}
      />
      <PageHero
        kicker="The Vision"
        title={visionHeadline}
        lede={site.prosperityLine.toUpperCase()}
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-ink">Why this vision</h2>
        <p className="mt-4 text-[1.05rem] leading-7 text-muted">
          The campaign’s public spine is simple: we are one people and one
          Cross River. Hunger does not know zoning. Roads, farms, clinics, and
          jobs belong to every local government. {site.prosperityLine}
        </p>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl text-ink">{site.agenda}</h2>
          <p className="mt-4 max-w-3xl text-[1.05rem] leading-7 text-muted">
            {site.agenda} names the work of a Fresh Start for one people and
            one Cross River. The pillars below are listed by name. Full
            commitment text will be published with the campaign manifesto.
          </p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visionPillars.map((pillar, index) => (
              <li
                key={pillar}
                className="rounded-2xl border border-line bg-brand-white p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-brand-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-ink">{pillar}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-blue text-brand-white">
        <nav
          aria-label="Campaign actions"
          className="mx-auto flex max-w-6xl flex-wrap gap-3 px-4 py-12 sm:px-6"
        >
          <Button href="/manifesto" variant="white">
            Manifesto
          </Button>
          <Button href="/join" variant="primary">
            Join the Movement
          </Button>
          <Button href="/john-upan-odey" variant="ghost">
            Who is JUO
          </Button>
        </nav>
      </section>
    </>
  );
}
