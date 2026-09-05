import type { Locale } from "@/types/content";

export const siteConfig = {
  name: "Aether",
  shortName: "Aether",
  tagline: {
    en: "Discover games with clarity — providers, categories, and guides in one place",
    zh: "清晰发现好游戏——厂商、品类与攻略尽在一处",
  },
  description: {
    en: "Aether is a premium digital gaming discovery hub covering slots, live casino, fast games, fishing titles, studio profiles, and original editorial guides. We focus on how games play and how to explore them—without hype or invented claims.",
    zh: "Aether 是面向数字游戏发现的优质内容站，涵盖老虎机、真人娱乐场、快速游戏、捕鱼类作品、工作室介绍与原创编辑攻略。我们专注于玩法说明与探索路径，拒绝夸大宣传与虚假数据。",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  localeDefault: "en" as Locale,
  locales: ["en", "zh"] as const satisfies readonly Locale[],
  cta: {
    login: "#login",
    register: "#register",
  },
  supportEmail: "contact@aether.games",
  social: {
    twitter: "",
    telegram: "",
    discord: "",
  },
  ogImage: "/og-default.svg",
  author: "Editorial Team",
} as const;

export type SiteConfig = typeof siteConfig;
