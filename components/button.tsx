import type { Route } from "next";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "white" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-brand-white hover:bg-brand-red/90 border-transparent",
  secondary:
    "bg-brand-blue text-brand-white hover:bg-brand-blue/90 border-transparent",
  white:
    "bg-brand-white text-brand-blue hover:bg-brand-white/90 border-transparent",
  ghost:
    "bg-transparent text-brand-white border-brand-white/40 hover:border-brand-white hover:bg-brand-white/10",
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
  const classes = `inline-flex items-center justify-center rounded-full border font-semibold tracking-wide transition ${sizes[size]} ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`;

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
