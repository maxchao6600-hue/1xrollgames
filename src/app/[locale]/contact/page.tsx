import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { siteConfig } from "@/config/site";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
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
    path: "/contact",
    title: t(dict, "contact.title"),
    description: t(dict, "contact.subtitle"),
  });
}

export default async function ContactPage({
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
            { label: t(dict, "contact.title") },
          ]}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "contact.title")}
        </h1>
        <p className="mt-3 max-w-xl text-text-muted">
          {t(dict, "contact.subtitle")}
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-bg-surface p-6">
          <p className="text-sm text-text-muted">{t(dict, "contact.emailLabel")}</p>
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="mt-2 inline-block text-lg text-accent hover:underline"
          >
            {siteConfig.supportEmail}
          </a>
          <p className="mt-6 text-sm leading-relaxed text-text-muted">
            {locale === "zh"
              ? "请说明语言偏好与主题（内容勘误、合作或一般问询）。账户与资金问题请通过 1XROLL 平台客服处理。"
              : "Please include your preferred language and topic (content correction, partnership, or general inquiry). Account and wallet issues should go through 1XROLL platform support."}
          </p>
        </div>
      </Container>
    </Section>
  );
}
