import type { MegaNavItem, NavItem } from "@/types/content";
import { categories, categoryPath } from "@/data/categories";

export const mainNav: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/games", labelKey: "nav.games" },
  { href: "/promotions", labelKey: "nav.promotions" },
  { href: "/rewards", labelKey: "nav.rewards" },
  { href: "/guides", labelKey: "nav.guides" },
  { href: "/vip", labelKey: "nav.vip" },
  { href: "/agent", labelKey: "nav.agent" },
  { href: "/download", labelKey: "nav.download" },
];

export const gamesMegaNav: MegaNavItem[] = categories.map((c) => ({
  href: categoryPath(c.id),
  labelKey: `nav.cat.${c.id}`,
  categoryId: c.id,
  descriptionKey: `nav.catDesc.${c.id}`,
}));

export const footerBrand: NavItem[] = [
  { href: "/about", labelKey: "nav.about" },
  { href: "/contact", labelKey: "nav.contact" },
];

export const footerGames: NavItem[] = [
  { href: "/games", labelKey: "nav.games" },
  ...categories.map((c) => ({
    href: categoryPath(c.id),
    labelKey: `nav.cat.${c.id}`,
  })),
];

export const footerRewards: NavItem[] = [
  { href: "/promotions", labelKey: "nav.promotions" },
  { href: "/rewards", labelKey: "nav.rewards" },
  { href: "/rebates", labelKey: "nav.rebates" },
  { href: "/vip", labelKey: "nav.vip" },
  { href: "/agent", labelKey: "nav.agent" },
];

export const footerGuidesSupport: NavItem[] = [
  { href: "/guides", labelKey: "nav.guides" },
  { href: "/beginner-guide", labelKey: "nav.beginner" },
  { href: "/currency-purchase", labelKey: "nav.currency" },
  { href: "/deposit", labelKey: "nav.deposit" },
  { href: "/withdraw", labelKey: "nav.withdraw" },
  { href: "/payment-methods", labelKey: "nav.payments" },
  { href: "/download", labelKey: "nav.download" },
  { href: "/faq", labelKey: "nav.faq" },
  { href: "/fair-play", labelKey: "nav.fairPlay" },
];

export const footerLegal: NavItem[] = [
  { href: "/responsible-gaming", labelKey: "nav.responsible" },
  { href: "/terms", labelKey: "nav.terms" },
  { href: "/privacy", labelKey: "nav.privacy" },
];

export const footerPlatform: NavItem[] = [
  { href: "/providers", labelKey: "nav.providers" },
  { href: "/login", labelKey: "nav.login" },
  { href: "/register", labelKey: "nav.register" },
];

/** @deprecated use footerGames / footerBrand — kept for gradual migration */
export const footerExplore = footerGames;
export const footerCompany = footerBrand;
export const footerHelp = footerGuidesSupport;
