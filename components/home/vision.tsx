"use client";

import Image from "next/image";
import { useState } from "react";
import { opportunityCards } from "@/lib/home";

export function HomeVision() {
  const [active, setActive] = useState(0);
  const card = opportunityCards[active] ?? opportunityCards[0];

  return (
    <section id="the-vision" className="bg-navy py-10 text-brand-white sm:py-14">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden border border-white/15 px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1fr_1.1fr]">
          <ul className="grid gap-5" role="tablist" aria-label="Ingredients for success">
            {opportunityCards.map((item, index) => {
              const isActive = index === active;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`flex w-full items-center gap-3 text-left text-sm font-semibold tracking-[0.16em] uppercase transition ${
                      isActive ? "text-brand-red" : "text-brand-white/80 hover:text-brand-white"
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

          <div className="relative mx-auto aspect-[16/9] w-full max-w-[34rem] overflow-hidden [clip-path:ellipse(92%_100%_at_50%_100%)]">
            {opportunityCards.map((item, index) => (
              <Image
                key={item.title}
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 34rem, 90vw"
                className={`object-cover transition-opacity duration-700 ${
                  index === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 -bottom-px h-24 bg-navy"
          style={{
            clipPath: "ellipse(80% 100% at 50% 100%)",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
