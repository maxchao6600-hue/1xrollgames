import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getFaqByGroup } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
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
    path: "/responsible-gaming",
    title: locale === "zh" ? "理性游戏" : "Responsible Gaming",
    description:
      locale === "zh"
        ? "关于年龄限制、个人限额、休息、合法性与求助渠道的理性游戏指引。"
        : "Guidance on age limits, personal limits, breaks, legality, and where to seek help.",
  });
}

export default async function ResponsibleGamingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const faq = getFaqByGroup("responsible");

  const copy =
    locale === "zh"
      ? {
          lead:
            "理性游戏意味着把数字娱乐保留在娱乐范畴：设定边界、识别风险信号，并在需要时停下来。1XROLL 是发现与教育型站点；我们不会用刺激文案鼓励你延长会话或追逐损失。本页提供教育性习惯指引——不是医疗诊断、也不是治疗方案。",
          ageTitle: "仅限成人",
          ageBody:
            "涉及真钱或博彩性质的活动仅面向法定成年用户（通常为 18+，以你所在司法辖区为准）。如果你未达法定年龄，请不要参与。家长与监护人应使用设备级管控工具，避免未成年人访问不适宜内容。",
          timeTitle: "时间限额",
          timeBody:
            "在打开大厅前决定会话长度——用时钟、闹钟或“固定回合数”均可。短回合与高反馈界面容易让时间感失真。把休息写进计划，而不是等疲惫后再说“再一局”。",
          spendTitle: "花费限额",
          spendBody:
            "限额应来自可自由支配的娱乐预算，而不是生活必需开支。写下每日 / 每周上限，并坚持。频繁上调限额“只为再来一局”，本身就是需要暂停的信号。",
          chaseTitle: "不要追逐损失",
          chaseBody:
            "用下一笔投入“扳回”上一笔结果，是常见且危险的模式。损失已经发生；加大投入不会偿还它。若你发现自己在为情绪而非娱乐而提高注额，请立即离开会话。",
          breaksTitle: "主动休息",
          breaksBody:
            "站立、离开屏幕、切换到非博彩活动。休息不是失败，而是保持控制的一部分。特色序列或真人秀章节结束后，是很好的自然断点。",
          patternsTitle: "值得注意的模式",
          patterns: [
            "为了追回损失而增加投入",
            "对亲近的人隐瞒游玩时间或花费",
            "忽略工作、学习或健康责任",
            "借款用于游玩",
            "即使不再感到乐趣仍无法停下",
            "把游玩当作应对压力或情绪的主要方式",
          ],
          stopTitle: "何时该停下",
          stopBody:
            "当娱乐不再愉快、限额被反复突破、或身边的人表达担忧时，停下。你不需要等到“更糟”才离开。把停止当作技能，而不是惩罚。",
          helpTitle: "寻求支持",
          helpBody:
            "若你或你关心的人正为游玩相关困扰所累，请联系当地专业组织、健康服务或你信任的支持网络。许多地区提供保密热线与咨询。把求助视为负责任的步骤，而不是耻辱。本站不诊断状况，也不替代专业帮助。",
          platformTitle: "平台与本站的责任",
          platformBody:
            "本品牌站避免虚假紧迫感与保证结果，并在游戏与攻略页链接回本页。账户工具（如平台提供的限额或暂停选项）仅在登录后的 1XROLL 平台内可用——请在平台确认实际功能。我们不提供法律意见，也不声称特定牌照。",
          legalTitle: "仅在合法地区参与",
          legalBody:
            "法律因国家与地区而异。在参与任何真钱活动前，确认你所在地的合规要求。",
          faqTitle: "常见问题",
          relatedTitle: "相关入口",
        }
      : {
          lead:
            "Responsible gaming means keeping digital entertainment inside entertainment boundaries: setting limits, recognising risk signals, and stopping when needed. 1XROLL is a discovery and education site; we do not use hype copy to push longer sessions or chase losses. This page offers educational habits — not medical diagnosis or treatment advice.",
          ageTitle: "Adults only",
          ageBody:
            "Activities involving real-money or gambling-like stakes are for adults of legal age in your jurisdiction (commonly 18+). If you are underage, do not participate. Parents and guardians should use device-level controls to keep minors away from unsuitable content.",
          timeTitle: "Time limits",
          timeBody:
            "Decide session length before you open the lobby — a clock, alarm or fixed round count all work. Short rounds and high-feedback interfaces can distort time. Build breaks into the plan instead of waiting until fatigue says “one more.”",
          spendTitle: "Spending limits",
          spendBody:
            "Limits should come from discretionary entertainment funds — never from money needed for living costs. Write a daily or weekly cap and keep it. Frequently raising a limit “just for one more round” is itself a cue to pause.",
          chaseTitle: "Do not chase losses",
          chaseBody:
            "Trying to “win back” a previous result with the next stake is a common and risky pattern. A loss has already happened; raising stakes does not repay it. If you notice yourself increasing bets for emotion rather than entertainment, leave the session.",
          breaksTitle: "Take deliberate breaks",
          breaksBody:
            "Stand, leave the screen, switch to a non-gambling activity. Breaks are not failure; they are part of staying in control. The end of a feature sequence or live-show chapter is a natural pause point.",
          patternsTitle: "Patterns worth noticing",
          patterns: [
            "Increasing stakes to recover losses",
            "Hiding time or spend from people close to you",
            "Neglecting work, study or health responsibilities",
            "Borrowing money to play",
            "Feeling unable to stop even when enjoyment is gone",
            "Using play as the main way to cope with stress or mood",
          ],
          stopTitle: "When to stop",
          stopBody:
            "Stop when entertainment stops feeling fun, limits are repeatedly broken, or people around you express concern. You do not need to wait for things to get “worse.” Treat stopping as a skill, not a punishment.",
          helpTitle: "Seek support",
          helpBody:
            "If you or someone you care about is struggling with play-related harm, contact local professional organisations, health services or a trusted support network. Many regions offer confidential helplines and counselling. Asking for help is a responsible step, not a stigma. This site does not diagnose conditions and does not replace professional help.",
          platformTitle: "Platform and site responsibility",
          platformBody:
            "This brand site avoids fake urgency and guaranteed outcomes, and links game and guide pages back here. Account tools (such as limit or pause options the platform may offer) exist only after login on the 1XROLL platform — confirm live features there. We do not provide legal advice and do not claim specific licenses.",
          legalTitle: "Only where legal",
          legalBody:
            "Laws vary by country and region. Confirm local requirements before any real-money participation.",
          faqTitle: "FAQ",
          relatedTitle: "Related links",
        };

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "responsible.title") },
          ]}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "responsible.title")}
        </h1>
        <div className="prose-brand mt-8 max-w-3xl">
          <p>{copy.lead}</p>
          <h2>{copy.ageTitle}</h2>
          <p>{copy.ageBody}</p>
          <h2>{copy.timeTitle}</h2>
          <p>{copy.timeBody}</p>
          <h2>{copy.spendTitle}</h2>
          <p>{copy.spendBody}</p>
          <h2>{copy.chaseTitle}</h2>
          <p>{copy.chaseBody}</p>
          <h2>{copy.breaksTitle}</h2>
          <p>{copy.breaksBody}</p>
          <h2>{copy.patternsTitle}</h2>
          <ul>
            {copy.patterns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>{copy.stopTitle}</h2>
          <p>{copy.stopBody}</p>
          <h2>{copy.helpTitle}</h2>
          <p>{copy.helpBody}</p>
          <h2>{copy.platformTitle}</h2>
          <p>{copy.platformBody}</p>
          <h2>{copy.legalTitle}</h2>
          <p>{copy.legalBody}</p>
          <p>
            {locale === "zh" ? (
              <>
                若你主要是来学习机制与厂商差异，可以从{" "}
                <Link href={localePath(locale, "/guides")}>攻略</Link>与{" "}
                <Link href={localePath(locale, "/games")}>游戏库</Link>
                开始，并保持会话简短。
              </>
            ) : (
              <>
                If you are mainly here to learn mechanics and studio differences, start with{" "}
                <Link href={localePath(locale, "/guides")}>guides</Link> and the{" "}
                <Link href={localePath(locale, "/games")}>games library</Link>, and keep
                sessions short.
              </>
            )}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={localePath(locale, "/fair-play")} variant="secondary">
            {t(dict, "nav.fairPlay")}
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
          </div>
        ) : null}

        <div className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">
            {copy.relatedTitle}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/fair-play", label: t(dict, "nav.fairPlay") },
              { href: "/faq", label: t(dict, "nav.faq") },
              { href: "/contact", label: t(dict, "nav.contact") },
              { href: "/beginner-guide", label: t(dict, "nav.beginner") },
              { href: "/promotions", label: t(dict, "nav.promotions") },
              { href: "/about", label: t(dict, "nav.about") },
            ].map((item) => (
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
