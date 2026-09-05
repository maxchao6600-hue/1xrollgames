import { games } from "@/data/games";
import { providers } from "@/data/providers";
import { guides } from "@/data/guides";
import { faqItems } from "@/data/faq";
import type { CategoryId, Game, GameStatus, Guide, Locale, Provider } from "@/types/content";

export function getAllGames(): Game[] {
  return games;
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getGamesByCategory(category: CategoryId | string): Game[] {
  return games.filter((g) => g.category === category);
}

export function getGamesByProvider(providerSlug: string): Game[] {
  return games.filter((g) => g.providerSlug === providerSlug);
}

export function getGamesByStatus(status: GameStatus): Game[] {
  return games.filter((g) => g.status === status);
}

export function getFeaturedGames(limit = 8): Game[] {
  const featured = games.filter(
    (g) => g.status === "featured" || g.status === "hot" || g.status === "new",
  );
  const pool = featured.length > 0 ? featured : games;
  return pool.slice(0, limit);
}

export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find((p) => p.slug === slug);
}

export function getAllProviders(): Provider[] {
  return providers;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuides(): Guide[] {
  return guides;
}

export function getGuidesByCategory(category: Guide["category"]): Guide[] {
  return guides.filter((g) => g.category === category);
}

export function searchGames(query: string, locale: Locale = "en"): Game[] {
  const q = query.trim().toLowerCase();
  if (!q) return games;
  return games.filter((g) => {
    const haystack = [
      g.name,
      g.slug,
      g.providerSlug,
      g.category,
      g.shortDescription[locale],
      g.description[locale],
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function relatedGames(slug: string, limit = 4): Game[] {
  const base = getGameBySlug(slug);
  if (!base) return [];
  return games
    .filter((g) => g.slug !== slug)
    .map((g) => {
      let score = 0;
      if (g.category === base.category) score += 2;
      if (g.providerSlug === base.providerSlug) score += 2;
      if (g.status && g.status === base.status) score += 1;
      return { g, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.g);
}

export function getFaqById(id: string) {
  return faqItems.find((f) => f.id === id);
}
