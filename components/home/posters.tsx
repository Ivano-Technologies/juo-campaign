import Image from "next/image";
import Link from "next/link";
import { CommunityPostList } from "@/components/community-posts";
import { communityPath } from "@/lib/community";
import {
  officialBrandedPortraits,
  officialPosters,
  pendingPosterRasterizations,
  postersPath,
} from "@/lib/posters";

export function HomePosters() {
  return (
    <section id="community" className="scroll-mt-[4.75rem] bg-brand-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-brand-red uppercase">
          Community
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-4xl font-extrabold text-brand-blue sm:text-5xl">
            Campaign gallery
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href={communityPath}
              className="text-sm font-semibold tracking-[0.12em] text-brand-blue uppercase underline underline-offset-4"
            >
              View community posts
            </Link>
            <Link
              href={postersPath}
              className="text-sm font-semibold tracking-[0.12em] text-brand-blue uppercase underline underline-offset-4"
            >
              View all posters
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <CommunityPostList />
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-2xl font-extrabold text-brand-blue sm:text-3xl">
            Official posters and imagery
          </h3>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {officialBrandedPortraits.map((portrait) => (
              <li key={portrait.id}>
                <figure>
                  <Image
                    src={portrait.src}
                    alt={portrait.alt}
                    width={portrait.width}
                    height={portrait.height}
                    sizes="(min-width: 1024px) 16rem, (min-width: 640px) 45vw, 90vw"
                    className="h-auto w-full border border-brand-blue/15"
                  />
                  <figcaption className="mt-4 text-sm text-muted">
                    {portrait.title}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {officialPosters.map((poster) => (
              <li key={poster.id}>
                <figure>
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    width={poster.width}
                    height={poster.height}
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 90vw"
                    className="h-auto w-full border border-brand-blue/15"
                  />
                  <figcaption className="mt-4 text-sm text-muted">
                    {poster.title}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Additional official posters (Blue, White, 4, and 5) will appear here
            after Brand rasterizes the source PDFs:{" "}
            {pendingPosterRasterizations.map((item) => item.label).join(" · ")}.
          </p>
        </div>
      </div>
    </section>
  );
}
