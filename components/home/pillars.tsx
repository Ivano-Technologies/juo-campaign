import { homePillars } from "@/lib/home";

export function HomePillars() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-clay">
          Our six pillars
        </p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
          A Fresh Start, in practice
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Campaign home blocks from the live site, rewritten without legal-demo
          residue. Full manifesto commitments stay on Policies when the PDF
          lands.
        </p>
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {homePillars.map((pillar) => (
            <li
              key={pillar.number}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              <p className="font-serif text-3xl text-gold">{pillar.number}</p>
              <h3 className="mt-2 font-serif text-2xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{pillar.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
