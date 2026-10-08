import type { Metadata } from "next";
import { Button } from "@/components/button";
import { ManifestoCta } from "@/components/manifesto-cta";
import { PageHero } from "@/components/page-hero";
import { manifestoStackedHeadline } from "@/lib/manifesto";
import { pageShareTags } from "@/lib/page-seo";
import {
  policiesHubBody,
  policiesHubImportant,
  policiesHubTitle,
  policiesLinks,
  policiesPageDescription,
  policiesPageTitle,
  policiesTenTitle,
  policySectors,
} from "@/lib/policies";

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
          Who is John Upan Odey
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
            {policySectors.map((sector) => {
              const headline = manifestoStackedHeadline(sector);
              return (
                <li
                  key={sector.slug}
                  id={sector.slug}
                  className="scroll-mt-28 min-w-0 rounded-2xl border border-line bg-brand-white p-6"
                >
                  <h3 className="font-serif text-2xl text-ink uppercase break-words">
                    {sector.title}
                  </h3>
                  {headline ? (
                    <p className="mt-3 font-serif text-2xl text-ink uppercase break-words whitespace-pre-line">
                      {headline}
                    </p>
                  ) : null}
                  <p className="mt-3 text-[1.05rem] leading-7 text-muted break-words">
                    {sector.blurb}
                  </p>
                </li>
              );
            })}
          </ol>
          <p className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {policiesLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center font-semibold text-brand-blue underline"
              >
                {link.label}
              </a>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
