import Image from "next/image";
import Link from "next/link";
import type { Locale, Provider } from "@/types/content";
import { getDictionary, t } from "@/lib/i18n";
import { providerPath, localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { getGamesByProvider } from "@/data";
import { providerLogoAlt } from "@/data/assets";

export function ProviderCard({
  provider,
  locale,
}: {
  provider: Provider;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const games = getGamesByProvider(provider.slug);
  const count = games.length;
  const featured = games.filter((g) => g.image).slice(0, 3);
  const href = providerPath(locale, provider.slug);

  return (
    <article className="flex min-w-0 w-full flex-col rounded-[1.35rem] border border-border bg-bg-surface p-5 transition duration-250 hover:border-accent/30 hover:bg-bg-surface-2">
      <div className="mb-4 flex items-center gap-3">
        <div className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-border bg-bg-elevated p-2">
          {provider.logo ? (
            <Image
              src={provider.logo}
              alt={providerLogoAlt(provider.name)}
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          ) : (
            <span
              className="grid h-full w-full place-items-center text-sm font-bold text-white"
              style={{ background: provider.logoColor }}
              aria-hidden
            >
              {provider.name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <h2 className="text-base font-medium text-text">{provider.name}</h2>
          <p className="text-xs text-text-muted">
            {locale === "zh" ? `${count} 款已收录游戏` : `${count} catalogue games`}
          </p>
        </div>
      </div>
      <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted">
        {localize(provider.shortDescription, locale)}
      </p>
      {featured.length ? (
        <ul className="mb-4 space-y-1.5 border-t border-border/70 pt-3">
          {featured.map((game) => (
            <li key={game.id} className="text-xs text-text-muted">
              <Link
                href={localePath(locale, `/games/${game.category}/${game.slug}`)}
                className="hover:text-accent"
              >
                {game.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        href={href}
        className="text-sm font-medium text-accent transition hover:brightness-110"
      >
        {t(dict, "providers.exploreGames")} →
      </Link>
    </article>
  );
}
