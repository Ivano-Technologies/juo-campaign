import Image from "next/image";
import { brand } from "@/lib/brand";

type BrandMarksVariant = "header" | "hero" | "footer";

type BrandMarksProps = {
  variant: BrandMarksVariant;
};

const plates: Record<BrandMarksVariant, string> = {
  header: "gap-1.5 rounded-md bg-brand-white px-1.5 py-0.5 sm:gap-2 sm:px-2 sm:py-1",
  hero: "gap-3 rounded-lg bg-brand-white px-3 py-2",
  footer: "gap-3 rounded-md bg-brand-white px-3 py-2",
};

export function BrandMarks({ variant }: BrandMarksProps) {
  const ndcHeight = variant === "hero" ? "h-10" : variant === "header" ? "h-7 sm:h-8" : "h-8";
  const markHeight = variant === "hero" ? "h-12" : variant === "header" ? "h-8 sm:h-9" : "h-9";

  return (
    <div className={`inline-flex w-fit max-w-full items-center ${plates[variant]}`}>
      <Image
        src={brand.marks.ndcLogo}
        alt="Nigeria Democratic Congress"
        width={567}
        height={340}
        priority={variant !== "footer"}
        className={`${ndcHeight} w-auto`}
      />
      {variant === "footer" ? (
        <Image
          src={brand.marks.candidateMark1}
          alt="John Upan Odey candidate mark"
          width={1536}
          height={1024}
          className={`${markHeight} w-auto`}
        />
      ) : (
        <>
          <Image
            src={brand.marks.candidateMark1}
            alt="John Upan Odey candidate mark"
            width={1536}
            height={1024}
            priority
            className={`${markHeight} w-auto sm:hidden`}
          />
          <Image
            src={brand.marks.candidateMark2}
            alt="John Upan Odey for Governor, Cross River State"
            width={2172}
            height={724}
            priority
            className={`hidden ${markHeight} w-auto sm:block`}
          />
        </>
      )}
    </div>
  );
}
