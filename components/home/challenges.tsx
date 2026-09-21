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
      setOffset(Math.max(-28, Math.min(28, progress * 56)));
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

        <div className="grid items-end gap-2 overflow-hidden bg-brand-white px-4 py-10 sm:grid-cols-[minmax(0,1fr)_16.5rem] sm:items-center sm:gap-3 sm:px-6 lg:min-h-[46rem] lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-10">
          <div className="relative mx-auto h-[22rem] w-full max-w-md sm:mx-0 sm:h-[28rem] lg:h-[38rem] lg:max-w-none">
            <Image
              src={challengesCutout.src}
              alt={challengesCutout.alt}
              fill
              sizes="(min-width: 1024px) 28vw, 90vw"
              className="object-contain object-bottom"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center pb-4 sm:pb-0">
            <p className="font-serif text-5xl leading-[0.82] font-black tracking-tight text-navy uppercase sm:text-6xl lg:text-[3.9rem]">
              Let&apos;s
            </p>
            <p
              className="challenges-word-change font-serif text-5xl leading-[0.82] font-black tracking-tight text-change-blue uppercase sm:text-6xl lg:text-[3.9rem]"
              style={{ transform: `translate3d(0, ${offset}px, 0)` }}
            >
              Change
            </p>
            <p className="challenges-word-that font-serif text-5xl leading-[0.82] font-black tracking-tight text-that-navy uppercase sm:text-6xl lg:text-[3.9rem]">
              That
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
