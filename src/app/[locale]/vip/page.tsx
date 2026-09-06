import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getEcosystemHub, getFaqByGroup } from "@/data";
import { REWARD_ASSETS } from "@/data/assets";
import { ctaConfig } from "@/config/site";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

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
  const faq = getFaqByGroup("vip");

  const blocks =
    locale === "zh"
      ? [
          {
            title: "什么是 VIP",
            body: "VIP 俱乐部是面向活跃玩家的关系通道：用清晰语言说明返水导向奖励与升级式礼遇概念。本站提供导览，不把 VIP 描述为投资产品，也不展示个人等级仪表盘。",
          },
          {
            title: "VIP 体验如何理解",
            body: "把品牌站摘要当作识读工具：帮助你认出公开用语（例如符合条件投注最高 1.1% 返水），并知道下一步应去平台确认。体验本身——实时状态、礼遇进度与客服路径——只存在于登录后的平台。",
          },
          {
            title: "礼遇如何运作",
            body: "已发布材料将 VIP 与符合条件投注的回馈、以及随参与度解锁的礼遇概念相连。资格、游戏贡献权重与发放节奏请在平台 VIP / 钱包工具中确认。本站不编造周/月固定奖励金额或自动升级时间表。",
          },
          {
            title: "资格",
            body: "资格通常取决于账户状态、参与度与平台当前规则。本站不编造入会门槛数字或等级点数表。打开平台 VIP 区域阅读实时条件；若规则与本站摘要冲突，以平台为准。",
          },
          {
            title: "返水（最高 1.1%）",
            body: "本品牌站公开摘要的上限为符合条件投注最高 1.1% VIP 返水。更高等级可解锁更高比例与礼遇——细节以平台为准。该上限是导览事实，不是个人收益预测。",
          },
          {
            title: "VIP 与奖励中心",
            body: "奖励中心把 VIP 放在更宽的地图里：与活动中心、奖励导览、返水摘要并列。VIP 页聚焦关系通道本身；奖励页帮你判断该走优惠、返水还是 VIP。两条路径互补，不要把不同页的数字叠成一条“保证路径”。",
          },
          {
            title: "VIP 与优惠",
            body: "优惠常是限时、可加入的活动（例如已核实的 200% 首存摘要：最高 8,888 USDT，25 倍流水，最低 10 USDT）。VIP 更偏持续关系回馈。活动规则可能另有流水或资格要求——请分别阅读优惠条款与 VIP 条款，不要混用倍数与返水上限。",
          },
          {
            title: "条款与真实性",
            body: "本站只复述已发布公开摘要。我们不编造 VIP 阶梯表、保证每周奖金，或未核实的第三方等级图。完整条款、冲突规则与领取步骤始终在平台。",
          },
          {
            title: "如何访问",
            body: "使用「打开平台」进入登录后的 VIP / 账户区域查看实时状态。本品牌站的 VIP 页、返水页与奖励主题卡片用于导览与内链，不能替代平台工具。",
          },
          {
            title: "理性参与",
            body: "等级感或返水比例不应成为提高注额的理由。设定个人时间与金钱限额；压力或追逐损失出现时停下，并阅读理性游戏。",
          },
        ]
      : [
          {
            title: "What is VIP",
            body: "VIP Club is the relationship lane for engaged players: cashback-oriented rewards and upgrade-style benefit concepts in plain language. This site provides orientation only — it does not describe VIP as an investment product and does not show a personal tier dashboard.",
          },
          {
            title: "VIP experience",
            body: "Treat brand-site summaries as literacy tools: they help you recognise published language (such as VIP cashback up to 1.1% on eligible bets) and know where to confirm next. The live experience — status, perk progress and support paths — exists only on the platform after login.",
          },
          {
            title: "How benefits work",
            body: "Published materials connect VIP to cashback on eligible play and to perk concepts that unlock with engagement. Confirm eligibility, game contribution weighting and payout rhythm inside platform VIP / wallet tools. This site does not invent fixed weekly or monthly bonus amounts or automatic upgrade clocks.",
          },
          {
            title: "Eligibility",
            body: "Eligibility usually depends on account status, engagement and current platform rules. This site does not invent join thresholds or points tables. Open the platform VIP area for live conditions; if rules conflict with a brand-site summary, trust the platform.",
          },
          {
            title: "Cashback (up to 1.1%)",
            body: "Up to 1.1% VIP cashback on eligible bets is the publicly summarised ceiling on this brand site. Higher tiers unlock increased rates and perks — details on the platform. That ceiling is an orientation fact, not a personal return forecast.",
          },
          {
            title: "VIP and Rewards",
            body: "The Rewards Hub places VIP on a wider map alongside Activity Centre offers, rewards orientation and rebate summaries. This VIP page focuses on the relationship lane itself; Rewards helps you choose whether an offer, rebate or VIP path fits. The lanes complement each other — do not stack figures from different pages into one “guaranteed path.”",
          },
          {
            title: "VIP and Promotions",
            body: "Promotions are often timed, opt-in offers (for example the verified 200% first deposit summary: up to 8,888 USDT, 25× turnover, min. 10 USDT). VIP is more about ongoing relationship cashback. Offers may add separate wagering or eligibility rules — read promotion terms and VIP terms separately, and do not mix multiples with the cashback ceiling.",
          },
          {
            title: "Terms and authenticity",
            body: "This site only repeats published public summaries. We do not invent VIP ladder tables, guaranteed weekly bonuses, or unverified third-party tier graphics. Full terms, conflict rules and claim steps always live on the platform.",
          },
          {
            title: "How to access",
            body: "Use Open platform to reach the logged-in VIP / account area for live status. VIP, Rebates and Rewards topic cards on this brand site are for orientation and internal links — they do not replace platform tools.",
          },
          {
            title: "Responsible participation",
            body: "Tier feeling or cashback rates are not a reason to raise stakes. Keep personal time and money limits; stop when pressure or chasing losses appears, and return to Responsible Gaming.",
          },
        ];

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: localize(hub.title, locale) },
          ]}
        />

        <div className="overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface md:grid md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[18rem]">
            <Image
              src={REWARD_ASSETS["vip-club"]}
              alt={localize(hub.title, locale)}
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, 50vw"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent md:bg-gradient-to-r md:from-transparent md:to-bg-surface"
            />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              VIP
            </p>
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
              <Button href={localePath(locale, "/rebates")} variant="secondary">
                {t(dict, "nav.rebates")}
              </Button>
              <Button href={localePath(locale, "/rewards")} variant="outline">
                {t(dict, "nav.rewards")}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="rounded-[1.25rem] border border-border bg-bg-surface p-6"
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl text-text">
                {block.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {block.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-text-muted">
          <Link href={localePath(locale, "/promotions")} className="text-accent hover:underline">
            {t(dict, "nav.promotions")}
          </Link>
          {" · "}
          <Link href={localePath(locale, "/agent")} className="text-accent hover:underline">
            {t(dict, "nav.agent")}
          </Link>
          {" · "}
          <Link
            href={localePath(locale, "/responsible-gaming")}
            className="text-accent hover:underline"
          >
            {t(dict, "nav.responsible")}
          </Link>
        </p>

        {faq.length ? (
          <div className="mt-14">
            <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl text-text">
              {t(dict, "nav.faq")}
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
      </Container>
    </Section>
  );
}
