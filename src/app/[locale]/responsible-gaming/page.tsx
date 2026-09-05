import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
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
    path: "/responsible-gaming",
    title: locale === "zh" ? "理性游戏" : "Responsible gaming",
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

  const body =
    locale === "zh" ? (
      <div className="prose-brand mt-8 max-w-3xl">
        <p>
          理性游戏意味着把数字娱乐保留在娱乐范畴：设定边界、识别风险信号，并在需要时停下来。1XROLL
          是发现与教育型站点；我们不会用刺激文案鼓励你延长会话或追逐损失。
        </p>
        <h2>仅限成人</h2>
        <p>
          涉及真钱或博彩性质的活动仅面向法定成年用户（通常为 18+，以你所在司法辖区为准）。如果你未达法定年龄，请不要参与。家长与监护人应使用设备级管控工具，避免未成年人访问不适宜内容。
        </p>
        <h2>设定个人限额</h2>
        <p>
          在开始前决定时间与金钱上限，并把它写下来。限额应来自可自由支配的娱乐预算，而不是生活必需开支。若你发现自己经常上调限额“只为再来一局”，这本身就是需要暂停的信号。
        </p>
        <h2>定期休息</h2>
        <p>
          短回合与高反馈界面容易让时间感失真。使用计时器、站立活动，或在特色序列之间主动离开屏幕。休息不是失败，而是保持控制的一部分。
        </p>
        <h2>仅在合法地区参与</h2>
        <p>
          法律因国家与地区而异。在参与任何真钱活动前，确认你所在地的合规要求。1XROLL
          不提供法律意见，也不声称拥有特定牌照；我们不会在缺乏核实资料时展示认证徽章。
        </p>
        <h2>识别问题信号</h2>
        <ul>
          <li>为了追回损失而增加投入</li>
          <li>对亲近的人隐瞒游玩时间或花费</li>
          <li>忽略工作、学习或健康责任</li>
          <li>借款用于游玩</li>
          <li>即使不再感到乐趣仍无法停下</li>
        </ul>
        <h2>寻求帮助</h2>
        <p>
          若你或你关心的人正与问题性游玩搏斗，请联系当地专业组织或健康服务。许多地区提供保密热线与咨询。把求助视为负责任的步骤，而不是耻辱。
        </p>
        <h2>1XROLL 如何配合</h2>
        <p>
          我们的文案避免虚假紧迫感与保证结果。游戏与攻略页会链接回本页。若你主要是来学习机制与厂商差异，可以从{" "}
          <Link href={localePath(locale, "/guides")}>攻略</Link>与{" "}
          <Link href={localePath(locale, "/games")}>游戏库</Link>开始，并保持会话简短。
        </p>
      </div>
    ) : (
      <div className="prose-brand mt-8 max-w-3xl">
        <p>
          Responsible gaming means keeping digital entertainment inside entertainment
          boundaries: setting limits, recognizing risk signals, and stopping when needed.
          1XROLL is a discovery and education site; we do not use hype copy to push longer
          sessions or chase losses.
        </p>
        <h2>Adults only</h2>
        <p>
          Activities involving real-money or gambling-like stakes are for adults of legal
          age in your jurisdiction (commonly 18+). If you are underage, do not participate.
          Parents and guardians should use device-level controls to keep minors away from
          unsuitable content.
        </p>
        <h2>Set personal limits</h2>
        <p>
          Decide time and money caps before you start, and write them down. Limits should
          come from discretionary entertainment funds — never from money needed for living
          costs. If you frequently raise a limit “just for one more round,” treat that as a
          cue to pause.
        </p>
        <h2>Take breaks</h2>
        <p>
          Short rounds and high-feedback interfaces can distort time. Use timers, stand and
          move, or leave the screen between feature sequences. Breaks are not failure; they
          are part of staying in control.
        </p>
        <h2>Only where legal</h2>
        <p>
          Laws vary by country and region. Confirm local requirements before any real-money
          participation. 1XROLL does not provide legal advice and does not claim specific
          licenses; we will not display certification badges without verified materials.
        </p>
        <h2>Warning signs</h2>
        <ul>
          <li>Increasing stakes to recover losses</li>
          <li>Hiding time or spend from people close to you</li>
          <li>Neglecting work, study, or health responsibilities</li>
          <li>Borrowing money to play</li>
          <li>Feeling unable to stop even when enjoyment is gone</li>
        </ul>
        <h2>Seek help</h2>
        <p>
          If you or someone you care about is struggling with problematic play, contact
          local professional organizations or health services. Many regions offer confidential
          helplines and counseling. Asking for help is a responsible step, not a stigma.
        </p>
        <h2>How 1XROLL fits</h2>
        <p>
          Our copy avoids fake urgency and guaranteed outcomes. Game and guide pages link
          back here. If you are mainly here to learn mechanics and studio differences, start
          with{" "}
          <Link href={localePath(locale, "/guides")}>guides</Link> and the{" "}
          <Link href={localePath(locale, "/games")}>games library</Link>, and keep sessions
          short.
        </p>
      </div>
    );

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
        {body}
      </Container>
    </Section>
  );
}
