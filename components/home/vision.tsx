"use client";

import Image from "next/image";
import { useState } from "react";
import { opportunityCards } from "@/lib/home";

export function HomeVision() {
  const [active, setActive] = useState(0);
  const card = opportunityCards[active] ?? opportunityCards[0];

  return (
    <section
      id="the-vision"
      className="scroll-mt-[4.75rem] bg-navy px-4 py-12 text-brand-white sm:px-8 sm:py-16"
    >
      <div className="relative mx-auto max-w-[1280px] overflow-hidden border border-white/15 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1fr_1.25fr]">
          <ul
            className="grid gap-6"
            role="tablist"
            aria-label="Ingredients for success"
          >
            {opportunityCards.map((item, index) => {
              const isActive = index === active;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`flex w-full items-center gap-3 text-left text-sm font-semibold tracking-[0.16em] uppercase transition ${
                      isActive
                        ? "text-brand-red"
                        : "text-brand-white/80 hover:text-brand-white"
                    }`}
                    onClick={() => setActive(index)}
                  >
                    <span>{item.title}</span>
                    {isActive ? <span aria-hidden="true">▶</span> : null}
                  </button>
                </li>
              );
            })}
          </ul>

          <div>
            <div className="mb-6 h-px w-24 bg-brand-white/70" />
            <h2 className="font-serif text-3xl font-extrabold tracking-tight uppercase">
              {card.title}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/80">
              {card.body}
            </p>
          </div>

          <div className="relative mx-auto aspect-[2/1] w-full min-h-[14rem] overflow-hidden [clip-path:ellipse(58%_100%_at_50%_100%)] lg:min-h-[18rem]">
            {opportunityCards.map((item, index) => (
              <Image
                key={item.title}
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 36rem, 90vw"
                className={`object-cover transition-opacity duration-700 ${
                  index === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
