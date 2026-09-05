import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { categories } from "@/data/categories";
import { getAllProviders, getGameCards } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
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
  const games = getGameCards();
  const providers = getAllProviders().map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
  }));
  const categoryOptions = categories.map((c) => ({
    id: c.id,
    name: c.name,
  }));

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
            categories={categoryOptions}
            providers={providers}
          />
        </div>
        <div className="prose-brand mt-14 max-w-3xl">
          <h2>{t(dict, "games.howToUseTitle")}</h2>
          <p>{t(dict, "games.howToUseBody")}</p>
        </div>
      </Container>
    </Section>
  );
}
