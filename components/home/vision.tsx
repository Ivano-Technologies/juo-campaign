import { PlaceholderMedia } from "@/components/placeholder-media";
import { opportunityCards } from "@/lib/home";

export function HomeVision() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-clay">
          The vision
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          From potential to prosperity
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Cross River has all the ingredients for success. What has been missing
          is leadership capable of connecting these opportunities into a clear
          development strategy. Our vision is a state where every community
          shares in growth and prosperity.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {opportunityCards.map((card) => (
            <li
              key={card.title}
              className="overflow-hidden rounded-2xl border border-line bg-cream"
            >
              <PlaceholderMedia
                id={card.image.id}
                className="aspect-[16/10]"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="p-5">
                <h3 className="font-serif text-2xl uppercase">{card.title}</h3>
                <p className="mt-2 text-sm text-muted">{card.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
