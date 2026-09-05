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
    en: "1XROLL official brand website variation — explore slots, live casino, fast games, providers, promotions and game guides. Open your account on the 1XROLL platform to play.",
    zh: "1XROLL 官方品牌网站版本——浏览老虎机、真人娱乐场、快速游戏、厂商、优惠活动与游戏攻略。前往 1XROLL 平台注册并开始游戏。",
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
  gameCountClaim: "1187+",
} as const;

export const ctaConfig = {
  login: {
    href: platformUrl("/"),
    external: true,
  },
  register: {
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
