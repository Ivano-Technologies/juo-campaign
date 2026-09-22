import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@/components/google-analytics";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { homeSeo } from "@/lib/home-seo";
import { canonicalOrigin, site } from "@/lib/site";
import "./globals.css";

/** IVA-44 — Montserrat Bold for headings, Poppins for body (next/font). */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(canonicalOrigin),
  title: {
    default: homeSeo.title,
    template: `%s | ${homeSeo.title}`,
  },
  description: homeSeo.description,
  applicationName: "JUO Campaign",
  authors: [{ name: site.name }],
  keywords: [
    "John Upan Odey",
    "John Upan Odey Jnr",
    "Cross River",
    "NDC",
    "2027",
    "A Fresh Start",
  ],
  robots: {
    // Preview/dev stay noindex. Production must be indexable for GSC.
    index: process.env.VERCEL_ENV === "production",
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: homeSeo.title,
    description: homeSeo.description,
    images: [
      {
        url: homeSeo.ogImage.url,
        width: homeSeo.ogImage.width,
        height: homeSeo.ogImage.height,
        alt: homeSeo.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
    images: [homeSeo.ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-brand-white text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-white focus:px-4 focus:py-2 focus:text-brand-blue"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <ScrollToTop />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
