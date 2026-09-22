import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import {
  diasporaDoesNotItems,
  diasporaDoesNotTitle,
  diasporaIncludeBody,
  diasporaIncludeTitle,
  diasporaPageDescription,
  diasporaPageTitle,
  diasporaPrivacyBody,
  diasporaPrivacyTitle,
  diasporaPurposeIntro,
  diasporaPurposeItems,
  diasporaPurposeTitle,
  diasporaTakePartBody,
  diasporaTakePartTitle,
  diasporaWhoClose,
  diasporaWhoIntro,
  diasporaWhoItems,
  diasporaWhoTitle,
} from "@/lib/diaspora";
import { pageShareTags } from "@/lib/page-seo";

export const metadata: Metadata = {
  title: {
    absolute: diasporaPageTitle,
  },
  description: diasporaPageDescription,
  ...pageShareTags(diasporaPageTitle, diasporaPageDescription, "/diaspora-connect"),
};

export default function DiasporaConnectPage() {
  return (
    <>
      <PageHero title="Diaspora Connect" lede={diasporaIncludeBody[0]}>
        <Button href="/join#diaspora" variant="white">
          Join
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
        <Button href="/donate" variant="ghost">
          Donate (when open)
        </Button>
      </PageHero>

      <section className="mx-auto max-w-3xl space-y-14 px-4 py-16 sm:px-6">
        <div>
          <h2 className="font-serif text-3xl text-ink">{diasporaIncludeTitle}</h2>
          {diasporaIncludeBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{diasporaPurposeTitle}</h2>
          <p className="mt-4 text-[1.05rem] leading-7 text-muted">
            {diasporaPurposeIntro}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[1.05rem] leading-7 text-muted">
            {diasporaPurposeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{diasporaWhoTitle}</h2>
          <p className="mt-4 text-[1.05rem] leading-7 text-muted">{diasporaWhoIntro}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[1.05rem] leading-7 text-muted">
            {diasporaWhoItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {diasporaWhoClose.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{diasporaTakePartTitle}</h2>
          <p className="mt-4 text-[1.05rem] leading-7 text-muted">
            {diasporaTakePartBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/join#diaspora" variant="primary">
              Join
            </Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
            <Button href="/donate" variant="secondary">
              Donate (when open)
            </Button>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{diasporaPrivacyTitle}</h2>
          {diasporaPrivacyBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          <p className="mt-4">
            <a href="/privacy" className="font-semibold text-brand-blue underline">
              Privacy
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{diasporaDoesNotTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[1.05rem] leading-7 text-muted">
            {diasporaDoesNotItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
