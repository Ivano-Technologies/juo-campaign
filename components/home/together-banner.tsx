"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { campaignHashtag, togetherCompare } from "@/lib/home";

export function HomeTogetherBanner() {
  const [position, setPosition] = useState(60);
  const [frameWidth, setFrameWidth] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const labelId = useId();

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    const syncWidth = () => {
      setFrameWidth(frame.clientWidth);
    };

    syncWidth();
    const observer = new ResizeObserver(syncWidth);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

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
    <section className="bg-brand-white py-12 sm:py-16">
      <div className="px-6 pb-8 text-center">
        <h2
          id={labelId}
          className="font-serif text-[1.65rem] font-extrabold tracking-tight text-navy uppercase sm:text-5xl"
        >
          Together a new CRS is possible
        </h2>
        <p className="mt-3 text-sm font-semibold tracking-[0.22em] text-brand-red">
          {campaignHashtag}
        </p>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div
          ref={frameRef}
          className="relative h-[min(70vh,640px)] min-h-[28rem] cursor-ew-resize overflow-hidden rounded-2xl select-none"
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
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <div
              className="absolute inset-y-0 left-0 h-full"
              style={{ width: frameWidth || "100%" }}
            >
              <Image
                src={togetherCompare.before.src}
                alt={togetherCompare.before.alt}
                fill
                sizes="100vw"
                className="object-cover object-center"
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

          <span className="pointer-events-none absolute top-1/2 left-5 z-20 -translate-y-1/2 rounded bg-brand-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-navy uppercase">
            Before
          </span>
          <span className="pointer-events-none absolute top-1/2 right-5 z-20 -translate-y-1/2 rounded bg-brand-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-navy uppercase">
            After
          </span>
        </div>
      </div>
      <p className="sr-only">
        Drag to compare the Destination Cross River monument today with a
        prosperous-future night scene. Slider sits at {Math.round(position)}{" "}
        percent.
      </p>
    </section>
  );
}
