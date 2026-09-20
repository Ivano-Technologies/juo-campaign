import { CountUpStats } from "@/components/motion/count-up";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
import {
  futureCountStats,
  futureHighlights,
  futureInitiatives,
  futureTextStat,
} from "@/lib/home";
import { site } from "@/lib/site";

export function HomeFuture() {
  return (
    <section className="bg-brand-blue text-brand-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-brand-red">
            Cross River 2029 · {site.agenda}
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            The future we are building
          </h2>
          <p className="mt-4 max-w-2xl text-brand-white/80">
            Imagine a Cross River where work, schools, clinics, and open books
            belong to every ward. A Fresh Start is how we get there.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <CountUpStats
            stats={futureCountStats}
            tone="onBlue"
            className="grid gap-4 sm:col-span-2 sm:grid-cols-2"
          />
          <div className="rounded-2xl border border-brand-white/15 bg-brand-blue/50 px-5 py-6">
            <p className="font-serif text-3xl text-brand-red sm:text-4xl">
              {futureTextStat.display}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand-white/75">
              {futureTextStat.label}
            </p>
          </div>
        </div>
        <RevealGroup as="ul" className="mt-8 grid gap-2 text-sm text-brand-white/80 sm:grid-cols-2">
          {futureHighlights.map((item) => (
            <li key={item} className="motion-item">
              · {item}
            </li>
          ))}
        </RevealGroup>
        <Reveal className="mt-12">
          <p className="text-xs uppercase tracking-[0.28em] text-brand-red">
            Featured initiatives
          </p>
        </Reveal>
        <RevealGroup as="ul" className="mt-5 grid gap-5 md:grid-cols-2">
          {futureInitiatives.map((item) => (
            <li
              key={item.title}
              className="motion-item motion-card motion-card-on-blue rounded-2xl border border-brand-white/15 bg-brand-white/5 p-6"
            >
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm text-brand-white/80">{item.body}</p>
            </li>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
