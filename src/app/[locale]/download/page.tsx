import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getEcosystemHub, getFaqByGroup } from "@/data";
import { APP_ASSETS, HUB_ASSETS } from "@/data/assets";
import { ctaConfig } from "@/config/site";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { absoluteUrl, localize } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  HubAnchorNav,
  HubCtaBand,
  HubH2,
  InfoGrid,
  JourneyStrip,
  RelatedCards,
} from "@/components/content/HubModules";
import { DevicePhone, DeviceTablet, HubArt } from "@/components/content/HubVisuals";

const PATH = "/download";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const hub = getEcosystemHub("download");
  if (!hub) return {};
  return buildMetadata({
    locale,
    path: PATH,
    title: localize(hub.title, locale),
    description: localize(hub.summary, locale),
  });
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const hub = getEcosystemHub("download");
  if (!hub) notFound();
  const dict = getDictionary(locale);
  const faq = getFaqByGroup("download");
  const zh = locale === "zh";
  const lp = (path: string) => localePath(locale, path);
  const title = localize(hub.title, locale);

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: lp("/") },
            { label: t(dict, "nav.download") },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(lp("/")) },
              { name: t(dict, "nav.download"), url: absoluteUrl(lp(PATH)) },
            ]),
            faqJsonLd(
              faq.map((item) => ({
                question: localize(item.question, locale),
                answer: localize(item.answer, locale),
              })),
            ),
          ]}
        />

        <div className="overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface p-7 md:grid md:grid-cols-2 md:items-center md:gap-10 md:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              {zh ? "访问枢纽" : "Access hub"}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              {localize(hub.intro, locale)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={ctaConfig.play.href} external>
                {t(dict, "common.openPlatform")}
              </Button>
              <Button href={lp("/register")} variant="secondary">
                {t(dict, "nav.register")}
              </Button>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-center gap-6 md:mt-0">
            <DevicePhone locale={locale} priority />
            <div className="mb-2 w-[148px] overflow-hidden rounded-2xl border border-border bg-white p-2">
              <Image
                src={APP_ASSETS.qr}
                alt={zh ? "1XROLL 访问导览二维码" : "1XROLL access orientation QR code"}
                width={148}
                height={148}
                priority
              />
            </div>
          </div>
        </div>

        <HubAnchorNav
          ariaLabel={zh ? "本页目录" : "On this page"}
          items={
            zh
              ? [
                  { href: "#access", label: "访问方式" },
                  { href: "#devices", label: "设备" },
                  { href: "#how", label: "步骤" },
                  { href: "#faq", label: "常见问题" },
                ]
              : [
                  { href: "#access", label: "Access" },
                  { href: "#devices", label: "Devices" },
                  { href: "#how", label: "Steps" },
                  { href: "#faq", label: "FAQ" },
                ]
          }
        />

        <div id="access" className="scroll-mt-28">
          <InfoGrid
            title={zh ? "支持的访问方式" : "Access options"}
            subtitle={
              zh
                ? "只列出当前项目已核实的路径。本站不托管应用商店上架，也不提供非官方安装包。"
                : "Only verified paths for this project. This site does not host an app-store listing or unofficial install packages."
            }
            columns={3}
            items={
              zh
                ? [
                    {
                      title: "手机网页",
                      body: "在手机浏览器打开本品牌站或平台。截图为当前 1XROLL 网页界面，不是虚构的原生应用。",
                    },
                    {
                      title: "桌面网页",
                      body: "在桌面浏览器访问 1XROLL 品牌站与平台。无需编造桌面客户端。",
                    },
                    {
                      title: "官方二维码 / 平台 CTA",
                      body: "识别本页官方导览素材，再通过平台 CTA 获取（若提供）当前访问或安装选项。",
                    },
                  ]
                : [
                    {
                      title: "Mobile web",
                      body: "Open this brand site or the platform in a phone browser. The screenshot is the current 1XROLL web interface — not a fabricated native app.",
                    },
                    {
                      title: "Desktop web",
                      body: "Use a desktop browser for the 1XROLL brand site and platform. No invented desktop client.",
                    },
                    {
                      title: "Official QR / platform CTA",
                      body: "Recognise official orientation materials on this page, then follow platform CTAs for current access or install options when offered.",
                    },
                  ]
            }
          />
        </div>

        <div id="devices" className="scroll-mt-28 mt-12 md:mt-16">
          <HubH2>{zh ? "手机 · 平板 · 桌面" : "Mobile · Tablet · Desktop"}</HubH2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
            {zh
              ? "三张卡片对应真实网页体验。平板使用同一份官方网页截图；桌面为品牌站浏览器示意，不是伪造的账户后台。"
              : "Three cards map to the real web experience. Tablet uses the same official web screenshot; desktop is a brand-site browser illustration — not a fake account dashboard."}
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className="flex h-full flex-col rounded-[1.25rem] border border-border bg-bg-surface p-5">
              <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
                {zh ? "手机" : "Mobile"}
              </p>
              <div className="mt-4 flex flex-1 items-center justify-center py-2">
                <DevicePhone locale={locale} />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-text">
                {zh ? "手机网页" : "Mobile web"}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {zh
                  ? "官方网页界面示意，便于识别真实 1XROLL 入口。"
                  : "Official web interface preview so you can recognise a real 1XROLL entry."}
              </p>
            </article>
            <article className="flex h-full flex-col rounded-[1.25rem] border border-border bg-bg-surface p-5">
              <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
                {zh ? "平板" : "Tablet"}
              </p>
              <div className="mt-4 flex flex-1 items-center justify-center py-2">
                <DeviceTablet locale={locale} />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-text">
                {zh ? "更大屏幕上的网页" : "Web on a larger screen"}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {zh
                  ? "同一套网页体验，放在平板比例的设备框中。"
                  : "The same web experience, framed at a tablet proportion."}
              </p>
            </article>
            <article className="flex h-full flex-col rounded-[1.25rem] border border-border bg-bg-surface p-5">
              <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
                {zh ? "桌面" : "Desktop"}
              </p>
              <div className="mt-4">
                <HubArt
                  src={HUB_ASSETS.downloadDesktop}
                  alt={zh ? "1XROLL 桌面与手机访问" : "1XROLL on mobile and desktop"}
                  aspectClass="aspect-[16/10]"
                />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-text">
                {zh ? "桌面浏览器" : "Desktop browser"}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {zh
                  ? "品牌站信息架构示意：游戏、优惠、奖励、攻略、VIP。"
                  : "Illustration of the brand-site information architecture: games, promotions, rewards, guides, VIP."}
              </p>
            </article>
          </div>
        </div>

        <div id="how" className="scroll-mt-28">
          <JourneyStrip
            title={zh ? "如何访问" : "How to access"}
            subtitle={
              zh
                ? "这是访问识读路径。登录、注册与安装选项以平台当前展示为准。"
                : "This is an access literacy path. Login, register and any install options follow what the platform currently shows."
            }
            steps={
              zh
                ? [
                    { title: "选择设备", body: "手机、平板或桌面浏览器均可阅读本站。" },
                    { title: "打开 1XROLL 访问页", body: "你正在阅读的枢纽，含官方截图与二维码。" },
                    { title: "登录 / 注册（如适用）", body: "使用本站入口，再按需打开平台。" },
                    { title: "开始探索", body: "从游戏库、优惠与攻略继续——不要安装非官方包。" },
                  ]
                : [
                    { title: "Choose your device", body: "Phone, tablet or desktop browser can read this site." },
                    { title: "Open the 1XROLL access page", body: "This hub, including official screenshot and QR materials." },
                    { title: "Sign in / register where applicable", body: "Use this site’s entries, then open the platform as needed." },
                    { title: "Start exploring", body: "Continue via Games, Promotions and Guides — never unofficial packages." },
                  ]
            }
          />
        </div>

        <InfoGrid
          title={zh ? "访问前核对" : "Check before you continue"}
          columns={4}
          items={
            zh
              ? [
                  { title: "官方 CTA", body: "安装选项只在平台提供时跟随官方路径。" },
                  { title: "是否需要登录", body: "账户操作在平台完成，不在本品牌站伪造后台。" },
                  { title: "不要非官方包", body: "避开第三方镜像、聊天链接或未知 APK。" },
                  { title: "理性限额仍有效", body: "移动访问不改变理性游戏原则。" },
                ]
              : [
                  { title: "Official CTA", body: "Install options follow official paths only when the platform offers them." },
                  { title: "Login if required", body: "Account actions complete on the platform — this site does not invent a dashboard." },
                  { title: "No unofficial packages", body: "Avoid third-party mirrors, chat links or unknown APKs." },
                  { title: "Limits still apply", body: "Mobile access does not change responsible-gaming principles." },
                ]
          }
        />

        {faq.length ? (
          <div id="faq" className="mt-14 scroll-mt-28">
            <HubH2>{zh ? "访问常见问题" : "Access FAQ"}</HubH2>
            <div className="mt-5">
              <Accordion
                items={faq.map((item) => ({
                  id: item.id,
                  title: localize(item.question, locale),
                  content: localize(item.answer, locale),
                }))}
              />
            </div>
            <p className="mt-4 text-sm text-text-muted">
              <Link href={lp("/faq")} className="text-accent hover:underline">
                {zh ? "查看全部常见问题" : "View all FAQ"} →
              </Link>
            </p>
          </div>
        ) : null}

        <RelatedCards
          title={zh ? "相关内容" : "Related content"}
          items={hub.relatedHrefs.map((item) => ({
            href: lp(item.href),
            title: localize(item.label, locale),
            body: zh ? "继续阅读相关枢纽。" : "Continue to the related hub.",
          }))}
        />

        <HubCtaBand
          locale={locale}
          title={zh ? "从官方路径进入 1XROLL" : "Enter 1XROLL through official paths"}
          body={
            zh
              ? "先认准本页导览素材，再打开平台。不要从非官方链接下载安装包。"
              : "Recognise the orientation materials on this page, then open the platform. Do not download packages from unofficial links."
          }
          actions={[
            { href: ctaConfig.play.href, label: t(dict, "common.openPlatform"), variant: "primary", external: true },
            { href: lp("/register"), label: t(dict, "nav.register"), variant: "secondary" },
            { href: lp("/games"), label: t(dict, "nav.games"), variant: "outline" },
          ]}
        />
      </Container>
    </Section>
  );
}
