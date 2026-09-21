"use client";

import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { usePillarRotation } from "@/components/vision/use-pillar-rotation";
import { visionPillars } from "@/lib/vision";

export function PillarRoulette3d() {
  const reduced = usePrefersReducedMotion();
  const { active, setActive, setPaused } = usePillarRotation(
    visionPillars.length,
    reduced,
  );
  const current = visionPillars[active] ?? visionPillars[0];
  const step = 360 / visionPillars.length;

  if (reduced) {
    return (
      <p className="text-center text-xs tracking-[0.18em] text-brand-red uppercase">
        Reduced motion — all ten names stay listed below
      </p>
    );
  }

  return (
    <div
      className="mx-auto w-full max-w-[40rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <p
        className="mb-6 text-center font-serif text-2xl text-brand-red sm:text-3xl"
        aria-live="polite"
      >
        {current}
      </p>
      <div className="vision-roulette-stage relative mx-auto h-[16rem] sm:h-[18rem]">
        <div
          className="vision-roulette-wheel absolute inset-0"
          style={{
            transform: `rotateX(12deg) rotateY(${-active * step}deg)`,
          }}
        >
          {visionPillars.map((pillar, index) => {
            const selected = index === active;
            return (
              <button
                key={pillar}
                type="button"
                aria-pressed={selected}
                className={`vision-roulette-face absolute top-1/2 left-1/2 flex h-[5.5rem] w-[9.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center px-3 text-center text-xs leading-snug font-semibold tracking-[0.06em] uppercase sm:w-[10.5rem] ${
                  selected
                    ? "bg-brand-red text-brand-white"
                    : "bg-brand-white text-brand-blue"
                }`}
                style={{
                  transform: `translate(-50%, -50%) rotateY(${index * step}deg) translateZ(var(--vision-z))`,
                }}
                onClick={() => setActive(index)}
              >
                {pillar}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
