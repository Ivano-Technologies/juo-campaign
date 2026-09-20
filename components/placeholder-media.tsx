import Image from "next/image";
import type { PlaceholderId } from "@/lib/placeholders";
import { placeholderById } from "@/lib/placeholders";

type CampaignMediaProps = {
  id: PlaceholderId;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
};

export function PlaceholderMedia({
  id,
  className = "",
  imageClassName,
  priority = false,
  sizes,
}: CampaignMediaProps) {
  const slot = placeholderById(id);
  const isSvg = slot.src.endsWith(".svg");
  const fitClass =
    slot.fit === "contain"
      ? "object-contain object-bottom"
      : "object-cover object-center";

  return (
    <figure
      className={`relative overflow-hidden ${
        slot.fit === "contain" ? "bg-cream" : "bg-forest-deep"
      } ${className}`}
      data-media-slot={slot.id}
      data-media-file={slot.file}
    >
      <Image
        src={slot.src}
        alt={slot.alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={isSvg}
        className={imageClassName ?? fitClass}
      />
    </figure>
  );
}
