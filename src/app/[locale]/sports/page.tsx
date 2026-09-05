import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEcosystemHub, getFaqByGroup } from "@/data";
import { isLocale } from "@/lib/i18n";
import { EcosystemHubView, ecosystemMetadata } from "@/components/ecosystem/EcosystemHubView";

const SLUG = "sports";
const PATH = "/sports";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
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
  return (
    <EcosystemHubView
      locale={raw}
      hub={hub}
      path={PATH}
      categoryId="sports"
      faqItems={getFaqByGroup("games").slice(0, 4)}
    />
  );
}
