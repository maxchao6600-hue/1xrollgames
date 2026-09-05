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
  const [primary, secondary, tertiary, quaternary] = showcase;

  return (
    <section className="border-b border-border/60 pt-6 pb-10 md:pt-10 md:pb-14">
      <div className="container-page grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="fade-in order-1">
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            {t(dict, "home.heroEyebrow")}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.1] text-text">
            {t(dict, "home.heroTitle")}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-text-muted md:text-lg">
            {t(dict, "home.heroSubtitle")}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={localePath(locale, "/games")} size="lg">
              {t(dict, "common.exploreGames")}
            </Button>
            <Button
              href={localePath(locale, "/promotions")}
              variant="outline"
              size="lg"
            >
              {t(dict, "common.viewPromotions")}
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
            {/* Desktop editorial mosaic */}
            <div className="order-2 hidden gap-3 sm:grid sm:grid-cols-2">
              <HeroGameCard
                game={primary}
                locale={locale}
                className="aspect-[4/5]"
                priority
              />
              <div className="grid gap-3">
                {secondary ? (
                  <HeroGameCard
                    game={secondary}
                    locale={locale}
                    className="aspect-[4/5]"
                  />
                ) : null}
                <div className="grid grid-cols-2 gap-3">
                  {tertiary ? (
                    <HeroGameCard
                      game={tertiary}
                      locale={locale}
                      className="aspect-square"
                    />
                  ) : null}
                  {quaternary ? (
                    <HeroGameCard
                      game={quaternary}
                      locale={locale}
                      className="aspect-square"
                    />
                  ) : null}
                </div>
              </div>
            </div>

            {/* Mobile: featured + horizontal rail */}
            <div className="order-2 space-y-3 sm:hidden">
              <HeroGameCard
                game={primary}
                locale={locale}
                className="aspect-[16/10]"
                priority
              />
              <div className="rail-scroll">
                {showcase.slice(1).map((game) => (
                  <HeroGameCard
                    key={game.id}
                    game={game}
                    locale={locale}
                    className="aspect-[3/4] w-[7.5rem]"
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
      className={`group relative block overflow-hidden rounded-2xl border border-border bg-bg-surface shadow-[var(--shadow)] transition hover:border-accent/45 ${className ?? ""}`}
    >
      {game.image ? (
        <Image
          src={game.image}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width:640px) 80vw, 280px"
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
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-3 pt-10">
        <p className="truncate text-sm font-medium text-white">{game.name}</p>
        <p className="truncate text-xs text-white/75">
          {provider?.name ?? game.providerSlug}
        </p>
      </div>
    </Link>
  );
}
