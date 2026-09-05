import type { Locale } from "@/types/content";

const agentCode = process.env.NEXT_PUBLIC_AGENT_CODE ?? "521448";
const platformBase =
  process.env.NEXT_PUBLIC_PLATFORM_URL ?? "https://1xroll.my";

function platformUrl(path = "/") {
  const url = new URL(path, platformBase);
  if (agentCode) url.searchParams.set("AgentCode", agentCode);
  return url.toString();
}

export const siteConfig = {
  name: "1XROLL",
  shortName: "1XROLL",
  legalName: "1XROLL Malaysia",
  tagline: {
    en: "Your next game starts here",
    zh: "你的下一款游戏，从这里开始",
  },
  description: {
    en: "1XROLL complete digital gaming ecosystem — games, rewards, VIP, agent, guides, wallet orientation and platform access. Official brand website variation.",
    zh: "1XROLL 完整数字游戏生态——游戏、奖励、VIP、代理、攻略、钱包导览与平台入口。官方品牌网站版本。",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  platformUrl: platformBase,
  localeDefault: "en" as Locale,
  locales: ["en", "zh"] as const satisfies readonly Locale[],
  supportEmail: "support@1xroll.my",
  social: {
    telegram: "",
    facebook: "",
  },
  logo: "/brand/logo.png",
  ogImage: "/og-default.svg",
  author: "1XROLL Editorial Team",
  gameCountClaim: "47",
} as const;

/**
 * Brand-site CTA destinations.
 * Login / Register first open orientation hubs on this site; hubs CTA to the live platform.
 * `platform*` URLs are the only places that deep-link account actions.
 */
export const ctaConfig = {
  login: {
    path: "/login" as const,
    href: platformUrl("/"),
    external: true,
  },
  register: {
    path: "/register" as const,
    href: platformUrl("/"),
    external: true,
  },
  play: {
    href: platformUrl("/"),
    external: true,
  },
  exploreGames: { path: "/games" as const },
  browseGuides: { path: "/guides" as const },
  promotions: { path: "/promotions" as const },
  responsibleGaming: { path: "/responsible-gaming" as const },
};

export type SiteConfig = typeof siteConfig;
