import type { Dictionary } from "@/lib/dictionary";

/**
 * Objection-killers. Each item removes one specific brake before the final
 * CTA: cost, account connection, "is it generic", data.
 */
export function Faq({ t }: { t: Dictionary["faq"] }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display-h2 text-[24px] md:text-[34px] text-center">{t.title}</h2>
          <div className="mt-8 space-y-3">
            {t.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-[18px] bg-surface border border-line p-5"
              >
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-ink-900">
                  <span>{item.q}</span>
                  <span className="text-ink-500 text-xl leading-none transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
