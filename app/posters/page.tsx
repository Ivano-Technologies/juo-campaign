import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { CampaignGraphicsGallery } from "@/components/campaign-graphics";
import { PageHero } from "@/components/page-hero";
import { pageShareTags } from "@/lib/page-seo";
import { photosPath } from "@/lib/photos";
import {
  johnCampaignPosters,
  odeyArchibongCampaignPosters,
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
          {johnCampaignPosters.map((poster, index) => (
            <li key={poster.id}>
              <figure>
                <div className="relative aspect-[1241/1754] w-full overflow-hidden border border-brand-blue/15 bg-brand-white">
                  {"avif" in poster ? (
                    <picture className="contents">
                      <source srcSet={poster.avif} type="image/avif" />
                      <source srcSet={poster.webp} type="image/webp" />
                      <Image
                        src={poster.src}
                        alt={poster.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-contain"
                        unoptimized
                      />
                    </picture>
                  ) : (
                    <Image
                      src={poster.src}
                      alt={poster.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-contain"
                      priority={index < 3}
                    />
                  )}
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

        <div className="mt-16">
          <CampaignGraphicsGallery heading="Campaign graphics" />
        </div>
      </section>
    </>
  );
}
