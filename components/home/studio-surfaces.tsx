import type { Dictionary } from "@/lib/dictionary";

const ICONS = [
  // Mic (podcast)
  <svg key="mic" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Mail (newsletter)
  <svg key="mail" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.5 7l8 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
  // Grid (social calendar)
  <svg key="grid" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" fill="currentColor" />
  </svg>,
  // Trend (analytics)
  <svg key="trend" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 18l5-6 4 3 7-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function StudioSurfaces({ t }: { t: Dictionary["surfaces"] }) {
  return (
    <section id="surfaces" className="section">
      <div className="container-page">
        <div className="text-center mx-auto max-w-2xl">
          <p className="font-mono-label" lang="en">{t.eyebrow}</p>
          <h2 className="font-display-h2 mt-5 text-[34px] sm:text-[44px] md:text-[52px]">
            {t.title}
          </h2>
          <p className="mt-5 text-[17px] text-ink-700 leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {t.items.map((item, i) => (
            <SurfaceCard
              key={item.title}
              tone={SURFACE_TONES[i % SURFACE_TONES.length]}
              tag={item.tag}
              title={item.title}
              body={item.body}
              icon={ICONS[i % ICONS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type SurfaceTone = "lime" | "lavender" | "bridge";

// Alternating tones so both brand colors (and the bridge gradient that
// joins them) appear in this section — not just lime.
const SURFACE_TONES: SurfaceTone[] = ["lime", "lavender", "bridge", "lime"];

function SurfaceCard({
  tone,
  tag,
  title,
  body,
  icon,
}: {
  tone: SurfaceTone;
  tag: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  const iconBox =
    tone === "lime"
      ? "bg-lime-tint text-lime-ink"
      : tone === "lavender"
        ? "bg-lavender-tint text-lavender-ink"
        : "bg-bridge text-ink-900";
  const chip =
    tone === "lavender" ? "chip chip-lavender" : "chip chip-lime";

  return (
    <article className="card p-7 md:p-8 lift-on-hover">
      <div className="flex items-start justify-between gap-4">
        <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0 ${iconBox}`}>
          <span className="w-6 h-6 block">{icon}</span>
        </div>
        <span className={chip} lang="en">{tag}</span>
      </div>
      <h3 className="mt-6 text-[20px] font-bold tracking-tight text-ink-900">{title}</h3>
      <p className="mt-2 text-[14px] text-ink-700 leading-[1.65]">{body}</p>
    </article>
  );
}
