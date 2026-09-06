import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { categories, getFaqByGroup } from "@/data";
import { categoryPath } from "@/data/categories";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { siteConfig, ctaConfig } from "@/config/site";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

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
    path: "/about",
    title: locale === "zh" ? "关于 1XROLL" : "About 1XROLL",
    description:
      locale === "zh"
        ? "了解本 1XROLL 品牌网站版本如何提供游戏信息、厂商、优惠与攻略，并导向平台入门。"
        : "Learn how this 1XROLL brand website variation publishes game information, providers, promotions and guides — and how it connects to platform entry.",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const faq = getFaqByGroup("general").slice(0, 5);

  const related = [
    { href: "/games", label: t(dict, "nav.games") },
    { href: "/guides", label: t(dict, "nav.guides") },
    { href: "/promotions", label: t(dict, "nav.promotions") },
    { href: "/fair-play", label: t(dict, "nav.fairPlay") },
    { href: "/responsible-gaming", label: t(dict, "nav.responsible") },
    { href: "/faq", label: t(dict, "nav.faq") },
    { href: "/contact", label: t(dict, "nav.contact") },
    { href: "/beginner-guide", label: t(dict, "nav.beginner") },
  ];

  const copy =
    locale === "zh"
      ? {
          h1: "关于 1XROLL",
          lead: `${siteConfig.name} 是面向符合条件玩家的数字娱乐品牌，覆盖老虎机、真人娱乐场、快速玩法、捕鱼、体育等通道，以及奖励、VIP、代理与入门导览。本站是官方品牌网站版本：以独立布局发布游戏信息、厂商背景、优惠摘要与编辑攻略，并清晰导向 ${siteConfig.platformUrl} 的平台入口。`,
          ecoTitle: "完整生态",
          ecoBody:
            "本站把发现路径组织成一个连贯生态：游戏分类与作品页、厂商档案、优惠与奖励导览、VIP / 返水摘要、代理介绍、钱包与支付方式导览、下载 / 访问说明，以及理性游戏与公平游戏教育页。你可以用本站理解“有什么、怎么走”，再在平台完成开户、入金与开玩。",
          siteTitle: "本站代表什么",
          siteBody:
            "本站是信息与教育向的品牌站，不是钱包、大厅或客服后台。登录与注册控件会打开 1XROLL 平台。我们不编造返还率、假牌照、未核实奖项，也不假装本站能处理存款或取款。",
          catsTitle: "游戏分类",
          catsBody:
            "分类中心覆盖目录型作品（可在本站阅读详情）与平台大厅型通道（本站提供导览，具体作品登录后在平台查看）。每条通道都链接回理性游戏与相关攻略。",
          guidesTitle: "内容与攻略",
          guidesBody:
            "编辑攻略解释机制、节奏与理性习惯；新手指南与购币教程帮助入门。优惠页只复述已发布官方摘要，细节与领取始终以平台条款为准。",
          navTitle: "如何导航",
          navBody:
            "顶栏与页脚按游戏、奖励、攻略 / 支持、平台入口与法律页分组。英文与中文在 /en/ 与 /zh/ 同为第一公民。准备开玩时使用登录 / 注册或“打开平台”。",
          philTitle: "品牌理念",
          philBody:
            "诚实发现优于夸张营销。我们用清晰结构帮助你比较分类与工作室，避免虚假紧迫感与保证结果。娱乐应停留在娱乐范畴。",
          fairTitle: "公平游戏",
          fairBody: "公平游戏页说明本站如何谈论透明度与哈希灵感玩法——不编造密码学审计或无法核实的链上保证。",
          rgTitle: "理性游戏",
          rgBody:
            "仅限 18 岁以上。设定时间与金钱限额，识别追逐损失等信号，并在需要时停下。法律因地区而异；本站不提供法律意见。",
          mobileTitle: "移动端访问",
          mobileBody:
            "本品牌站与平台均可在手机浏览器使用。下载页提供访问导览（含在提供时的 Android 路径说明）与官方 CTA；请勿安装非官方安装包。",
          faqTitle: "常见问题",
          legalTitle: "法律说明",
          legalBody: `${siteConfig.name} 不是马来西亚法律实体。对本站的提及不构成公司注册声明、牌照声明或当地实体主张。支付方式中的“马来西亚”表述仅指平台上面向该市场的入金通道命名，而非法律实体名称。请遵守你所在地法律，仅在合法情况下参与。`,
          relatedTitle: "相关入口",
        }
      : {
          h1: "About 1XROLL",
          lead: `${siteConfig.name} is a digital entertainment brand for eligible players — covering slots, live casino, fast formats, fishing, sports and related lanes, plus rewards, VIP, agent and onboarding orientation. This site is an official brand website variation: it publishes game information, provider context, promotions summaries and editorial guides in a distinct layout, and connects clearly to platform entry at ${siteConfig.platformUrl}.`,
          ecoTitle: "The ecosystem",
          ecoBody:
            "We organise discovery as one coherent ecosystem: game categories and title pages, provider profiles, promotions and rewards orientation, VIP / rebate summaries, agent introduction, wallet and payment-method orientation, download / access guidance, plus Fair Play and Responsible Gaming education. Use this site to understand what exists and how to navigate — then complete account, funding and play on the platform.",
          siteTitle: "What this website represents",
          siteBody:
            "This is an informational and educational brand site — not a wallet, lobby or support back-office. Login and Register controls open the 1XROLL platform. We do not invent RTP figures, fake licenses or unverified awards, and we do not pretend this site processes deposits or withdrawals.",
          catsTitle: "Game categories",
          catsBody:
            "Category hubs cover catalogue titles (readable here) and platform-lobby lanes (orientation here; live titles after login). Each lane links back to Responsible Gaming and related guides.",
          guidesTitle: "Content and guides",
          guidesBody:
            "Editorial guides explain mechanics, pacing and calm habits; Beginner Guide and Currency Purchase support onboarding. Promotions pages only repeat published official summaries — claim details always live in platform terms.",
          navTitle: "How navigation works",
          navBody:
            "Header and footer group Games, Rewards, Guides & Support, Platform entry and Legal pages. English and Chinese are first-class under /en/ and /zh/. When you are ready to play, use Login / Register or Open platform.",
          philTitle: "Brand philosophy",
          philBody:
            "Honest discovery over hype. We favour clear structure so you can compare categories and studios without fake urgency or guaranteed outcomes. Entertainment should stay entertainment.",
          fairTitle: "Fair play",
          fairBody:
            "Fair Play explains how this site talks about transparency and hash-inspired entertainment — without fabricating cryptographic audits or unverifiable on-chain guarantees.",
          rgTitle: "Responsible gaming",
          rgBody:
            "18+ only. Set time and money limits, recognise signals such as chasing losses, and stop when needed. Laws vary by region; this site does not give legal advice.",
          mobileTitle: "Mobile access",
          mobileBody:
            "This brand site and the platform work in mobile browsers. The Download page provides access orientation (including Android path guidance when offered) and official CTAs — never install packages from unofficial mirrors.",
          faqTitle: "FAQ",
          legalTitle: "Legal note",
          legalBody: `${siteConfig.name} is not a Malaysia legal entity. Mentions of 1XROLL on this site are not company-registration, licensing or local-entity claims. “Malaysia” labels on payment rails name market-oriented funding options on the platform — not a legal entity called 1XROLL Malaysia. Follow local law and participate only where lawful.`,
          relatedTitle: "Related links",
        };

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "about.title") },
          ]}
        />
        <div className="prose-brand mt-8 max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] !mt-0 text-4xl text-text">
            {copy.h1}
          </h1>
          <p>{copy.lead}</p>

          <h2>{copy.ecoTitle}</h2>
          <p>{copy.ecoBody}</p>

          <h2>{copy.siteTitle}</h2>
          <p>{copy.siteBody}</p>

          <h2>{copy.catsTitle}</h2>
          <p>{copy.catsBody}</p>
          <ul>
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link href={localePath(locale, categoryPath(cat.id))}>
                  {localize(cat.name, locale)}
                </Link>
                {" — "}
                {localize(cat.shortDescription, locale)}
              </li>
            ))}
          </ul>

          <h2>{copy.guidesTitle}</h2>
          <p>{copy.guidesBody}</p>

          <h2>{copy.navTitle}</h2>
          <p>{copy.navBody}</p>

          <h2>{copy.philTitle}</h2>
          <p>{copy.philBody}</p>

          <h2>{copy.fairTitle}</h2>
          <p>
            {copy.fairBody}{" "}
            <Link href={localePath(locale, "/fair-play")}>
              {t(dict, "nav.fairPlay")}
            </Link>
            .
          </p>

          <h2>{copy.rgTitle}</h2>
          <p>
            {copy.rgBody}{" "}
            <Link href={localePath(locale, "/responsible-gaming")}>
              {t(dict, "nav.responsible")}
            </Link>
            .
          </p>

          <h2>{copy.mobileTitle}</h2>
          <p>
            {copy.mobileBody}{" "}
            <Link href={localePath(locale, "/download")}>
              {t(dict, "nav.download")}
            </Link>
            .
          </p>

          <h2>{copy.legalTitle}</h2>
          <p>{copy.legalBody}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={ctaConfig.register.href} external>
            {t(dict, "nav.register")}
          </Button>
          <Button href={localePath(locale, "/games")} variant="secondary">
            {t(dict, "nav.games")}
          </Button>
          <Button href={localePath(locale, "/faq")} variant="outline">
            {t(dict, "nav.faq")}
          </Button>
        </div>

        {faq.length ? (
          <div className="mt-14 max-w-3xl">
            <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl text-text">
              {copy.faqTitle}
            </h2>
            <Accordion
              items={faq.map((item) => ({
                id: item.id,
                title: localize(item.question, locale),
                content: localize(item.answer, locale),
              }))}
            />
            <p className="mt-4 text-sm text-text-muted">
              <Link href={localePath(locale, "/faq")} className="text-accent hover:underline">
                {locale === "zh" ? "查看全部常见问题" : "View all FAQ"} →
              </Link>
            </p>
          </div>
        ) : null}

        <div className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">
            {copy.relatedTitle}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="rounded-2xl border border-border bg-bg-surface px-4 py-4 text-sm text-text transition hover:border-accent/40"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
