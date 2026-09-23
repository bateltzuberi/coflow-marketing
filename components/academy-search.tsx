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

/** Other spellings of one typed word: its synonym group (published with the
 *  content, so this file holds no vocabulary of its own) and, for Hebrew, the
 *  word with its first letter or two taken off — Hebrew glues its prepositions
 *  and its article onto the front of a word ("בעוגן"), so what a reader types
 *  is often what we wrote with a letter in front of it. Loose on purpose: the
 *  only caller runs it when the exact words found nothing. */
function alternatives(term: string, synonyms: string[][]): string[] {
  const out = new Set<string>([term]);
  if (/^[\u0590-\u05ff]/.test(term)) {
    if (term.length >= 4) out.add(term.slice(1));
    if (term.length >= 5) out.add(term.slice(2));
  }
  for (const group of synonyms) {
    if (group.some((word) => out.has(word))) {
      for (const word of group) out.add(word);
    }
  }
  return [...out];
}

export function AcademySearch({
  rows,
  synonyms = [],
  placeholder,
  label,
  noResults,
  noResultsHint,
}: {
  rows: ApexSearchRow[];
  synonyms?: string[][];
  placeholder: string;
  label: string;
  noResults: string;
  noResultsHint: string;
}) {
  const [query, setQuery] = useState("");
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  // Two passes, the second only when the first found nothing: exactly what was
  // typed, then the same query with synonyms and Hebrew prefixes allowed. A
  // query that already works keeps the results it had; the relaxation can only
  // turn an empty screen into an answer — and an empty screen is read as "the
  // answer does not exist", which is the most expensive thing search can say.
  const results = useMemo(() => {
    if (!terms.length) return [];
    const hay = (r: ApexSearchRow) => `${r.q} ${r.areaTitle}`.toLowerCase();
    const strict = rows.filter((r) => terms.every((t) => hay(r).includes(t)));
    const hits = strict.length
      ? strict
      : rows.filter((r) =>
          terms.every((t) => alternatives(t, synonyms).some((alt) => hay(r).includes(alt))),
        );
    return hits.slice(0, 10);
  }, [rows, terms, synonyms]);

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
