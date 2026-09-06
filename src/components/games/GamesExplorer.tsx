"use client";

import Image from "next/image";
import { useDeferredValue, useMemo, useState } from "react";
import type { Category, Locale, Provider } from "@/types/content";
import type { GameCardModel } from "@/data/queries";
import { GameCard } from "@/components/games/GameCard";
import { BRAND_ASSETS } from "@/data/assets";
import { getDictionary, t } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";

type ProviderOption = Pick<Provider, "id" | "slug" | "name">;
type CategoryOption = Pick<Category, "id" | "name">;

export function GamesExplorer({
  locale,
  games,
  categories,
  providers,
  initialCategory = "all",
  initialProvider = "all",
}: {
  locale: Locale;
  games: GameCardModel[];
  categories: CategoryOption[];
  providers: ProviderOption[];
  initialCategory?: string;
  initialProvider?: string;
}) {
  const dict = getDictionary(locale);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [provider, setProvider] = useState(initialProvider);
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return games.filter((g) => {
      const matchQ =
        !q ||
        g.name.toLowerCase().includes(q) ||
        g.providerSlug.includes(q);
      const matchCat = category === "all" || g.category === category;
      const matchProv = provider === "all" || g.providerSlug === provider;
      return matchQ && matchCat && matchProv;
    });
  }, [games, deferredQuery, category, provider]);

  function clear() {
    setQuery("");
    setCategory("all");
    setProvider("all");
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-3 rounded-2xl border border-border bg-bg-surface p-4 md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-end">
        <label className="block">
          <span className="mb-1.5 block text-xs text-text-muted">
            {t(dict, "common.search")}
          </span>
          <div className="relative">
            <span className="pointer-events-none absolute top-1/2 left-3 z-[1] h-6 w-6 -translate-y-1/2 overflow-hidden rounded-md border border-border/80 bg-bg-elevated p-0.5">
              <Image
                src={BRAND_ASSETS.logo}
                alt=""
                width={24}
                height={24}
                className="h-full w-full object-contain"
              />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t(dict, "games.searchPlaceholder")}
              className="h-11 w-full rounded-xl border border-border bg-bg-elevated py-2 pr-3 pl-11 text-sm text-text outline-none transition focus:border-accent/50"
              type="search"
              autoComplete="off"
            />
          </div>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs text-text-muted">
            {t(dict, "games.filterCategory")}
          </span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-bg-elevated px-3 text-sm text-text outline-none focus:border-accent/50"
          >
            <option value="all">{t(dict, "common.all")}</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {localize(c.name, locale)}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs text-text-muted">
            {t(dict, "games.filterProvider")}
          </span>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-bg-elevated px-3 text-sm text-text outline-none focus:border-accent/50"
          >
            <option value="all">{t(dict, "common.all")}</option>
            {providers.map((p) => (
              <option key={p.id} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
        <Button type="button" variant="secondary" onClick={clear}>
          {t(dict, "common.clearFilters")}
        </Button>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border bg-bg-elevated px-6 py-16 text-center">
          <p className="text-lg text-text">{t(dict, "games.empty")}</p>
          <p className="mt-2 text-sm text-text-muted">
            {t(dict, "games.emptyHint")}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button type="button" variant="outline" onClick={clear}>
              {t(dict, "common.clearFilters")}
            </Button>
            <Button href={localePath(locale, "/games")} variant="secondary">
              {t(dict, "games.exploreCategories")}
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filtered.map((game) => (
            <div key={game.id} className="w-full [&_article]:w-full">
              <GameCard game={game} locale={locale} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
