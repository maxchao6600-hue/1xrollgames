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
      <body className="bg-[#07090c] text-[#e8eef7]">
        <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl font-semibold">Something went wrong</h1>
          <p className="mt-3 text-sm text-[#9aa8bc]">
            Please refresh or return home. A single failed asset should not take
            down the whole experience.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={reset}
              className="rounded-full bg-[#22e0d0] px-5 py-2.5 text-sm font-medium text-[#041016]"
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
