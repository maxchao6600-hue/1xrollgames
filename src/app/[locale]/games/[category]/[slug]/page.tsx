import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import {
  getCategory,
  games,
  getGameBySlug,
  getProviderBySlug,
  getAllGuides,
  relatedGames,
} from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { gamePath, localePath, providerPath, guidePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { GameArt } from "@/components/shared/GameArt";
import { GameCard } from "@/components/games/GameCard";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return games.flatMap((g) =>
    (["en", "zh"] as const).map((locale) => ({
      locale,
      category: g.category,
      slug: g.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const game = getGameBySlug(slug);
  if (!game) return {};
  return buildMetadata({
    locale,
    path: `/games/${game.category}/${game.slug}`,
    title: game.name,
    description: localize(game.shortDescription, locale),
  });
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale: raw, category: cat, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const game = getGameBySlug(slug);
  if (!game || game.category !== cat) notFound();
  const dict = getDictionary(locale);
  const category = getCategory(game.category);
  const provider = getProviderBySlug(game.providerSlug);
  const related = relatedGames(game.slug, 4);
  const relatedGuides = getAllGuides().filter((g) =>
    g.relatedGameSlugs.includes(game.slug),
  );

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "nav.games"), href: localePath(locale, "/games") },
            {
              label: category ? localize(category.name, locale) : game.category,
              href: localePath(locale, `/games/${game.category}`),
            },
            { label: game.name },
          ]}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
            { name: t(dict, "nav.games"), url: absoluteUrl(localePath(locale, "/games")) },
            {
              name: category ? localize(category.name, locale) : game.category,
              url: absoluteUrl(localePath(locale, `/games/${game.category}`)),
            },
            {
              name: game.name,
              url: absoluteUrl(gamePath(locale, game.category, game.slug)),
            },
          ])}
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative max-w-md">
            <GameArt name={game.name} gradient={game.imageGradient} />
            {game.status ? (
              <div className="absolute top-4 left-4">
                <Badge tone={game.status === "hot" ? "hot" : game.status === "featured" ? "violet" : "accent"}>
                  {t(dict, `badge.${game.status}`)}
                </Badge>
              </div>
            ) : null}
          </div>
          <div>
            <p className="text-sm text-accent">
              {provider ? (
                <Link href={providerPath(locale, provider.slug)} className="hover:underline">
                  {provider.name}
                </Link>
              ) : (
                game.providerSlug
              )}
              {" · "}
              {category ? localize(category.name, locale) : game.category}
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-text">
              {game.name}
            </h1>
            <p className="mt-4 text-text-muted">
              {localize(game.shortDescription, locale)}
            </p>
            {typeof game.rtp === "number" ? (
              <p className="mt-4 text-sm text-text-muted">RTP: {game.rtp}%</p>
            ) : null}
            {game.volatility ? (
              <p className="mt-2 text-sm text-text-muted">
                Volatility: {game.volatility}
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={localePath(locale, "/games")}>
                {t(dict, "common.exploreGames")}
              </Button>
              {provider ? (
                <Button href={providerPath(locale, provider.slug)} variant="outline">
                  {provider.name}
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="prose-brand mt-12 max-w-3xl">
          <h2>{t(dict, "games.overview")}</h2>
          <p className="whitespace-pre-line">{localize(game.description, locale)}</p>
          <h2>{t(dict, "games.howToPlay")}</h2>
          <p>{localize(game.howToPlay, locale)}</p>
          <h2>{t(dict, "games.features")}</h2>
          <ul>
            {(locale === "zh" ? game.features.zh : game.features.en).map((f: string) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p>
            <Link
              href={localePath(locale, "/responsible-gaming")}
              className="text-accent hover:underline"
            >
              {t(dict, "nav.responsible")}
            </Link>
          </p>
        </div>

        {related.length ? (
          <div className="mt-14">
            <h2 className="mb-5 text-2xl text-text">{t(dict, "common.relatedGames")}</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((g) => (
                <div key={g.id} className="[&_article]:w-full">
                  <GameCard game={g} locale={locale} />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {relatedGuides.length ? (
          <div className="mt-12">
            <h2 className="mb-4 text-2xl text-text">{t(dict, "common.relatedGuides")}</h2>
            <ul className="space-y-2">
              {relatedGuides.map((g) => (
                <li key={g.id}>
                  <Link
                    href={guidePath(locale, g.slug)}
                    className="text-accent hover:underline"
                  >
                    {localize(g.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
