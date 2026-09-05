import type { Locale } from "@/types/content";
import { siteConfig } from "@/config/site";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return path === "/" ? base : `${base}${normalized}`;
}

export function formatDate(iso: string, locale: Locale) {
  const date = new Date(iso);
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function localize<T extends { en: string; zh: string }>(
  value: T,
  locale: Locale,
) {
  return value[locale] || value.en;
}
