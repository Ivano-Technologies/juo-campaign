import Image from "next/image";
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

export function CandidateMark({
  className = "h-16 w-16",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/media/2026/Frame-1171274791.png"
      alt="John Upan Odey — A New CRS is Possible"
      width={320}
      height={320}
      priority={priority}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
