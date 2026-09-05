import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getEcosystemHub, getFaqByGroup } from "@/data";
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
        faqItems={getFaqByGroup("download").slice(0, 4)}
      />
      <Section className="pt-0">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-8 rounded-[1.35rem] border border-border bg-bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
            <Image
              src={APP_ASSETS.qr}
              alt={raw === "zh" ? "1XROLL 下载导览二维码" : "1XROLL download orientation QR code"}
              width={200}
              height={200}
              className="rounded-xl border border-border bg-white p-2"
            />
            <div className="space-y-4">
              <Image
                src={APP_ASSETS.screenshot}
                alt={raw === "zh" ? "1XROLL 移动端界面示意" : "1XROLL mobile interface preview"}
                width={220}
                height={440}
                className="rounded-2xl border border-border"
              />
              <p className="max-w-sm text-sm text-text-muted">
                {raw === "zh"
                  ? "二维码与截图用于官方导览识别。安装包请仅通过平台 CTA 提供的官方路径获取。"
                  : "QR and screenshot assets are for official orientation. Obtain install packages only through official paths offered by platform CTAs."}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
