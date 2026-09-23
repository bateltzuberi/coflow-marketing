import { academyShotSrc, type AcademyShot } from "@/lib/academy";

// A screenshot inside an answer, with numbered points on it.
//
// Same rule as in the product: every marker on the image is repeated as a
// numbered line under it. The circle is a shortcut for the people who can see
// it, never the only place the information exists.

export function AcademyShotFigure({ shot }: { shot: AcademyShot }) {
  const hotspots = shot.hotspots ?? [];
  return (
    <figure className="mt-5 max-w-[70ch]">
      <div className="relative overflow-hidden rounded-[16px] border border-line bg-surface-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={academyShotSrc(shot.src)} alt={shot.alt} className="block w-full" loading="lazy" />
        {hotspots.map((h, i) => (
          <span
            key={`${h.x}-${h.y}-${i}`}
            aria-hidden
            className="absolute flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-bold"
            style={{
              left: `${h.x}%`,
              top: `${h.y}%`,
              marginInlineStart: -12,
              marginTop: -12,
              background: "var(--color-ink-900)",
              color: "#fff",
              boxShadow: "0 0 0 3px #fff",
            }}
          >
            {i + 1}
          </span>
        ))}
      </div>
      {(hotspots.length > 0 || shot.caption) && (
        <figcaption className="mt-2 text-[13px] leading-[1.6] text-ink-500">
          {shot.caption && <span className="block">{shot.caption}</span>}
          {hotspots.length > 0 && (
            <ol className="mt-1 space-y-0.5">
              {hotspots.map((h, i) => (
                <li key={`${h.x}-${h.y}-${i}`}>
                  {i + 1} — {h.label}
                </li>
              ))}
            </ol>
          )}
        </figcaption>
      )}
    </figure>
  );
}
