import type { Route } from "next";
import Link from "next/link";

type Variant = "primary" | "secondary" | "gold" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-clay text-paper hover:bg-[#a84c1f] border-transparent",
  secondary:
    "bg-forest text-paper hover:bg-forest-deep border-transparent",
  gold: "bg-gold text-forest-deep hover:bg-gold-soft border-transparent",
  ghost:
    "bg-transparent text-paper border-paper/40 hover:border-paper hover:bg-paper/10",
};

type ButtonProps = {
  href?: Route;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
