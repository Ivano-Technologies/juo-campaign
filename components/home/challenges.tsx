"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { DiamondRule, ProhibitIcon } from "@/components/icons";
import { JoMarkCompact } from "@/components/socials";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { challenges, officialPortrait } from "@/lib/home";

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
    <section id="challenges" ref={sectionRef} className="scroll-mt-[4.75rem] bg-brand-white">
      <div className="grid min-h-[38rem] lg:min-h-[48rem] lg:grid-cols-2">
        <div className="flex flex-col justify-center border-b border-line bg-brand-white px-5 py-14 text-brand-blue sm:px-12 sm:py-16 lg:border-r lg:border-b-0 lg:px-16 lg:py-20">
          <h2 className="font-serif text-[2.5rem] leading-[0.95] font-extrabold tracking-tight text-brand-blue uppercase sm:text-6xl lg:text-7xl">
            Challenges{" "}
            <br />
            We Face
          </h2>
          <DiamondRule count={5} />
          <ul className="mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16">
            {challenges.map((item) => (
              <li
                key={item.id}
                className="flex max-w-[22rem] flex-col items-center text-center"
              >
                <ProhibitIcon />
                <p className="mt-5 text-lg leading-8 text-brand-blue sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="challenges-pane relative w-full self-stretch overflow-hidden bg-brand-white px-2 py-0 sm:overflow-visible sm:px-3 lg:px-4">
          <div className="challenges-lockup relative z-10 flex h-full flex-col justify-end pb-2 sm:pb-3 lg:pb-5">
            <p className="challenges-word font-serif font-black tracking-tight text-brand-blue uppercase">
              Let&apos;s
            </p>
            <p
              className="challenges-word challenges-word-change font-serif font-black tracking-tight text-brand-red uppercase"
              style={{ transform: `translate3d(0, ${offset}px, 0)` }}
            >
              Change
            </p>
            <p className="challenges-word challenges-word-that font-serif font-black tracking-tight text-brand-blue uppercase">
              That
            </p>
          </div>
          <div className="challenges-portrait pointer-events-none absolute inset-y-0 right-0 z-0">
            <Image
              src={officialPortrait.src}
              alt={officialPortrait.alt}
              fill
              sizes="(min-width: 1024px) 36vw, 70vw"
              className="object-contain object-right-bottom"
            />
            <JoMarkCompact className="absolute right-3 bottom-4 h-10 w-auto bg-brand-white/90 px-2 py-1 sm:right-5 sm:bottom-6 sm:h-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
