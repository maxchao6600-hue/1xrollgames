import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getAllGuides, getGameBySlug, getGuideBySlug, getProviderBySlug } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { absoluteUrl, formatDate, localize } from "@/lib/utils";
import { gamePath, guidePath, localePath, providerPath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { CoverArt } from "@/components/shared/GameArt";
import { ContentBlocks } from "@/components/guides/ContentBlocks";
import { ArticleCard } from "@/components/guides/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return getAllGuides().flatMap((g) =>
    (["en", "zh"] as const).map((locale) => ({ locale, slug: g.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return buildMetadata({
    locale,
    path: `/guides/${guide.slug}`,
    title: localize(guide.title, locale),
    description: localize(guide.excerpt, locale),
    type: "article",
  });
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const dict = getDictionary(locale);
  const title = localize(guide.title, locale);
  const related = getAllGuides()
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "guides.hubTitle"), href: localePath(locale, "/guides") },
            { label: title },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
              {
                name: t(dict, "guides.hubTitle"),
                url: absoluteUrl(localePath(locale, "/guides")),
              },
              {
                name: title,
                url: absoluteUrl(guidePath(locale, guide.slug)),
              },
            ]),
            articleJsonLd({
              title,
              description: localize(guide.excerpt, locale),
              url: absoluteUrl(guidePath(locale, guide.slug)),
              datePublished: guide.publishedAt,
              dateModified: guide.updatedAt,
              author: guide.author,
            }),
          ]}
        />

        <p className="text-xs tracking-wide text-accent uppercase">
          {guide.category}
        </p>
        <h1 className="mt-2 max-w-3xl font-[family-name:var(--font-display)] text-4xl text-text md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-text-muted">
          {localize(guide.excerpt, locale)}
        </p>
        <p className="mt-4 text-sm text-text-faint">
          {guide.author} · {t(dict, "common.published")}{" "}
          {formatDate(guide.publishedAt, locale)} · {t(dict, "common.updated")}{" "}
          {formatDate(guide.updatedAt, locale)} · {guide.readingTimeMinutes}{" "}
          {t(dict, "common.minRead")}
        </p>

        <div className="mt-8 max-w-3xl">
          <CoverArt title={title} gradient={guide.coverGradient} />
        </div>

        <div className="mt-10">
          <ContentBlocks blocks={guide.content} locale={locale} />
        </div>

        {guide.relatedGameSlugs.length ? (
          <div className="mt-12">
            <h2 className="mb-3 text-xl text-text">
              {t(dict, "common.relatedGames")}
            </h2>
            <ul className="space-y-2">
              {guide.relatedGameSlugs.map((s) => {
                const game = getGameBySlug(s);
                if (!game) return null;
                return (
                  <li key={s}>
                    <Link
                      href={gamePath(locale, game.category, game.slug)}
                      className="text-accent hover:underline"
                    >
                      {game.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        {guide.relatedProviderSlug ? (
          <p className="mt-6 text-sm text-text-muted">
            {t(dict, "common.provider")}:{" "}
            <Link
              href={providerPath(locale, guide.relatedProviderSlug)}
              className="text-accent hover:underline"
            >
              {getProviderBySlug(guide.relatedProviderSlug)?.name ??
                guide.relatedProviderSlug}
            </Link>
          </p>
        ) : null}

        <div className="mt-10 rounded-2xl border border-border bg-bg-surface p-5 text-sm text-text-muted">
          <p>
            {locale === "zh"
              ? "请理性游戏，设定限额，并仅在合法地区参与。"
              : "Play responsibly, set limits, and only participate where it is legal."}{" "}
            <Link
              href={localePath(locale, "/responsible-gaming")}
              className="text-accent hover:underline"
            >
              {t(dict, "nav.responsible")}
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href={localePath(locale, "/games")} size="sm">
              {t(dict, "common.exploreGames")}
            </Button>
            <Button href={localePath(locale, "/guides")} variant="outline" size="sm">
              {t(dict, "common.browseGuides")}
            </Button>
          </div>
        </div>

        {related.length ? (
          <div className="mt-14">
            <h2 className="mb-5 text-2xl text-text">
              {t(dict, "common.relatedGuides")}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((g) => (
                <ArticleCard key={g.id} guide={g} locale={locale} />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
