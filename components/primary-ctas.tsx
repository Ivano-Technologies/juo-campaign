import { Button, type ButtonVariant } from "@/components/button";
import { primaryCtas, type PrimaryCtaHref } from "@/lib/site";

const ctaVariants: Record<PrimaryCtaHref, ButtonVariant> = {
  "/join": "primary",
  "/donate": "white",
  "/manifesto": "ghost",
  "/contact": "ghost",
};

type PrimaryCtaButtonsProps = {
  compact?: boolean;
  onNavigate?: () => void;
};

export function PrimaryCtaButtons({
  compact = false,
  onNavigate,
}: PrimaryCtaButtonsProps) {
  return (
    <>
      {primaryCtas.map((cta) => (
        <Button
          key={cta.href}
          href={cta.href}
          variant={ctaVariants[cta.href]}
          size={compact ? "sm" : "md"}
          onClick={onNavigate}
        >
          {cta.label}
        </Button>
      ))}
    </>
  );
}

type PrimaryCtasProps = PrimaryCtaButtonsProps & {
  className?: string;
};

export function PrimaryCtas({
  className = "",
  compact = false,
  onNavigate,
}: PrimaryCtasProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
      <PrimaryCtaButtons compact={compact} onNavigate={onNavigate} />
    </div>
  );
}
