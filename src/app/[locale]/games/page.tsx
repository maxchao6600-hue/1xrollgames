import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { categories } from "@/data/categories";
import { games } from "@/data/games";
import { providers } from "@/data/providers";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { GamesExplorer } from "@/components/games/GamesExplorer";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/games",
    title: t(dict, "games.hubTitle"),
    description: t(dict, "games.hubSubtitle"),
  });
}

export default async function GamesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "games.hubTitle") },
          ]}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
            { name: t(dict, "games.hubTitle"), url: absoluteUrl(localePath(locale, "/games")) },
          ])}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "games.hubTitle")}
        </h1>
        <p className="mt-3 max-w-2xl text-text-muted">
          {t(dict, "games.hubSubtitle")}
        </p>
        <div className="mt-8">
          <GamesExplorer
            locale={locale}
            games={games}
            categories={categories}
            providers={providers}
          />
        </div>
        <div className="prose-aether mt-14 max-w-3xl">
          <h2>
            {locale === "zh" ? "如何使用游戏中心" : "How to use the games hub"}
          </h2>
          <p>
            {locale === "zh"
              ? "用名称搜索，或按分类与厂商筛选。结果留在本页，不会生成可被索引的查询 URL。想了解某款作品时，进入详情页阅读机制说明，再通过内链前往厂商档案或相关攻略。分类页提供更长的主题介绍；若你更关心工作室风格，从厂商索引开始通常更快。"
              : "Search by name or filter by category and studio. Results stay on this page and do not create indexable query URLs. When a title looks interesting, open its detail page for mechanics notes, then follow internal links to the provider profile or a related guide. Category pages offer longer topical introductions; if studio style matters more to you, start from the providers index."}
          </p>
          <p>
            {locale === "zh"
              ? `当前库包含 ${games.length} 款作品，覆盖 ${categories.map((c) => localize(c.name, locale)).join("、")}。我们只展示已撰写内容的条目，避免近重复的模板页。`
              : `The library currently lists ${games.length} titles across ${categories.map((c) => localize(c.name, locale)).join(", ")}. We only publish entries with real editorial copy — not near-duplicate templates.`}
          </p>
        </div>
      </Container>
    </Section>
  );
}
