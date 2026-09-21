import type { Metadata } from "next";
import { Button } from "@/components/button";
import { CandidateMark } from "@/components/socials";
import { site } from "@/lib/site";
import { VisionPillarShowcase } from "@/components/vision/pillar-showcase";
import {
  visionHeadlineLead,
  visionHeadlineLockup,
  visionJsonLd,
  visionPageDescription,
  visionPageTitle,
  visionPageUrl,
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
      <section className="bg-brand-blue text-brand-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-16 sm:gap-10 sm:px-6 sm:py-20">
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-red">
              The Vision
            </p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-[1.15] sm:text-5xl">
              <span className="block">{visionHeadlineLead}</span>
              <span className="mt-1 block text-brand-white">
                {visionHeadlineLockup}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg tracking-[0.04em] text-brand-white/85">
              {site.prosperityLine.toUpperCase()}
            </p>
          </div>
          <CandidateMark
            className="h-24 w-24 shrink-0 sm:h-36 sm:w-36 lg:h-44 lg:w-44"
            priority
          />
        </div>
      </section>

      <VisionPillarShowcase />

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
            one Cross River. The ten pillars are listed by name. Full
            commitment text will be published with the campaign manifesto.
          </p>
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
