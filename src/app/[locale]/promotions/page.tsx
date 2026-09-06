import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getFaqByGroup, promotions } from "@/data";
import { ctaConfig } from "@/config/site";
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
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/promotions",
    title: t(dict, "promotions.title"),
    description: t(dict, "promotions.subtitle"),
  });
}

export default async function PromotionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const faq = getFaqByGroup("promotions");

  const copy =
    locale === "zh"
      ? {
          eyebrow: "活动中心",
          howTitle: "优惠如何运作",
          howBody:
            "本页汇总已在品牌网络发布的优惠摘要。资格确认、领取与进度始终在登录后的 1XROLL 平台完成。品牌站卡片用于发现与导览——不是独立的领取系统。",
          termsTitle: "为什么条款重要",
          termsBody:
            "每项优惠都有资格、贡献游戏、时限与领取规则。卡片上的摘要帮助你快速扫读；完整条款以平台展示为准。若摘要与平台冲突，以平台为准。",
          eligibleTitle: "资格与参与",
          eligibleBody:
            "常见条件可能包括账户状态、存款或投注门槛、地区与活动窗口。本站不编造额外门槛数字。打开平台后阅读当前活动规则，再决定是否参与。",
          turnoverTitle: "流水概念（教育说明）",
          turnoverBody:
            "“流水”或下注要求通常指：在可提取奖励相关资金前，需要完成一定倍数的有效投注。倍数与哪些游戏计入贡献因活动而异。本段只解释概念——具体倍数请只相信你领取的那项活动在平台上显示的数字，不要把其他页面的数字混用。",
          responsibleTitle: "理性参与优惠",
          responsibleBody:
            "优惠不能替代个人限额。不要为了“做完流水”而提高超出预算的注额。若追逐损失或压力上升，请离开活动并阅读理性游戏。",
          listTitle: "当前活动摘要",
          faqTitle: "常见问题",
        }
      : {
          eyebrow: "Promotion Hub",
          howTitle: "How promotions work",
          howBody:
            "This page summarises offers published on the brand network. Eligibility, claiming and progress always complete on the 1XROLL platform after login. Brand-site cards are for discovery and orientation — not a separate claim system.",
          termsTitle: "Why terms matter",
          termsBody:
            "Every offer has eligibility, game contribution, timing and claim rules. Card summaries help you scan quickly; full terms live on the platform. If a summary and the platform disagree, trust the platform.",
          eligibleTitle: "Eligibility",
          eligibleBody:
            "Common conditions may include account status, deposit or wagering thresholds, region and offer windows. This site does not invent extra threshold numbers. Read the live offer rules on the platform before you opt in.",
          turnoverTitle: "Turnover (educational)",
          turnoverBody:
            "“Turnover” or wagering usually means completing a multiple of eligible bets before related bonus funds can be withdrawn. Multiples and which games contribute vary by offer. This paragraph explains the idea only — trust the numbers shown for the specific offer you claim on the platform, and do not mix figures from other pages.",
          responsibleTitle: "Responsible participation",
          responsibleBody:
            "Promotions do not replace personal limits. Do not raise stakes beyond your budget just to “finish wagering.” If chasing losses or pressure rises, leave the offer and read Responsible Gaming.",
          listTitle: "Current offer summaries",
          faqTitle: "FAQ",
        };

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "promotions.title") },
          ]}
        />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {copy.eyebrow}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "promotions.title")}
        </h1>
        <p className="mt-3 max-w-2xl text-text-muted">
          {t(dict, "promotions.subtitle")}
        </p>

        <div className="prose-brand mt-8 max-w-3xl">
          <h2>{copy.howTitle}</h2>
          <p>{copy.howBody}</p>
          <h2>{copy.termsTitle}</h2>
          <p>{copy.termsBody}</p>
          <h2>{copy.eligibleTitle}</h2>
          <p>{copy.eligibleBody}</p>
          <h2>{copy.turnoverTitle}</h2>
          <p>{copy.turnoverBody}</p>
          <h2>{copy.responsibleTitle}</h2>
          <p>
            {copy.responsibleBody}{" "}
            <Link href={localePath(locale, "/responsible-gaming")}>
              {t(dict, "nav.responsible")}
            </Link>
            .
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link href={localePath(locale, "/rewards")} className="text-accent hover:underline">
            {t(dict, "nav.rewards")}
          </Link>
          <Link href={localePath(locale, "/rebates")} className="text-accent hover:underline">
            {t(dict, "nav.rebates")}
          </Link>
          <Link href={localePath(locale, "/vip")} className="text-accent hover:underline">
            {t(dict, "nav.vip")}
          </Link>
        </div>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl text-text">
          {copy.listTitle}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="overflow-hidden rounded-2xl border border-border bg-bg-surface"
            >
              {promo.image ? (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={promo.image}
                    alt={localize(promo.title, locale)}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="space-y-3 p-5">
                <p className="text-xs uppercase tracking-wide text-accent">
                  {locale === "zh" ? "当前活动" : "Current activity"}
                </p>
                <h3 className="text-xl text-text">
                  {localize(promo.title, locale)}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {localize(promo.description, locale)}
                </p>
                <Link
                  href={localePath(locale, promo.href)}
                  className="inline-flex text-sm font-medium text-accent hover:underline"
                >
                  {localize(promo.ctaLabel, locale)} →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={ctaConfig.register.href} external>
            {t(dict, "nav.register")}
          </Button>
          <Button href={localePath(locale, "/rewards")} variant="secondary">
            {t(dict, "nav.rewards")}
          </Button>
          <Button href={localePath(locale, "/responsible-gaming")} variant="outline">
            {t(dict, "nav.responsible")}
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
      </Container>
    </Section>
  );
}
