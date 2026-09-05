import type { NextConfig } from "next";

const unlocalizedPaths = [
  "games",
  "games/:path*",
  "promotions",
  "guides",
  "guides/:path*",
  "providers",
  "providers/:path*",
  "about",
  "contact",
  "faq",
  "responsible-gaming",
  "terms",
  "privacy",
] as const;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return unlocalizedPaths.map((path) => ({
      source: `/${path}`,
      destination: `/en/${path}`,
      permanent: false,
    }));
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
