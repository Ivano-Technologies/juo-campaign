"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavActive } from "@/lib/site";

export type ButtonVariant = "primary" | "secondary" | "white" | "ghost";

/** Dark-surface pills: ghost default, solid white on hover/press/selected. */
export const ghostPillIdle =
  "border-brand-white bg-transparent text-brand-white hover:bg-brand-white hover:text-brand-blue active:bg-brand-white active:text-brand-blue motion-safe:active:scale-[0.98]";
export const ghostPillOn = "border-brand-white bg-brand-white text-brand-blue";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-brand-white hover:bg-brand-red/90 border-transparent",
  secondary:
    "bg-brand-blue text-brand-white hover:bg-brand-blue/90 border-transparent",
  white: ghostPillIdle,
  ghost: ghostPillIdle,
};

const sizes = {
  md: "min-h-11 px-5 py-2.5 text-sm",
  sm: "min-h-11 px-4 py-2 text-sm",
} as const;

type ButtonHref = Route | `${string}#${string}`;

type ButtonProps = {
  href?: ButtonHref;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const pathname = usePathname();
  const selected = Boolean(href && isNavActive(pathname, href));
  const usesGhostPill = variant === "ghost" || variant === "white";
  const tone = usesGhostPill && selected ? ghostPillOn : variants[variant];
  const classes = `inline-flex items-center justify-center rounded-full border text-center font-semibold tracking-wide whitespace-normal transition-[color,background-color,border-color,transform,box-shadow] duration-200 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_10px_22px_-12px_color-mix(in_srgb,var(--brand-red)_55%,transparent)] ${sizes[size]} ${tone} ${usesGhostPill ? "ghost-pill" : ""} disabled:cursor-not-allowed disabled:opacity-60 ${className}`;

  if (href) {
    if (href.includes("#")) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href as Route}
        className={classes}
        aria-current={selected ? "page" : undefined}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
