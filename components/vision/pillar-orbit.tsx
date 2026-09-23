"use client";

import { Button } from "@/components/button";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { usePillarRotation } from "@/components/vision/use-pillar-rotation";
import { visionManifestoCta, visionPillars } from "@/lib/vision";

/** Tighter rounded-rect so the orbit hugs the write-up instead of a wide empty track. */
const FRAME_INSET_X = 13;
const FRAME_INSET_Y = 15;
const FRAME_CORNER = 8;

type FrameMetrics = {
  left: number;
  top: number;
  right: number;
  bottom: number;
  cr: number;
  innerW: number;
  innerH: number;
  quarter: number;
  halfTop: number;
  total: number;
};

type FrameSegment =
  | "top-right-half"
  | "corner-tr"
  | "right"
  | "corner-br"
  | "bottom"
  | "corner-bl"
  | "left"
  | "corner-tl"
  | "top-left-half";

function frameMetrics(): FrameMetrics {
  const left = FRAME_INSET_X;
  const top = FRAME_INSET_Y;
  const right = 100 - FRAME_INSET_X;
  const bottom = 100 - FRAME_INSET_Y;
  const cr = FRAME_CORNER;
  const innerW = right - left - 2 * cr;
  const innerH = bottom - top - 2 * cr;
  const quarter = (Math.PI / 2) * cr;
  const halfTop = innerW / 2;
  const total = innerW * 2 + innerH * 2 + quarter * 4;

  return { left, top, right, bottom, cr, innerW, innerH, quarter, halfTop, total };
}

function pointOnFrame(progress: number): { left: string; top: string } {
  const frame = frameMetrics();
  const segments: Array<{ kind: FrameSegment; len: number }> = [
    { kind: "top-right-half", len: frame.halfTop },
    { kind: "corner-tr", len: frame.quarter },
    { kind: "right", len: frame.innerH },
    { kind: "corner-br", len: frame.quarter },
    { kind: "bottom", len: frame.innerW },
    { kind: "corner-bl", len: frame.quarter },
    { kind: "left", len: frame.innerH },
    { kind: "corner-tl", len: frame.quarter },
    { kind: "top-left-half", len: frame.halfTop },
  ];

  let distance = (((progress % 1) + 1) % 1) * frame.total;
  for (const segment of segments) {
    if (distance > segment.len) {
      distance -= segment.len;
      continue;
    }
    const u = segment.len === 0 ? 0 : distance / segment.len;
    return formatPoint(pointOnSegment(segment.kind, u, frame));
  }

  return formatPoint({ x: 50, y: frame.top });
}

function formatPoint(point: { x: number; y: number }): { left: string; top: string } {
  return {
    left: `${point.x}%`,
    top: `${point.y}%`,
  };
}

function pointOnSegment(
  kind: FrameSegment,
  u: number,
  frame: FrameMetrics,
): { x: number; y: number } {
  const { left, top, right, bottom, cr } = frame;
  const angle = (Math.PI / 2) * u;

  switch (kind) {
    case "top-right-half":
      return { x: 50 + frame.halfTop * u, y: top };
    case "corner-tr":
      return {
        x: right - cr + cr * Math.sin(angle),
        y: top + cr - cr * Math.cos(angle),
      };
    case "right":
      return { x: right, y: top + cr + frame.innerH * u };
    case "corner-br":
      return {
        x: right - cr + cr * Math.cos(angle),
        y: bottom - cr + cr * Math.sin(angle),
      };
    case "bottom":
      return { x: right - cr - frame.innerW * u, y: bottom };
    case "corner-bl":
      return {
        x: left + cr - cr * Math.sin(angle),
        y: bottom - cr + cr * Math.cos(angle),
      };
    case "left":
      return { x: left, y: bottom - cr - frame.innerH * u };
    case "corner-tl":
      return {
        x: left + cr - cr * Math.cos(angle),
        y: top + cr - cr * Math.sin(angle),
      };
    case "top-left-half":
      return { x: left + cr + frame.halfTop * u, y: top };
  }
}

export function PillarOrbit() {
  const reduced = usePrefersReducedMotion();
  const { active, setActive, setPaused } = usePillarRotation(
    visionPillars.length,
    reduced,
  );
  const current = visionPillars[active] ?? visionPillars[0];
  const frame = frameMetrics();

  if (!current) {
    return null;
  }

  return (
    <div
      className="relative mx-auto aspect-[5/6] w-full max-w-5xl min-h-[34rem] sm:aspect-[4/3] sm:min-h-[38rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect
          x={frame.left}
          y={frame.top}
          width={frame.right - frame.left}
          height={frame.bottom - frame.top}
          rx={frame.cr}
          ry={frame.cr}
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.9"
          strokeWidth="0.65"
        />
      </svg>
      {visionPillars.map((pillar, index) => {
        const selected = index === active;
        const point = pointOnFrame((index - active) / visionPillars.length);
        return (
          <button
            key={pillar.slug}
            type="button"
            aria-pressed={selected}
            className={`absolute z-10 min-h-11 max-w-[9.5rem] -translate-x-1/2 -translate-y-1/2 px-3 py-2 text-center text-xs leading-snug font-semibold tracking-[0.08em] uppercase sm:max-w-[15rem] sm:px-4 sm:text-base ${
              selected
                ? "bg-brand-red text-brand-white shadow-[0_1px_8px_rgb(0_0_0_/_0.45)]"
                : "bg-transparent text-brand-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.9),_0_2px_10px_rgb(0_0_0_/_0.65)]"
            }`}
            style={{
              left: point.left,
              top: point.top,
              transition: reduced ? "none" : "left 700ms ease, top 700ms ease",
            }}
            onClick={() => setActive(index)}
          >
            {pillar.name}
          </button>
        );
      })}
      <div className="absolute inset-0 z-[5] flex items-center justify-center p-16 sm:p-24">
        <div
          className="flex w-full max-w-[20rem] flex-col items-center justify-center rounded-[2.25rem] bg-brand-blue/90 px-6 py-8 text-center shadow-[0_12px_48px_rgb(64_68_155_/_0.35)] ring-1 ring-brand-white/25 backdrop-blur-md sm:max-w-[32rem] sm:px-10 sm:py-12"
          aria-live="polite"
        >
          <p className="text-sm font-bold tracking-[0.28em] text-brand-red uppercase">
            {String(active + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-serif text-3xl leading-tight font-bold text-brand-white uppercase sm:text-5xl">
            {current.name}
          </h3>
          <p className="mt-4 max-w-md text-base leading-7 font-semibold text-balance text-brand-white sm:mt-5 sm:max-w-lg sm:text-xl sm:leading-8">
            {current.lead}
          </p>
          <Button
            href="/manifesto"
            variant="ghost"
            className="mt-7 max-w-full whitespace-normal px-6 text-center leading-snug"
          >
            {visionManifestoCta}
          </Button>
        </div>
      </div>
    </div>
  );
}
