import Image from "next/image";
import Link from "next/link";
import { officialPosters, pendingPosterRasterizations, postersPath } from "@/lib/posters";

export function HomePosters() {
  return (
    <section className="bg-brand-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-brand-red uppercase">
          Official posters
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-4xl font-extrabold text-brand-blue sm:text-5xl">
            Campaign gallery
          </h2>
          <Link
            href={postersPath}
            className="text-sm font-semibold tracking-[0.12em] text-brand-blue uppercase underline underline-offset-4"
          >
            View all posters
          </Link>
        </div>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
