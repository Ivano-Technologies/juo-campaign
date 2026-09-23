import { Reveal } from "@/components/motion/reveal";
import { homePillars } from "@/lib/home";

export function HomePillars() {
  return (
    <section id="brand-pillars" aria-label="Brand pillars">
      <ol className="grid items-stretch gap-px bg-brand-white sm:grid-cols-2 lg:grid-cols-5">
        {homePillars.map((pillar, index) => (
          <li key={pillar.slug} className="flex min-w-0 bg-brand-red">
            <Reveal
              delayMs={index * 80}
              className="motion-card flex h-full min-h-[20rem] w-full min-w-0 flex-1 flex-col bg-brand-red px-6 py-10 text-brand-white sm:min-h-[22rem] sm:px-8"
            >
              <p
                aria-hidden="true"
                className="font-serif text-3xl leading-none font-light text-brand-white sm:text-4xl"
              >
                {pillar.number}
              </p>
              <h3 className="mt-4 font-serif text-xl font-extrabold tracking-tight text-brand-white uppercase">
                {pillar.name}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 font-semibold text-brand-white">
                {pillar.lead}
              </p>
              <div className="mt-auto pt-6">
                <a
                  href={`/vision#${pillar.slug}`}
                  className="inline-flex min-h-11 items-center text-sm font-semibold tracking-[0.08em] text-brand-white underline decoration-brand-white decoration-2 underline-offset-4 hover:decoration-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-white"
                >
                  On The Vision
                </a>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
