"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDocumentHidden } from "@/components/motion/use-document-hidden";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { heroSlides } from "@/lib/home";

/** Total slide dwell, including caption fade in/out. */
const INTERVAL_MS = 6000;
/** Keep in sync with `.hero-caption` animation-duration in globals.css. */
const FADE_MS = 550;

type CaptionPhase = "in" | "hold" | "out";

function phaseAt(elapsedMs: number): CaptionPhase {
  if (elapsedMs >= INTERVAL_MS - FADE_MS) {
    return "out";
  }
  if (elapsedMs >= FADE_MS) {
    return "hold";
  }
  return "in";
}

export function HomeHero() {
  const reduced = usePrefersReducedMotion();
  const tabHidden = useDocumentHidden();
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [phase, setPhase] = useState<CaptionPhase>(reduced ? "hold" : "in");
  const elapsedRef = useRef(0);
  const paused = hoverPaused || focusPaused || tabHidden;

  const go = useCallback(
    (next: number) => {
      const total = heroSlides.length;
      elapsedRef.current = 0;
      setPhase(reduced ? "hold" : "in");
      setIndex((next + total) % total);
    },
    [reduced],
  );

  useEffect(() => {
    if (reduced || paused) {
      return;
    }

    let frame = 0;
    const startedAt = performance.now();
    const base = elapsedRef.current;

    const tick = (now: number) => {
      const elapsed = base + (now - startedAt);
      if (elapsed >= INTERVAL_MS) {
        elapsedRef.current = 0;
        setPhase("in");
        setIndex((current) => (current + 1) % heroSlides.length);
        return;
      }
      elapsedRef.current = elapsed;
      const nextPhase = phaseAt(elapsed);
      setPhase((current) => (current === nextPhase ? current : nextPhase));
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [index, paused, reduced]);

  const slide = heroSlides[index] ?? heroSlides[0];
  const captionBox =
    slide.align === "left"
      ? "justify-start text-left"
      : "justify-end text-right";
  const captionY =
    slide.captionY === "center" ? "items-center" : "items-end";
  const frozen = paused && !reduced;

  return (
    <section
      className="relative isolate h-[min(92vh,920px)] min-h-[32rem] overflow-hidden bg-brand-blue text-brand-white"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={() => setFocusPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocusPaused(false);
        }
      }}
      aria-roledescription="carousel"
      aria-label="Campaign photographs"
    >
      {heroSlides.map((item, slideIndex) => (
        <div
          key={item.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={slideIndex !== index}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={slideIndex === 0}
            sizes="100vw"
            className={`object-cover ${item.objectClass}`}
          />
        </div>
      ))}

      <div
        className={`pointer-events-none absolute inset-0 z-[1] ${
          slide.align === "right"
            ? "bg-gradient-to-l from-brand-blue/35 via-transparent to-transparent"
            : "bg-gradient-to-r from-brand-blue/25 via-transparent to-transparent"
        }`}
      />

      <button
        type="button"
        className="absolute left-3 bottom-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/40 text-2xl text-brand-white backdrop-blur-sm transition-[background-color,transform,box-shadow] duration-200 ease-out hover:bg-brand-blue/70 motion-safe:hover:-translate-y-0.5"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="absolute right-5 bottom-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/40 text-2xl text-brand-white backdrop-blur-sm transition-[background-color,transform,box-shadow] duration-200 ease-out hover:bg-brand-blue/70 motion-safe:hover:-translate-y-0.5"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
      >
        ›
      </button>

      <div
        className={`relative z-[2] flex h-full px-6 pb-24 sm:px-16 md:pb-16 lg:px-24 ${captionBox} ${captionY}`}
      >
        <div
          key={slide.src}
          data-state={reduced ? "hold" : phase}
          className={`hero-caption w-full max-w-[min(58rem,calc(100vw-3rem))] ${
            slide.align === "left" ? "lg:max-w-[38rem]" : ""
          }`}
          style={{ animationPlayState: frozen ? "paused" : "running" }}
        >
          <p
            className={`font-serif text-base font-extrabold tracking-[0.08em] uppercase sm:text-2xl lg:text-3xl ${slide.kickerClass}`}
          >
            {slide.kicker}
          </p>
          <h1 className="mt-2 font-serif text-[1.85rem] leading-[0.98] font-extrabold tracking-[-0.03em] whitespace-pre-line text-brand-white uppercase sm:text-5xl sm:leading-[0.95] lg:text-[3.85rem] lg:whitespace-pre xl:text-[4.15rem]">
            {slide.title}
          </h1>
          {slide.lede !== "" ? (
            <p
              className={`mt-4 text-lg text-brand-white/90 ${
                slide.lede.startsWith("#")
                  ? "font-serif text-2xl font-extrabold tracking-[0.04em] uppercase sm:text-3xl"
                  : ""
              }`}
            >
              {slide.lede}
            </p>
          ) : null}
          {"signature" in slide && slide.signature ? (
            <p className="mt-6 font-serif text-xl font-semibold text-brand-white italic sm:text-2xl">
              {slide.signature}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
