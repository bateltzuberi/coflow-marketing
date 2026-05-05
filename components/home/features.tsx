import type { Dictionary } from "@/lib/dictionary";

const ICONS = [
  // Calendar
  <svg key="cal" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="5" width="16" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 9h16M9 3.5v3M15 3.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="7.5" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
  </svg>,
  // Bolt (automations)
  <svg key="bolt" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 3L5.5 13.5h5L11 21l7.5-10.5h-5L13 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
  // Chart (analytics)
  <svg key="chart" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 16v-4M12 16V8M16 16v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Stack (media library)
  <svg key="stack" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 18.5h10M8.5 21h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Speech bubbles (collab)
  <svg key="chat" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h7A2.5 2.5 0 0 1 17 6.5V11a2.5 2.5 0 0 1-2.5 2.5h-3L8 17v-3.5h-.5A2.5 2.5 0 0 1 5 11V6.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
  // Plug (integrations)
  <svg key="plug" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 4v4M15 4v4M7 8h10v3a5 5 0 0 1-10 0V8zM12 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

// Studio-led palette: lime + bridge only (no lavender — that's reserved
// for agency-tagged surfaces).
const TONES: Array<"lime" | "bridge"> = [
  "lime", "bridge", "lime", "bridge", "lime", "bridge",
];

export function Features({ t }: { t: Dictionary["features"] }) {
  return (
    <section className="section bg-surface-2">
      <div className="container-page">
        <div className="text-center mx-auto max-w-2xl">
          <p className="font-mono-label" lang="en">{t.eyebrow}</p>
          <h2 className="font-display-h2 mt-5 text-[34px] sm:text-[44px] md:text-[52px]">
            {t.title}
          </h2>
          <p className="mt-5 text-[17px] text-ink-700 leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => (
            <FeatureCard
              key={item.title}
              tone={TONES[i % TONES.length]}
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

function FeatureCard({
  tone,
  title,
  body,
  icon,
}: {
  tone: "lime" | "bridge";
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  const iconBox =
    tone === "lime"
      ? "bg-lime-tint text-lime-ink"
      : "bg-bridge text-ink-900";

  return (
    <article className="card p-7 lift-on-hover">
      <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center ${iconBox}`}>
        <span className="w-6 h-6 block">{icon}</span>
      </div>
      <h3 className="mt-6 text-[18px] font-bold tracking-tight text-ink-900">{title}</h3>
      <p className="mt-2 text-[14px] text-ink-700 leading-[1.65]">{body}</p>
    </article>
  );
}
