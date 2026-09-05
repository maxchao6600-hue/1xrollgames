import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { faqItems } from "@/data/faq";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
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
    path: "/faq",
    title: t(dict, "faq.title"),
    description: t(dict, "faq.subtitle"),
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const items = faqItems.map((item) => ({
    id: item.id,
    title: localize(item.question, locale),
    content: localize(item.answer, locale),
  }));

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "faq.title") },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
              { name: t(dict, "faq.title"), url: absoluteUrl(localePath(locale, "/faq")) },
            ]),
            faqJsonLd(
              items.map((i) => ({ question: i.title, answer: i.content })),
            ),
          ]}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "faq.title")}
        </h1>
        <p className="mt-3 max-w-2xl text-text-muted">
          {t(dict, "faq.subtitle")}
        </p>
        <div className="mt-8">
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
