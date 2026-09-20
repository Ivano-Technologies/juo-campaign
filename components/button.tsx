import type { Route } from "next";
import Link from "next/link";

type Variant = "primary" | "secondary" | "gold" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-red text-brand-white hover:bg-brand-red/90 border-transparent",
  secondary:
    "bg-brand-blue text-brand-white hover:bg-brand-blue/90 border-transparent",
  gold: "bg-brand-white text-brand-blue hover:bg-brand-white/90 border-transparent",
  ghost:
    "bg-transparent text-brand-white border-brand-white/40 hover:border-brand-white hover:bg-brand-white/10",
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
