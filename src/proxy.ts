import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isLocale, locales } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && isLocale(segment)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${siteConfig.localeDefault}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

void locales;
