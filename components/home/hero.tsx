"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { heroSlides } from "@/lib/home";

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
            className="object-cover object-[center_30%]"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent" />

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

      <div className="relative z-[2] flex h-full items-end justify-end px-8 pb-16 sm:px-16 lg:px-24">
        <div
          key={slide.src + slide.title}
          className={`max-w-3xl text-right ${reduced ? "" : "caption-enter"}`}
        >
          <p className="font-serif text-2xl font-extrabold tracking-[0.08em] text-cyan uppercase sm:text-3xl lg:text-4xl">
            {slide.kicker}
          </p>
          <h1 className="mt-2 font-serif text-4xl leading-[0.95] font-extrabold tracking-tight text-brand-white uppercase sm:text-5xl lg:text-[4.4rem]">
            {slide.title}
          </h1>
          {slide.lede !== "" ? (
            <p className="mt-4 text-lg text-brand-white/90">{slide.lede}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
