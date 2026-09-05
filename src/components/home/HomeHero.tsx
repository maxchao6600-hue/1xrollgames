import type { Locale } from "@/types/content";
import { categories } from "@/data/categories";
import { games } from "@/data/games";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GameArt } from "@/components/shared/GameArt";

export function HomeHero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const mosaic = games.filter((g) => g.status).slice(0, 5);

  return (
    <section className="section-space pt-10 md:pt-16">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="fade-in">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Aether
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.08] text-text">
            {t(dict, "home.heroTitle")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
            {t(dict, "home.heroSubtitle")}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm text-text-muted">
            {categories.map((c) => (
              <li
                key={c.id}
                className="rounded-full border border-border bg-bg-surface px-3 py-1"
              >
                {localize(c.name, locale)}
              </li>
            ))}
            <li className="rounded-full border border-border bg-bg-surface px-3 py-1">
              {t(dict, "nav.guides")}
            </li>
            <li className="rounded-full border border-border bg-bg-surface px-3 py-1">
              {t(dict, "nav.providers")}
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={localePath(locale, "/games")} size="lg">
              {t(dict, "common.exploreGames")}
            </Button>
            <Button
              href={localePath(locale, "/guides")}
              variant="outline"
              size="lg"
            >
              {t(dict, "common.readGuides")}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-lg grid-cols-12 gap-3 lg:max-w-none">
          {mosaic.map((game, index) => {
            const layouts = [
              "col-span-7 row-span-2 float-soft",
              "col-span-5 mt-8",
              "col-span-5 -mt-4",
              "col-span-7",
              "col-span-12 sm:col-span-6 sm:col-start-4",
            ];
            return (
              <div
                key={game.id}
                className={`mosaic-card ${layouts[index] ?? "col-span-6"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="overflow-hidden rounded-[1.2rem] border border-border shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-accent/40">
                  <GameArt
                    name={game.name}
                    gradient={game.imageGradient}
                    className="aspect-[4/5]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
