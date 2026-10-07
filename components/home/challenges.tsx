"use client";

import Image from "next/image";
import { DiamondRule, ProhibitIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { challenges, homepagePoster } from "@/lib/home";

export function HomeChallenges() {
  return (
    <section id="challenges" className="scroll-mt-[4.75rem] bg-brand-white">
      <div className="grid min-h-[38rem] lg:min-h-[48rem] lg:grid-cols-2">
        <div className="flex flex-col justify-center border-b border-line bg-brand-white px-5 py-14 text-brand-blue sm:px-12 sm:py-16 lg:border-r lg:border-b-0 lg:px-16 lg:py-20">
          <Reveal>
            <h2 className="font-serif text-[2.5rem] leading-[0.95] font-extrabold tracking-tight text-brand-blue uppercase sm:text-6xl lg:text-7xl">
              Challenges{" "}
              <br />
              We Face
            </h2>
            <DiamondRule count={5} />
          </Reveal>
          <ul className="mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16">
            {challenges.map((item, index) => (
              <li key={item.id}>
                <Reveal
                  delayMs={80 + index * 90}
                  className="flex max-w-[22rem] flex-col items-center text-center"
                >
                  <ProhibitIcon />
                  <p className="mt-5 text-lg leading-8 text-brand-blue sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
                    {item.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div className="challenges-pane relative w-full self-stretch overflow-hidden bg-brand-white">
          <div className="challenges-portrait pointer-events-none absolute inset-0 z-0">
            <Image
              src={homepagePoster.src}
              alt={homepagePoster.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}