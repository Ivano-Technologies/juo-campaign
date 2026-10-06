import Image from "next/image";
import { brand } from "@/lib/brand";

/**
 * Faint white JO mark for navy heroes. Matches the Vision page treatment:
 * right half, hidden below lg, opacity 0.08, translate-x 8%, object-contain.
 */
export function JoHeroWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
    >
      <Image
        src={brand.marks.joWatermarkWhite}
        alt=""
        width={1375}
        height={978}
        className="absolute top-1/2 right-0 h-[100%] w-auto max-w-none -translate-y-1/2 translate-x-[8%] object-contain opacity-[0.08]"
      />
    </div>
  );
}
