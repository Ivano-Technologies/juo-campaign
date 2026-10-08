import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { LgaPlansExplorer } from "@/components/lga-plans-explorer";
import { PageHero } from "@/components/page-hero";
import {
  getLgaPlan,
  lgaPlanPath,
  lgaPlanSeoDescription,
  lgaPlanSeoTitle,
  lgaPlanSlugs,
  lgaPlansPath,
} from "@/lib/lga-plans";
import { pageShareTags } from "@/lib/page-seo";

type LgaPlanDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lgaPlanSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LgaPlanDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const plan = getLgaPlan(slug);
  if (!plan) {
    return {};
  }

  const title = lgaPlanSeoTitle(plan.name);
  const description = lgaPlanSeoDescription(plan);

  return {
    title: {
      absolute: title,
    },
    description,
    ...pageShareTags(title, description, lgaPlanPath(plan.slug)),
  };
}

export default async function LgaPlanDetailPage({
  params,
}: LgaPlanDetailPageProps) {
  const { slug } = await params;
  const plan = getLgaPlan(slug);
  if (!plan) {
    notFound();
  }

  return (
    <>
      <PageHero
        kicker="LGA Plans"
        title={plan.name}
        lede={plan.supportingLine}
      >
        <Button href={lgaPlansPath} variant="white">
          All LGA plans
        </Button>
        <Button href="/manifesto" variant="ghost">
          Manifesto
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <LgaPlansExplorer initialSlug={plan.slug} />
      </section>
    </>
  );
}
