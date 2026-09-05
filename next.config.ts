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
  "rewards",
  "rebates",
  "vip",
  "agent",
  "beginner-guide",
  "currency-purchase",
  "deposit",
  "withdraw",
  "payment-methods",
  "download",
  "fair-play",
  "login",
  "register",
  "sports",
  "lottery",
  "games/hash-roulette",
  "games/hash-games",
  "games/crypto-games",
  "games/chess-card",
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
