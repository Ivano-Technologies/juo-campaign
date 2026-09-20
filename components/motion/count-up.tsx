"use client";

import { useCountUp, useInViewOnce } from "@/components/motion/use-motion";

export type CountUpStat = {
  value: number;
  suffix?: string;
  label: string;
  grouped?: boolean;
};

type CountUpTone = "hero" | "onBlue";

function formatCount(value: number, grouped: boolean | undefined): string {
  if (!grouped) {
    return String(value);
  }
  return value.toLocaleString("en-NG");
}

function CounterStat({
  stat,
  active,
  tone,
}: {
  stat: CountUpStat;
  active: boolean;
  tone: CountUpTone;
}) {
  const value = useCountUp(stat.value, active);
  const shell =
    tone === "hero"
      ? "rounded-2xl border border-brand-white/15 bg-brand-blue/55 px-5 py-4 text-center backdrop-blur-sm"
      : "rounded-2xl border border-brand-white/15 bg-brand-blue/50 px-5 py-6";

  return (
    <div className={shell}>
      <p className="sr-only">
        {formatCount(stat.value, stat.grouped)}
        {stat.suffix} {stat.label}
      </p>
      <p
        aria-hidden="true"
        className={`font-serif tabular-nums text-brand-red ${
          tone === "hero" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {formatCount(value, stat.grouped)}
        {stat.suffix}
      </p>
      <p
        className={`mt-2 text-xs uppercase tracking-[0.2em] ${
          tone === "hero" ? "text-brand-white/80" : "text-brand-white/75"
        }`}
      >
        {stat.label}
      </p>
    </div>
  );
}

type CountUpStatsProps = {
  stats: readonly CountUpStat[];
  className?: string;
  tone?: CountUpTone;
  "aria-label"?: string;
};

export function CountUpStats({
  stats,
  className = "",
  tone = "hero",
  "aria-label": ariaLabel,
}: CountUpStatsProps) {
  const [rootRef, active] = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={rootRef}
      className={className}
      aria-label={ariaLabel}
    >
      {stats.map((stat) => (
        <CounterStat key={stat.label} stat={stat} active={active} tone={tone} />
      ))}
    </div>
  );
}
