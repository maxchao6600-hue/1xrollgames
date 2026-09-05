import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

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
    path: "/promotions",
    title: t(dict, "promotions.title"),
    description: t(dict, "promotions.subtitle"),
  });
}

export default async function PromotionsPage({
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
            { label: t(dict, "promotions.title") },
          ]}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "promotions.title")}
        </h1>
        <p className="mt-3 max-w-2xl text-text-muted">
          {t(dict, "promotions.subtitle")}
        </p>
        <div className="mt-10 rounded-[1.4rem] border border-dashed border-border bg-bg-elevated px-6 py-14 text-center">
          <h2 className="text-2xl text-text">{t(dict, "promotions.emptyTitle")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
            {t(dict, "promotions.emptyBody")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={localePath(locale, "/games")}>
              {t(dict, "common.exploreGames")}
            </Button>
            <Button href={localePath(locale, "/guides")} variant="outline">
              {t(dict, "common.browseGuides")}
            </Button>
          </div>
          <p className="mt-6 text-sm text-text-faint">
            <Link
              href={localePath(locale, "/responsible-gaming")}
              className="text-accent hover:underline"
            >
              {t(dict, "nav.responsible")}
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}
