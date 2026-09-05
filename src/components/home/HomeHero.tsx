import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { getFeaturedGames } from "@/data";
import { getDictionary, t } from "@/lib/i18n";
import { localePath, gamePath } from "@/lib/paths";
import { ctaConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { GameArt } from "@/components/shared/GameArt";

export function HomeHero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const showcase = getFeaturedGames(4);
  const [primary, ...rest] = showcase;

  return (
    <section className="section-space border-b border-border/60 pt-8 md:pt-12">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="fade-in">
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            {t(dict, "home.heroEyebrow")}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.8vw,3.5rem)] leading-[1.08] text-text">
            {t(dict, "home.heroTitle")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
            {t(dict, "home.heroSubtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
          <p className="mt-5 text-sm text-text-faint">
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
          <div className="grid grid-cols-12 gap-3">
            <Link
              href={gamePath(locale, primary.category, primary.slug)}
              className="col-span-7 row-span-2 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow)] transition hover:border-accent/40"
            >
              <GameArt
                name={primary.name}
                gradient={primary.imageGradient}
                image={primary.image}
                className="aspect-[3/4] rounded-none sm:aspect-[4/5]"
                priority
              />
            </Link>
            <div className="col-span-5 flex flex-col gap-3">
              {rest.slice(0, 2).map((game) => (
                <Link
                  key={game.id}
                  href={gamePath(locale, game.category, game.slug)}
                  className="overflow-hidden rounded-xl border border-border transition hover:border-accent/40"
                >
                  <GameArt
                    name={game.name}
                    gradient={game.imageGradient}
                    image={game.image}
                    className="aspect-[3/4] rounded-none"
                  />
                </Link>
              ))}
            </div>
            {rest[2] ? (
              <Link
                href={gamePath(locale, rest[2].category, rest[2].slug)}
                className="col-span-12 overflow-hidden rounded-xl border border-border sm:col-span-5 sm:col-start-8"
              >
                <div className="relative aspect-[16/7] sm:aspect-[3/2]">
                  {rest[2].image ? (
                    <Image
                      src={rest[2].image}
                      alt={rest[2].name}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 280px"
                    />
                  ) : (
                    <GameArt
                      name={rest[2].name}
                      gradient={rest[2].imageGradient}
                      className="h-full rounded-none"
                    />
                  )}
                </div>
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
