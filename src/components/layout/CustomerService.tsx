import type { ReactNode } from "react";
import type { Locale } from "@/types/content";
import { siteConfig } from "@/config/site";
import { getDictionary, t } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const telegramHref = siteConfig.social.telegram;
const whatsappHref = siteConfig.social.whatsapp;

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M21.5 3.4 18.4 20.3c-.23 1.02-.84 1.27-1.7.8l-4.7-3.46-2.27 2.18c-.25.25-.46.46-.94.46l.34-4.78 8.7-7.86c.38-.34-.08-.53-.59-.19l-10.76 6.78-4.64-1.45c-1.01-.31-1.03-1.01.21-1.5L20.2 2.9c.84-.31 1.58.19 1.3.5Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.45 1.34 4.95L2 22l5.37-1.4a10.05 10.05 0 0 0 4.67 1.18h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.74 14.16c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.14.31-.28.48-.14.16-.3.37-.42.5-.14.14-.29.29-.12.56.16.27.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.27 1.4.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.27.37-.22.62-.13.24.09 1.54.73 1.8.86.27.14.44.2.51.31.07.11.07.64-.17 1.32Z" />
    </svg>
  );
}

function SupportAnchor({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function CustomerServiceIcons({
  locale,
  className,
  size = "header",
}: {
  locale: Locale;
  className?: string;
  size?: "header" | "float";
}) {
  const dict = getDictionary(locale);
  const telegramLabel = t(dict, "nav.telegram");
  const whatsappLabel = t(dict, "nav.whatsapp");
  const box =
    size === "float"
      ? "inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"
      : "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition hover:border-accent/40 hover:text-text";
  const icon = size === "float" ? "h-6 w-6" : "h-4 w-4";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <SupportAnchor
        href={telegramHref}
        label={telegramLabel}
        className={cn(box, size === "float" && "bg-[#229ED9] hover:brightness-110")}
      >
        <TelegramIcon className={icon} />
        <span className="sr-only">{telegramLabel}</span>
      </SupportAnchor>
      <SupportAnchor
        href={whatsappHref}
        label={whatsappLabel}
        className={cn(box, size === "float" && "bg-[#25D366] hover:brightness-110")}
      >
        <WhatsAppIcon className={icon} />
        <span className="sr-only">{whatsappLabel}</span>
      </SupportAnchor>
    </div>
  );
}

export function CustomerServiceTextLinks({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const dict = getDictionary(locale);
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <SupportAnchor
        href={telegramHref}
        label={t(dict, "nav.telegram")}
        className="text-sm text-text-muted transition hover:text-accent"
      >
        {t(dict, "nav.telegram")}
      </SupportAnchor>
      <SupportAnchor
        href={whatsappHref}
        label={t(dict, "nav.whatsapp")}
        className="text-sm text-text-muted transition hover:text-accent"
      >
        {t(dict, "nav.whatsapp")}
      </SupportAnchor>
    </div>
  );
}

export function CustomerServiceCtas({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Button href={telegramHref} external>
        {t(dict, "contact.telegramCta")}
      </Button>
      <Button href={whatsappHref} external variant="outline">
        {t(dict, "contact.whatsappCta")}
      </Button>
    </div>
  );
}

export function FloatingCustomerService({ locale }: { locale: Locale }) {
  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-40 flex flex-col gap-2 md:bottom-8 md:right-6">
      <CustomerServiceIcons
        locale={locale}
        size="float"
        className="pointer-events-auto flex-col"
      />
    </div>
  );
}
