"use client";

import Image from "next/image";
import { useState } from "react";
import { APP_ASSETS } from "@/data/assets";
import type { Locale } from "@/types/content";
import { cn } from "@/lib/utils";

export function HubArt({
  src,
  alt,
  className,
  aspectClass = "aspect-[4/3]",
  priority = false,
  overlay = false,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
  overlay?: boolean;
  objectPosition?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  const isSvg = src.endsWith(".svg");

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[1.25rem] border border-border bg-bg-elevated",
        aspectClass,
        className,
      )}
    >
      {isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          width={800}
          height={1000}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width:768px) 100vw, 640px"
          priority={priority}
          className="object-cover"
          style={{ objectPosition }}
          onError={() => setFailed(true)}
        />
      )}
      {overlay ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/20"
        />
      ) : null}
    </div>
  );
}

export function DevicePhone({
  locale,
  priority = false,
  className,
}: {
  locale: Locale;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[240px]", className)}>
      <div className="rounded-[2rem] border-[10px] border-[#1a222c] bg-[#070b10] shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.35rem] bg-bg">
          <Image
            src={APP_ASSETS.screenshot}
            alt={
              locale === "zh"
                ? "1XROLL 手机网页界面"
                : "1XROLL mobile web interface"
            }
            fill
            className="object-cover object-top"
            sizes="240px"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

export function DeviceTablet({ locale }: { locale: Locale }) {
  return (
    <div className="mx-auto w-full max-w-[320px]">
      <div className="rounded-[1.5rem] border-[12px] border-[#1a222c] bg-[#070b10] shadow-[0_16px_36px_rgba(0,0,0,0.35)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[0.85rem] bg-bg">
          <Image
            src={APP_ASSETS.screenshot}
            alt={
              locale === "zh"
                ? "1XROLL 平板上的网页界面"
                : "1XROLL web interface on tablet"
            }
            fill
            className="object-cover object-top"
            sizes="320px"
          />
        </div>
      </div>
    </div>
  );
}

export function DeviceDesktop({
  locale,
  priority = false,
}: {
  locale: Locale;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[1.15rem] border border-border bg-[#070b10] shadow-[0_16px_36px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-border bg-[#161e28] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-bg px-2 py-1 text-[10px] text-text-faint">
          1xrollgames.com
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-bg">
        <Image
          src={APP_ASSETS.screenshot}
          alt={
            locale === "zh"
              ? "1XROLL 网站桌面浏览器界面"
              : "1XROLL website in a desktop browser"
          }
          fill
          className="object-cover object-top"
          sizes="(max-width:768px) 100vw, 640px"
          priority={priority}
        />
      </div>
    </div>
  );
}

export function IdentityIcon({
  kind,
}: {
  kind: "player" | "agent" | "games" | "rewards" | "vip" | "partner" | "community" | "marketing";
}) {
  const common = "h-10 w-10 text-accent";
  if (kind === "player" || kind === "games") {
    return (
      <svg className={common} viewBox="0 0 40 40" aria-hidden>
        <rect x="6" y="10" width="28" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "rewards") {
    return (
      <svg className={common} viewBox="0 0 40 40" aria-hidden>
        <path d="M10 16h20v14H10z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 16v-3a6 6 0 0 1 12 0v3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (kind === "vip") {
    return (
      <svg className={common} viewBox="0 0 40 40" aria-hidden>
        <path d="M8 16l6 4 6-10 6 10 6-4-3 16H11z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (kind === "community") {
    return (
      <svg className={common} viewBox="0 0 40 40" aria-hidden>
        <circle cx="14" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="26" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 30c1-6 5-8 6-8s5 2 6 8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 30c1-6 5-8 6-8s5 2 6 8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (kind === "marketing") {
    return (
      <svg className={common} viewBox="0 0 40 40" aria-hidden>
        <path d="M8 22V14l16-6v20L8 22z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M24 16l8-4v16l-8-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 40 40" aria-hidden>
      <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <circle cx="32" cy="12" r="4" fill="none" stroke="#2dd4bf" strokeWidth="1.5" />
      <circle cx="10" cy="30" r="4" fill="none" stroke="#2dd4bf" strokeWidth="1.5" />
    </svg>
  );
}
