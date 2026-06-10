import type { Dictionary } from "@/lib/dictionary";

/**
 * Problem section. Names her real day in concrete scenes before any pitch,
 * so the reader feels understood and keeps scrolling toward the read.
 */
export function Problem({ t }: { t: Dictionary["problem"] }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display-h2 text-[28px] md:text-[40px]">{t.title}</h2>
          <ul className="mt-8 space-y-3 text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
            {t.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-8 text-[16px] md:text-[17px] font-semibold text-ink-900">
            {t.reframe}
          </p>
        </div>
      </div>
    </section>
  );
}
