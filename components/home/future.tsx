import { futureHighlights, futureInitiatives, futureStats } from "@/lib/home";
import { site } from "@/lib/site";

export function HomeFuture() {
  return (
    <section className="bg-forest text-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-gold-soft">
          Cross River 2029 · {site.agenda}
        </p>
        <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
          The future we are building
        </h2>
        <p className="mt-4 max-w-2xl text-paper/80">
          Imagine a Cross River where work, schools, clinics, and open books
          belong to every ward. A Fresh Start is how we get there.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {futureStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-paper/15 bg-forest-deep/50 px-5 py-6"
            >
              <p className="font-serif text-3xl text-gold-soft sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-paper/75">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <ul className="mt-8 grid gap-2 text-sm text-paper/80 sm:grid-cols-2">
          {futureHighlights.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
        <p className="mt-12 text-xs uppercase tracking-[0.28em] text-gold-soft">
          Featured initiatives
        </p>
        <ul className="mt-5 grid gap-5 md:grid-cols-2">
          {futureInitiatives.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-paper/15 bg-paper/5 p-6"
            >
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm text-paper/80">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
