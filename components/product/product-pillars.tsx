type PillarItem = {
  title: string;
  body: string;
};

type ProductPillarsCopy = {
  eyebrow: string;
  title: string;
  items: readonly PillarItem[];
};

export function ProductPillars({
  tone,
  t,
}: {
  tone: "studio" | "agencies";
  t: ProductPillarsCopy;
}) {
  const isAgencies = tone === "agencies";
  const dotClass = isAgencies ? "dot dot-lavender" : "dot dot-lime";

  return (
    <section className="section bg-surface-2">
      <div className="container-page">
        <div className="text-center mx-auto max-w-2xl">
          <p className="font-mono-label" lang="en">
            {t.eyebrow}
          </p>
          <h2 className="font-display-h2 mt-5 text-[28px] sm:text-[36px] md:text-[44px]">
            {t.title}
          </h2>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {t.items.map((p) => (
            <div
              key={p.title}
              className="bg-surface border border-line p-6 md:p-7"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <span className={dotClass} aria-hidden="true" />
              <h3 className="mt-3 text-[17px] md:text-[18px] font-bold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-700">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
