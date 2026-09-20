import { Button } from "@/components/button";
import { HeroCounters } from "@/components/hero-counters";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { campaignHashtag, heroStats } from "@/lib/home";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-forest text-paper">
      <PlaceholderMedia
        id="hero-full-bleed"
        className="absolute inset-0"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/80 to-forest/30" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-xs uppercase tracking-[0.32em] text-gold-soft">
          {site.tagline} · {campaignHashtag}
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
