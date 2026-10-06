import { Montserrat, Poppins } from "next/font/google";

/** IVA-44 — Montserrat for headings, Poppins for body (next/font).
 * IVA-96 hero roles: 600 kicker, 800 headline, 500 support/credit, 700 CTA.
 * IVA-128 — Montserrat variable (one file); Poppins static only for used
 * body/UI weights (400/600/700). `display: "swap"` avoids FOIT. Preload is
 * next/font only — do not add extra `<link rel="preload">` in `layout.tsx`. */
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
});
