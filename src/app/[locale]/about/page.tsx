import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

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
    title: locale === "zh" ? "关于 Aether" : "About Aether",
    description:
      locale === "zh"
        ? "了解 Aether 如何以清晰信息架构帮助玩家发现游戏、厂商与攻略。"
        : "Learn how Aether helps players discover games, studios, and guides with a clarity-first information architecture.",
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
    <>
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
        About Aether
      </h1>
      <div className="prose-aether mt-8 max-w-3xl">
        <p>
          Aether is a bilingual digital gaming discovery hub. We publish structured
          information about slots, live tables, fast games, arcade-style fishing
          titles, studio profiles, and original editorial guides. The brand
          promise is clarity: readable pages, honest omissions when data is
          unverified, and navigation that respects how people actually explore.
        </p>
        <h2>What we are</h2>
        <p>
          We are an editorial and discovery surface — not a place that invents
          licenses, payout speeds, player counts, or guaranteed promotions. When
          a claim cannot be verified in our dataset, we leave it out. That
          restraint is intentional and part of our SEO quality standard: topical
          depth without doorway spam.
        </p>
        <h2>How the information architecture works</h2>
        <p>
          Topics flow from the homepage into categories, then into providers and
          individual games, with guides connecting the graph. A guide about a
          title should lead you back to that game, its studio, and related
          reading. Category pages carry substantial introductions so they are not
          thin filter shells. Provider pages are written uniquely — never a
          template with the studio name swapped.
        </p>
        <h2>Languages</h2>
        <p>
          English and Chinese are first-class. UI strings, metadata, headings, and
          article bodies are authored for each locale rather than machine-translated
          at runtime. Alternate language links and per-locale canonicals keep
          international SEO coherent.
        </p>
        <h2>Responsible framing</h2>
        <p>
          Gaming involves risk. Aether surfaces responsible-gaming guidance on the
          homepage and in dedicated legal/help pages. We write without hype
          pressure and without fake urgency. If you are looking for educational
          context before you decide what to try, you are in the right place.
        </p>
        <h2>Contact</h2>
        <p>
          Editorial and partnership notes can reach us at{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
          For browsing, start with{" "}
          <Link href={localePath(locale, "/games")}>games</Link>,{" "}
          <Link href={localePath(locale, "/providers")}>providers</Link>, or{" "}
          <Link href={localePath(locale, "/guides")}>guides</Link>.
        </p>
      </div>
    </>
  );

  const zh = (
    <>
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
        关于 Aether
      </h1>
      <div className="prose-aether mt-8 max-w-3xl">
        <p>
          Aether 是双语数字游戏发现平台。我们结构化地发布关于老虎机、真人桌台、快速游戏、街机捕鱼类作品、工作室档案与原创攻略的信息。品牌承诺是清晰：可读的页面、未核实数据时的诚实省略，以及尊重真实探索路径的导航。
        </p>
        <h2>我们是什么</h2>
        <p>
          我们是编辑与发现型内容面——不会编造牌照、出款速度、玩家数量或保证活动。当宣称无法在数据集中核实，我们就省略。这种克制是刻意的，也是 SEO 质量标准的一部分：要有主题深度，不要入口垃圾页。
        </p>
        <h2>信息架构如何运作</h2>
        <p>
          主题从首页流向分类，再进入厂商与单款游戏，攻略把图谱连接起来。一篇作品攻略应能带回该游戏、其工作室与相关阅读。分类页提供充分导语，而不是单薄筛选壳。厂商页各自独立撰写——绝不是只替换工作室名字的模板。
        </p>
        <h2>语言</h2>
        <p>
          英文与中文同为第一公民。界面词条、元数据、标题与文章正文按语言撰写，而不是运行时机器翻译。备用语言链接与各语言规范 URL 保持国际 SEO 一致。
        </p>
        <h2>理性表达</h2>
        <p>
          游戏存在风险。Aether 在首页与专门帮助页呈现理性游戏指引。我们不写夸张施压，也不制造虚假紧迫感。若你想在决定尝试什么之前先建立理解，这里就是合适的地方。
        </p>
        <h2>联系</h2>
        <p>
          编辑与合作可邮件联系{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>。
          浏览可从{" "}
          <Link href={localePath(locale, "/games")}>游戏</Link>、{" "}
          <Link href={localePath(locale, "/providers")}>厂商</Link>或{" "}
          <Link href={localePath(locale, "/guides")}>攻略</Link>开始。
        </p>
      </div>
    </>
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
