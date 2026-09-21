"use client";

import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { usePillarRotation } from "@/components/vision/use-pillar-rotation";
import { visionPillars } from "@/lib/vision";

export function PillarDial() {
  const reduced = usePrefersReducedMotion();
  const { active, setActive, setPaused } = usePillarRotation(
    visionPillars.length,
    reduced,
  );
  const current = visionPillars[active] ?? visionPillars[0];
  const step = 360 / visionPillars.length;

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[34rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="absolute inset-[18%] rounded-full border border-brand-white/25" />
      <div className="absolute inset-[30%] rounded-full border border-brand-red/70" />
      <div className="absolute inset-[42%] rounded-full border border-brand-white/40" />
      <div
        className="vision-radar-sweep absolute inset-[18%] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgb(239 43 53 / 0.35) 42deg, transparent 70deg)",
          animationPlayState: reduced ? "paused" : "running",
        }}
        aria-hidden="true"
      />

      {visionPillars.map((pillar, index) => {
        const angle = step * index - 90;
        const selected = index === active;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * 42;
        const y = 50 + Math.sin(rad) * 42;
        return (
          <button
            key={pillar}
            type="button"
            aria-pressed={selected}
            className={`absolute max-w-[8.5rem] -translate-x-1/2 -translate-y-1/2 text-center text-[11px] leading-snug font-semibold tracking-[0.05em] uppercase sm:text-xs ${
              selected ? "text-brand-red" : "text-brand-white"
            }`}
            style={{ left: `${x}%`, top: `${y}%` }}
            onClick={() => setActive(index)}
          >
            {pillar}
          </button>
        );
      })}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-24">
        <p
          className="max-w-[11rem] text-center font-serif text-2xl leading-tight text-brand-white sm:text-3xl"
          aria-live="polite"
        >
          {current}
        </p>
      </div>
    </div>
  );
}
