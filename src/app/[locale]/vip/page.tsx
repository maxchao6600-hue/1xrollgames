import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getEcosystemHub, getFaqByGroup } from "@/data";
import { REWARD_ASSETS } from "@/data/assets";
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
  CompareGrid,
  FeatureSplit,
  HighlightPanel,
  HubAnchorNav,
  HubCtaBand,
  HubH2,
  InfoGrid,
  JourneyStrip,
  RelatedCards,
  StepGrid,
} from "@/components/content/HubModules";

const PATH = "/vip";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const hub = getEcosystemHub("vip");
  if (!hub) return {};
  return buildMetadata({
    locale: raw,
    path: PATH,
    title: localize(hub.title, raw),
    description: localize(hub.summary, raw),
  });
}

export default async function VipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const hub = getEcosystemHub("vip");
  if (!hub) notFound();
  const faq = getFaqByGroup("vip").slice(0, 10);
  const zh = locale === "zh";

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: localize(hub.title, locale) },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
              {
                name: localize(hub.title, locale),
                url: absoluteUrl(localePath(locale, PATH)),
              },
            ]),
            faqJsonLd(
              faq.map((item) => ({
                question: localize(item.question, locale),
                answer: localize(item.answer, locale),
              })),
            ),
          ]}
        />

        <div className="overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface md:grid md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[20rem]">
            <Image
              src={REWARD_ASSETS["vip-club"]}
              alt={localize(hub.title, locale)}
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">VIP</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
              {localize(hub.title, locale)}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              {localize(hub.intro, locale)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={ctaConfig.play.href} external>
                {t(dict, "common.openPlatform")}
              </Button>
              <Button href={localePath(locale, "/rewards")} variant="secondary">
                {t(dict, "nav.rewards")}
              </Button>
            </div>
          </div>
        </div>

        <HubAnchorNav
          items={
            zh
              ? [
                  { href: "#experience", label: "体验" },
                  { href: "#cashback", label: "返水" },
                  { href: "#compare", label: "比较" },
                  { href: "#faq", label: "常见问题" },
                ]
              : [
                  { href: "#experience", label: "Experience" },
                  { href: "#cashback", label: "Cashback" },
                  { href: "#compare", label: "Compare" },
                  { href: "#faq", label: "FAQ" },
                ]
          }
        />

        <div id="experience" className="scroll-mt-28">
        <HighlightPanel
          kicker={zh ? "定位" : "Positioning"}
          title={zh ? "什么是 1XROLL VIP？" : "What is 1XROLL VIP?"}
          body={
            zh
              ? "VIP 是持续关系与返水概念通道。本页帮助你读懂公开语言，而不是展示个人等级条或编造 1–4 阶梯。"
              : "VIP is the ongoing relationship and cashback-concept lane. This page helps you read published language — it does not show a personal meter or invent a 1–4 ladder."
          }
          points={
            zh
              ? ["不是投资产品", "上限 1.1% 是导览事实", "办理只在登录后"]
              : ["Not an investment product", "The 1.1% ceiling is orientation", "Actions exist only after login"]
          }
        />
        <InfoGrid
          title={zh ? "VIP 生态概念" : "VIP ecosystem overview"}
          columns={3}
          items={
            zh
              ? [
                  { title: "关系通道", body: "面向持续参与的识读页，不是投资产品介绍。" },
                  { title: "返水概念", body: "符合条件投注的回馈语言；公开上限最高 1.1%。" },
                  { title: "平台办理", body: "实时状态、礼遇进度与客服路径只在登录后存在。" },
                ]
              : [
                  { title: "Relationship lane", body: "Literacy for ongoing engagement — not an investment-product pitch." },
                  { title: "Cashback concept", body: "Return language on eligible bets; published ceiling up to 1.1%." },
                  { title: "Platform actions", body: "Live status, perk progress and support paths exist only after login." },
                ]
          }
        />
        </div>

        <div id="cashback" className="scroll-mt-28">
        <FeatureSplit
          kicker={zh ? "已核实公开上限" : "Published ceiling"}
          title={zh ? "VIP 返水最高 1.1%" : "VIP cashback up to 1.1%"}
          image={REWARD_ASSETS.rebates}
          imageAlt={zh ? "返水导览视觉" : "Rebate orientation visual"}
          body={
            zh
              ? "本品牌站公开摘要的上限为符合条件投注最高 1.1%。更高等级可解锁更高比例与礼遇——细节以平台为准。该数字是导览事实，不是个人收益预测。本站不编造 VIP 1–4 阶梯或周月固定金额。"
              : "Up to 1.1% on eligible bets is the publicly summarised ceiling on this brand site. Higher tiers unlock increased rates and perks — details on the platform. That figure is orientation, not a personal yield forecast. This site does not invent VIP 1–4 ladders or weekly/monthly amounts."
          }
          points={
            zh
              ? ["仅限符合条件的投注", "资格与权重在平台确认", "不要与首存 25 倍流水混用"]
              : ["Eligible bets only", "Eligibility and weighting confirmed on the platform", "Do not mix with the 25× welcome multiple"]
          }
          cta={
            <Button href={localePath(locale, "/rebates")} variant="secondary">
              {t(dict, "nav.rebates")}
            </Button>
          }
        />
        </div>

        <StepGrid
          title={zh ? "如何理解资格与礼遇" : "How eligibility and benefits work"}
          steps={
            zh
              ? [
                  { title: "阅读公开语言", body: "先认出 1.1% 上限等已核实用语。" },
                  { title: "打开平台 VIP 区", body: "实时条件、状态与工具只在登录后。" },
                  { title: "分开读优惠条款", body: "限时活动可能另有流水，不要叠数字。" },
                  { title: "保持限额", body: "返水比例不是提高注额的理由。" },
                ]
              : [
                  { title: "Read published language", body: "Recognise verified wording such as the 1.1% ceiling first." },
                  { title: "Open the platform VIP area", body: "Live conditions, status and tools exist only after login." },
                  { title: "Read offer terms separately", body: "Timed promotions may add wagering — do not stack figures." },
                  { title: "Keep limits", body: "A cashback rate is not a reason to raise stakes." },
                ]
          }
        />

        <JourneyStrip
          title={zh ? "VIP 礼遇如何运作" : "How VIP benefits work"}
          steps={
            zh
              ? [
                  { title: "资格", body: "只在平台提示中确认。" },
                  { title: "参与", body: "符合条件的游玩，不加高限额。" },
                  { title: "账户信息", body: "VIP 区查看状态。" },
                  { title: "适用礼遇", body: "有则进入，无则离开。" },
                  { title: "分开读优惠", body: "不要叠 25 倍与 1.1%。" },
                ]
              : [
                  { title: "Eligibility", body: "Confirmed only in platform prompts." },
                  { title: "Participation", body: "Eligible play — do not raise limits." },
                  { title: "Account info", body: "Review status in the VIP area." },
                  { title: "Applicable benefits", body: "Enter when they apply; leave when they do not." },
                  { title: "Separate offers", body: "Do not stack 25× with 1.1%." },
                ]
          }
        />

        <div id="compare" className="scroll-mt-28">
        <CompareGrid
          title={zh ? "VIP 与奖励、优惠的关系" : "VIP, Rewards and Promotions"}
          columns={
            zh
              ? [
                  { title: "VIP", body: "持续关系与返水概念。无编造阶梯表。" },
                  { title: "奖励中心", body: "把 VIP 放在活动、返水与优惠旁边的地图。" },
                  { title: "优惠", body: "限时加入。已核实首存：200% / 8,888 / 25× / 10 USDT。" },
                ]
              : [
                  { title: "VIP", body: "Ongoing relationship and cashback concepts. No invented ladder tables." },
                  { title: "Rewards Hub", body: "Places VIP beside activity, rebate and offer lanes as a map." },
                  { title: "Promotions", body: "Timed opt-ins. Verified welcome: 200% / 8,888 / 25× / 10 USDT." },
                ]
          }
        />
        </div>

        <InfoGrid
          title={zh ? "条款、访问与移动端" : "Terms, access and mobile"}
          columns={3}
          items={
            zh
              ? [
                  { title: "条款真实性", body: "只重复公开摘要。冲突以平台为准。" },
                  { title: "如何查看 VIP 信息", body: "使用打开平台进入账户 / VIP 区域。本站不显示个人等级条。" },
                  { title: "移动体验", body: "本页可在手机阅读。实时 VIP 工具跟随平台客户端或移动网页。" },
                ]
              : [
                  { title: "Terms authenticity", body: "Only published summaries are repeated. Conflicts: trust the platform." },
                  { title: "How to review VIP information", body: "Use Open platform for the account / VIP area. This site does not show personal tier meters." },
                  { title: "Mobile experience", body: "This page is readable on a phone. Live VIP tools follow the platform client or mobile web." },
                ]
          }
        />

        <InfoGrid
          title={zh ? "理性参与" : "Responsible participation"}
          columns={2}
          items={[
            {
              title: zh ? "等级感不是任务" : "Tier feeling is not a quest",
              body: zh
                ? "不要为了“看起来更高等级”而延长对局。"
                : "Do not extend sessions to feel like a higher tier.",
            },
            {
              title: zh ? "需要时停止" : "Stop when needed",
              body: zh ? "追逐损失时离开，并阅读理性游戏。" : "Leave if chasing losses, and read Responsible Gaming.",
              href: localePath(locale, "/responsible-gaming"),
            },
          ]}
        />

        <div id="faq" className="mt-14 scroll-mt-28">
          <HubH2>{zh ? "VIP 常见问题" : "VIP FAQ"}</HubH2>
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
            <Link href={localePath(locale, "/faq")} className="text-accent hover:underline">
              {zh ? "查看全部常见问题" : "View all FAQ"} →
            </Link>
          </p>
        </div>

        <RelatedCards
          title={zh ? "相关页面" : "Related pages"}
          items={[
            {
              href: localePath(locale, "/rewards"),
              title: zh ? "奖励" : "Rewards",
              body: zh ? "生态地图。" : "Ecosystem map.",
            },
            {
              href: localePath(locale, "/promotions"),
              title: zh ? "优惠" : "Promotions",
              body: zh ? "限时摘要。" : "Timed summaries.",
            },
            {
              href: localePath(locale, "/rebates"),
              title: zh ? "返水" : "Rebates",
              body: zh ? "回馈概念通道。" : "Cashback-concept lane.",
            },
            {
              href: localePath(locale, "/guides/understanding-rewards-vip"),
              title: zh ? "攻略" : "Guide",
              body: zh ? "VIP 识读长文。" : "Longer VIP literacy.",
            },
          ]}
        />

        <HubCtaBand
          locale={locale}
          title={zh ? "实时 VIP 状态在平台" : "Live VIP status is on the platform"}
          body={
            zh
              ? "本页帮助你读懂公开语言。等级与返水工具在登录之后。"
              : "This page helps you read published language. Tier and cashback tools follow login."
          }
          secondaryHref={localePath(locale, "/rewards")}
          secondaryLabel={zh ? "返回奖励中心" : "Continue to Rewards"}
        />
      </Container>
    </Section>
  );
}
