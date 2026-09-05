import { games } from "@/data/games";
import { providers } from "@/data/providers";
import { guides } from "@/data/guides";
import { faqItems } from "@/data/faq";
import {
  FEATURED_RAIL_SLUGS,
  HERO_GAME_SLUGS,
  resolveGameImage,
  resolveGuideImage,
  resolveProviderLogo,
} from "@/data/assets";
import type { CategoryId, Game, GameStatus, Guide, Locale, Provider } from "@/types/content";

export function withResolvedAssets(game: Game): Game {
  return {
    ...game,
    image: resolveGameImage(game.slug),
  };
}

export function getAllGames(): Game[] {
  return games.map(withResolvedAssets);
}

export function getGameBySlug(slug: string): Game | undefined {
  const game = games.find((g) => g.slug === slug);
  return game ? withResolvedAssets(game) : undefined;
}

export function getGamesByCategory(category: CategoryId | string): Game[] {
  return games.filter((g) => g.category === category).map(withResolvedAssets);
}

export function getGamesByProvider(providerSlug: string): Game[] {
  return games
    .filter((g) => g.providerSlug === providerSlug)
    .map(withResolvedAssets);
}

export function getGamesByStatus(status: GameStatus): Game[] {
  return games.filter((g) => g.status === status).map(withResolvedAssets);
}

/** Explicit hero showcase — never status-slice / random */
export function getHeroGames(): Game[] {
  return HERO_GAME_SLUGS.map((slug) => getGameBySlug(slug)).filter(
    (g): g is Game => Boolean(g),
  );
}

/** Explicit featured rail — different set from hero */
export function getFeaturedGames(limit = 12): Game[] {
  const listed = FEATURED_RAIL_SLUGS.map((slug) => getGameBySlug(slug)).filter(
    (g): g is Game => Boolean(g),
  );
  if (listed.length >= limit) return listed.slice(0, limit);
  const extras = getAllGames().filter((g) => !listed.some((x) => x.slug === g.slug));
  return [...listed, ...extras].slice(0, limit);
}

export function withProviderLogo(provider: Provider): Provider {
  return {
    ...provider,
    logo: resolveProviderLogo(provider.slug) ?? provider.logo,
  };
}

export function withGuideCover(guide: Guide): Guide {
  return {
    ...guide,
    coverImage: resolveGuideImage(guide.slug) ?? guide.coverImage,
  };
}

export function getProviderBySlug(slug: string): Provider | undefined {
  const provider = providers.find((p) => p.slug === slug);
  return provider ? withProviderLogo(provider) : undefined;
}

export function getAllProviders(): Provider[] {
  return providers.map(withProviderLogo);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  const guide = guides.find((g) => g.slug === slug);
  return guide ? withGuideCover(guide) : undefined;
}

export function getAllGuides(): Guide[] {
  return guides.map(withGuideCover);
}

export function getGuidesByCategory(category: Guide["category"]): Guide[] {
  return guides.filter((g) => g.category === category).map(withGuideCover);
}

export function searchGames(query: string, locale: Locale = "en"): Game[] {
  const q = query.trim().toLowerCase();
  const all = getAllGames();
  if (!q) return all;
  return all.filter((g) => {
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
  return getAllGames()
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
