import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { pageShareTags } from "@/lib/page-seo";
import { photosPath } from "@/lib/photos";
import {
  johnCampaignPosters,
  odeyArchibongCampaignPosters,
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
        title="Campaign Poster Gallery"
        lede="John’s posters first, Odey Archibong ticket posters below. Portraits and photographs live on the Photo Gallery."
      >
        <Button href={photosPath} variant="white">
          Photo Gallery
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          John’s posters
        </h2>
        <ul className="mt-8 grid gap-10 md:grid-cols-3">
          {johnCampaignPosters.map((poster) => (
            <li key={poster.id}>
              <figure>
                <div className="relative aspect-[1241/1754] w-full overflow-hidden border border-brand-blue/15 bg-brand-white">
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain"
                    priority
                  />
                </div>
                <figcaption className="mt-4 font-serif text-xl text-ink">
                  {poster.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-serif text-2xl text-ink sm:text-3xl">
          Odey Archibong posters
        </h2>
        <ul className="mt-8 grid gap-10 md:grid-cols-3">
          {odeyArchibongCampaignPosters.map((poster) => (
            <li key={poster.id}>
              <figure>
                <div className="relative aspect-[1241/1754] w-full overflow-hidden border border-brand-blue/15 bg-brand-white">
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain"
                  />
                </div>
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
