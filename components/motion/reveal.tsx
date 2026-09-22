"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/components/motion/use-in-view";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.22,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);
  const reduced = usePrefersReducedMotion();
  const shown = reduced || inView;

  return (
    <div
      ref={ref}
      className={`motion-reveal ${shown ? "is-in" : ""} ${className}`.trim()}
      style={
        {
          "--reveal-delay": reduced ? "0ms" : `${delayMs}ms`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
