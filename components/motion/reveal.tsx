"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInViewOnce } from "@/components/motion/use-motion";

type RevealTag = "div" | "section" | "li" | "p";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: RevealTag;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
}: RevealProps) {
  const [ref, inView] = useInViewOnce<HTMLElement>();
  const Tag = as;

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={`motion-reveal${inView ? " motion-reveal-in" : ""} ${className}`.trim()}
      style={{ "--motion-delay": `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

type RevealGroupTag = "div" | "ul" | "ol";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  as?: RevealGroupTag;
};

export function RevealGroup({
  children,
  className = "",
  as = "div",
}: RevealGroupProps) {
  const [ref, inView] = useInViewOnce<HTMLElement>();
  const Tag = as;

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={`motion-stagger${inView ? " is-inview" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

type RevealMediaProps = {
  children: ReactNode;
  className?: string;
};

export function RevealMedia({ children, className = "" }: RevealMediaProps) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`motion-meet-media${inView ? " is-inview" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
