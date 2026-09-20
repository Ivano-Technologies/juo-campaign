import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { challenges } from "@/lib/home";

export function HomeChallenges() {
  return (
    <section className="bg-brand-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-red">
              Unlimited potential
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Challenges we face
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Cross River has the talent and the land. The work is to turn that
              potential into prosperity for every community.
            </p>
          </Reveal>
          <RevealGroup as="ul" className="mt-8 grid gap-4">
            {challenges.map((item) => (
              <li
                key={item.title}
                className="motion-item rounded-2xl border border-line bg-brand-white p-5"
              >
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </RevealGroup>
        </div>
        <Reveal delayMs={120} className="h-full">
          <PlaceholderMedia
            id="challenges-cutout"
            className="aspect-[3/4] w-full rounded-[2rem] bg-gradient-to-b from-brand-white to-line"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
