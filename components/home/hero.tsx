import { BrandMarks } from "@/components/brand-marks";
import { HeroCounters } from "@/components/hero-counters";
import { HeroCaptions } from "@/components/motion/hero-captions";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { PrimaryCtas } from "@/components/primary-ctas";
import { heroCaptionSets, heroStats } from "@/lib/home";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-brand-blue text-brand-white">
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
            /* #40449B (brand-blue) with alpha — exact hex, not a near-match */
            "linear-gradient(180deg, rgb(64 68 155 / 0.12) 0%, rgb(64 68 155 / 0.22) 40%, rgb(64 68 155 / 0.72) 74%, rgb(64 68 155 / 0.92) 100%)",
        }}
      />
      <div className="relative z-[2] mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 py-16 sm:px-6 lg:py-24">
        <BrandMarks variant="hero" />
        <HeroCaptions sets={heroCaptionSets} />
        <PrimaryCtas className="mt-8" />
        <HeroCounters stats={heroStats} />
      </div>
    </section>
  );
}
