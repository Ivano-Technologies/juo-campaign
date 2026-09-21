"use client";

import { Button } from "@/components/button";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";
import { usePillarRotation } from "@/components/vision/use-pillar-rotation";
import {
  visionManifestoCta,
  visionPillarSpineLine,
  visionPillars,
} from "@/lib/vision";

/** Inset rounded-rect that follows the landscape photo frame. */
const FRAME_INSET_X = 8;
const FRAME_INSET_Y = 11;
const FRAME_CORNER = 10;

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

  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full min-h-[28rem] sm:aspect-[16/10] sm:min-h-[32rem]"
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
          strokeOpacity="0.42"
          strokeWidth="0.35"
        />
      </svg>
      {visionPillars.map((pillar, index) => {
        const selected = index === active;
        const point = pointOnFrame((index - active) / visionPillars.length);
        return (
          <button
            key={pillar}
            type="button"
            aria-pressed={selected}
            className={`absolute z-10 max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 rounded-md px-2 py-1.5 text-center text-[11px] leading-snug font-semibold tracking-[0.04em] uppercase shadow-[0_1px_8px_rgb(64_68_155_/_0.45)] backdrop-blur-sm sm:max-w-[11rem] sm:px-2.5 sm:text-sm ${
              selected
                ? "bg-brand-red text-brand-white"
                : "bg-brand-blue/80 text-brand-white"
            }`}
            style={{
              left: point.left,
              top: point.top,
              transition: reduced ? "none" : "left 700ms ease, top 700ms ease",
            }}
            onClick={() => setActive(index)}
          >
            {pillar}
          </button>
        );
      })}
      <div className="absolute inset-0 z-20 flex items-center justify-center p-10 sm:p-16">
        <div
          className="w-full max-w-[16rem] rounded-2xl border border-brand-white/35 bg-brand-blue/80 px-4 py-5 text-center shadow-[0_8px_32px_rgb(64_68_155_/_0.35)] backdrop-blur-md sm:max-w-[20rem] sm:px-5 sm:py-6"
          aria-live="polite"
        >
          <p className="text-[11px] tracking-[0.2em] text-brand-red uppercase">
            {String(active + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-serif text-xl leading-tight text-brand-white sm:text-2xl">
            {current}
          </h3>
          <p className="mt-3 text-sm leading-6 text-brand-white">
            {visionPillarSpineLine}
          </p>
          <Button
            href="/manifesto"
            variant="white"
            size="sm"
            className="mt-4"
          >
            {visionManifestoCta}
          </Button>
        </div>
      </div>
    </div>
  );
}
