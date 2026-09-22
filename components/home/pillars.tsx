import { homePillars } from "@/lib/home";

const toneClass: Record<(typeof homePillars)[number]["tone"], string> = {
  navy: "bg-brand-blue text-brand-white",
  blue: "bg-brand-blue text-brand-white",
  red: "bg-brand-red text-brand-white",
  navyDeep: "bg-brand-white text-brand-blue ring-1 ring-inset ring-brand-blue/15",
  blueDeep: "bg-brand-blue text-brand-white",
  maroon: "bg-brand-red text-brand-white",
};

export function HomePillars() {
  return (
    <section aria-label="Six pillars">
      <ol className="grid sm:grid-cols-2 lg:grid-cols-3">
        {homePillars.map((pillar) => {
          const onWhite = pillar.tone === "navyDeep";
          return (
            <li
              key={pillar.number}
              className={`min-h-[24rem] px-8 py-12 sm:min-h-[26rem] sm:px-10 ${toneClass[pillar.tone]}`}
            >
              <p
                className={`font-serif text-7xl font-light sm:text-8xl ${
                  onWhite ? "text-brand-blue/80" : "text-brand-white/90"
                }`}
              >
                {pillar.number}
              </p>
              <h3 className="mt-8 font-serif text-xl font-extrabold tracking-tight uppercase">
                {pillar.title}
              </h3>
              <p
                className={`mt-4 max-w-sm text-sm leading-6 ${
                  onWhite ? "text-brand-blue/90" : "text-brand-white/90"
                }`}
              >
                {pillar.lead}
              </p>
              <p
                className={`mt-3 max-w-sm text-sm leading-6 ${
                  onWhite ? "text-brand-blue/80" : "text-brand-white/80"
                }`}
              >
                {pillar.body}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
