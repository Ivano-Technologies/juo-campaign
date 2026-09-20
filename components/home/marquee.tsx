"use client";

import { usePrefersReducedMotionSafe } from "@/components/motion/use-motion";

const phrase = "The future demands a different approach";
const repeats = Array.from({ length: 6 }, (_, index) => `${phrase}-${index}`);

export function HomeMarquee() {
  const reduced = usePrefersReducedMotionSafe();

  return (
    <section
      className="home-marquee-band bg-brand-blue text-brand-white"
      aria-label={phrase}
    >
      {reduced ? (
        <p className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em]">
          {phrase}
        </p>
      ) : (
        <div className="home-marquee-track motion-reduce:hidden" aria-hidden="true">
          <div className="home-marquee-group">
            {repeats.map((key) => (
              <span key={`a-${key}`}>{phrase}</span>
            ))}
          </div>
          <div className="home-marquee-group">
            {repeats.map((key) => (
              <span key={`b-${key}`}>{phrase}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
