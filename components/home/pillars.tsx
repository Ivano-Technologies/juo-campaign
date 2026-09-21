import { homePillars } from "@/lib/home";

const toneClass: Record<(typeof homePillars)[number]["tone"], string> = {
  navy: "bg-navy",
  blue: "bg-pillar-blue",
  red: "bg-brand-red",
};

export function HomePillars() {
  return (
    <section aria-label="Six pillars">
      <ol className="grid sm:grid-cols-2 lg:grid-cols-3">
        {homePillars.map((pillar) => (
          <li
            key={pillar.number}
            className={`min-h-[24rem] px-8 py-12 text-brand-white sm:min-h-[26rem] sm:px-10 ${toneClass[pillar.tone]}`}
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
          </li>
        ))}
      </ol>
    </section>
  );
}
