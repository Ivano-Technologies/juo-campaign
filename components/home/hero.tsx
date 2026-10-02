"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDocumentHidden } from "@/components/motion/use-document-hidden";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { montserrat } from "@/app/fonts";
import {
  heroSlides,
  type HeroCaptionAlign,
  type HeroCaptionY,
} from "@/lib/home";

function captionAlignClass(align: HeroCaptionAlign): string {
  if (align === "center") {
    return "justify-center text-center";
  }
  return align === "left"
    ? "justify-start text-left"
    : "justify-end text-right";
}

function captionYClass(captionY: HeroCaptionY): string {
  if (captionY === "top") {
    return "items-start pt-12 sm:pt-16";
  }
  if (captionY === "bottom") {
    return "items-end";
  }
  return "items-center";
}

function captionScrimClass(
  align: HeroCaptionAlign,
  captionY: HeroCaptionY,
): string {
  if (captionY === "bottom") {
    return "bg-gradient-to-t from-brand-blue/32 via-brand-blue/10 to-transparent";
  }
  if (align === "right") {
    return "bg-gradient-to-l from-brand-blue/35 via-transparent to-transparent";
  }
  if (align === "center") {
    return "bg-gradient-to-t from-brand-blue/28 via-transparent to-transparent";
  }
  return "bg-gradient-to-r from-brand-blue/25 via-transparent to-transparent";
}

/** Total slide dwell, including caption fade in/out. */
const INTERVAL_MS = 6000;
/** Keep in sync with `.hero-caption` opacity transition-duration in globals.css. */
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
      {heroSlides.map((item, slideIndex) => {
        const isActive = slideIndex === index;
        const TitleTag = slideIndex === 0 ? "h1" : "p";
        return (
          <div
            key={item.src}
            data-hero-still={item.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              className={`object-cover ${item.objectClass}`}
            />
            <div
              className={`pointer-events-none absolute inset-0 z-[1] ${captionScrimClass(item.align, item.captionY)}`}
            />
            <div
              className={`absolute inset-0 z-[2] flex h-full px-6 pb-24 sm:px-16 md:pb-16 lg:px-24 ${captionAlignClass(item.align)} ${captionYClass(item.captionY)}`}
            >
              <div
                className={`hero-caption ${montserrat.className} font-montserrat font-extrabold w-full max-w-[min(58rem,calc(100vw-3rem))] ${
                  isActive && !captionOn && !reduced ? "is-off" : ""
                } ${item.align === "left" || item.align === "center" ? "lg:max-w-[46rem]" : ""}`}
              >
                <p
                  className={`hero-caption-outline ${montserrat.className} font-montserrat text-base font-extrabold tracking-[0.08em] uppercase sm:text-2xl lg:text-3xl ${item.kickerClass}`}
                >
                  {item.kicker}
                </p>
                <TitleTag className={`hero-caption-outline ${montserrat.className} font-montserrat mt-2 text-[1.85rem] leading-[0.98] font-extrabold tracking-[-0.015em] whitespace-pre-line text-brand-white uppercase sm:text-5xl sm:leading-[0.95] lg:text-[3.85rem] lg:whitespace-pre xl:text-[4.15rem]`}>
                  {item.title}
                </TitleTag>
                {item.lede !== "" ? (
                  <p
                    className={`hero-caption-outline ${montserrat.className} font-montserrat mt-4 text-lg font-extrabold text-brand-white ${
                      item.lede.startsWith("#")
                        ? "text-2xl tracking-[0.04em] uppercase sm:text-3xl"
                        : ""
                    }`}
                  >
                    {item.lede}
                  </p>
                ) : null}
                {"signature" in item && item.signature ? (
                  <p className={`hero-caption-outline ${montserrat.className} font-montserrat mt-6 text-xl font-extrabold text-brand-white italic sm:text-2xl`}>
                    {item.signature}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}

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
    </section>
  );
}
