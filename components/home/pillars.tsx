import { Reveal } from "@/components/motion/reveal";
import { homePillars } from "@/lib/home";

/** IVA-46: 01–03 primary Royal Blue; 04–06 same hue, one shade deeper. */
const toneClass: Record<(typeof homePillars)[number]["tone"], string> = {
  primary: "bg-brand-blue text-brand-white",
  deep: "bg-brand-blue-deep text-brand-white",
};

export function HomePillars() {
  return (
    <section aria-label="Six pillars">
      <ol className="grid sm:grid-cols-2 lg:grid-cols-3">
        {homePillars.map((pillar, index) => (
          <li key={pillar.number}>
            <Reveal
              delayMs={index * 80}
              className={`motion-card h-full min-h-[24rem] px-8 py-12 sm:min-h-[26rem] sm:px-10 ${toneClass[pillar.tone]}`}
            >
              <p className="font-serif text-7xl font-light text-brand-white/90 sm:text-8xl">
                {pillar.number}
              </p>
              <h3 className="mt-8 font-serif text-xl font-extrabold tracking-tight uppercase">
                {pillar.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-brand-white/90">
                {pillar.lead}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-brand-white/80">
                {pillar.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
