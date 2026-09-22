import type { Metadata } from "next";
import { BrandMarks } from "@/components/brand-marks";
import { Button } from "@/components/button";
import { ManifestoPlayer } from "@/components/manifesto-player";
import { PageHero } from "@/components/page-hero";
import {
  manifestoComingBody,
  manifestoComingTitle,
  manifestoDownloadTitle,
  manifestoExcerpts,
  manifestoExcerptsIntro,
  manifestoExcerptsTitle,
  manifestoHeroLede,
  manifestoMeanwhileLinks,
  manifestoMeanwhileTitle,
  manifestoPageDescription,
  manifestoPageTitle,
} from "@/lib/manifesto";
import { pageShareTags } from "@/lib/page-seo";

export const metadata: Metadata = {
  title: {
    absolute: manifestoPageTitle,
  },
  description: manifestoPageDescription,
  ...pageShareTags(manifestoPageTitle, manifestoPageDescription, "/manifesto"),
};

export default function ManifestoPage() {
  return (
    <>
      <PageHero
        title="Manifesto"
        lede={manifestoHeroLede}
        aside={<BrandMarks variant="manifesto" />}
      >
        <Button href="/vision" variant="white">
          Read The Vision
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>
      <section className="mx-auto max-w-3xl space-y-14 px-4 py-16 sm:px-6">
        <div>
          <h2 className="font-serif text-3xl text-ink">{manifestoComingTitle}</h2>
          {manifestoComingBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{manifestoExcerptsTitle}</h2>
          <p className="mt-4 text-[1.05rem] leading-7 text-muted">
            {manifestoExcerptsIntro}
          </p>
          <div className="mt-10 grid gap-12">
            {manifestoExcerpts.map((excerpt) => (
              <article key={excerpt.title}>
                <h3 className="font-serif text-2xl tracking-tight text-ink uppercase">
                  {excerpt.title}
                </h3>
                {excerpt.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-[1.05rem] leading-7 text-ink"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{manifestoDownloadTitle}</h2>
          <div className="mt-6">
            <ManifestoPlayer />
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{manifestoMeanwhileTitle}</h2>
          <ul className="mt-6 grid gap-3">
            {manifestoMeanwhileLinks.map((link) => (
              <li key={link.href}>
                <Button href={link.href} variant="secondary">
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
