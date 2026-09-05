import Link from "next/link";
import type { Game, Locale } from "@/types/content";
import type { GameCardModel } from "@/data/queries";
import { Badge } from "@/components/ui/Badge";
import { GameArt } from "@/components/shared/GameArt";
import { getDictionary, t } from "@/lib/i18n";
import { gamePath } from "@/lib/paths";
import { getProviderBySlug, getCategory } from "@/data";
import { localize } from "@/lib/utils";
import { gameImageAlt } from "@/data/assets";

export function GameCard({
  game,
  locale,
  priority = false,
}: {
  game: Game | GameCardModel;
  locale: Locale;
  priority?: boolean;
}) {
  const dict = getDictionary(locale);
  const provider = getProviderBySlug(game.providerSlug);
  const category = getCategory(game.category);
  const href = gamePath(locale, game.category, game.slug);
  const categoryLabel = category ? localize(category.name, locale) : game.category;
  const providerName = provider?.name ?? game.providerSlug;
  const alt = game.image
    ? gameImageAlt(game.name, providerName, categoryLabel)
    : undefined;

  const badgeTone =
    game.status === "hot"
      ? "hot"
      : game.status === "featured"
        ? "violet"
        : "accent";

  return (
    <article className="group w-[10.5rem] sm:w-[12.5rem]">
      <Link href={href} className="block focus-visible:rounded-[1rem]">
        <div className="relative overflow-hidden rounded-[1rem] border border-border bg-bg-surface transition duration-250 hover:border-accent/40">
          <div className="overflow-hidden">
            <div className="origin-center transition duration-300 group-hover:scale-[1.04]">
              <GameArt
                name={game.name}
                gradient={game.imageGradient}
                image={game.image}
                alt={alt}
                providerName={providerName}
                categoryLabel={categoryLabel}
                unavailableLabel={
                  locale === "zh" ? "暂无预览图" : "Preview unavailable"
                }
                priority={priority}
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition duration-250 group-hover:opacity-100">
            <span className="mb-4 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-[#1a1205]">
              {t(dict, "common.viewGame")}
            </span>
          </div>
          {game.status ? (
            <div className="absolute top-3 left-3">
              <Badge tone={badgeTone}>{t(dict, `badge.${game.status}`)}</Badge>
            </div>
          ) : null}
        </div>
        <div className="mt-3 space-y-1 px-0.5">
          <h3 className="line-clamp-1 text-sm font-medium text-text">{game.name}</h3>
          <p className="text-xs text-text-muted">
            {providerName}
            {category ? ` · ${categoryLabel}` : null}
          </p>
        </div>
      </Link>
    </article>
  );
}
