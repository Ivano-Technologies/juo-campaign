"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { DiamondRule, ProhibitIcon } from "@/components/icons";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { challenges, challengesCutout } from "@/lib/home";

export function HomeChallenges() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reduced) {
      return;
    }

    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const progress = (view / 2 - (rect.top + rect.height / 2)) / view;
      setOffset(Math.max(-36, Math.min(36, progress * 70)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <section ref={sectionRef} className="bg-brand-white">
      <div className="grid min-h-[38rem] lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-navy px-8 py-16 text-brand-white sm:px-12 lg:px-16 lg:py-20">
          <h2 className="font-serif text-4xl font-extrabold tracking-tight text-brand-white uppercase sm:text-5xl">
            Challenges
            <br />
            We Face
          </h2>
          <DiamondRule />
          <ul className="mt-14 grid max-w-md grid-cols-2 gap-x-8 gap-y-12">
            {challenges.map((item) => (
              <li
                key={item.id}
                className="flex max-w-[12.5rem] flex-col items-center text-center"
              >
                <ProhibitIcon />
                <p className="mt-3 text-sm leading-6 text-brand-white/90">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[36rem] overflow-hidden bg-brand-white lg:min-h-[46rem]">
          <p
            className="pointer-events-none absolute top-[22%] left-[2%] z-[1] font-serif text-[4.6rem] leading-[0.85] font-black tracking-tight text-navy uppercase select-none sm:left-[4%] sm:text-[7rem] lg:text-[7.5rem]"
            aria-hidden="true"
          >
            Let&apos;s
          </p>
          <Image
            src={challengesCutout.src}
            alt={challengesCutout.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="relative z-[2] object-contain object-[center_82%]"
          />
          <p
            className="challenges-word-change pointer-events-none absolute top-[44%] left-[4%] z-[3] font-serif text-[4.4rem] leading-none font-black tracking-tight text-change-blue uppercase select-none sm:left-[7%] sm:text-[6.6rem] lg:text-[7.2rem]"
            style={{ transform: `translate3d(0, ${offset}px, 0)` }}
            aria-hidden="true"
          >
            Change
          </p>
          <p
            className="challenges-word-that pointer-events-none absolute right-[8%] bottom-[12%] z-[3] font-serif text-5xl font-black tracking-tight text-that-navy uppercase select-none sm:right-[12%] sm:bottom-[14%] sm:text-6xl lg:text-7xl"
            aria-hidden="true"
          >
            That
          </p>
        </div>
      </div>
    </section>
  );
}
