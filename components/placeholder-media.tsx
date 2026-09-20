import Image from "next/image";
import type { PlaceholderId } from "@/lib/placeholders";
import { placeholderById } from "@/lib/placeholders";

type PlaceholderMediaProps = {
  id: PlaceholderId;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
};

export function PlaceholderMedia({
  id,
  className = "",
  imageClassName = "object-cover",
  priority = false,
  sizes,
}: PlaceholderMediaProps) {
  const slot = placeholderById(id);

  return (
    <figure
      className={`relative overflow-hidden bg-forest-deep ${className}`}
      data-placeholder-slot={slot.id}
    >
      <Image
        src={slot.src}
        alt={slot.todo}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized
        className={imageClassName}
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-forest-deep/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-soft">
        {slot.todo}
      </figcaption>
    </figure>
  );
}
