import type { Metadata } from "next";
import { BrandMarks } from "@/components/brand-marks";
import { Button } from "@/components/button";
import { ManifestoExcerpts } from "@/components/manifesto-excerpts";
import { ManifestoPlayer } from "@/components/manifesto-player";
import { PageHero } from "@/components/page-hero";
import {
  manifestoComingTitle,
  manifestoDownloadTitle,
  manifestoExcerptsTitle,
  manifestoHeroLede,
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
        </div>

        <ManifestoExcerpts heading={manifestoExcerptsTitle} />

        <div>
          <h2 className="font-serif text-3xl text-ink">{manifestoDownloadTitle}</h2>
          <div className="mt-6">
            <ManifestoPlayer />
          </div>
        </div>
      </section>
    </>
  );
}
