"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";
import { campaignHashtag, togetherCompare } from "@/lib/home";

export function HomeTogetherBanner() {
  const [position, setPosition] = useState(52);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const labelId = useId();

  const setFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }
    const rect = frame.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(4, Math.min(96, next)));
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) {
      return;
    }
    setFromClientX(event.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section className="relative isolate min-h-[28rem] overflow-hidden bg-navy text-brand-white">
      <div
        ref={frameRef}
        className="relative h-[min(70vh,640px)] min-h-[28rem] cursor-ew-resize select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <Image
          src={togetherCompare.after.src}
          alt={togetherCompare.after.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full w-screen min-w-[100vw]">
            <Image
              src={togetherCompare.before.src}
              alt={togetherCompare.before.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-brand-white"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-white text-navy shadow">
            ‹ ›
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-navy/55 to-transparent px-6 py-10 text-center">
          <h2
            id={labelId}
            className="font-serif text-3xl font-extrabold tracking-tight text-brand-white uppercase sm:text-5xl"
          >
            Together a new CRS is possible
          </h2>
          <p className="mt-3 text-sm tracking-[0.22em]">{campaignHashtag}</p>
        </div>
      </div>
      <p className="sr-only">
        Drag to compare campaign photographs. Slider sits at {Math.round(position)}{" "}
        percent.
      </p>
    </section>
  );
}
