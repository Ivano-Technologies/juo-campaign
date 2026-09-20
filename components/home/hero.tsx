import { Button } from "@/components/button";
import { HeroCounters } from "@/components/hero-counters";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { campaignHashtag, heroStats } from "@/lib/home";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-forest-deep text-paper">
      <div className="absolute inset-0 z-0">
        <PlaceholderMedia
          id="hero-full-bleed"
          className="h-full w-full"
          imageClassName="object-cover object-[center_20%]"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgb(11 36 28 / 0.12) 0%, rgb(11 36 28 / 0.22) 40%, rgb(11 36 28 / 0.72) 74%, rgb(11 36 28 / 0.92) 100%)",
        }}
      />
      <div className="relative z-[2] mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-xs tracking-[0.28em] text-gold-soft">
          <span className="uppercase">{site.tagline}</span>
          <span> · {campaignHashtag}</span>
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Cross River can do better with…
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-paper/85 sm:text-xl">
          …jobs, innovation, and opportunity for every young person.{" "}
          {site.unityLine}. {site.prosperityLine}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/join" variant="primary">
            Join the Movement
          </Button>
          <Button href="/donate" variant="gold">
            Donate
          </Button>
          <Button href="/manifesto" variant="ghost">
            Manifesto
          </Button>
        </div>
        <HeroCounters stats={heroStats} />
      </div>
    </section>
  );
}
