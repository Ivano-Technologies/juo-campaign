"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/components/motion/use-motion";
import type { HeroCaptionSet } from "@/lib/home";

const CYCLE_MS = 4500;

type HeroCaptionsProps = {
  sets: readonly HeroCaptionSet[];
};

export function HeroCaptions({ sets }: HeroCaptionsProps) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced || paused || sets.length < 2) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % sets.length);
    }, CYCLE_MS);

    return () => window.clearInterval(id);
  }, [paused, reduced, sets.length]);

  useEffect(() => {
    const onVisibility = () => {
      setPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const slides = reduced ? sets.slice(0, 1) : sets;

  return (
    <div
      className="mt-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="grid" aria-live={reduced ? "off" : "polite"}>
        {slides.map((set, slideIndex) => {
          const active = reduced || slideIndex === index;
          const TitleTag = active ? "h1" : "p";

          return (
            <div
              key={set.kicker}
              className={`hero-caption-slide col-start-1 row-start-1 ${
                active ? "is-active" : ""
              }`}
              aria-hidden={active ? undefined : true}
            >
              <p className="text-xs tracking-[0.28em] text-brand-white">
                <span className="uppercase">{set.kicker}</span>
              </p>
              <TitleTag className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                {set.title}
              </TitleTag>
              <p className="mt-5 max-w-2xl text-lg text-brand-white/85 sm:text-xl">
                {set.lede}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
