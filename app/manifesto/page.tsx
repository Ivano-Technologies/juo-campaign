import type { Metadata } from "next";
import { Button } from "@/components/button";
import { ManifestoPlayer } from "@/components/manifesto-player";
import { PageHero } from "@/components/page-hero";
import {
  manifestoCarryClose,
  manifestoCarryIntro,
  manifestoCarryItems,
  manifestoCarryTitle,
  manifestoComingBody,
  manifestoComingTitle,
  manifestoDownloadTitle,
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
  ...pageShareTags(manifestoPageTitle, manifestoPageDescription),
};

export default function ManifestoPage() {
  return (
    <>
      <PageHero
        title="Manifesto"
        lede="The campaign manifesto for John Upan Odey Jnr — A Fresh Start for Cross River. Prosperity Agenda 2027–2031. PDF and full readout when published."
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
          <h2 className="font-serif text-3xl text-ink">{manifestoCarryTitle}</h2>
          <p className="mt-4 text-[1.05rem] leading-7 text-muted">
            {manifestoCarryIntro}
          </p>
          <ul className="mt-6 grid gap-3">
            {manifestoCarryItems.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-line bg-brand-white px-5 py-4 font-serif text-xl text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[1.05rem] leading-7 text-muted">
            {manifestoCarryClose}
          </p>
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
