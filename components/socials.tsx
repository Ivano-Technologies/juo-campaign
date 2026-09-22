import Image from "next/image";
import { brand } from "@/lib/brand";
import { socialLinks } from "@/lib/site";
import { SocialGlyph } from "@/components/icons";

type SocialRowProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialRow({
  className = "",
  iconClassName = "flex h-11 w-11 items-center justify-center bg-white/10 text-white transition hover:bg-brand-red",
}: SocialRowProps) {
  return (
    <ul className={`flex items-center gap-2 ${className}`.trim()}>
      {socialLinks.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClassName}
            aria-label={item.name}
          >
            <SocialGlyph icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Compact JO monogram — nav and small chrome. Never circular. */
export function JoMarkCompact({
  className = "h-10 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={brand.marks.candidateMark1}
      alt="John Upan Odey"
      width={1536}
      height={1024}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}

/** Horizontal JO lock-up — footer, section heroes, Meet. Never circular. */
export function JoMarkLockup({
  className = "h-14 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={brand.marks.candidateMark2}
      alt="John Upan Odey for Governor, Cross River State"
      width={2172}
      height={724}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
