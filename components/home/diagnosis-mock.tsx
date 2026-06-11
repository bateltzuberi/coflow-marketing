import type { Dictionary } from "@/lib/dictionary";

/**
 * A static visual example of the diagnosis output, so the page makes it
 * obvious this is a sharp scorecard (verdicts + evidence + a fix), not a
 * generic AI report. Sample content only.
 */
const TONE: Record<string, { bg: string; fg: string }> = {
  strong: { bg: "var(--color-lime-tint)", fg: "var(--color-lime-ink)" },
  partial: { bg: "var(--color-lavender-tint)", fg: "var(--color-lavender-ink)" },
  weak: { bg: "#fbe3e1", fg: "#a3271f" },
};

export function DiagnosisMock({ t }: { t: Dictionary["mock"] }) {
  return (
    <div className="container-page">
      <div className="mx-auto max-w-xl">
        <div className="rounded-[24px] border border-line bg-white shadow-soft p-3">
          <div className="rounded-[18px] border border-line bg-paper p-5 md:p-6" dir="auto">
            <div className="flex items-center justify-between gap-3">
              <span className="chip chip-lime" lang="en">
                <span className="dot dot-lime" aria-hidden="true" /> {t.label}
              </span>
              <span className="text-[13px] font-semibold text-ink-700" dir="ltr">
                {t.handle}
              </span>
            </div>

            <ul className="mt-5 space-y-2">
              {t.rows.map((row) => {
                const tone = TONE[row.tone] ?? TONE.weak;
                return (
                  <li
                    key={row.lens}
                    className="flex items-center justify-between rounded-[12px] border border-line bg-white px-4 py-2.5"
                  >
                    <span className="text-[14px] font-semibold text-ink-900">{row.lens}</span>
                    <span
                      className="text-[12px] font-bold rounded-full px-2.5 py-0.5"
                      style={{ backgroundColor: tone.bg, color: tone.fg }}
                    >
                      {row.verdict}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 rounded-[12px] bg-surface-2 border border-line p-4">
              <p className="text-[11px] font-mono-label text-ink-500">{t.evidenceLabel}</p>
              <p className="mt-1 text-[13px] leading-[1.5] text-ink-700">{t.evidence}</p>
            </div>

            <div
              className="mt-3 rounded-[12px] p-4"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-lavender-tint) 0%, var(--color-lime-tint) 100%)",
              }}
            >
              <p className="text-[11px] font-mono-label text-ink-700">{t.fixLabel}</p>
              <p className="mt-1 text-[14px] font-semibold leading-[1.5] text-ink-900">{t.fix}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
