"use client";

import { useEffect, useRef, useState } from "react";
import { DiamondRule } from "@/components/icons";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { futureCyclerWords, futureHighlights } from "@/lib/home";

function FutureShiftButton({
  direction,
  onClick,
  className,
}: {
  direction: -1 | 1;
  onClick: () => void;
  className: string;
}) {
  return (
    <button
      type="button"
      className={`h-11 w-11 items-center justify-center rounded-full bg-brand-blue/40 text-xl backdrop-blur-sm ${className}`.trim()}
      aria-label={direction < 0 ? "Previous future card" : "Next future card"}
      onClick={onClick}
    >
      {direction < 0 ? "‹" : "›"}
    </button>
  );
}

function cardStep(scroller: HTMLElement): number {
  const card = scroller.querySelector("li");
  if (!(card instanceof HTMLElement)) {
    return Math.max(scroller.clientWidth, 1);
  }
  const gap = Number.parseFloat(window.getComputedStyle(scroller).columnGap) || 0;
  return card.getBoundingClientRect().width + gap;
}

function scrollFutureCards(
  scroller: HTMLElement | null,
  direction: -1 | 1,
  instant: boolean,
): void {
  if (!scroller) {
    return;
  }

  const step = cardStep(scroller);
  const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
  const atStart = scroller.scrollLeft <= 2;
  const atEnd = scroller.scrollLeft >= maxScroll - 2;

  let left = scroller.scrollLeft + direction * step;
  if (direction > 0 && atEnd) {
    left = 0;
  } else if (direction < 0 && atStart) {
    left = maxScroll;
  } else {
    left = Math.min(maxScroll, Math.max(0, left));
  }

  scroller.scrollTo({
    left,
    behavior: instant ? "auto" : "smooth",
  });
}

export function HomeFuture() {
  const reduced = usePrefersReducedMotion();
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reduced) {
      return;
    }
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % futureCyclerWords.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduced]);

  const shift = (direction: -1 | 1) => {
    scrollFutureCards(scrollerRef.current, direction, reduced);
  };

  const word = futureCyclerWords[wordIndex] ?? futureCyclerWords[0];

  return (
    <section className="relative isolate min-h-[36rem] overflow-hidden bg-brand-blue text-brand-white">
      <div className="relative mx-auto flex min-h-[36rem] max-w-[1280px] flex-col justify-center px-6 py-16 sm:px-10">
        <p className="text-xs font-semibold tracking-[0.42em] text-brand-white/90 uppercase">
          Cross River 2029
        </p>
        <h2 className="mt-3 font-serif text-4xl font-extrabold tracking-tight text-brand-white uppercase sm:text-5xl lg:text-6xl">
          The future we are building
        </h2>
        <DiamondRule />
        <p className="mt-5 text-lg text-brand-white/90">
          Imagine a Cross River where:
        </p>

        <div
          className="relative mt-8"
          aria-roledescription="carousel"
          aria-label="Imagine a Cross River highlights"
        >
          <div className="mb-4 flex justify-end gap-2 sm:hidden">
            <FutureShiftButton
              direction={-1}
              onClick={() => shift(-1)}
              className="flex"
            />
            <FutureShiftButton
              direction={1}
              onClick={() => shift(1)}
              className="flex"
            />
          </div>
          <div className="sm:px-14">
            <ul
              ref={scrollerRef}
              className={`flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
                reduced ? "" : "scroll-smooth"
              }`}
            >
              {futureHighlights.map((item) => (
                <li
                  key={item}
                  className="pointer-events-none flex min-h-[8.5rem] w-full shrink-0 snap-start items-center border border-white/20 bg-white/12 px-5 py-6 text-sm leading-6 text-brand-white backdrop-blur-md sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <FutureShiftButton
            direction={-1}
            onClick={() => shift(-1)}
            className="pointer-events-auto absolute top-1/2 left-0 z-20 hidden -translate-y-1/2 sm:flex"
          />
          <FutureShiftButton
            direction={1}
            onClick={() => shift(1)}
            className="pointer-events-auto absolute top-1/2 right-0 z-20 hidden -translate-y-1/2 sm:flex"
          />
        </div>
      </div>

      <p className="relative z-[1] pb-6 text-center font-serif text-2xl font-extrabold tracking-tight uppercase sm:text-3xl">
        A future built{" "}
        <span key={word} className="text-brand-red">
          {word}
        </span>
      </p>
    </section>
  );
}
