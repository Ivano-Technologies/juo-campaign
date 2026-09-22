import type { Metadata } from "next";
import { Button } from "@/components/button";
import { ManifestoCta } from "@/components/manifesto-cta";
import { PageHero } from "@/components/page-hero";
import {
  policiesHubBody,
  policiesHubImportant,
  policiesHubTitle,
  policiesNotOldBody,
  policiesNotOldTitle,
  policiesPageDescription,
  policiesPageTitle,
  policiesTenTitle,
  policySectors,
} from "@/lib/policies";
import { pageShareTags } from "@/lib/page-seo";

export const metadata: Metadata = {
  title: {
    absolute: policiesPageTitle,
  },
  description: policiesPageDescription,
  ...pageShareTags(policiesPageTitle, policiesPageDescription, "/policies"),
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero title="Policies" lede={policiesHubBody[0]}>
        <Button href="/manifesto" variant="white">
          {`Read the full Manifesto`}
        </Button>
        <Button href="/vision" variant="ghost">
          The Vision
        </Button>
        <Button href="/john-upan-odey" variant="ghost">
          Who is John Upan Odey Jnr
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-ink">{policiesHubTitle}</h2>
        {policiesHubBody.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
            {paragraph}
          </p>
        ))}
        <p className="mt-4 text-[1.05rem] leading-7 text-muted">
          {policiesHubImportant}
        </p>
        <div className="mt-8">
          <ManifestoCta />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl text-ink">{policiesTenTitle}</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {policySectors.map((sector, index) => (
              <li
                key={sector.slug}
                id={sector.slug}
                className="scroll-mt-28 rounded-2xl border border-line bg-brand-white p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-brand-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-ink">{sector.name}</h3>
                <p className="mt-3 text-[1.05rem] leading-7 text-muted">
                  {sector.blurb}
                </p>
                <p className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <a
                    href="/vision#brand-pillars"
                    className="inline-flex min-h-11 items-center font-semibold text-brand-blue underline"
                  >
                    Brand pillars on The Vision
                  </a>
                  <a
                    href="/manifesto"
                    className="inline-flex min-h-11 items-center font-semibold text-brand-blue underline"
                  >
                    Read the full Manifesto
                  </a>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-ink">{policiesNotOldTitle}</h2>
        <p className="mt-4 text-[1.05rem] leading-7 text-muted">
          {policiesNotOldBody}
        </p>
      </section>
    </>
  );
}
