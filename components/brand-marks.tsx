import Image from "next/image";
import { brand } from "@/lib/brand";

type BrandMarksVariant = "join" | "manifesto";

type BrandMarksProps = {
  variant: BrandMarksVariant;
};

/**
 * NDC logo is allowed only on Manifesto and Join.
 * Pair it horizontally with the JO lock-up — never stacked NDC-up / JO-down.
 */
export function BrandMarks({ variant }: BrandMarksProps) {
  const ndcHeight = variant === "join" ? "h-14 sm:h-16 lg:h-[4.5rem]" : "h-12 sm:h-14 lg:h-16";
  const markHeight = variant === "join" ? "h-12 sm:h-14 lg:h-16" : "h-10 sm:h-12 lg:h-14";

  return (
    <div
      className="inline-flex w-fit max-w-full flex-nowrap items-center gap-3 overflow-x-auto rounded-2xl bg-brand-white px-4 py-3 sm:gap-5 sm:px-6 sm:py-4"
      aria-label="Nigeria Democratic Congress and John Upan Odey campaign marks"
    >
      <Image
        src={brand.marks.ndcLogo}
        alt="Nigeria Democratic Congress"
        width={567}
        height={340}
        priority
        className={`${ndcHeight} w-auto shrink-0`}
      />
      <span
        aria-hidden="true"
        className="h-10 w-px shrink-0 bg-brand-blue/20 sm:h-12"
      />
      <Image
        src={brand.marks.candidateMark2}
        alt="John Upan Odey for Governor, Cross River State"
        width={2172}
        height={724}
        priority
        className={`${markHeight} w-auto shrink-0`}
      />
    </div>
  );
}
