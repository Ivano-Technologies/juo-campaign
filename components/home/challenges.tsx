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
      setOffset(Math.max(-48, Math.min(48, progress * 90)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <section ref={sectionRef} className="bg-brand-white">
      <div className="grid min-h-[38rem] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="bg-navy px-8 py-16 text-brand-white sm:px-12 lg:px-16 lg:py-20">
          <h2 className="font-serif text-4xl font-extrabold tracking-tight text-brand-white uppercase sm:text-5xl">
            Challenges
            <br />
            We Face
          </h2>
          <DiamondRule />
          <ul className="mt-12 grid gap-10 sm:grid-cols-2">
            {challenges.map((item) => (
              <li key={item.title} className="max-w-[16rem]">
                <ProhibitIcon />
                <p className="mt-4 text-sm leading-6 text-brand-white/85">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[36rem] overflow-hidden bg-brand-white lg:min-h-[42rem]">
          <p
            className="pointer-events-none absolute top-[8%] left-[4%] z-[1] font-serif text-[5.5rem] leading-[0.85] font-black tracking-tight text-navy uppercase select-none sm:text-[7.5rem]"
            aria-hidden="true"
          >
            Let&apos;s
          </p>
          <p
            className="pointer-events-none absolute top-[32%] left-[6%] z-[2] font-serif text-[5.2rem] leading-none font-black tracking-tight text-cyan uppercase select-none sm:text-[7rem]"
            style={{ transform: `translate3d(0, ${offset}px, 0)` }}
            aria-hidden="true"
          >
            Change
          </p>
          <Image
            src={challengesCutout.src}
            alt={challengesCutout.alt}
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="relative z-[3] object-contain object-[center_80%]"
          />
          <p
            className="pointer-events-none absolute right-[16%] bottom-[16%] z-[4] font-serif text-5xl font-black tracking-tight text-navy uppercase sm:right-[20%] sm:text-6xl"
            aria-hidden="true"
          >
            That
          </p>
        </div>
      </div>
    </section>
  );
}
