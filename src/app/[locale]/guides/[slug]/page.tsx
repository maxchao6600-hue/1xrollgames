import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getAllGuides, getGameBySlug, getGuideBySlug, getProviderBySlug } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { absoluteUrl, formatDate, localize } from "@/lib/utils";
import { guidePath, localePath, providerPath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { CoverArt } from "@/components/shared/GameArt";
import { ArticleCard } from "@/components/guides/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import {
  FeaturedGamesRail,
  GroupedSectionGrid,
  HubCtaBand,
  RelatedCards,
} from "@/components/content/HubModules";

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
  const relatedGames = guide.relatedGameSlugs
    .map((s) => getGameBySlug(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

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
        <h1 className="mt-2 max-w-5xl font-[family-name:var(--font-display)] text-4xl text-text md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-4xl text-lg text-text-muted">
          {localize(guide.excerpt, locale)}
        </p>
        <p className="mt-4 text-sm text-text-faint">
          {guide.author} · {t(dict, "common.published")}{" "}
          {formatDate(guide.publishedAt, locale)} · {t(dict, "common.updated")}{" "}
          {formatDate(guide.updatedAt, locale)} · {guide.readingTimeMinutes}{" "}
          {t(dict, "common.minRead")}
        </p>

        <div
          className={
            guide.coverImage
              ? "mt-8 overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface md:grid md:grid-cols-2"
              : "mt-8 overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface"
          }
        >
          <div className="p-6 md:p-8">
            <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
              {locale === "zh" ? "编辑导读" : "Editorial note"}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
              {locale === "zh"
                ? "这是识读长文，不是赔率预测或必胜攻略。公开摘要不能替代平台全文条款。读完后用相关游戏、分类与理性游戏页继续。"
                : "This is a literacy article — not an odds forecast or a guaranteed system. Published summaries do not replace full platform terms. Continue via related games, categories and Responsible Gaming."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={localePath(locale, "/games")} size="sm">
                {t(dict, "common.exploreGames")}
              </Button>
              <Button href={localePath(locale, "/responsible-gaming")} variant="outline" size="sm">
                {t(dict, "nav.responsible")}
              </Button>
            </div>
          </div>
          {guide.coverImage ? (
            <CoverArt title={title} image={guide.coverImage} className="rounded-none" />
          ) : null}
        </div>

        <GroupedSectionGrid blocks={guide.content} locale={locale} />

        <FeaturedGamesRail
          locale={locale}
          title={t(dict, "common.relatedGames")}
          games={relatedGames}
        />

        <RelatedCards
          title={locale === "zh" ? "继续阅读" : "Keep exploring"}
          items={[
            ...(guide.relatedProviderSlug
              ? [
                  {
                    href: providerPath(locale, guide.relatedProviderSlug),
                    title: getProviderBySlug(guide.relatedProviderSlug)?.name ?? "Provider",
                    body:
                      locale === "zh"
                        ? "打开相关厂商档案。"
                        : "Open the related studio profile.",
                  },
                ]
              : []),
            {
              href: localePath(locale, "/guides"),
              title: t(dict, "guides.hubTitle"),
              body: locale === "zh" ? "返回攻略中心。" : "Back to the guides hub.",
            },
            {
              href: localePath(locale, "/games"),
              title: t(dict, "nav.games"),
              body: locale === "zh" ? "进入游戏库。" : "Enter the game library.",
            },
            {
              href: localePath(locale, "/responsible-gaming"),
              title: t(dict, "nav.responsible"),
              body: locale === "zh" ? "限额与离开路径。" : "Limits and how to leave.",
            },
          ]}
        />

        <HubCtaBand
          locale={locale}
          title={
            locale === "zh" ? "把识读带回大厅" : "Take literacy back to the lobby"
          }
          body={
            locale === "zh"
              ? "请理性游戏，设定限额，并仅在合法地区参与。公开摘要不能替代平台条款。"
              : "Play responsibly, set limits, and only participate where it is legal. Published summaries do not replace platform terms."
          }
        />

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
