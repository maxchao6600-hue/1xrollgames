import type { RewardTopic } from "@/types/content";
import { PROMOTION_ASSETS } from "@/data/assets";

/**
 * Rewards ecosystem topics — copy stays descriptive.
 * Specific percentages only appear where already published in promotions data.
 */
export const rewardTopics: RewardTopic[] = [
  {
    id: "activity-center",
    slug: "activity-center",
    title: { en: "Activity Center", zh: "活动中心" },
    summary: {
      en: "Ongoing campaigns and activity-style promotions published for 1XROLL players.",
      zh: "面向 1XROLL 玩家发布的进行中活动与优惠。",
    },
    body: {
      en: "The Activity Center is where time-bound campaigns and featured offers are grouped. On this brand site we summarise published promotions; eligibility and live terms always sit on the 1XROLL platform after login.",
      zh: "活动中心汇总限时活动与精选优惠。本品牌站摘要已发布优惠；资格与实时条款始终以登录后的 1XROLL 平台为准。",
    },
    href: "/promotions",
    image: PROMOTION_ASSETS["prize-pool"],
  },
  {
    id: "rewards-center",
    slug: "rewards-center",
    title: { en: "Rewards Center", zh: "奖励中心" },
    summary: {
      en: "A hub for new-user, VIP-related and activity rewards orientation.",
      zh: "新用户、VIP 相关与活动奖励的导览中心。",
    },
    body: {
      en: "Rewards Center orients you to how 1XROLL groups welcome offers, VIP cashback summaries and event-style rewards. We do not invent tier ladders or unpublished percentages here.",
      zh: "奖励中心说明 1XROLL 如何组织迎新优惠、VIP 返水摘要与活动类奖励。此处不编造等级阶梯或未发布比例。",
    },
    href: "/rewards",
    image: PROMOTION_ASSETS["welcome-bonus"],
  },
  {
    id: "rebates",
    slug: "rebates",
    title: { en: "Rebates & Cashback", zh: "返水与回馈" },
    summary: {
      en: "How rebate-style cashback is described on 1XROLL — without invented rates.",
      zh: "1XROLL 如何描述返水式回馈——不编造比例。",
    },
    body: {
      en: "Published VIP cashback on this brand site is summarised as up to 1.1% on eligible play, with higher tiers unlocking increased rates. Exact eligibility is confirmed inside the platform wallet and VIP area.",
      zh: "本品牌站摘要的已发布 VIP 返水为符合条件投注最高 1.1%，更高等级可解锁更高比例。确切资格以平台钱包与 VIP 区域为准。",
    },
    href: "/rebates",
    image: PROMOTION_ASSETS["vip-cashback"],
  },
  {
    id: "vip-club",
    slug: "vip-club",
    title: { en: "VIP Club", zh: "VIP 俱乐部" },
    summary: {
      en: "VIP-related benefits orientation for returning players.",
      zh: "面向回头玩家的 VIP 相关礼遇导览。",
    },
    body: {
      en: "VIP Club pages explain cashback-style rewards and upgrade-oriented benefits in plain language. We do not invent VIP 1 / VIP 2 tables — open the platform for live tier status.",
      zh: "VIP 俱乐部页面用清晰语言说明返水类奖励与升级导向礼遇。我们不编造 VIP 1 / VIP 2 表格——实时等级请在平台查看。",
    },
    href: "/vip",
    image: PROMOTION_ASSETS["vip-cashback"],
  },
  {
    id: "promotions",
    slug: "promotions",
    title: { en: "Promotions", zh: "优惠活动" },
    summary: {
      en: "Published welcome, VIP and prize-pool style offers.",
      zh: "已发布的迎新、VIP 与奖池类优惠。",
    },
    body: {
      en: "Browse verified promotion summaries including the 200% first deposit offer (up to 8,888 USDT, 25× turnover, min. 10 USDT), VIP cashback up to 1.1%, and prize-pool events.",
      zh: "浏览已核实优惠摘要，包括 200% 首存（最高 8,888 USDT，25 倍流水，最低 10 USDT）、VIP 返水最高 1.1%，以及奖池活动。",
    },
    href: "/promotions",
    image: PROMOTION_ASSETS["welcome-bonus"],
  },
];

export function getRewardTopic(slug: string) {
  return rewardTopics.find((t) => t.slug === slug || t.id === slug);
}
