import type { Metadata } from "next";
import { Button } from "@/components/button";
import { ManifestoCta } from "@/components/manifesto-cta";
import { CandidateMark } from "@/components/socials";
import { VisionPillarShowcase } from "@/components/vision/pillar-showcase";
import {
  visionAgendaBody,
  visionAgendaTitle,
  visionHeadlineLead,
  visionHeadlineLockup,
  visionHeroBody,
  visionHeroCtas,
  visionHeroEyebrow,
  visionHeroSubhead,
  visionJsonLd,
  visionOgImage,
  visionPageDescription,
  visionPageTitle,
  visionPageUrl,
  visionPillars,
  visionPillarsIntro,
  visionPillarsTitle,
  visionShareHashtags,
  visionWalkBody,
  visionWalkCtas,
  visionWalkTitle,
  visionWhyBody,
  visionWhyTitle,
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
    images: [{ url: visionOgImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: visionPageTitle,
    description: visionPageDescription,
    images: [visionOgImage],
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
              {visionHeroEyebrow}
            </p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-[1.15] sm:text-5xl">
              <span className="block">{visionHeadlineLead}</span>
              <span className="mt-1 block text-brand-white">
                {" "}
                {visionHeadlineLockup}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg tracking-[0.04em] text-brand-white/85">
              {visionHeroSubhead}
            </p>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-7 text-brand-white/85">
              {visionHeroBody}
            </p>
            <nav
              aria-label="Vision actions"
              className="mt-8 flex flex-wrap gap-3"
            >
              {visionHeroCtas.map((cta) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant={cta.href === "/manifesto" ? "white" : cta.href === "/join" ? "primary" : "ghost"}
                >
                  {cta.label}
                </Button>
              ))}
            </nav>
          </div>
          <CandidateMark
            className="h-24 w-24 shrink-0 sm:h-36 sm:w-36 lg:h-44 lg:w-44"
            priority
          />
        </div>
      </section>

      <VisionPillarShowcase />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-ink">{visionWhyTitle}</h2>
        {visionWhyBody.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl text-ink">{visionAgendaTitle}</h2>
          {visionAgendaBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <div className="mt-8">
            <ManifestoCta />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-ink">{visionPillarsTitle}</h2>
        <p className="mt-4 text-[1.05rem] leading-7 text-muted">
          {visionPillarsIntro}
        </p>
        <ol className="mt-10 grid gap-10">
          {visionPillars.map((pillar, index) => (
            <li key={pillar.slug} id={pillar.slug} className="scroll-mt-28">
              <h3 className="font-serif text-2xl text-ink">
                {index + 1}. {pillar.name}
              </h3>
              <p className="mt-3 text-[1.05rem] leading-7 text-muted">
                {pillar.blurb}
              </p>
              <div className="mt-4">
                <ManifestoCta />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-brand-blue text-brand-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl">{visionWalkTitle}</h2>
          <p className="mt-4 text-[1.05rem] leading-7 text-brand-white/85">
            {visionWalkBody}
          </p>
          <nav
            aria-label="Walk with the movement"
            className="mt-8 flex flex-wrap gap-3"
          >
            {visionWalkCtas.map((cta) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={cta.href === "/join" ? "primary" : "white"}
              >
                {cta.label}
              </Button>
            ))}
          </nav>
          <p className="mt-10 text-sm tracking-[0.04em] text-brand-white/70">
            {visionShareHashtags.join(" ")}
          </p>
        </div>
      </section>
    </>
  );
}
