import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CategoryId, Locale } from "@/types/content";
import { categories, getCategory, games, providers, getGamesByCategory } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { GamesExplorer } from "@/components/games/GamesExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export function generateStaticParams() {
  return categories.flatMap((c) =>
    (["en", "zh"] as const).map((locale) => ({
      locale,
      category: c.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale: raw, category: cat } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const category = getCategory(cat);
  if (!category) return {};
  return buildMetadata({
    locale,
    path: `/games/${category.slug}`,
    title: localize(category.name, locale),
    description: localize(category.shortDescription, locale),
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale: raw, category: cat } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const category = getCategory(cat);
  if (!category) notFound();
  const dict = getDictionary(locale);
  const list = getGamesByCategory(category.id as CategoryId);

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "nav.games"), href: localePath(locale, "/games") },
            { label: localize(category.name, locale) },
          ]}
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
            { name: t(dict, "nav.games"), url: absoluteUrl(localePath(locale, "/games")) },
            {
              name: localize(category.name, locale),
              url: absoluteUrl(localePath(locale, `/games/${category.slug}`)),
            },
          ])}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {localize(category.name, locale)}
        </h1>
        <p className="mt-3 max-w-2xl text-text-muted">
          {localize(category.shortDescription, locale)}
        </p>
        <div className="mt-8">
          <GamesExplorer
            locale={locale}
            games={list.length ? list : games.filter((g) => g.category === category.id)}
            categories={categories}
            providers={providers}
            initialCategory={category.id}
          />
        </div>
        <article className="prose-aether mt-14 max-w-3xl whitespace-pre-line">
          {localize(category.description, locale)}
        </article>
        <p className="mt-8 text-sm text-text-muted">
          <Link href={localePath(locale, "/providers")} className="text-accent hover:underline">
            {t(dict, "nav.providers")}
          </Link>
          {" · "}
          <Link href={localePath(locale, "/guides")} className="text-accent hover:underline">
            {t(dict, "nav.guides")}
          </Link>
          {" · "}
          <Link
            href={localePath(locale, "/responsible-gaming")}
            className="text-accent hover:underline"
          >
            {t(dict, "nav.responsible")}
          </Link>
        </p>
      </Container>
    </Section>
  );
}
