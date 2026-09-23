"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { brand } from "@/lib/brand";

type OdeyArchibongColumnsProps = {
  paragraphs: readonly string[];
  closeLead: string;
  closeLockup: string;
  hashtags: readonly string[];
};

/**
 * From lg up, both portraits stay 4:5 and the photo column narrows until
 * the stack is the same height as the write-up. Below lg the photos are
 * full width and the type returns to body size.
 */
export function OdeyArchibongColumns({
  paragraphs,
  closeLead,
  closeLockup,
  hashtags,
}: OdeyArchibongColumnsProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [photoWidth, setPhotoWidth] = useState<number | null>(null);

  useEffect(() => {
    const row = rowRef.current;
    const photos = photosRef.current;
    const text = textRef.current;
    if (!row || !photos || !text) {
      return;
    }

    const desktop = window.matchMedia("(min-width: 1024px)");
    let running = false;
    let lastWidth = -1;

    const measure = () => {
      if (running) {
        return;
      }
      running = true;
      try {
        if (!desktop.matches) {
          photos.style.width = "";
          lastWidth = -1;
          setPhotoWidth(null);
          return;
        }

        const rowWidth = row.clientWidth;
        const maxWidth = rowWidth * (5 / 12);
        let low = 180;
        let high = Math.max(low, Math.min(maxWidth, rowWidth - 280));

        for (let step = 0; step < 12; step += 1) {
          const mid = (low + high) / 2;
          photos.style.width = `${mid}px`;
          const textHeight = text.getBoundingClientRect().height;
          const stackHeight = photos.getBoundingClientRect().height;
          if (stackHeight > textHeight) {
            high = mid;
          } else {
            low = mid;
          }
        }

        const next = Math.round((low + high) / 2);
        photos.style.width = `${next}px`;
        if (Math.abs(next - lastWidth) < 2) {
          return;
        }
        lastWidth = next;
        setPhotoWidth((current) => (current === next ? current : next));
      } finally {
        running = false;
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    desktop.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", measure);
    };
  }, []);

  return (
    <div
      ref={rowRef}
      className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16"
    >
      <div
        ref={photosRef}
        className="grid w-full gap-6 lg:w-[34%] lg:max-w-[41.666%] lg:shrink-0"
        style={photoWidth != null ? { width: photoWidth } : undefined}
      >
        <figure className="relative aspect-[4/5] overflow-hidden border border-line bg-brand-blue">
          <Image
            src={brand.portraits.official.src}
            alt="John Upan Odey Jnr"
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover object-top"
          />
        </figure>
        <figure className="relative aspect-[4/5] overflow-hidden border border-line bg-brand-blue">
          <Image
            src={brand.portraits.stellaOfficial4x5.src}
            alt="Apostle Dr. Stella Charles Archibong"
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover object-center"
          />
        </figure>
      </div>

      <div ref={textRef} className="min-w-0 lg:flex-1">
        <div className="space-y-6 lg:space-y-8">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="font-sans text-[1.05rem] leading-7 text-brand-blue lg:text-[1.3125rem] lg:leading-[1.65]"
            >
              {paragraph}
            </p>
          ))}

          <div className="border-t border-line pt-10">
            <p className="font-serif text-2xl font-extrabold tracking-tight text-brand-blue uppercase">
              {closeLead}
            </p>
            <p className="mt-2 font-serif text-2xl font-extrabold tracking-tight text-brand-blue uppercase">
              {closeLockup}
            </p>
            <p className="mt-6 text-sm tracking-wide text-muted">
              {hashtags.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
