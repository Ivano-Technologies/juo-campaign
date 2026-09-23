import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/the-vision",
        destination: "/vision",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
