import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { categories, getFaqByIds } from "@/data";
import { APP_ASSETS } from "@/data/assets";
import { categoryPath } from "@/data/categories";
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
  ChecklistPanel,
  ComparisonTable,
  HubAnchorNav,
  HubCtaBand,
  HubH2,
  InfoGrid,
  JourneyStrip,
  RelatedCards,
} from "@/components/content/HubModules";
import { DeviceDesktop, DevicePhone, DeviceTablet } from "@/components/content/HubVisuals";

const PATH = "/download";
const FAQ_IDS = [
  "download-how",
  "download-faq",
  "download-desktop",
  "download-tablet",
  "download-app",
  "download-games",
  "download-promos",
  "download-rewards",
  "download-load",
  "download-browser",
  "download-homescreen",
  "download-guides",
  "ios-access",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    path: PATH,
    title:
      locale === "zh"
        ? "1XROLL 下载与访问 | 手机、桌面与平台导览"
        : "1XROLL Download & Access | Mobile, Desktop & Platform Guide",
    description:
      locale === "zh"
        ? "了解如何通过手机、平板与桌面浏览器访问 1XROLL：游戏库、优惠、奖励与平台导览。本站不托管未核实的应用商店上架。"
        : "Learn how to access 1XROLL on mobile, tablet and desktop browsers — including the game library, promotions, rewards and platform guidance. This site does not host unverified app-store listings.",
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
  const dict = getDictionary(locale);
  const faq = getFaqByIds([...FAQ_IDS]);
  const zh = locale === "zh";
  const lp = (path: string) => localePath(locale, path);

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
              {zh ? "下载与访问" : "Download & Access"}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
              {zh ? "1XROLL 下载与访问" : "1XROLL Download & Access"}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              {zh
                ? "选择适合你设备的方式进入 1XROLL 生态。本枢纽说明手机、平板与桌面浏览器访问，以及进入后如何继续浏览游戏、优惠与奖励。本页不托管未核实的应用商店上架或安装包。"
                : "Choose the way you want to access 1XROLL. This hub explains mobile, tablet and desktop browser access, and how to continue into games, promotions and rewards. It does not host unverified app-store listings or install packages."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={lp("/games")}>{zh ? "浏览游戏库" : "Explore Games"}</Button>
              <Button href={lp("/guides")} variant="secondary">
                {zh ? "阅读攻略" : "Read Guides"}
              </Button>
            </div>
          </div>
          <div className="mt-8 space-y-4 md:mt-0">
            <DeviceDesktop locale={locale} priority />
            <div className="flex items-end justify-center gap-5">
              <DevicePhone locale={locale} className="max-w-[160px]" />
              <div className="mb-1 w-[112px] overflow-hidden rounded-2xl border border-border bg-white p-1.5">
                <Image
                  src={APP_ASSETS.qr}
                  alt={zh ? "1XROLL 访问导览二维码" : "1XROLL access orientation QR code"}
                  width={112}
                  height={112}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <HubAnchorNav
          ariaLabel={zh ? "本页目录" : "On this page"}
          items={
            zh
              ? [
                  { href: "#devices", label: "设备" },
                  { href: "#mobile", label: "手机" },
                  { href: "#desktop", label: "桌面" },
                  { href: "#how", label: "步骤" },
                  { href: "#library", label: "游戏库" },
                  { href: "#help", label: "排障" },
                  { href: "#faq", label: "常见问题" },
                ]
              : [
                  { href: "#devices", label: "Devices" },
                  { href: "#mobile", label: "Mobile" },
                  { href: "#desktop", label: "Desktop" },
                  { href: "#how", label: "Steps" },
                  { href: "#library", label: "Games" },
                  { href: "#help", label: "Help" },
                  { href: "#faq", label: "FAQ" },
                ]
          }
        />

        <div id="devices" className="scroll-mt-28 mt-12 md:mt-16">
          <HubH2>{zh ? "按设备选择访问方式" : "Choose access by device"}</HubH2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
            {zh
              ? "三条路径都是网页访问。截图来自当前 1XROLL 网站界面，不是虚构的原生应用。"
              : "All three paths are web access. Visuals use the current 1XROLL website interface — not a fabricated native app."}
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className="flex h-full flex-col rounded-[1.25rem] border border-border bg-bg-surface p-5">
              <DevicePhone locale={locale} className="max-w-[180px]" />
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-text">
                {zh ? "手机" : "Mobile"}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {zh
                  ? "用手机浏览器探索 1XROLL。适合短时浏览分类、优惠摘要与攻略。"
                  : "Explore 1XROLL from a mobile browser. Useful for short sessions across categories, offer summaries and guides."}
              </p>
              <p className="mt-3 text-xs text-text-faint">
                {zh ? "建议：稳定网络 + 已更新的浏览器。" : "Recommended: a stable connection and an updated browser."}
              </p>
              <Link href="#mobile" className="mt-auto pt-4 text-sm font-medium text-accent">
                {zh ? "查看手机说明 →" : "Mobile guidance →"}
              </Link>
            </article>
            <article className="flex h-full flex-col rounded-[1.25rem] border border-border bg-bg-surface p-5">
              <DeviceTablet locale={locale} />
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-text">
                {zh ? "平板" : "Tablet"}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {zh
                  ? "用更大的触控界面浏览游戏与平台信息。仍是网页，不是单独的平板应用。"
                  : "Use a larger touch interface for browsing games and platform information. Still the website — not a separate tablet app."}
              </p>
              <p className="mt-3 text-xs text-text-faint">
                {zh ? "建议：横屏阅读条款与攻略更轻松。" : "Recommended: landscape reading for terms and guides."}
              </p>
            </article>
            <article className="flex h-full flex-col rounded-[1.25rem] border border-border bg-bg-surface p-5">
              <DeviceDesktop locale={locale} />
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg text-text">
                {zh ? "桌面" : "Desktop"}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {zh
                  ? "用更大屏幕获得完整网站体验：对照分类、阅读攻略与条款更从容。"
                  : "Use a larger screen for the full website experience: comparing categories and reading guides or terms."}
              </p>
              <p className="mt-3 text-xs text-text-faint">
                {zh ? "建议：需要对照多页信息时使用。" : "Recommended: when you want to compare several pages side by side."}
              </p>
              <Link href="#desktop" className="mt-auto pt-4 text-sm font-medium text-accent">
                {zh ? "查看桌面说明 →" : "Desktop guidance →"}
              </Link>
            </article>
          </div>
        </div>

        <div id="mobile" className="scroll-mt-28 mt-12 md:mt-16">
          <div className="grid items-center gap-8 rounded-[1.35rem] border border-border bg-bg-surface p-6 md:grid-cols-2 md:p-8">
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
                {zh ? "手机体验" : "Mobile experience"}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-text md:text-3xl">
                {zh ? "在手机上使用 1XROLL" : "1XROLL on Mobile"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
                {zh
                  ? "品牌站会随屏幕自适应。主导航连接游戏、优惠、奖励、VIP 与攻略；账户办理仍在登录后的平台完成。截图为当前网站界面，不是虚构应用。"
                  : "This brand site responds to smaller screens. Main navigation connects Games, Promotions, Rewards, VIP and Guides; account actions complete on the platform after login. The screenshot is the current website interface, not a fabricated app."}
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-text-muted sm:grid-cols-2">
                {(zh
                  ? ["分类发现", "优惠与奖励入口", "VIP 导览", "账户入口", "触控导航", "自适应排版"]
                  : ["Category discovery", "Promotions and rewards entries", "VIP orientation", "Account entries", "Touch navigation", "Responsive layout"]
                ).map((item) => (
                  <li key={item} className="rounded-lg border border-border bg-bg-elevated px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <DevicePhone locale={locale} className="max-w-[220px]" />
          </div>
        </div>

        <div id="desktop" className="scroll-mt-28 mt-12 md:mt-16">
          <div className="grid items-center gap-8 rounded-[1.35rem] border border-border bg-bg-surface p-6 md:grid-cols-2 md:p-8">
            <DeviceDesktop locale={locale} />
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
                {zh ? "桌面体验" : "Desktop experience"}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-text md:text-3xl">
                {zh ? "在桌面上使用 1XROLL" : "1XROLL on Desktop"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
                {zh
                  ? "更大屏幕便于对照游戏库、阅读攻略与条款、并同时打开优惠与奖励说明。这是浏览器中的网站，不是已核实的桌面客户端。"
                  : "A larger screen makes it easier to compare the library, read guides and terms, and keep promotions or rewards notes nearby. This is the website in a browser — not a verified desktop application."}
              </p>
            </div>
          </div>
        </div>

        <div id="compare" className="scroll-mt-28">
          <ComparisonTable
            title={zh ? "手机与桌面" : "Mobile vs Desktop"}
            columns={zh ? ["手机", "桌面"] : ["Mobile", "Desktop"]}
            rows={
              zh
                ? [
                    { label: "导航", cells: ["主导航垂直堆叠，适合单手浏览", "更宽的信息架构，便于对照栏目"] },
                    { label: "游戏发现", cells: ["按分类进入作品页", "同样可浏览全部分类，屏幕更从容"] },
                    { label: "攻略", cells: ["适合短时阅读", "适合对照多篇文章与条款"] },
                    { label: "优惠", cells: ["打开优惠枢纽阅读摘要", "同一枢纽，阅读条款更轻松"] },
                    { label: "奖励", cells: ["进入奖励地图", "同一地图，便于并列 VIP / 返水"] },
                    { label: "VIP", cells: ["阅读公开返水语言", "同一 VIP 枢纽"] },
                    { label: "账户入口", cells: ["登录 / 注册后进入平台", "同一账户路径"] },
                    { label: "屏幕体验", cells: ["触控、短会话", "键盘鼠标、长阅读"] },
                  ]
                : [
                    { label: "Navigation", cells: ["Main nav stacks for one-handed browsing", "Wider information architecture for comparing lanes"] },
                    { label: "Game discovery", cells: ["Enter titles via categories", "The same categories, with more room to scan"] },
                    { label: "Guides", cells: ["Useful for short reading sessions", "Easier when comparing articles and terms"] },
                    { label: "Promotions", cells: ["Open the Promotions hub for summaries", "The same hub, more comfortable for terms"] },
                    { label: "Rewards", cells: ["Open the rewards map", "The same map, easier beside VIP / rebates"] },
                    { label: "VIP", cells: ["Read published cashback language", "The same VIP hub"] },
                    { label: "Account access", cells: ["Login / Register then the platform", "The same account path"] },
                    { label: "Screen experience", cells: ["Touch, shorter sessions", "Pointer, longer reading"] },
                  ]
            }
          />
        </div>

        <div id="how" className="scroll-mt-28">
          <JourneyStrip
            title={zh ? "如何访问 1XROLL" : "How to access 1XROLL"}
            subtitle={
              zh
                ? "识读路径，不是必须安装应用。登录与注册以本站入口及平台当前展示为准。"
                : "A literacy path — not a requirement to install an app. Login and register follow this site’s entries and what the platform currently shows."
            }
            steps={
              zh
                ? [
                    { title: "选择设备", body: "手机、平板或桌面浏览器均可。" },
                    { title: "打开 1XROLL 网站", body: "先阅读本品牌站，再按需打开平台。" },
                    { title: "登录或注册（如适用）", body: "使用本站入口，账户办理在平台完成。" },
                    { title: "探索生态", body: "从游戏库、优惠、奖励与攻略继续。" },
                  ]
                : [
                    { title: "Choose your device", body: "Phone, tablet or desktop browser." },
                    { title: "Open the 1XROLL website", body: "Read this brand site, then open the platform as needed." },
                    { title: "Sign in or register where applicable", body: "Use this site’s entries; account actions complete on the platform." },
                    { title: "Explore the ecosystem", body: "Continue via Games, Promotions, Rewards and Guides." },
                  ]
            }
          />
        </div>

        <ChecklistPanel
          title={zh ? "开始前" : "Before You Start"}
          subtitle={zh ? "这些是访问习惯，不是系统检测清单。" : "Access habits — not a system diagnostic."}
          items={
            zh
              ? [
                  "使用受支持的现代浏览器",
                  "保持网络相对稳定",
                  "让浏览器保持更新",
                  "核对本站与平台当前展示的信息",
                  "妥善保管账户信息",
                  "参与前阅读相关条款",
                ]
              : [
                  "Use a supported modern browser",
                  "Make sure your internet connection is reasonably stable",
                  "Keep your browser updated",
                  "Review the current information on this site and the platform",
                  "Keep account information private",
                  "Read relevant terms before participating",
                ]
          }
        />

        <InfoGrid
          title={zh ? "进入后可以前往" : "What you can access"}
          columns={4}
          items={[
            { title: t(dict, "nav.games"), body: zh ? "分类与作品发现。" : "Categories and title discovery.", href: lp("/games") },
            { title: t(dict, "nav.promotions"), body: zh ? "已发布优惠语言。" : "Published offer language.", href: lp("/promotions") },
            { title: t(dict, "nav.rewards"), body: zh ? "礼遇地图。" : "Benefits map.", href: lp("/rewards") },
            { title: t(dict, "nav.vip"), body: zh ? "持续礼遇导览。" : "Ongoing-benefits orientation.", href: lp("/vip") },
            { title: t(dict, "nav.guides"), body: zh ? "入门与分类识读。" : "Getting started and category literacy.", href: lp("/guides") },
            { title: t(dict, "nav.faq"), body: zh ? "短问答。" : "Short answers.", href: lp("/faq") },
            { title: t(dict, "nav.providers"), body: zh ? "已核实工作室。" : "Verified studios.", href: lp("/providers") },
            { title: t(dict, "nav.responsible"), body: zh ? "限额与支持。" : "Limits and support.", href: lp("/responsible-gaming") },
          ]}
        />

        <div id="library" className="scroll-mt-28 mt-12 md:mt-16">
          <HubH2>{zh ? "进入游戏库" : "Access the Game Library"}</HubH2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
            {zh
              ? "以下分类均存在于当前站点架构。分类页用于发现与识读；实时游玩在登录后的平台大厅。"
              : "These categories exist in the current site architecture. Category pages are for discovery and literacy; live play remains in the platform lobby after login."}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={lp(categoryPath(cat.id))}
                className="rounded-[1.15rem] border border-border bg-bg-surface p-4 transition hover:border-accent/40"
              >
                <h3 className="font-medium text-text">{localize(cat.name, locale)}</h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-text-muted">
                  {localize(cat.shortDescription, locale)}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <InfoGrid
          title={zh ? "账户与平台入口" : "Account and platform access"}
          columns={4}
          items={[
            { title: t(dict, "nav.login"), body: zh ? "本站登录入口，办理在平台完成。" : "Site login entry; actions complete on the platform.", href: lp("/login") },
            { title: t(dict, "nav.register"), body: zh ? "本站注册入口。" : "Site registration entry.", href: lp("/register") },
            { title: t(dict, "nav.deposit"), body: zh ? "存款概念导览。" : "Deposit orientation.", href: lp("/deposit") },
            { title: t(dict, "nav.withdraw"), body: zh ? "取款概念导览。" : "Withdrawal orientation.", href: lp("/withdraw") },
            { title: t(dict, "nav.promotions"), body: zh ? "优惠枢纽。" : "Promotions hub.", href: lp("/promotions") },
            { title: t(dict, "nav.rewards"), body: zh ? "奖励地图。" : "Rewards map.", href: lp("/rewards") },
            { title: t(dict, "nav.vip"), body: zh ? "VIP 枢纽。" : "VIP hub.", href: lp("/vip") },
            { title: zh ? "打开平台" : "Open platform", body: zh ? "准备实时办理时使用。" : "Use when you are ready for live actions.", href: ctaConfig.play.href },
          ]}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:mt-16">
          <article className="rounded-[1.35rem] border border-border bg-bg-surface p-6">
            <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
              {zh ? "优惠" : "Promotions"}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl text-text">
              {zh ? "查看当前优惠语言" : "Find current offer language"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {zh
                ? "优惠枢纽汇总已发布活动摘要。加入前请阅读资格、流水与有效期——细则以平台为准。"
                : "The Promotions hub summarises published offers. Review eligibility, wagering and expiry before opting in — live details follow the platform."}
            </p>
            <div className="mt-5">
              <Button href={lp("/promotions")} variant="secondary">
                {zh ? "查看优惠" : "View Promotions"}
              </Button>
            </div>
          </article>
          <article className="rounded-[1.35rem] border border-border bg-bg-surface p-6">
            <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
              {zh ? "奖励" : "Rewards"}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl text-text">
              {zh ? "浏览奖励地图" : "Explore reward information"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {zh
                ? "奖励中心把活动、返水、VIP 与优惠放在同一张地图上。它不同于单次限时优惠。"
                : "Rewards places activity, rebates, VIP and promotions on one map. It is different from a single timed offer."}
            </p>
            <div className="mt-5">
              <Button href={lp("/rewards")} variant="secondary">
                {zh ? "探索奖励" : "Explore Rewards"}
              </Button>
            </div>
          </article>
        </div>

        <div className="mt-4 rounded-[1.35rem] border border-accent/25 bg-bg-surface p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">VIP</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl text-text">
              {zh ? "继续阅读 VIP 导览" : "Continue with VIP orientation"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {zh
                ? "VIP 枢纽说明持续关系通道与已核实的公开返水语言。资格与实时状态以平台为准。"
                : "The VIP hub explains the ongoing relationship lane and published cashback language. Eligibility and live status follow the platform."}
            </p>
          </div>
          <div className="mt-5 md:mt-0">
            <Button href={lp("/vip")}>{zh ? "探索 VIP" : "Explore VIP"}</Button>
          </div>
        </div>

        <div className="mt-4 rounded-[1.35rem] border border-border bg-bg-surface p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-text md:text-2xl">
            {zh ? "需要入门帮助？" : "Need help getting started?"}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted">
            {zh
              ? "攻略中心覆盖入门、游戏分类、优惠、奖励、钱包、平台功能、公平游戏与理性游戏。先阅读再进入平台。"
              : "The Guides hub covers getting started, game categories, promotions, rewards, wallet concepts, platform features, fair play and responsible gaming. Read first, then continue to the platform."}
          </p>
          <div className="mt-5">
            <Button href={lp("/guides")} variant="secondary">
              {zh ? "阅读 1XROLL 攻略" : "Read 1XROLL Guides"}
            </Button>
          </div>
        </div>

        <InfoGrid
          title={zh ? "建议的访问准备" : "Recommended access setup"}
          columns={3}
          items={
            zh
              ? [
                  { title: "浏览器", body: "使用你正在更新的现代浏览器。本站不指定厂商排名。" },
                  { title: "网络", body: "尽量使用稳定连接；信号差时先阅读、稍后再办理。" },
                  { title: "设备", body: "手机、平板或桌面均可；按阅读舒适度选择。" },
                  { title: "屏幕", body: "条款与攻略在较大屏幕上更易对照。" },
                  { title: "账户安全", body: "不要分享登录信息，也不要从不明链接进入账户。" },
                  { title: "快捷方式", body: "书签或主屏幕快捷方式仍打开网站，不是原生应用。" },
                ]
              : [
                  { title: "Browser", body: "Use a modern browser you keep updated. This site does not rank vendors." },
                  { title: "Connection", body: "Prefer a stable connection; if the signal is weak, read first and transact later." },
                  { title: "Device", body: "Phone, tablet or desktop — choose what you can read comfortably." },
                  { title: "Screen", body: "Terms and guides are easier to compare on a larger display." },
                  { title: "Account security", body: "Do not share credentials or follow unknown links into an account." },
                  { title: "Shortcuts", body: "Bookmarks or home-screen shortcuts still open the website — not a native app." },
                ]
          }
        />

        <div id="help" className="scroll-mt-28">
          <InfoGrid
            title={zh ? "常见访问问题" : "Troubleshooting"}
            subtitle={
              zh
                ? "先做这些一般检查。不要用非官方安装包当作修复手段。"
                : "Start with these general checks. Do not treat unofficial packages as a fix."
            }
            columns={3}
            items={
              zh
                ? [
                    { title: "页面打不开", body: "核对地址、刷新、检查网络。仍失败则换浏览器或稍后再试。" },
                    { title: "图片或内容不显示", body: "等待加载完成，避免过期缓存。仍异常则刷新或换网络。" },
                    { title: "登录页异常", body: "从本站登录入口进入，不要使用来路不明的链接。" },
                    { title: "浏览器表现异常", body: "更新浏览器后重试；可换一台设备对照。" },
                    { title: "手机排版异常", body: "旋转屏幕或改用桌面浏览器阅读长文。" },
                    { title: "连接不稳定", body: "换较稳定的网络后再办理账户操作。" },
                  ]
                : [
                    { title: "Page does not load", body: "Confirm the address, refresh and check the connection. Try another browser or wait and retry." },
                    { title: "Images or game content do not appear", body: "Allow the page to finish loading and avoid a stale cache. Refresh or switch networks if it persists." },
                    { title: "Login page does not open correctly", body: "Use this site’s Login entry. Do not follow unknown links into an account screen." },
                    { title: "Browser behaves unexpectedly", body: "Update the browser and retry. Compare on a second device if needed." },
                    { title: "Mobile layout does not display correctly", body: "Rotate the screen or continue long reading on desktop." },
                    { title: "Connection appears unstable", body: "Move to a more stable network before account actions." },
                  ]
            }
          />
        </div>

        <div className="mt-12 rounded-[1.35rem] border border-border bg-bg-surface p-6 md:p-8">
          <HubH2>{zh ? "账户与访问安全" : "Account and access safety"}</HubH2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {(zh
              ? [
                  "使用你平时访问的官方网站地址",
                  "不要分享登录凭据",
                  "进入账户页前先核对链接",
                  "不要从未核实来源下载文件",
                ]
              : [
                  "Use the official website address you normally access",
                  "Keep credentials private — do not share login details",
                  "Review links before entering account information",
                  "Avoid downloading files from unverified sources",
                ]
            ).map((item) => (
              <li key={item} className="rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-text">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 rounded-[1.35rem] border border-border bg-bg-surface p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-text">
            {zh ? "让手机访问更省事" : "How to make 1XROLL easier to access"}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted">
            {zh
              ? "多数手机浏览器可以把本站加入书签，或使用「添加到主屏幕」。那只是打开网站的快捷方式，不是原生应用，也不等于应用商店上架。"
              : "Most mobile browsers can bookmark this site or offer Add to Home Screen. That shortcut still opens the website — it is not a native app and it is not an app-store listing."}
          </p>
        </div>

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

        <RelatedCards
          title={zh ? "相关生态" : "Related ecosystem"}
          items={[
            { href: lp("/games"), title: t(dict, "nav.games"), body: zh ? "游戏库。" : "Game library." },
            { href: lp("/guides"), title: t(dict, "nav.guides"), body: zh ? "知识中心。" : "Knowledge hub." },
            { href: lp("/promotions"), title: t(dict, "nav.promotions"), body: zh ? "优惠摘要。" : "Offer summaries." },
            { href: lp("/rewards"), title: t(dict, "nav.rewards"), body: zh ? "礼遇地图。" : "Benefits map." },
            { href: lp("/vip"), title: t(dict, "nav.vip"), body: zh ? "VIP 导览。" : "VIP orientation." },
            { href: lp("/agent"), title: t(dict, "nav.agent"), body: zh ? "合作信息。" : "Partnership information." },
            { href: lp("/faq"), title: t(dict, "nav.faq"), body: zh ? "问答。" : "Answers." },
            { href: lp("/responsible-gaming"), title: t(dict, "nav.responsible"), body: zh ? "限额与支持。" : "Limits and support." },
          ]}
        />

        <HubCtaBand
          locale={locale}
          title={zh ? "选择你探索 1XROLL 的方式" : "Choose your way to explore 1XROLL"}
          body={
            zh
              ? "从游戏库或攻略继续。访问是网页路径；不要从未核实来源安装软件包。"
              : "Continue via the game library or Guides. Access is a web path — do not install packages from unverified sources."
          }
          actions={[
            { href: lp("/games"), label: zh ? "浏览游戏" : "Explore Games", variant: "primary" },
            { href: lp("/guides"), label: zh ? "阅读攻略" : "Read Guides", variant: "secondary" },
          ]}
        />
      </Container>
    </Section>
  );
}
