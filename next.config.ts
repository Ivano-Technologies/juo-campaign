import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  async redirects() {
    return [
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
