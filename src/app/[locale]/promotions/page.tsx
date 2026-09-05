import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { promotions } from "@/data/promotions";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { ctaConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import Image from "next/image";

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
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="overflow-hidden rounded-2xl border border-border bg-bg-surface"
            >
              {promo.image ? (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={promo.image}
                    alt={localize(promo.title, locale)}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="space-y-3 p-5">
                <h2 className="text-xl text-text">
                  {localize(promo.title, locale)}
                </h2>
                <p className="text-sm leading-relaxed text-text-muted">
                  {localize(promo.description, locale)}
                </p>
                <Link
                  href={ctaConfig.register.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-medium text-accent hover:underline"
                >
                  {localize(promo.ctaLabel, locale)} →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-text-muted">
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
