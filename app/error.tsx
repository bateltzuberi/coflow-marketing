"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="font-mono-label">— Something broke —</p>
        <h1 className="font-display mt-6 text-4xl">We hit a snag.</h1>
        <p className="mt-4 text-base text-muted-foreground">
          Try again, or head back home.
        </p>
        {error?.digest && (
          <p className="mt-2 text-xs text-muted-foreground">ref: {error.digest}</p>
        )}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <button onClick={() => reset()} className="btn-primary min-h-11 text-sm">
            Try again
          </button>
          <Link href="/" className="btn-ghost min-h-11 text-sm">
            Back home
          </Link>
        </div>
      </body>
    </html>
  );
}
