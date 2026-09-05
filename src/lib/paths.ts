import { siteConfig } from "@/config/site";
import type { CategoryId, Locale } from "@/types/content";
import { isLocale } from "@/lib/i18n";

/** Ensure path begins with a single leading slash (or empty for home). */
function normalizePath(path: string): string {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

/** Prefix a path with the active locale segment. */
export function localePath(locale: Locale, path: string = "/"): string {
  const normalized = normalizePath(path);
  return `/${locale}${normalized}`;
}

/**
 * Swap the locale prefix on a pathname like /en/games/slots → /zh/games/slots.
 * Falls back to locale home when the path cannot be parsed.
 */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${nextLocale}`;
  }
  if (isLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${nextLocale}/${rest}` : `/${nextLocale}`;
  }
  return `/${nextLocale}${normalizePath(pathname)}`;
}

export function gamesPath(locale: Locale): string {
  return localePath(locale, "/games");
}

export function categoryPath(locale: Locale, category: CategoryId): string {
  return localePath(locale, `/games/${category}`);
}

export function gamePath(
  locale: Locale,
  category: CategoryId,
  slug: string,
): string {
  return localePath(locale, `/games/${category}/${slug}`);
}

export function providersPath(locale: Locale): string {
  return localePath(locale, "/providers");
}

export function providerPath(locale: Locale, slug: string): string {
  return localePath(locale, `/providers/${slug}`);
}

export function guidesPath(locale: Locale): string {
  return localePath(locale, "/guides");
}

export function guidePath(locale: Locale, slug: string): string {
  return localePath(locale, `/guides/${slug}`);
}

export function faqPath(locale: Locale): string {
  return localePath(locale, "/faq");
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function getDefaultLocale(): Locale {
  return siteConfig.localeDefault;
}
