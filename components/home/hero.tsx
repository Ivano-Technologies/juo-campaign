"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDocumentHidden } from "@/components/motion/use-document-hidden";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { heroSlides } from "@/lib/home";

/** Total slide dwell, including caption fade in/out. */
const INTERVAL_MS = 6000;
/** Keep in sync with `.hero-caption` transition-duration in globals.css. */
const FADE_MS = 650;

export function HomeHero() {
  const reduced = usePrefersReducedMotion();
  const tabHidden = useDocumentHidden();
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [captionOn, setCaptionOn] = useState(true);
  const paused = hoverPaused || focusPaused || tabHidden;

  const go = useCallback(
    (next: number) => {
      const total = heroSlides.length;
      setCaptionOn(reduced);
      setIndex((next + total) % total);
    },
    [reduced],
  );

  useEffect(() => {
    if (reduced) {
      return;
    }

    const fadeInId = window.setTimeout(() => {
      setCaptionOn(true);
    }, 40);

    return () => window.clearTimeout(fadeInId);
  }, [index, reduced]);

  useEffect(() => {
    if (reduced || paused) {
      return;
    }

    const fadeOutId = window.setTimeout(() => {
      setCaptionOn(false);
    }, INTERVAL_MS - FADE_MS);
    const advanceId = window.setTimeout(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, INTERVAL_MS);

    return () => {
      window.clearTimeout(fadeOutId);
      window.clearTimeout(advanceId);
    };
  }, [index, paused, reduced]);

  const slide = heroSlides[index] ?? heroSlides[0];
  const captionBox =
    slide.align === "left"
      ? "justify-start text-left"
      : "justify-end text-right";
  const captionY =
    slide.captionY === "center" ? "items-center" : "items-end";

  return (
    <section
      className="relative isolate h-[min(92vh,920px)] min-h-[32rem] overflow-hidden bg-brand-blue text-brand-white"
      onMouseEnter={() => {
        setHoverPaused(true);
        if (!reduced) {
          setCaptionOn(true);
        }
      }}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={() => {
        setFocusPaused(true);
        if (!reduced) {
          setCaptionOn(true);
        }
      }}
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
          className={`hero-caption w-full max-w-[min(58rem,calc(100vw-3rem))] ${
            !captionOn && !reduced ? "is-off" : ""
          } ${slide.align === "left" ? "lg:max-w-[38rem]" : ""}`}
        >
          <p
            className={`text-shimmer font-serif text-base font-extrabold tracking-[0.08em] uppercase sm:text-2xl lg:text-3xl ${slide.kickerClass}`}
          >
            {slide.kicker}
          </p>
          <h1 className="text-shimmer mt-2 font-serif text-[1.85rem] leading-[0.98] font-extrabold tracking-[-0.03em] whitespace-pre-line text-brand-white uppercase [animation-delay:200ms] sm:text-5xl sm:leading-[0.95] lg:text-[3.85rem] lg:whitespace-pre xl:text-[4.15rem]">
            {slide.title}
          </h1>
          {slide.lede !== "" ? (
            <p
              className={`mt-4 text-lg text-brand-white/90 ${
                slide.lede.startsWith("#")
                  ? "text-shimmer font-serif text-2xl font-extrabold tracking-[0.04em] uppercase [animation-delay:400ms] sm:text-3xl"
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
