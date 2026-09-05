import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CategoryId, Locale } from "@/types/content";
import { categories, getCategory, games, providers, getGamesByCategory } from "@/data";
import { ctaConfig } from "@/config/site";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { GamesExplorer } from "@/components/games/GamesExplorer";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return categories
    .filter((c) => c.routeBase !== "top")
    .flatMap((c) =>
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
  if (category.routeBase === "top") notFound();
  const dict = getDictionary(locale);
  const list = getGamesByCategory(category.id as CategoryId);
  const isHub = category.inventoryMode === "hub";

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

        {isHub ? (
          <>
            <article className="prose-brand mt-8 max-w-3xl whitespace-pre-line">
              {localize(category.description, locale)}
            </article>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={ctaConfig.play.href} external>
                {locale === "zh" ? "前往平台" : "Open platform"}
              </Button>
              <Button href={localePath(locale, "/fair-play")} variant="secondary">
                {locale === "zh" ? "公平游戏" : "Fair Play"}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-8">
              <GamesExplorer
                locale={locale}
                games={list.length ? list : games.filter((g) => g.category === category.id)}
                categories={categories}
                providers={providers}
                initialCategory={category.id}
              />
            </div>
            <article className="prose-brand mt-14 max-w-3xl whitespace-pre-line">
              {localize(category.description, locale)}
            </article>
          </>
        )}

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
          {isHub ? (
            <>
              {" · "}
              <Link href={localePath(locale, "/fair-play")} className="text-accent hover:underline">
                {locale === "zh" ? "公平游戏" : "Fair Play"}
              </Link>
            </>
          ) : null}
        </p>
      </Container>
    </Section>
  );
}
