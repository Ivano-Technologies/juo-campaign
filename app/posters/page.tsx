import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { pageShareTags } from "@/lib/page-seo";
import {
  officialBrandedPortraits,
  officialPosters,
  pendingPosterRasterizations,
  postersPageDescription,
  postersPageTitle,
} from "@/lib/posters";

export const metadata: Metadata = {
  title: {
    absolute: postersPageTitle,
  },
  description: postersPageDescription,
  ...pageShareTags(postersPageTitle, postersPageDescription, "/posters"),
};

export default function PostersPage() {
  return (
    <>
      <PageHero
        kicker="Official campaign designs"
        title="Poster gallery"
        lede="Approved Brand posters and branded portraits only. No stock, AI, or unapproved imagery."
      >
        <Button href="/join" variant="white">
          Join the Movement
        </Button>
        <Button href="/donate" variant="ghost">
          Donate
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          Official branded portraits
        </h2>
        <ul className="mt-8 grid gap-10 sm:grid-cols-2">
          {officialBrandedPortraits.map((portrait, index) => (
            <li key={portrait.id}>
              <figure>
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  width={portrait.width}
                  height={portrait.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full border border-brand-blue/15"
                  priority={index < 2}
                />
                <figcaption className="mt-4 font-serif text-xl text-ink">
                  {portrait.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-serif text-2xl text-ink sm:text-3xl">
          Official posters
        </h2>
        <ul className="mt-8 grid gap-10 md:grid-cols-2">
          {officialPosters.map((poster) => (
            <li key={poster.id}>
              <figure>
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  width={poster.width}
                  height={poster.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full border border-brand-blue/15"
                />
                <figcaption className="mt-4 font-serif text-xl text-ink">
                  {poster.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-14 border border-dashed border-line bg-brand-white px-5 py-6">
          <h2 className="font-serif text-2xl text-ink">Awaiting raster</h2>
          <p className="mt-3 text-[1.05rem] leading-7 text-muted">
            Blue, White, Poster 4, and Poster 5 exist as Brand-pack PDFs. They
            are not invented or substituted here. They will be added when
            raster files land.
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm text-muted">
            {pendingPosterRasterizations.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
