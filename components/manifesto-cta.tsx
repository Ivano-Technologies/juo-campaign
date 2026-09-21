import { Button, type ButtonVariant } from "@/components/button";
import { visionManifestoCta } from "@/lib/vision";

type ManifestoCtaProps = {
  variant?: ButtonVariant;
  size?: "sm" | "md";
  className?: string;
};

export function ManifestoCta({
  variant = "secondary",
  size = "sm",
  className = "",
}: ManifestoCtaProps) {
  return (
    <Button href="/manifesto" variant={variant} size={size} className={className}>
      {visionManifestoCta}
    </Button>
  );
}
