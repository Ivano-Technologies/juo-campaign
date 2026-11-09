import { brandSeoDescription, brandSeoTitle } from "@/lib/brand-seo";
import { canonicalOrigin, site, socialLinks } from "@/lib/site";

const stellaOgImage = {
  path: "/brand/og-official-poster-1.jpg",
  url: `${canonicalOrigin}/brand/og-official-poster-1.jpg`,
  width: 1200,
  height: 630,
  alt: "Official campaign poster: A Fresh Start, One People One Cross River",
} as const;

const johnOgImage = {
  path: "/brand/homepage-poster-vote-governor.jpg",
  url: `${canonicalOrigin}/brand/homepage-poster-vote-governor.jpg`,
  width: 1600,
  height: 2129,
  alt: "John Upan Odey for Governor of Cross River",
} as const;

/**
 * IVA-48 Brand Architect SEO lock.
 * Visible homepage copy stays WP-parity. Title/meta/OG/Twitter use Brand strings.
 * OG image falls back to the John-only homepage poster when SHOW_STELLA is off.
 */
export const homeSeo = {
  title: brandSeoTitle,
  description: brandSeoDescription,
  canonical: canonicalOrigin,
  ogUrl: `${canonicalOrigin}/`,
  ogImage:
    process.env.NEXT_PUBLIC_SHOW_STELLA === "true" ? stellaOgImage : johnOgImage,
  logo: {
    path: "/brand/candidate-mark-1.png",
    url: `${canonicalOrigin}/brand/candidate-mark-1.png`,
  },
} as const;

type SchemaImageObject = {
  "@type": "ImageObject";
  url: string;
};

export type HomeOrganizationJsonLd = {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  alternateName: string;
  url: string;
  logo: SchemaImageObject;
  image: string;
  description: string;
  sameAs: string[];
};

export type HomeWebsiteJsonLd = {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  inLanguage: string;
  publisher: {
    "@type": "Organization";
    name: string;
    url: string;
  };
};

export function homeOrganizationJsonLd(): HomeOrganizationJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: homeSeo.ogUrl,
    logo: {
      "@type": "ImageObject",
      url: homeSeo.logo.url,
    },
    image: homeSeo.ogImage.url,
    description: homeSeo.description,
    sameAs: socialLinks.map((link) => link.href),
  };
}

export function homeWebsiteJsonLd(): HomeWebsiteJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: homeSeo.ogUrl,
    description: homeSeo.description,
    inLanguage: "en-NG",
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: homeSeo.ogUrl,
    },
  };
}
