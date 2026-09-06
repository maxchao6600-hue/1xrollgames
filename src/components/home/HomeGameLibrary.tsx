import Link from "next/link";
import type { Locale } from "@/types/content";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

const POINTS = {
  en: [
    {
      title: "Category shelves",
      body: "Start with a lane — slots, live casino, crypto, fast, fishing, or a platform hub — then open title pages for mechanics notes.",
    },
    {
      title: "Provider craft",
      body: "When studio style matters more than a single theme, browse the provider directory and jump into verified catalogues.",
    },
    {
      title: "Featured discovery",
      body: "Use featured rails and guides to compare pacing before you open the live platform for play.",
    },
    {
      title: "Mobile browsing",
      body: "Catalogue pages are built to read on a phone. Prefer stable connections when you continue into live rounds.",
    },
  ],
  zh: [
    {
      title: "分类货架",
      body: "从一条车道开始——老虎机、真人、加密、快速、捕鱼或平台枢纽——再打开作品页阅读机制说明。",
    },
    {
      title: "厂商工艺",
      body: "当工作室风格比单一主题更重要时，浏览厂商目录并进入已核实货架。",
    },
    {
      title: "精选发现",
      body: "用精选轨道与攻略比较节奏，再打开实时平台游玩。",
    },
    {
      title: "移动浏览",
      body: "目录页面向手机阅读。进入实时回合时请优先稳定网络。",
    },
  ],
} as const;

export function HomeGameLibrary({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const points = POINTS[locale];

  return (
    <Section className="bg-[rgba(14,18,24,0.35)]">
      <Container>
        <SectionHeader
          eyebrow={locale === "zh" ? "发现路径" : "Discovery"}
          title={
            locale === "zh"
              ? "探索 1XROLL 游戏库"
              : "Explore the 1XROLL Game Library"
          }
          description={
            locale === "zh"
              ? "本站是阅览室：用分类、厂商与攻略理解生态，再通过登录/注册进入平台大厅。发现流程保持诚实——不编造库存或赔率。"
              : "This site is a reading room: use categories, providers, and guides to understand the ecosystem, then enter the platform lobby via Login/Register. Discovery stays honest — we do not invent inventory or odds."
          }
          action={
            <Button href={localePath(locale, "/games")} variant="secondary">
              {t(dict, "common.exploreGames")}
            </Button>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.15rem] border border-border bg-bg-surface p-5"
            >
              <h3 className="font-[family-name:var(--font-display)] text-lg text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-text-muted">
          <Link href={localePath(locale, "/providers")} className="text-accent hover:underline">
            {t(dict, "nav.providers")}
          </Link>
          {" · "}
          <Link href={localePath(locale, "/guides")} className="text-accent hover:underline">
            {t(dict, "nav.guides")}
          </Link>
          {" · "}
          <Link href={localePath(locale, "/faq")} className="text-accent hover:underline">
            {t(dict, "nav.faq")}
          </Link>
        </p>
      </Container>
    </Section>
  );
}
