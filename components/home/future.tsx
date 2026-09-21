"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DiamondRule } from "@/components/icons";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import {
  futureBackdrop,
  futureCyclerWords,
  futureHighlights,
} from "@/lib/home";

export function HomeFuture() {
  const reduced = usePrefersReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [start, setStart] = useState(0);

  useEffect(() => {
    if (reduced) {
      return;
    }
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % futureCyclerWords.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduced]);

  const visible = [
    ...futureHighlights.slice(start),
    ...futureHighlights.slice(0, start),
  ].slice(0, 4);

  const shift = (direction: number) => {
    setStart((current) => {
      const total = futureHighlights.length;
      return (current + direction + total) % total;
    });
  };

  const word = futureCyclerWords[wordIndex] ?? futureCyclerWords[0];

  return (
    <section className="relative isolate min-h-[36rem] overflow-hidden text-brand-white">
      <Image
        src={futureBackdrop}
        alt="Winding highland road through Cross River hills"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/35" />

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

        <div className="relative mt-8">
          <button
            type="button"
            className="absolute top-1/2 -left-2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-xl backdrop-blur-sm sm:-left-4"
            aria-label="Previous future card"
            onClick={() => shift(-1)}
          >
            ‹
          </button>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((item) => (
              <li
                key={item}
                className="flex min-h-[8.5rem] items-center border border-white/20 bg-white/12 px-5 py-6 text-sm leading-6 text-brand-white backdrop-blur-md"
              >
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="absolute top-1/2 -right-2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-xl backdrop-blur-sm sm:-right-4"
            aria-label="Next future card"
            onClick={() => shift(1)}
          >
            ›
          </button>
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
