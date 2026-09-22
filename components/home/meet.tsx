import Image from "next/image";
import { Button } from "@/components/button";
import { Reveal } from "@/components/motion/reveal";
import { brand } from "@/lib/brand";
import { meetBio, meetQuote } from "@/lib/home";
import { site } from "@/lib/site";

export function HomeMeet() {
  return (
    <section className="bg-brand-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-brand-red uppercase">
            Meet {site.name}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-extrabold text-brand-blue sm:text-5xl">
            {site.name}
          </h2>
          <p className="mt-2 text-sm tracking-[0.16em] text-brand-blue/70 uppercase">
            Gubernatorial Candidate
          </p>
          <div className="mt-8 space-y-4 text-[1.05rem] leading-7 text-ink">
            {meetBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l-4 border-brand-red pl-5 text-lg leading-8 text-brand-blue/90 italic">
            “{meetQuote}”
          </blockquote>
          <Button href="/john-upan-odey" variant="secondary" className="mt-8 rounded-none">
            Who is John Upan Odey Jnr
          </Button>
        </Reveal>

        <Reveal delayMs={140}>
          <figure className="meet-figure border border-brand-blue/15 bg-brand-white">
            <Image
              src={brand.portraits.whoIsJohn.src}
              alt={brand.portraits.whoIsJohn.alt}
              width={brand.portraits.whoIsJohn.width}
              height={brand.portraits.whoIsJohn.height}
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="h-auto w-full"
              priority
            />
            <figcaption className="px-4 py-3 text-sm text-muted">
              Official branded portrait
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
