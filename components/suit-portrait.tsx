import Image from "next/image";
import { brand } from "@/lib/brand";

type SuitPortraitProps = {
  priority?: boolean;
  className?: string;
  sizes?: string;
  /**
   * On large screens, grow the 4:5 frame to the text column and stop at
   * one viewport minus the sticky header. Below `lg` the frame is full width.
   */
  matchColumn?: boolean;
};

export function SuitPortrait({
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 28rem, 100vw",
  matchColumn = false,
}: SuitPortraitProps) {
  const portrait = brand.portraits.whoIsJohn;

  return (
    <figure
      className={`meet-figure relative mx-auto aspect-[4/5] w-full max-w-[min(100%,calc((100dvh-4.75rem)*4/5))] overflow-hidden border border-brand-blue/15 bg-brand-white ${
        matchColumn
          ? "lg:h-[min(100%,calc(100dvh-4.75rem))] lg:w-auto lg:max-w-full"
          : ""
      } ${className}`.trim()}
    >
      <Image
        src={portrait.src}
        alt={portrait.alt}
        fill
        sizes={sizes}
        className="object-cover object-top"
        priority={priority}
      />
    </figure>
  );
}
