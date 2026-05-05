import type { Dictionary } from "@/lib/dictionary";

export function Testimonials({ t }: { t: Dictionary["testimonials"] }) {
  return (
    <section className="bg-surface-2 section">
      <div className="container-page">
        <div className="text-center mx-auto max-w-2xl">
          <p className="font-mono-label" lang="en">{t.eyebrow}</p>
          <h2 className="font-display-h2 mt-5 text-[34px] sm:text-[44px] md:text-[52px]">
            {t.title}
          </h2>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {t.items.map((item, i) => (
            <TestimonialCard
              key={i}
              tone={item.product}
              quote={item.quote}
              name={item.name}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  tone,
  quote,
  name,
  role,
}: {
  tone: "studio" | "agencies";
  quote: string;
  name: string;
  role: string;
}) {
  const isStudio = tone === "studio";
  const quoteColor = isStudio ? "text-lime-deep" : "text-lavender-deep";
  const chipClass = isStudio ? "chip chip-lime" : "chip chip-lavender";
  const avatarBg = isStudio ? "bg-lime" : "bg-lavender";
  const avatarInk = isStudio ? "text-lime-ink" : "text-lavender-ink";
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <article className="card p-7 md:p-9 relative">
      <span
        aria-hidden="true"
        className={`absolute top-5 start-7 text-[64px] leading-none ${quoteColor} opacity-25 select-none`}
      >
        “
      </span>

      <p className="relative mt-6 text-[17px] md:text-[19px] font-medium text-ink-900 leading-[1.5]">
        {quote}
      </p>

      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center text-[14px] font-bold ${avatarBg} ${avatarInk}`}
            aria-hidden="true"
          >
            {initials}
          </div>
          <div>
            <p className="text-[14px] font-semibold text-ink-900">{name}</p>
            <p className="text-[12px] text-ink-500 mt-0.5">{role}</p>
          </div>
        </div>
        <span className={chipClass} lang="en">
          {tone}
        </span>
      </div>
    </article>
  );
}
