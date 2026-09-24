import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { pageShareTags } from "@/lib/page-seo";
import {
  officialCampaignPhotos,
  photosHeroLede,
  photosPageDescription,
  photosPageTitle,
} from "@/lib/photos";
import { postersPath } from "@/lib/posters";

export const metadata: Metadata = {
  title: {
    absolute: photosPageTitle,
  },
  description: photosPageDescription,
  ...pageShareTags(photosPageTitle, photosPageDescription, "/photos"),
};

export default function PhotosPage() {
  return (
    <>
      <PageHero
        kicker="Official campaign photography"
        title="Photo Gallery"
        lede={photosHeroLede}
      >
        <Button href={postersPath} variant="white">
          Campaign Poster Gallery
        </Button>
        <Button href="/news" variant="ghost">
          News
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          Portraits and photographs
        </h2>
        <ul className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {officialCampaignPhotos.map((photo, index) => (
            <li key={photo.id}>
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-brand-blue/15 bg-brand-white">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                  priority={index < 3}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
