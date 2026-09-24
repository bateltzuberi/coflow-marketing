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

/** The letters Hebrew glues onto the front of a word: bet, he, vav, kaf,
 *  lamed, mem, shin. Written as code points because they are grammar, not
 *  words anyone should translate. */
const HEBREW_PREFIX_LETTER = /^[\u05d1\u05d4\u05d5\u05db\u05dc\u05de\u05e9]/;

/** Other spellings of one typed word: its synonym group (published with the
 *  content, so this file holds no vocabulary of its own) and, for Hebrew, the
 *  word without the prepositions and article glued to its front ("בעוגן").
 *
 *  Only a real prefix letter comes off, and only while three letters remain:
 *  taking any first letters off turned "דילים" into "ילים", which sits inside
 *  "מילים" and "כלים". */
function alternatives(term: string, synonyms: string[][]): string[] {
  const out = new Set<string>([term]);
  let stem = term;
  // Twice, because Hebrew stacks them: ש + ה + תבנית.
  for (let i = 0; i < 2; i++) {
    if (!HEBREW_PREFIX_LETTER.test(stem) || stem.length - 1 < 3) break;
    stem = stem.slice(1);
    out.add(stem);
  }
  for (const group of synonyms) {
    if (group.some((word) => out.has(word))) {
      for (const word of group) out.add(word);
    }
  }
  return [...out];
}

/** Below this, a result list is thin enough that a near-miss is worth adding. */
const THIN_RESULT_LIST = 3;

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
    if (strict.length >= THIN_RESULT_LIST) return strict.slice(0, 10);

    const alts = terms.map((t) => alternatives(t, synonyms));
    const near = rows.filter((r) => alts.every((group) => group.some((alt) => hay(r).includes(alt))));
    const seen = new Set(strict.map((r) => r.href));
    return [...strict, ...near.filter((r) => !seen.has(r.href))].slice(0, 10);
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
