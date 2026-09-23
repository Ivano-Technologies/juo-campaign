import { Button } from "@/components/button";
import { Reveal } from "@/components/motion/reveal";
import { SuitPortrait } from "@/components/suit-portrait";
import { meetBio, meetQuote } from "@/lib/home";
import { site } from "@/lib/site";

export function HomeMeet() {
  return (
    <section className="bg-brand-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:py-24">
        <Reveal className="order-2 lg:order-none">
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

        <Reveal
          delayMs={140}
          className="order-1 flex items-center justify-center lg:order-none lg:h-full"
        >
          <SuitPortrait priority matchColumn sizes="(min-width: 1024px) 32rem, 100vw" />
        </Reveal>
      </div>
    </section>
  );
}
