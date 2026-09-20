"use client";

import { CountUpStats } from "@/components/motion/count-up";
import type { heroStats } from "@/lib/home";

type Stat = (typeof heroStats)[number];

export function HeroCounters({ stats }: { stats: readonly Stat[] }) {
  return (
    <CountUpStats
      stats={stats}
      className="mt-10 grid gap-3 sm:grid-cols-3"
      aria-label="Cross River at a glance"
    />
  );
}
