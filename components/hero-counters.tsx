"use client";

import { useEffect, useRef, useState } from "react";
import type { heroStats } from "@/lib/home";

type Stat = (typeof heroStats)[number];

function useCountUp(target: number, active: boolean): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const durationMs = reduced ? 0 : 1400;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress =
        durationMs === 0 ? 1 : Math.min(1, (now - startedAt) / durationMs);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function CounterStat({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active);

  return (
    <div className="rounded-2xl border border-brand-white/15 bg-brand-blue/55 px-5 py-4 text-center backdrop-blur-sm">
      <p className="sr-only">
        {stat.value}
        {stat.suffix} {stat.label}
      </p>
      <p
        aria-hidden="true"
        className="font-serif text-4xl tabular-nums text-brand-red sm:text-5xl"
      >
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand-white/80">
        {stat.label}
      </p>
    </div>
  );
}

export function HeroCounters({ stats }: { stats: readonly Stat[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="mt-10 grid gap-3 sm:grid-cols-3"
      aria-label="Cross River at a glance"
    >
      {stats.map((stat) => (
        <CounterStat key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  );
}
