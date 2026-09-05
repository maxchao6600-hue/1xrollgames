import type { NavItem } from "@/types/content";

export const mainNav: NavItem[] = [
  { href: "/games", labelKey: "nav.games" },
  { href: "/games/slots", labelKey: "nav.casino" },
  { href: "/games/live-casino", labelKey: "nav.live" },
  { href: "/promotions", labelKey: "nav.promotions" },
  { href: "/guides", labelKey: "nav.guides" },
  { href: "/providers", labelKey: "nav.providers" },
  { href: "/about", labelKey: "nav.about" },
];

export const footerExplore: NavItem[] = [
  { href: "/games", labelKey: "nav.games" },
  { href: "/providers", labelKey: "nav.providers" },
  { href: "/guides", labelKey: "nav.guides" },
  { href: "/promotions", labelKey: "nav.promotions" },
];

export const footerCompany: NavItem[] = [
  { href: "/about", labelKey: "nav.about" },
  { href: "/contact", labelKey: "nav.contact" },
];

export const footerHelp: NavItem[] = [
  { href: "/faq", labelKey: "nav.faq" },
  { href: "/responsible-gaming", labelKey: "nav.responsible" },
];

export const footerLegal: NavItem[] = [
  { href: "/terms", labelKey: "nav.terms" },
  { href: "/privacy", labelKey: "nav.privacy" },
];

export const mobileBottomNav: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/games", labelKey: "nav.games" },
  { href: "/guides", labelKey: "nav.guides" },
  { href: "/providers", labelKey: "nav.providers" },
];
