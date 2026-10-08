import type { Metadata } from "next";
import { Button } from "@/components/button";
import { LgaPlansExplorer } from "@/components/lga-plans-explorer";
import { PageHero } from "@/components/page-hero";
import {
  lgaPlansHeroLede,
  lgaPlansPageDescription,
  lgaPlansPageTitle,
  lgaPlansPath,
} from "@/lib/lga-plans";
import { pageShareTags } from "@/lib/page-seo";

export const metadata: Metadata = {
  title: {
    absolute: lgaPlansPageTitle,
  },
  description: lgaPlansPageDescription,
  ...pageShareTags(lgaPlansPageTitle, lgaPlansPageDescription, lgaPlansPath),
};

export default function LgaPlansPage() {
  return (
    <>
      <PageHero title="LGA Plans" lede={lgaPlansHeroLede}>
        <Button href="/manifesto" variant="white">
          Manifesto
        </Button>
        <Button href="/policies" variant="ghost">
          Policies
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <LgaPlansExplorer />
      </section>
    </>
  );
}
