import type { Route } from "next";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "white" | "ghost";

/** Dark-surface pills: ghost default, solid white on hover/press. */
const ghostPill =
  "border-brand-white bg-transparent text-brand-white hover:bg-brand-white hover:text-navy active:bg-brand-white active:text-navy motion-safe:active:scale-[0.98]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-brand-white hover:bg-brand-red/90 border-transparent",
  secondary:
    "bg-brand-blue text-brand-white hover:bg-brand-blue/90 border-transparent",
  white: ghostPill,
  ghost: ghostPill,
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-4 py-2 text-sm",
} as const;

type ButtonProps = {
  href?: Route;
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
  const classes = `inline-flex items-center justify-center rounded-full border font-semibold tracking-wide transition-[color,background-color,border-color,transform] duration-200 ${sizes[size]} ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
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
