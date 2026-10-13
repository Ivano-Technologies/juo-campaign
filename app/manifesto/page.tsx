import type { Metadata } from "next";
import { BrandMarks } from "@/components/brand-marks";
import { Button } from "@/components/button";
import { ManifestoExcerpts } from "@/components/manifesto-excerpts";
import { ManifestoPillars } from "@/components/manifesto-pillars";
import { ManifestoPlayer } from "@/components/manifesto-player";
import { PageHero } from "@/components/page-hero";
import { TenCommitments } from "@/components/ten-commitments";
import {
  manifestoExcerptsTitle,
  manifestoHeroLede,
  manifestoPageDescription,
  manifestoPageTitle,
  manifestoPillarsTitle,
  tenCommitmentsTitle,
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
      <section
        id="pillars"
        className="mx-auto max-w-[1200px] scroll-mt-28 px-5 pt-16 md:px-8"
      >
        <ManifestoPillars heading={manifestoPillarsTitle} />
      </section>
      <section
        id="commitments"
        className="mx-auto max-w-[1200px] scroll-mt-28 px-5 pt-16 md:px-8"
      >
        <TenCommitments heading={tenCommitmentsTitle} />
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-4 py-16 sm:px-6">
        <ManifestoExcerpts heading={manifestoExcerptsTitle} />

        <ManifestoPlayer />
      </section>
    </>
  );
}
