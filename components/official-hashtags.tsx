import { brand } from "@/lib/brand";

type OfficialHashtagsProps = {
  className?: string;
};

/** Chris Brand official hashtags: exact spelling from the kit narrative PDF. */
export function OfficialHashtags({
  className = "text-xs tracking-wide text-brand-white/80",
}: OfficialHashtagsProps) {
  return (
    <p className={className}>{brand.hashtags.join(" · ")}</p>
  );
}
