import Link from "next/link";
import type { Locale } from "@/types/content";
import { categories } from "@/data/categories";
import { getGamesByCategory } from "@/data";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

export function DiscoverByExperience({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [feature, ...rest] = categories;

  return (
    <Section>
      <Container>
        <SectionHeader
          title={t(dict, "home.discoverTitle")}
          description={t(dict, "home.discoverSubtitle")}
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <Link
            href={localePath(locale, `/games/${feature.slug}`)}
            className="group relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-border bg-bg-surface p-8 transition hover:border-accent/35"
            style={{
              background: `linear-gradient(160deg, ${feature.accent}22, transparent 55%), var(--bg-surface)`,
            }}
          >
            <p className="text-xs tracking-[0.16em] text-accent uppercase">
              {locale === "zh" ? "精选" : "Feature"}
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
              {localize(feature.name, locale)}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
              {localize(feature.shortDescription, locale)}
            </p>
            <p className="mt-6 text-sm text-text-faint">
              {locale === "zh"
                ? `${getGamesByCategory(feature.id).length} 款游戏`
                : `${getGamesByCategory(feature.id).length} games`}
            </p>
            <span className="mt-8 inline-flex text-sm font-medium text-accent">
              {t(dict, "common.explore")} →
            </span>
          </Link>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
            {rest.map((cat, i) => (
              <Link
                key={cat.id}
                href={localePath(locale, `/games/${cat.slug}`)}
                className={`rounded-2xl border border-border bg-bg-elevated p-5 transition hover:border-accent/30 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-medium text-text">
                      {localize(cat.name, locale)}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {localize(cat.shortDescription, locale)}
                    </p>
                  </div>
                  <span
                    className="mt-1 h-2.5 w-2.5 rounded-full"
                    style={{ background: cat.accent }}
                    aria-hidden
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-text-faint">
                    {locale === "zh"
                      ? `${getGamesByCategory(cat.id).length} 款游戏`
                      : `${getGamesByCategory(cat.id).length} games`}
                  </span>
                  <span className="text-accent">{t(dict, "common.explore")} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
