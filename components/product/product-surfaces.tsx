type SurfaceItem = {
  id: string;
  tag: string;
  title: string;
  body: string;
};

type ProductSurfacesCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: readonly SurfaceItem[];
};

export function ProductSurfaces({
  tone,
  t,
}: {
  tone: "studio" | "agencies";
  t: ProductSurfacesCopy;
}) {
  const isAgencies = tone === "agencies";
  const chipClass = isAgencies ? "chip chip-lavender" : "chip chip-lime";

  return (
    <section id="surfaces" className="section">
      <div className="container-page">
        <div className="text-center mx-auto max-w-2xl">
          <p className="font-mono-label" lang="en">
            {t.eyebrow}
          </p>
          <h2 className="font-display-h2 mt-5 text-[34px] sm:text-[44px] md:text-[52px]">
            {t.title}
          </h2>
          <p className="mt-4 text-[17px] text-ink-700">{t.subtitle}</p>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {t.items.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="card p-7 md:p-8 scroll-mt-24"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <span className={chipClass} lang="en">
                {item.tag}
              </span>
              <h3 className="mt-4 text-[20px] md:text-[22px] font-bold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-ink-700">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
