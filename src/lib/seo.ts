import type { Metadata } from "next";
import type { Locale } from "@/types/content";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import { localePath, stripLocalePrefix } from "@/lib/paths";

type BuildMetadataInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function buildMetadata({
  locale,
  path = "/",
  title,
  description,
  image = siteConfig.ogImage,
  noIndex = false,
  type = "website",
}: BuildMetadataInput): Metadata {
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} · ${siteConfig.name}`;
  const localizedPath = localePath(locale, path);
  const url = absoluteUrl(localizedPath);
  const bare = stripLocalePrefix(localizedPath);
  const ogImage = absoluteUrl(image);

  const languages: Record<string, string> = {};
  for (const loc of siteConfig.locales) {
    languages[loc] = absoluteUrl(localePath(loc, bare));
  }
  languages["x-default"] = absoluteUrl(
    localePath(siteConfig.localeDefault, bare),
  );

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    authors: [{ name: siteConfig.author }],
    alternates: {
      canonical: url,
      languages,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    email: siteConfig.supportEmail,
    description: siteConfig.description.en,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ["en", "zh"],
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: { "@type": "Organization", name: input.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
