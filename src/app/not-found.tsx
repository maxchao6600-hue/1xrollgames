import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-xs tracking-[0.2em] text-accent uppercase">404</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-text">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-text-muted">
        That URL is not in the {siteConfig.name} library. Try searching games or
        return home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/en/games"
          className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-[#041016]"
        >
          Search games
        </Link>
        <Link
          href="/en"
          className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-text"
        >
          Back home
        </Link>
        <Link
          href="/en/guides"
          className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-text"
        >
          Browse guides
        </Link>
      </div>
    </div>
  );
}
