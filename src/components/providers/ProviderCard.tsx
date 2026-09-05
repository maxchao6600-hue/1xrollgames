import Image from "next/image";
import Link from "next/link";
import type { Locale, Provider } from "@/types/content";
import { getDictionary, t } from "@/lib/i18n";
import { providerPath } from "@/lib/paths";
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
  const count = getGamesByProvider(provider.slug).length;
  const href = providerPath(locale, provider.slug);

  return (
    <article className="min-w-[16.5rem] flex-1 rounded-2xl border border-border bg-bg-surface p-5 transition duration-250 hover:border-accent/30 hover:bg-bg-surface-2">
      <div className="mb-4 flex items-center gap-3">
        <div className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-border bg-bg-elevated">
          {provider.logo ? (
            <Image
              src={provider.logo}
              alt={providerLogoAlt(provider.name)}
              width={40}
              height={40}
              className="object-contain p-1"
            />
          ) : (
            <span
              className="text-sm font-bold text-white"
              style={{ background: provider.logoColor }}
              aria-hidden
            >
              {provider.name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-base font-medium text-text">{provider.name}</h3>
          <p className="text-xs text-text-muted">
            {locale === "zh" ? `${count} 款游戏` : `${count} games`}
          </p>
        </div>
      </div>
      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-text-muted">
        {localize(provider.shortDescription, locale)}
      </p>
      <Link
        href={href}
        className="text-sm font-medium text-accent transition hover:brightness-110"
      >
        {t(dict, "providers.exploreGames")} →
      </Link>
    </article>
  );
}
