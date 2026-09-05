import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { getHeroGames } from "@/data";
import { getDictionary, t } from "@/lib/i18n";
import { localePath, gamePath } from "@/lib/paths";
import { ctaConfig } from "@/config/site";
import { getProviderBySlug, getCategory } from "@/data";
import { localize } from "@/lib/utils";
import { gameImageAlt } from "@/data/assets";
import { Button } from "@/components/ui/Button";

export function HomeHero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const showcase = getHeroGames();
  const [primary, secondary, tertiary] = showcase;

  return (
    <section className="border-b border-border/60 pt-6 pb-10 md:pt-9 md:pb-12">
      <div className="container-page grid items-center gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:gap-10 xl:gap-14">
        <div className="fade-in order-1 max-w-xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            {t(dict, "home.heroEyebrow")}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.12] text-text">
            {t(dict, "home.heroTitle")}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-text-muted md:text-[1.05rem]">
            {t(dict, "home.heroSubtitle")}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={localePath(locale, "/games")} size="lg">
              {t(dict, "common.exploreGames")}
            </Button>
            <Button
              href={localePath(locale, "/register")}
              variant="outline"
              size="lg"
            >
              {t(dict, "nav.register")}
            </Button>
          </div>
          <p className="mt-4 text-sm text-text-faint">
            <Link
              href={ctaConfig.register.href}
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(dict, "nav.register")}
            </Link>
            {" · "}
            <Link
              href={ctaConfig.login.href}
              className="hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(dict, "nav.login")}
            </Link>
          </p>
        </div>

        {primary ? (
          <>
            <div className="order-2 hidden gap-3 sm:grid sm:grid-cols-[1.15fr_0.85fr] sm:items-stretch">
              <HeroGameCard
                game={primary}
                locale={locale}
                className="aspect-[4/5] max-h-[28rem]"
                priority
              />
              <div className="grid grid-rows-2 gap-3">
                {secondary ? (
                  <HeroGameCard
                    game={secondary}
                    locale={locale}
                    className="aspect-[4/5] h-full max-h-[13.5rem] sm:aspect-auto"
                  />
                ) : null}
                {tertiary ? (
                  <HeroGameCard
                    game={tertiary}
                    locale={locale}
                    className="aspect-[4/5] h-full max-h-[13.5rem] sm:aspect-auto"
                  />
                ) : null}
              </div>
            </div>

            <div className="order-2 space-y-3 sm:hidden">
              <HeroGameCard
                game={primary}
                locale={locale}
                className="aspect-[16/10]"
                priority
              />
              <div className="rail-scroll">
                {showcase.slice(1, 3).map((game) => (
                  <HeroGameCard
                    key={game.id}
                    game={game}
                    locale={locale}
                    className="aspect-[3/4] w-[7.25rem]"
                  />
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

function HeroGameCard({
  game,
  locale,
  className,
  priority = false,
}: {
  game: NonNullable<ReturnType<typeof getHeroGames>[number]>;
  locale: Locale;
  className?: string;
  priority?: boolean;
}) {
  const provider = getProviderBySlug(game.providerSlug);
  const category = getCategory(game.category);
  const alt = gameImageAlt(
    game.name,
    provider?.name ?? game.providerSlug,
    category ? localize(category.name, locale) : game.category,
  );

  return (
    <Link
      href={gamePath(locale, game.category, game.slug)}
      className={`group relative block min-h-0 overflow-hidden rounded-2xl border border-border bg-bg-surface shadow-[var(--shadow)] transition hover:border-accent/45 ${className ?? ""}`}
    >
      {game.image ? (
        <Image
          src={game.image}
          alt={alt}
          fill
          className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width:640px) 80vw, 320px"
          priority={priority}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(145deg, ${game.imageGradient[0]}, ${game.imageGradient[1]})`,
          }}
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-12">
        <p className="truncate text-sm font-medium text-white">{game.name}</p>
        <p className="truncate text-xs text-white/70">
          {provider?.name ?? game.providerSlug}
        </p>
      </div>
    </Link>
  );
}
