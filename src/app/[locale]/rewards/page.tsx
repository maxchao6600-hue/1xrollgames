import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getEcosystemHub, getFaqByGroup, rewardTopics } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { absoluteUrl, localize } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  ChecklistPanel,
  CompareGrid,
  HubCtaBand,
  HubH2,
  InfoGrid,
  RelatedCards,
  StepGrid,
} from "@/components/content/HubModules";

const PATH = "/rewards";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const hub = getEcosystemHub("rewards");
  if (!hub) return {};
  return buildMetadata({
    locale: raw,
    path: PATH,
    title: localize(hub.title, raw),
    description: localize(hub.summary, raw),
  });
}

export default async function RewardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const hub = getEcosystemHub("rewards");
  if (!hub) notFound();
  const faq = getFaqByGroup("rewards").slice(0, 10);
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

        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          {zh ? "奖励中心" : "Rewards Hub"}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-text md:text-5xl">
          {localize(hub.title, locale)}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted md:text-lg">
          {localize(hub.intro, locale)}
        </p>

        <div className="mt-12">
          <HubH2>{zh ? "奖励生态四部分" : "Rewards ecosystem overview"}</HubH2>
          <p className="mt-3 max-w-3xl text-sm text-text-muted">
            {zh
              ? "四条车道来自本站主题数据。每张卡说明它代表什么、用户可期待什么、下一步去哪。"
              : "Four lanes from this site’s topic data. Each card states what it represents, what to expect, and where to continue."}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {rewardTopics.map((topic) => (
              <Link
                key={topic.id}
                href={localePath(locale, topic.href)}
                className="group overflow-hidden rounded-[1.25rem] border border-border bg-bg-surface transition hover:border-accent/40"
              >
                {topic.image ? (
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={topic.image}
                      alt={localize(topic.title, locale)}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width:1280px) 50vw, 25vw"
                    />
                  </div>
                ) : null}
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-text">
                    {localize(topic.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    {localize(topic.summary, locale)}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-text-faint">
                    {localize(topic.body, locale)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <StepGrid
          title={zh ? "奖励如何串在一起" : "How rewards fit together"}
          subtitle={
            zh
              ? "阅读顺序，不是保证发放流水线。每一步仍以平台条款为准。"
              : "A reading order — not a guaranteed payout pipeline. Each step still follows platform terms."
          }
          steps={
            zh
              ? [
                  { title: "优惠", body: "限时、可加入的公开摘要（如已核实首存数字）。" },
                  { title: "活动参与", body: "在平台完成该活动要求的动作——不超出预算。" },
                  { title: "符合条件的游玩", body: "贡献规则因通道而异；本站不编造权重。" },
                  { title: "返水 / VIP", body: "持续回馈概念；公开上限最高 1.1%。" },
                ]
              : [
                  { title: "Promotions", body: "Timed, opt-in public summaries (such as verified welcome figures)." },
                  { title: "Activity", body: "Complete required actions on the platform — without raising your budget wall." },
                  { title: "Eligible play", body: "Contribution rules vary by lane; this site does not invent weights." },
                  { title: "Rebates / VIP", body: "Ongoing return concepts; published ceiling up to 1.1%." },
                ]
          }
        />

        <CompareGrid
          title={zh ? "优惠 · 奖励 · 返水 · VIP" : "Promotions vs Rewards vs Rebates vs VIP"}
          columns={
            zh
              ? [
                  { title: "优惠", body: "限时、资格制、常带流水。数字只在该活动条款内有效。" },
                  { title: "奖励", body: "生态地图：把各通道放在一起读，而不是单一领取按钮。" },
                  { title: "返水", body: "符合条件投注的回馈式返还；与 VIP 相连，上限摘要 1.1%。" },
                  { title: "VIP", body: "关系通道。不编造等级表或周月固定金额。" },
                ]
              : [
                  { title: "Promotion", body: "Time-bound, eligibility-based, often with wagering. Figures apply only inside that offer’s terms." },
                  { title: "Reward", body: "The ecosystem map: how lanes are read together, not a single claim button." },
                  { title: "Rebate", body: "Cashback-style return on eligible play; linked to VIP; ceiling summarised at 1.1%." },
                  { title: "VIP", body: "Relationship lane. No invented ladder tables or weekly/monthly amounts." },
                ]
          }
        />

        <StepGrid
          title={zh ? "如何发现奖励" : "Reward discovery"}
          steps={
            zh
              ? [
                  { title: "浏览已发布摘要", body: "从优惠与本页主题卡开始，而不是第三方截图。" },
                  { title: "核对资格", body: "账户、地区与窗口只在平台提示中确认。" },
                  { title: "阅读条件", body: "流水、贡献游戏、时限分开读，不要跨页混用数字。" },
                  { title: "回到平台继续", body: "领取与进度只存在于登录后的工具。" },
                ]
              : [
                  { title: "Explore published offers", body: "Start from Promotions and these topic cards — not third-party screenshots." },
                  { title: "Check eligibility", body: "Account, region and windows are confirmed only in platform prompts." },
                  { title: "Review conditions", body: "Read wagering, contributing games and timing separately; do not mix figures across pages." },
                  { title: "Continue on the platform", body: "Claiming and progress exist only in logged-in tools." },
                ]
          }
        />

        <InfoGrid
          title={zh ? "理解资格" : "Understanding reward eligibility"}
          columns={3}
          items={
            zh
              ? [
                  { title: "账户状态", body: "新户、验证或地区提示可能改变可见活动。本站不编造门槛分。" },
                  { title: "活动条件", body: "每条通道有自己的加入规则。摘要不能替代条款全文。" },
                  { title: "符合条件的活动", body: "哪些投注或任务计入，只在平台列出。" },
                  { title: "时间窗口", body: "开始、结束与领取截止只在实时规则中。" },
                  { title: "领取要求", body: "品牌站不能代领或显示个人进度。" },
                  { title: "冲突规则", body: "同时加入多项时如何处理，以平台为准。" },
                ]
              : [
                  { title: "Account status", body: "New-user, verification or region prompts can change which offers appear. No invented score thresholds." },
                  { title: "Offer conditions", body: "Each lane has its own join rules. A summary does not replace the full terms." },
                  { title: "Eligible activity", body: "Which bets or tasks count is listed only on the platform." },
                  { title: "Time windows", body: "Start, end and claim deadlines live in live rules." },
                  { title: "Claim requirements", body: "This brand site cannot claim for you or show personal progress." },
                  { title: "Conflict rules", body: "How stacked offers interact is a platform matter." },
                ]
          }
        />

        <ChecklistPanel
          title={zh ? "用户应核对什么" : "What users should check"}
          items={
            zh
              ? ["资格", "完整条款", "时间窗口", "贡献 / 计入规则", "领取步骤", "过期与取消"]
              : ["Eligibility", "Full terms", "Timing", "Contribution rules", "Claim steps", "Expiry and cancel"]
          }
        />

        <InfoGrid
          title={zh ? "奖励教育" : "Reward education"}
          columns={2}
          items={
            zh
              ? [
                  {
                    title: "为何条件重要",
                    body: "条件决定摘要数字会不会变成压力。读条件是保护预算墙，不是找漏洞。",
                  },
                  {
                    title: "如何比较礼遇类型",
                    body: "限时倍数适合一次路径；返水适合持续游玩语言。选符合你会话计划的类型，而不是数字最大的标题。",
                  },
                  {
                    title: "摘要不能替代条款",
                    body: "本站镜像公开材料以便识读。冲突时以平台为准。",
                  },
                  {
                    title: "避免误解",
                    body: "上限不是典型结果；1.1% 不是投资收益率；奖池不是保证头奖。",
                  },
                ]
              : [
                  {
                    title: "Why conditions matter",
                    body: "Conditions decide whether a headline figure becomes pressure. Reading conditions protects your budget wall — it is not a hunt for loopholes.",
                  },
                  {
                    title: "How to compare benefit types",
                    body: "Timed multiples fit a one-path session; cashback fits ongoing play language. Choose the type that matches your session plan, not the loudest headline.",
                  },
                  {
                    title: "Summaries do not replace terms",
                    body: "This site mirrors public materials for literacy. When they conflict, trust the platform.",
                  },
                  {
                    title: "Avoid misunderstandings",
                    body: "A ceiling is not a typical outcome; 1.1% is not an investment yield; a prize pool is not a guaranteed jackpot.",
                  },
                ]
          }
        />

        <RelatedCards
          title={zh ? "精选奖励入口" : "Featured reward destinations"}
          items={[
            {
              href: localePath(locale, "/promotions"),
              title: zh ? "优惠" : "Promotions",
              body: zh ? "已核实活动摘要与条款概念。" : "Verified offer summaries and terms concepts.",
            },
            {
              href: localePath(locale, "/vip"),
              title: "VIP",
              body: zh ? "返水上限与关系通道。" : "Cashback ceiling and relationship lane.",
            },
            {
              href: localePath(locale, "/guides/understanding-rewards-vip"),
              title: zh ? "奖励攻略" : "Rewards guide",
              body: zh ? "更慢的生态识读。" : "A slower ecosystem walkthrough.",
            },
            {
              href: localePath(locale, "/faq"),
              title: zh ? "常见问题" : "FAQ",
              body: zh ? "奖励分组问答。" : "Grouped answers including rewards.",
            },
          ]}
        />

        <InfoGrid
          title={zh ? "理性参与" : "Responsible participation"}
          columns={2}
          items={[
            {
              title: zh ? "奖励不能加高限额" : "Rewards do not raise limits",
              body: zh
                ? "不要为完成活动或“维持等级感”而超出预算。"
                : "Do not overspend to finish an activity or chase a sense of tier progress.",
            },
            {
              title: zh ? "需要重置时离开" : "Leave when you need a reset",
              body: zh
                ? "压力上升就停止，并阅读理性游戏。"
                : "Stop when pressure rises and read Responsible Gaming.",
              href: localePath(locale, "/responsible-gaming"),
            },
          ]}
        />

        <div className="mt-14">
          <HubH2>{zh ? "奖励常见问题" : "Rewards FAQ"}</HubH2>
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

        <HubCtaBand
          locale={locale}
          title={zh ? "地图在此，办理在平台" : "The map is here; actions finish on the platform"}
          body={
            zh
              ? "用奖励中心保持识读，再用打开平台处理领取与进度。"
              : "Use the Rewards Hub for literacy, then Open platform for claims and progress."
          }
        />
      </Container>
    </Section>
  );
}
