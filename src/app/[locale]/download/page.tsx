import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getEcosystemHub } from "@/data";
import { APP_ASSETS } from "@/data/assets";
import { isLocale } from "@/lib/i18n";
import { EcosystemHubView, ecosystemMetadata } from "@/components/ecosystem/EcosystemHubView";
import { Container, Section } from "@/components/ui/Container";

const SLUG = "download";
const PATH = "/download";

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
    <>
      <EcosystemHubView
        locale={raw}
        hub={hub}
        path={PATH}
        showPlatformCtas
      />
      <Section>
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-8 sm:flex-row sm:items-center">
            <Image
              src={APP_ASSETS.qr}
              alt={raw === "zh" ? "1XROLL 应用下载二维码" : "1XROLL app download QR code"}
              width={200}
              height={200}
              className="rounded-xl border border-border bg-white p-2"
            />
            <Image
              src={APP_ASSETS.screenshot}
              alt={raw === "zh" ? "1XROLL 应用截图" : "1XROLL app screenshot"}
              width={280}
              height={560}
              className="rounded-2xl border border-border"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
