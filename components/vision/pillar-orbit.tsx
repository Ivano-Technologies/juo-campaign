"use client";

import { Button } from "@/components/button";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { usePillarRotation } from "@/components/vision/use-pillar-rotation";
import {
  visionManifestoCta,
  visionPillarSpineLine,
  visionPillars,
} from "@/lib/vision";

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
      className="relative mx-auto aspect-square w-full max-w-[42rem] [container-type:size]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="absolute inset-[8%] rounded-full border border-brand-white/50" />
      {visionPillars.map((pillar, index) => {
        const angle = step * (index - active);
        const selected = index === active;
        return (
          <button
            key={pillar}
            type="button"
            aria-pressed={selected}
            className={`absolute top-1/2 left-1/2 max-w-[10.5rem] rounded-md px-2.5 py-1.5 text-center text-xs leading-snug font-semibold tracking-[0.04em] uppercase shadow-[0_1px_8px_rgb(64_68_155_/_0.45)] backdrop-blur-sm sm:text-sm ${
              selected
                ? "bg-brand-red text-brand-white"
                : "bg-brand-blue/80 text-brand-white"
            }`}
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-38cqi) rotate(${-angle}deg)`,
              transition: reduced ? "none" : "transform 700ms ease",
            }}
            onClick={() => setActive(index)}
          >
            {pillar}
          </button>
        );
      })}
      <div className="absolute inset-0 flex items-center justify-center p-14 sm:p-20">
        <div
          className="w-full max-w-[17rem] rounded-2xl border border-brand-white/35 bg-brand-blue/80 px-4 py-5 text-center shadow-[0_8px_32px_rgb(64_68_155_/_0.35)] backdrop-blur-md sm:px-5 sm:py-6"
          aria-live="polite"
        >
          <p className="text-[11px] tracking-[0.2em] text-brand-red uppercase">
            {String(active + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-serif text-xl leading-tight text-brand-white sm:text-2xl">
            {current}
          </h3>
          <p className="mt-3 text-sm leading-6 text-brand-white">
            {visionPillarSpineLine}
          </p>
          <Button
            href="/manifesto"
            variant="white"
            size="sm"
            className="mt-4"
          >
            {visionManifestoCta}
          </Button>
        </div>
      </div>
    </div>
  );
}
