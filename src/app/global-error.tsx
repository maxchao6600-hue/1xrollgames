"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#070b10] text-[#f4f1ea]">
        <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
          <p className="text-xs tracking-[0.2em] text-[#ffc45a] uppercase">1XROLL</p>
          <h1 className="mt-3 text-3xl font-semibold">Something went wrong</h1>
          <p className="mt-3 text-sm text-[#a8b0bc]">
            Please refresh or return home.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={reset}
              className="rounded-full bg-[#ffc45a] px-5 py-2.5 text-sm font-medium text-[#1a1205]"
            >
              Try again
            </button>
            <Link
              href="/en"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm"
            >
              Back home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
