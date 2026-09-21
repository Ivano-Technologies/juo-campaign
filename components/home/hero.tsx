"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { heroSlides, voteBadge } from "@/lib/home";

const INTERVAL_MS = 6000;

export function HomeHero() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    const total = heroSlides.length;
    setIndex((next + total) % total);
  }, []);

  useEffect(() => {
    if (reduced || paused) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduced]);

  const slide = heroSlides[index] ?? heroSlides[0];
  const captionBox =
    slide.align === "left"
      ? "justify-start text-left"
      : "justify-end text-right";
  const captionY =
    slide.captionY === "center" ? "items-center" : "items-end pb-16 sm:pb-20";

  return (
    <section
      className="relative isolate h-[min(92vh,920px)] min-h-[32rem] overflow-hidden bg-navy text-brand-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
          {"overlay" in item && item.overlay ? (
            <div className={item.overlay.wrapClass}>
              <Image
                src={item.overlay.src}
                alt={item.overlay.alt}
                fill
                sizes="(min-width: 640px) 40vw, 70vw"
                className="object-contain object-bottom"
              />
            </div>
          ) : null}
        </div>
      ))}

      <div
        className={`pointer-events-none absolute inset-0 z-[1] ${
          slide.align === "right"
            ? "bg-gradient-to-l from-navy/35 via-transparent to-transparent"
            : "bg-gradient-to-r from-navy/25 via-transparent to-transparent"
        }`}
      />

      <button
        type="button"
        className="absolute top-1/2 left-4 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-2xl text-white backdrop-blur-sm transition hover:bg-black/45"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-2xl text-white backdrop-blur-sm transition hover:bg-black/45"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
      >
        ›
      </button>

      <div
        className={`relative z-[2] flex h-full px-8 sm:px-16 lg:px-24 ${captionBox} ${captionY}`}
      >
        <div
          key={slide.src + slide.title}
          className={`w-max max-w-[min(58rem,calc(100vw-3.5rem))] ${reduced ? "" : "caption-enter"} ${
            slide.align === "left" ? "lg:max-w-[38rem]" : ""
          }`}
        >
          <p
            className={`font-serif text-xl font-extrabold tracking-[0.08em] uppercase sm:text-2xl lg:text-3xl ${slide.kickerClass}`}
          >
            {slide.kicker}
          </p>
          <h1 className="mt-2 font-serif text-4xl leading-[0.95] font-extrabold tracking-[-0.03em] whitespace-pre-line text-brand-white uppercase sm:text-5xl lg:text-[3.85rem] lg:whitespace-pre xl:text-[4.15rem]">
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
          {"vote" in slide && slide.vote ? (
            <div className="mt-6 flex items-center gap-3">
              <Image
                src={voteBadge}
                alt=""
                width={88}
                height={88}
                className="vote-spin h-16 w-16 sm:h-20 sm:w-20"
              />
              <p className="font-serif text-xl font-semibold text-brand-white italic sm:text-2xl">
                {slide.signature}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
