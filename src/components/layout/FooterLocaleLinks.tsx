"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocalePath } from "@/lib/paths";

export function FooterLocaleLinks() {
  const pathname = usePathname() || "/en";
  return (
    <div className="flex gap-3 text-sm">
      <Link
        href={switchLocalePath(pathname, "en")}
        className="text-text-muted hover:text-accent"
        hrefLang="en"
      >
        English
      </Link>
      <Link
        href={switchLocalePath(pathname, "zh")}
        className="text-text-muted hover:text-accent"
        hrefLang="zh"
      >
        中文
      </Link>
    </div>
  );
}
