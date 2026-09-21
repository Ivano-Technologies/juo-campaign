"use client";

import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { usePillarRotation } from "@/components/vision/use-pillar-rotation";
import { visionPillars } from "@/lib/vision";

export function PillarOrbit() {
  const reduced = usePrefersReducedMotion();
  const { active, setActive, setPaused } = usePillarRotation(
    visionPillars.length,
    reduced,
  );
  const current = visionPillars[active] ?? visionPillars[0];
  const step = 360 / visionPillars.length;

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[34rem] [container-type:size]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="absolute inset-[10%] rounded-full border border-brand-white/40" />
      {visionPillars.map((pillar, index) => {
        const angle = step * (index - active);
        const selected = index === active;
        return (
          <button
            key={pillar}
            type="button"
            aria-pressed={selected}
            className={`absolute top-1/2 left-1/2 max-w-[9.5rem] text-center text-[11px] leading-snug font-semibold tracking-[0.06em] uppercase sm:text-xs ${
              selected ? "text-brand-red" : "text-brand-white"
            }`}
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-36cqi) rotate(${-angle}deg)`,
              transition: reduced ? "none" : "transform 700ms ease",
            }}
            onClick={() => setActive(index)}
          >
            {pillar}
          </button>
        );
      })}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-16">
        <p
          className="max-w-[12rem] text-center font-serif text-2xl leading-tight text-brand-red sm:text-3xl"
          aria-live="polite"
        >
          {current}
        </p>
      </div>
    </div>
  );
}
