import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { siteConfig, ctaConfig } from "@/config/site";
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

  const en = (
    <div className="prose-brand mt-8 max-w-3xl">
      <h1 className="font-[family-name:var(--font-display)] !mt-0 text-4xl text-text">
        About 1XROLL
      </h1>
      <p>
        1XROLL is the brand behind slots, live casino, fast games and related
        digital entertainment for eligible players. This website is an official
        brand variation: it publishes game information, provider context,
        promotions summaries and editorial guides with a distinct layout from
        other 1XROLL brand sites.
      </p>
      <h2>Brand site and platform entry</h2>
      <p>
        Use this site to learn and browse. When you are ready to open an account,
        deposit or launch titles live, the Login and Register controls take you to
        the 1XROLL platform at {siteConfig.platformUrl}. Brand pages stay
        informational; wallet and lobby tools live on the platform.
      </p>
      <h2>What you will find here</h2>
      <p>
        Category hubs for slots, live casino, fast games and fishing; provider
        profiles; game detail pages with original descriptions; promotions that
        mirror published official offers; and long-form guides. We do not invent
        RTP figures, fake licenses or unverified awards.
      </p>
      <h2>Languages</h2>
      <p>
        English and Chinese are first-class under /en/ and /zh/, including UI,
        metadata and article bodies authored for each locale.
      </p>
      <h2>Responsible play</h2>
      <p>
        18+ only. Gambling can be addictive. Read our{" "}
        <Link href={localePath(locale, "/responsible-gaming")}>
          responsible gaming
        </Link>{" "}
        guidance, set limits and follow local law.{" "}
        <a href={ctaConfig.register.href} target="_blank" rel="noopener noreferrer">
          Register on the platform
        </a>{" "}
        only when you are ready to play within your limits.
      </p>
    </div>
  );

  const zh = (
    <div className="prose-brand mt-8 max-w-3xl">
      <h1 className="font-[family-name:var(--font-display)] !mt-0 text-4xl text-text">
        关于 1XROLL
      </h1>
      <p>
        1XROLL 是面向符合条件玩家的老虎机、真人娱乐场、快速游戏及相关数字娱乐品牌。本站是官方品牌网站版本：以不同于其他 1XROLL 品牌站的布局，发布游戏信息、厂商背景、优惠摘要与编辑攻略。
      </p>
      <h2>品牌站与平台入口</h2>
      <p>
        用本站学习与浏览。当你准备开户、存款或真实开玩时，登录与注册控件会带你前往 {siteConfig.platformUrl} 的 1XROLL 平台。品牌页保持信息向；钱包与大厅工具在平台侧。
      </p>
      <h2>你会在这里找到什么</h2>
      <p>
        老虎机、真人、快速游戏与捕鱼分类中心；厂商档案；带原创描述的游戏详情；与已发布官方优惠对应的活动摘要；以及长文攻略。我们不编造返还率、假牌照或未核实奖项。
      </p>
      <h2>语言</h2>
      <p>
        英文与中文在 /en/ 与 /zh/ 同为第一公民，界面、元数据与文章正文均按语言撰写。
      </p>
      <h2>理性游玩</h2>
      <p>
        仅限 18 岁以上。博彩可能令人沉迷。请阅读我们的
        <Link href={localePath(locale, "/responsible-gaming")}>理性游戏</Link>
        指引，设定限额并遵守当地法律。只有在限额内准备游玩时，再
        <a href={ctaConfig.register.href} target="_blank" rel="noopener noreferrer">
          前往平台注册
        </a>
        。
      </p>
    </div>
  );

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "about.title") },
          ]}
        />
        {locale === "zh" ? zh : en}
      </Container>
    </Section>
  );
}
