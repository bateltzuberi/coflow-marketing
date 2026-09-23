"use client";

// Search on the public help centre.
//
// The index lists every topic, but someone who arrives with a question in mind
// should not have to work out which topic it lives under — that is the whole
// job of a help centre's search box. The questions are already in the page's
// payload (the server renders them), so matching happens in the browser: no
// request, no spinner, and it works on the first keystroke.
//
// Only the QUESTIONS are matched here, not the full answers: shipping every
// answer to the browser to search them would double the page's weight for a
// feature most visitors never use. A miss says so plainly and points at the
// topics below.

import { useMemo, useState } from "react";
import Link from "next/link";

export interface ApexSearchRow {
  q: string;
  href: string;
  areaTitle: string;
}

export function AcademySearch({
  rows,
  placeholder,
  label,
  noResults,
  noResultsHint,
}: {
  rows: ApexSearchRow[];
  placeholder: string;
  label: string;
  noResults: string;
  noResultsHint: string;
}) {
  const [query, setQuery] = useState("");
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results = useMemo(() => {
    if (!terms.length) return [];
    return rows
      .filter((r) => terms.every((t) => `${r.q} ${r.areaTitle}`.toLowerCase().includes(t)))
      .slice(0, 10);
  }, [rows, terms]);

  return (
    <div className="mx-auto mt-7 max-w-[560px] text-start">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        aria-label={label}
        dir="auto"
        className="w-full rounded-[14px] border border-line bg-surface px-4 py-3 text-[15px] outline-none focus-visible:ring-[3px] focus-visible:ring-ink-300"
      />
      {terms.length > 0 && (
        <div className="mt-3">
          {results.length === 0 ? (
            <p className="text-[14px] text-ink-500">
              {noResults} {noResultsHint}
            </p>
          ) : (
            <ul className="space-y-1.5">
              {results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="block rounded-[12px] border border-line bg-surface px-4 py-2.5 text-[14px] text-ink-900 hover:bg-surface-2"
                    dir="auto"
                  >
                    {r.q}
                    <span className="mt-0.5 block text-[12px] text-ink-500">{r.areaTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
