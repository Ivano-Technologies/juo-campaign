import { homePillars } from "@/lib/home";

/** IVA-46: 01–03 primary Royal Blue; 04–05 same hue, one shade deeper. */
const toneClass: Record<(typeof homePillars)[number]["tone"], string> = {
  primary: "bg-brand-blue text-brand-white",
  deep: "bg-brand-blue-deep text-brand-white",
};

export function HomePillars() {
  return (
    <section id="brand-pillars" aria-label="Brand pillars">
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
        {homePillars.map((pillar) => (
          <li
            key={pillar.slug}
            className={`min-h-[20rem] px-6 py-10 sm:min-h-[22rem] sm:px-8 ${toneClass[pillar.tone]}`}
          >
            <p className="font-serif text-6xl font-light text-brand-white/90 sm:text-7xl">
              {pillar.number}
            </p>
            <h3 className="mt-8 font-serif text-xl font-extrabold tracking-tight uppercase">
              {pillar.name}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-6 text-brand-white/90">
              {pillar.lead}
            </p>
            <a
              href={`/vision#${pillar.slug}`}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold tracking-[0.08em] text-brand-white underline underline-offset-4"
            >
              On The Vision
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
