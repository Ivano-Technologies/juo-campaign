import Image from "next/image";
import { brand } from "@/lib/brand";

type BrandMarksVariant = "join" | "manifesto";

type BrandMarksProps = {
  variant: BrandMarksVariant;
};

/**
 * NDC logo is allowed only on Manifesto and Join (Kezie / IVA-45).
 * Pair it with the horizontal JO lock-up — never a circular badge.
 */
export function BrandMarks({ variant }: BrandMarksProps) {
  const ndcHeight = variant === "join" ? "h-[4.5rem] sm:h-20 lg:h-24" : "h-16 sm:h-20";
  const markHeight = variant === "join" ? "h-16 sm:h-20 lg:h-24" : "h-14 sm:h-16";

  return (
    <div
      className="inline-flex w-fit max-w-full flex-wrap items-center gap-5 rounded-2xl bg-brand-white px-5 py-4 sm:gap-6 sm:px-6 sm:py-5"
      aria-label="Nigeria Democratic Congress and John Upan Odey campaign marks"
    >
      <Image
        src={brand.marks.ndcLogo}
        alt="Nigeria Democratic Congress"
        width={567}
        height={340}
        priority
        className={`${ndcHeight} w-auto`}
      />
      <Image
        src={brand.marks.candidateMark2}
        alt="John Upan Odey for Governor, Cross River State"
        width={2172}
        height={724}
        priority
        className={`${markHeight} w-auto`}
      />
    </div>
  );
}
