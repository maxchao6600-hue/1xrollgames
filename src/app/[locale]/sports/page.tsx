import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getEcosystemHub,
  getCategoryPageContent,
  getFaqByIds,
} from "@/data";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localize } from "@/lib/utils";
import { EcosystemHubView, ecosystemMetadata } from "@/components/ecosystem/EcosystemHubView";

const SLUG = "sports";
const PATH = "/sports";
const CATEGORY_ID = "sports" as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const deep = getCategoryPageContent(CATEGORY_ID);
  if (deep) {
    return buildMetadata({
      locale: raw,
      path: PATH,
      title: localize(deep.pageTitle, raw),
      description: localize(deep.intro, raw),
    });
  }
  const hub = getEcosystemHub(SLUG);
  if (!hub) return {};
  return ecosystemMetadata(raw, hub, PATH);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const hub = getEcosystemHub(SLUG);
  if (!hub) notFound();
  const deep = getCategoryPageContent(CATEGORY_ID);
  const faqItems = deep ? getFaqByIds(deep.faqIds) : [];
  return (
    <EcosystemHubView
      locale={raw}
      hub={hub}
      path={PATH}
      categoryId={CATEGORY_ID}
      deepContent={deep}
      faqItems={faqItems}
    />
  );
}
