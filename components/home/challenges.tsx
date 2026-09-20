import { PlaceholderMedia } from "@/components/placeholder-media";
import { challenges } from "@/lib/home";

export function HomeChallenges() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-clay">
            Unlimited potential
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Challenges we face
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Cross River has the talent and the land. The work is to turn that
            potential into prosperity for every community.
          </p>
          <ul className="mt-8 grid gap-4">
            {challenges.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-line bg-paper p-5"
              >
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="home-marquee mt-8 text-xs uppercase tracking-[0.22em] text-forest">
            The future demands a different approach
          </p>
        </div>
        <PlaceholderMedia
          id="challenges-cutout"
          className="aspect-[3/4] w-full rounded-[2rem]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
    </section>
  );
}
