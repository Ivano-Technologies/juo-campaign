import { canonicalOrigin, site, socialLinks } from "@/lib/site";

/** IVA-20 Brand-locked home SEO. Visible homepage copy stays WP-parity. */
export const homeSeo = {
  title: "John Upan Odey Jnr | A Fresh Start for Cross River 2027",
  description:
    "NDC governorship candidate John Upan Odey Jnr. One People, One Cross River. We produce. We process. We prosper. Join the movement.",
  canonical: canonicalOrigin,
  ogUrl: `${canonicalOrigin}/`,
  ogImage: {
    path: "/brand/official-poster-1.png",
    url: `${canonicalOrigin}/brand/official-poster-1.png`,
    width: 2174,
    height: 2892,
    alt: "Official campaign poster: A Fresh Start, One People One Cross River",
  },
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
