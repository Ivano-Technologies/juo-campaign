"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { montserrat } from "@/app/fonts";
import { useDocumentHidden } from "@/components/motion/use-document-hidden";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import {
  nextHeroStillIndex,
  shouldLoadHeroStill,
} from "@/lib/hero-images";
import { heroSlides } from "@/lib/home";

/** IVA-96 §5 — 6.5s dwell, including caption fade in/out. */
const INTERVAL_MS = 6500;
/** Keep in sync with `.hero-caption` opacity transition-duration in globals.css. */
const FADE_MS = 650;

function slideTitle(item: (typeof heroSlides)[number], compact: boolean): string {
  if (compact && "titleMobile" in item && item.titleMobile) {
    return item.titleMobile;
  }
  return item.title;
}

export function HomeHero() {
  const reduced = usePrefersReducedMotion();
  const tabHidden = useDocumentHidden();
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [captionOn, setCaptionOn] = useState(true);
  const [loadedStills, setLoadedStills] = useState<ReadonlySet<number>>(
    () => new Set([0]),
  );
  const paused = hoverPaused || focusPaused || tabHidden;

  const revealStill = useCallback((slideIndex: number) => {
    setLoadedStills((current) => {
      if (current.has(slideIndex)) {
        return current;
      }
      const next = new Set(current);
      next.add(slideIndex);
      return next;
    });
  }, []);

  const onStillLoad = useCallback(
    (slideIndex: number) => {
      const prefetch = nextHeroStillIndex(slideIndex, heroSlides.length);
      if (prefetch === null) {
        return;
      }
      revealStill(prefetch);
    },
    [revealStill],
  );

  const go = useCallback(
    (next: number) => {
      const total = heroSlides.length;
      const resolved = (next + total) % total;
      setCaptionOn(reduced);
      revealStill(resolved);
      setIndex(resolved);
    },
    [reduced, revealStill],
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
      const nextIndex = (index + 1) % heroSlides.length;
      revealStill(nextIndex);
      setIndex(nextIndex);
    }, INTERVAL_MS);

    return () => {
      window.clearTimeout(fadeOutId);
      window.clearTimeout(advanceId);
    };
  }, [index, paused, reduced, revealStill]);

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
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {index + 1} of {heroSlides.length}
      </p>
      {heroSlides.map((item, slideIndex) => {
        const isActive = slideIndex === index;
        const TitleTag = slideIndex === 0 ? "h1" : "p";
        const isHashtag = item.title.startsWith("#");
        const mobileTitle = slideTitle(item, true);
        const desktopTitle = slideTitle(item, false);
        return (
          <div
            key={item.src}
            data-hero-still={item.src}
            className={`hero-slide absolute inset-0 transition-opacity duration-700 ${
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            {/* IVA-97 — still clips photography; caption dock is a sibling so glyphs stay visible. */}
            <div className="hero-still">
              {shouldLoadHeroStill(slideIndex, index, loadedStills) ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={slideIndex === 0}
                  sizes="100vw"
                  className={`object-cover ${item.objectClass}`}
                  onLoad={() => onStillLoad(slideIndex)}
                />
              ) : null}
            </div>
            <div className="hero-scrim" aria-hidden="true" />
            <div
              className={`hero-caption hero-caption-dock ${montserrat.className} font-montserrat ${
                isActive && !captionOn && !reduced ? "is-off" : ""
              }`}
            >
              <p className="hero-track-kicker text-sm font-semibold text-brand-white uppercase md:text-2xl lg:text-[1.75rem] lg:leading-[1.2]">
                {item.kicker}
              </p>
              <TitleTag
                className={`mt-1.5 font-extrabold text-brand-white uppercase md:mt-2 ${
                  isHashtag
                    ? "hero-hashtag hero-track-hashtag leading-[1.05] md:text-[3.15rem] md:leading-[0.98] xl:text-[3.75rem]"
                    : "hero-headline hero-track-headline text-[1.65rem] leading-[1.05] md:text-[3.5rem] md:leading-[0.98] xl:text-[4.15rem]"
                }`}
              >
                <span className="whitespace-pre-line md:hidden">{mobileTitle}</span>
                <span className="hidden whitespace-pre-line md:inline">{desktopTitle}</span>
              </TitleTag>
              {item.lede !== "" ? (
                <p className="mt-3.5 hidden text-lg leading-snug font-medium text-brand-white md:block lg:text-xl">
                  {item.lede}
                </p>
              ) : null}
              {"signature" in item && item.signature ? (
                <p className="mt-3 hidden text-lg leading-snug font-medium tracking-[0.02em] text-brand-white italic md:block">
                  {item.signature}
                </p>
              ) : null}
              {"cta" in item && item.cta ? (
                <Link
                  href={item.cta.href}
                  className="mt-4 inline-flex min-h-11 items-center bg-brand-red px-4 py-2.5 text-[11px] font-bold tracking-[0.12em] text-brand-white uppercase transition-[background-color,transform] duration-200 ease-out hover:bg-brand-red/90 motion-safe:hover:-translate-y-0.5 md:px-[18px] md:text-xs"
                >
                  {item.cta.label}
                </Link>
              ) : null}
            </div>
          </div>
        );
      })}

      <button
        type="button"
        className="absolute top-1/2 left-2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(64,68,155,0.45)] text-2xl text-brand-white backdrop-blur-sm transition-[background-color] duration-200 ease-out hover:bg-[rgba(64,68,155,0.7)] md:left-4"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(64,68,155,0.45)] text-2xl text-brand-white backdrop-blur-sm transition-[background-color] duration-200 ease-out hover:bg-[rgba(64,68,155,0.7)] md:right-4"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
      >
        ›
      </button>
      <div
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5 md:bottom-5"
        aria-label="Slide pagination"
      >
        {heroSlides.map((item, slideIndex) => {
          const isCurrent = slideIndex === index;
          return (
            <button
              key={item.src}
              type="button"
              aria-label={`Slide ${slideIndex + 1} of ${heroSlides.length}`}
              aria-current={isCurrent ? "true" : undefined}
              className="flex h-11 w-11 items-center justify-center"
              onClick={() => go(slideIndex)}
            >
              <span
                className={`block rounded-full ${
                  isCurrent
                    ? "h-2 w-2 bg-brand-blue shadow-[0_0_0_2px_#fff] md:h-2.5 md:w-2.5"
                    : "h-2 w-2 bg-brand-white/40 md:h-2.5 md:w-2.5"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
