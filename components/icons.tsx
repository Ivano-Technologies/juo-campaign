import type { SocialIcon } from "@/lib/site";

const iconClass = "h-[1.05rem] w-[1.05rem] fill-current";

export function SocialGlyph({ icon }: { icon: SocialIcon }) {
  switch (icon) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M14.5 8.5V6.8c0-.7.4-1 1.2-1H17V3h-2.3C12.1 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.4-2.8H14.5z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M17.6 3H20l-6.2 7.1L21 21h-5.5l-4.3-6.2L6.4 21H4l6.7-7.6L3.2 3h5.6l3.9 5.7L17.6 3zm-1 16.2h1.5L7.5 4.7H5.9l10.7 14.5z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.3 5.4 12 5.4 12 5.4s-7.3 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.5.4 8.8.4 8.8.4s7.3 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.6V8.8l6.2 3.4-6.2 3.4z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3zm5.8-8.8a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM21 7.1a5.7 5.7 0 0 0-1.6-4 5.7 5.7 0 0 0-4-1.6C14.1 1.3 9.9 1.3 8.6 1.5a5.7 5.7 0 0 0-4 1.6 5.7 5.7 0 0 0-1.6 4C2.8 9.9 2.8 14.1 3 15.4a5.7 5.7 0 0 0 1.6 4 5.7 5.7 0 0 0 4 1.6c1.3.2 5.5.2 6.8 0a5.7 5.7 0 0 0 4-1.6 5.7 5.7 0 0 0 1.6-4c.2-1.3.2-5.5 0-6.8zm-1.6 7.7a3.6 3.6 0 0 1-2 2c-.7.3-2.3.6-5.4.6s-4.7-.3-5.4-.6a3.6 3.6 0 0 1-2-2c-.3-.7-.6-2.3-.6-5.4s.3-4.7.6-5.4a3.6 3.6 0 0 1 2-2c.7-.3 2.3-.6 5.4-.6s4.7.3 5.4.6a3.6 3.6 0 0 1 2 2c.3.7.6 2.3.6 5.4s-.3 4.7-.6 5.4z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M19.6 8.3a6.5 6.5 0 0 1-3.8-1.2v7.3A6.4 6.4 0 1 1 8.2 8.2c.2 0 .4 0 .6.1v3.2a3.3 3.3 0 1 0 2.4 3.2V2.5h3.1a6.5 6.5 0 0 0 5.3 5.2v.6z" />
        </svg>
      );
    default:
      return null;
  }
}

export function StatGlyph({
  icon,
}: {
  icon: "people" | "briefcase" | "leaf";
}) {
  const className = "h-8 w-8 stroke-current text-white/80";
  if (icon === "people") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="9" cy="8" r="3" strokeWidth="1.6" />
        <circle cx="16.5" cy="9" r="2.3" strokeWidth="1.6" />
        <path
          d="M4.5 18.5c.6-3 2.6-4.7 4.5-4.7s3.9 1.7 4.5 4.7"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M13.2 18.5c.4-2.2 1.8-3.4 3.3-3.4 1.5 0 2.7 1 3.2 2.8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (icon === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <rect x="3.5" y="8" width="17" height="11.5" rx="1.6" strokeWidth="1.6" />
        <path d="M9 8V6.4A1.4 1.4 0 0 1 10.4 5h3.2A1.4 1.4 0 0 1 15 6.4V8" strokeWidth="1.6" />
        <path d="M3.5 12.5h17" strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 19.5s2.2-8.5 8.8-11.2c0 0 1.3 5.6-2.2 9.2"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12.2 8.4C14 5.6 17.5 4 19.5 4c0 2.4-1.2 6-4.2 7.6" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ProhibitIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10 text-white/85"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.4 17.6 17.6 6.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function DiamondRule({ count = 8 }: { count?: number }) {
  return (
    <div className="mt-4 flex gap-1.5" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className="inline-block h-2.5 w-2.5 rotate-45 bg-brand-red"
        />
      ))}
    </div>
  );
}
