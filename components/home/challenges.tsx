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
      setOffset(Math.max(-10, Math.min(10, progress * 20)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <section ref={sectionRef} className="bg-brand-white">
      <div className="grid min-h-[38rem] lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-navy px-8 py-16 text-brand-white sm:px-12 lg:px-16 lg:py-20">
          <h2 className="font-serif text-6xl font-extrabold tracking-tight text-brand-white uppercase sm:text-7xl">
            Challenges
            <br />
            We Face
          </h2>
          <DiamondRule count={5} />
          <ul className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-12 sm:mt-14 sm:gap-x-12 sm:gap-y-16">
            {challenges.map((item) => (
              <li
                key={item.id}
                className="flex max-w-[22rem] flex-col items-center text-center"
              >
                <ProhibitIcon />
                <p className="mt-5 text-lg leading-8 text-brand-white sm:text-xl sm:leading-9 lg:text-[1.375rem] lg:leading-9">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-end gap-6 overflow-visible bg-brand-white px-4 py-10 sm:flex-row sm:items-end sm:gap-8 sm:px-8 lg:min-h-[46rem] lg:px-12">
          <div className="relative mx-auto h-[22rem] w-full max-w-md shrink-0 sm:mx-0 sm:h-[32rem] sm:w-[min(100%,26rem)] lg:h-[40rem] lg:w-[30rem]">
            <Image
              src={challengesCutout.src}
              alt={challengesCutout.alt}
              fill
              sizes="(min-width: 1024px) 28vw, 90vw"
              className="object-contain object-bottom"
            />
          </div>
          <div className="flex shrink-0 flex-col justify-end pb-2 sm:min-w-[16.5rem] sm:pb-16 lg:min-w-[20rem] lg:pb-24">
            <p className="font-serif text-5xl leading-none font-black tracking-tight text-navy uppercase sm:text-6xl lg:text-[3.5rem]">
              Let&apos;s
            </p>
            <p
              className="challenges-word-change mt-3 font-serif text-5xl leading-none font-black tracking-tight text-change-blue uppercase sm:mt-4 sm:text-6xl lg:text-[3.5rem]"
              style={{ transform: `translate3d(0, ${offset}px, 0)` }}
            >
              Change
            </p>
            <p className="challenges-word-that mt-3 font-serif text-5xl leading-none font-black tracking-tight text-that-navy uppercase sm:mt-4 sm:text-6xl lg:text-[3.5rem]">
              That
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
