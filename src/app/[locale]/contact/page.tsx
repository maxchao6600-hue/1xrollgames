import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getFaqByGroup } from "@/data";
import { siteConfig, ctaConfig } from "@/config/site";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { CustomerServiceCtas } from "@/components/layout/CustomerService";
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
    path: "/contact",
    title: t(dict, "contact.title"),
    description: t(dict, "contact.subtitle"),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const faq = getFaqByGroup("general").filter((item) =>
    ["support", "what-is-1xroll"].includes(item.id),
  );

  const copy =
    locale === "zh"
      ? {
          howTitle: "如何获得帮助",
          howBody:
            "账户、登录、钱包、存款、取款与活动领取问题，可先通过本站 Telegram / WhatsApp 客服咨询；登录后也可使用 1XROLL 平台内支持渠道。本品牌站不处理资金操作。",
          platformTitle: "平台入口",
          platformBody:
            "打开平台以登录或注册，再通过平台工具完成账户与资金相关请求。品牌站客服入口为 Telegram 与 WhatsApp；本页仍不提供电话号码或线下地址。",
          brandTitle: "品牌站问询",
          brandBody:
            "若主题是内容勘误、页面链接或本站编辑说明，可使用下方配置的邮箱（如有）。请注明语言偏好与主题。合作类问询同样可通过该邮箱发送；具体商务条款不在本站编造。",
          moreTitle: "先读这些页面",
          moreBody:
            "许多常见问题已在常见问题与理性游戏中解答。优惠与 VIP 摘要见优惠 / 奖励通道；公平游戏说明透明度表述边界。",
          emailNote: "该地址来自站点配置，用于品牌站导览问询——不是电话或即时通讯替代。",
          noChannels:
            "本页不列出电话号码或实体办公地址。即时通讯客服请使用下方 Telegram 与 WhatsApp。",
        }
      : {
          howTitle: "How to get help",
          howBody:
            "For account, login, wallet, deposit, withdrawal and promotion-claim issues, use Telegram or WhatsApp customer service on this site. After you sign in, you can also use 1XROLL platform support. This brand site does not process funds.",
          platformTitle: "Platform entry",
          platformBody:
            "Open the platform to log in or register, then use platform tools for account and funding requests. Brand-site customer service is available on Telegram and WhatsApp. This page still does not publish phone numbers or street addresses.",
          brandTitle: "Brand-site inquiries",
          brandBody:
            "For content corrections, broken links or editorial questions about this site, use the configured email below when available. Include your preferred language and topic. Partnership notes may use the same address; we do not invent commercial terms here.",
          moreTitle: "Read these first",
          moreBody:
            "Many common questions are already answered in FAQ and Responsible Gaming. Promotions and VIP summaries live under Promotions / Rewards; Fair Play explains transparency-language boundaries.",
          emailNote:
            "This address comes from site configuration for brand-site orientation — it is not a phone or messaging substitute.",
          noChannels:
            "This page does not list phone numbers or physical office addresses. Use Telegram and WhatsApp below for messaging support.",
        };

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "contact.title") },
          ]}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "contact.title")}
        </h1>
        <p className="mt-3 max-w-2xl text-text-muted">
          {t(dict, "contact.subtitle")}
        </p>

        <div className="prose-brand mt-8 max-w-3xl">
          <h2>{copy.howTitle}</h2>
          <p>{copy.howBody}</p>
          <h2>{copy.platformTitle}</h2>
          <p>{copy.platformBody}</p>
          <h2>{copy.brandTitle}</h2>
          <p>{copy.brandBody}</p>
          <p>{copy.noChannels}</p>
          <h2>{copy.moreTitle}</h2>
          <p>{copy.moreBody}</p>
        </div>

        <CustomerServiceCtas locale={locale} />

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={ctaConfig.play.href} external>
            {t(dict, "common.openPlatform")}
          </Button>
          <Button href={localePath(locale, "/login")} variant="secondary">
            {t(dict, "nav.login")}
          </Button>
          <Button href={localePath(locale, "/register")} variant="outline">
            {t(dict, "nav.register")}
          </Button>
        </div>

        {siteConfig.supportEmail ? (
          <div className="mt-8 max-w-xl rounded-2xl border border-border bg-bg-surface p-6">
            <p className="text-sm text-text-muted">{t(dict, "contact.emailLabel")}</p>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="mt-2 inline-block text-lg text-accent hover:underline"
            >
              {siteConfig.supportEmail}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {copy.emailNote}
            </p>
          </div>
        ) : null}

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/faq", label: t(dict, "nav.faq") },
            { href: "/responsible-gaming", label: t(dict, "nav.responsible") },
            { href: "/fair-play", label: t(dict, "nav.fairPlay") },
            { href: "/beginner-guide", label: t(dict, "nav.beginner") },
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

        {faq.length ? (
          <div className="mt-14 max-w-3xl">
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
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
