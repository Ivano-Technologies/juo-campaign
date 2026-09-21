"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { StatGlyph } from "@/components/icons";
import { useInView } from "@/components/motion/use-in-view";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import {
  heroStats,
  isPublishedHeroStat,
  statsBackdrop,
  type HeroStat,
} from "@/lib/home";

function useCountUp(target: number, active: boolean, reduced: boolean): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || reduced) {
      return;
    }

    const durationMs = 1600;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / durationMs);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduced, target]);

  if (reduced) {
    return target;
  }

  return value;
}

function StatCell({
  stat,
  active,
  reduced,
}: {
  stat: HeroStat;
  active: boolean;
  reduced: boolean;
}) {
  const value = useCountUp(stat.value, active, reduced);
  return (
    <div className="flex flex-col items-center text-center">
      <StatGlyph icon={stat.icon} />
      <p className="sr-only">
        {stat.value}
        {stat.suffix} {stat.label}
      </p>
      <p
        aria-hidden="true"
        className="mt-3 font-serif text-5xl font-extrabold tracking-tight text-brand-white tabular-nums sm:text-6xl"
      >
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-brand-white/80">{stat.label}</p>
    </div>
  );
}

export function HomeStatsBar() {
  const { ref, inView } = useInView<HTMLElement>(0.4);
  const reduced = usePrefersReducedMotion();

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-navy py-20 text-brand-white sm:py-24">
      <Image
        src={statsBackdrop}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-6 sm:grid-cols-3">
        {heroStats.filter(isPublishedHeroStat).map((stat) => (
          <StatCell
            key={stat.label}
            stat={stat}
            active={inView}
            reduced={reduced}
          />
        ))}
        <div className="text-center lg:text-left">
          <p className="font-serif text-4xl font-extrabold tracking-[0.06em] text-mint uppercase sm:text-5xl">
            Unlimited
          </p>
          <p className="potential-outline font-serif text-4xl font-extrabold tracking-[0.08em] uppercase sm:text-5xl">
            Potential
          </p>
        </div>
      </div>
    </section>
  );
}
