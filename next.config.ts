import type { NextConfig } from "next";
import { SHOW_STELLA } from "./lib/campaign-flags";

const nextConfig: NextConfig = {
  typedRoutes: true,
  env: {
    NEXT_PUBLIC_SHOW_STELLA: SHOW_STELLA ? "true" : "false",
  },
  images: {
    // Serve AVIF first, WebP fallback, via next/image (IVA-128).
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      ...(SHOW_STELLA
        ? []
        : [
            {
              source: "/odey-archibong",
              destination: "/",
              statusCode: 307,
            },
            {
              source: "/news/engagement-with-ward-leaders",
              destination: "/news",
              statusCode: 307,
            },
          ]),
      {
        source: "/the-vision",
        destination: "/vision",
        statusCode: 301,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        statusCode: 301,
      },
      {
        source: "/terms-of-use",
        destination: "/terms",
        statusCode: 301,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
