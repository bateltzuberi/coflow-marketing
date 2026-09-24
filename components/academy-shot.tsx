import { academyShotSrc, type AcademyShot } from "@/lib/academy";

// A screenshot inside an answer, with the points worth pointing at marked.
//
// A marker that carries a size is drawn as a RING AROUND the control, with its
// number on the corner: "press this one". Without a size it falls back to a
// numbered dot, which says "look here" and covers the thing it names.
//
// Same rule as in the product: every marker is repeated as a numbered line
// under the image. The drawing is a shortcut for the people who can see it,
// never the only place the information exists — and the colour is written out
// rather than taken from a token, because this file and the product's copy of
// it have to draw the same picture, and this site does not carry the studio's
// variables.

/** Red, not one of ours: a mark on a screenshot has to look added on top of
 *  the product rather than like another button in it. Written out because the
 *  same drawing must appear in the product, which carries different tokens. */
const MARK = "#E4002B";

export function AcademyShotFigure({ shot }: { shot: AcademyShot }) {
  const hotspots = shot.hotspots ?? [];
  return (
    <figure className="mt-5 max-w-[70ch]">
      <div className="relative overflow-hidden rounded-[16px] border border-line bg-surface-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={academyShotSrc(shot.src)} alt={shot.alt} className="block w-full" loading="lazy" />
        {hotspots.map((h, i) => {
          const badge = (
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-bold"
              style={{ background: MARK, color: "#fff", boxShadow: "0 0 0 2px #fff" }}
            >
              {i + 1}
            </span>
          );
          if (h.w && h.h) {
            // The number hangs off the ring, never over it — on the corner it
            // covers the first letters of whatever is inside. A ring at the
            // very top gets its number below, or the frame clips it.
            // Percentages, pixels: the badge is offset in px, so on a short
            // screenshot "6% from the top" can still be less than the badge's
            // own height. Flip it below the ring whenever the ring starts in
            // the top eighth of the picture — badge 1 on the products shot was
            // clipped clean off the frame.
            const nearTop = h.y - h.h / 2 < 12;
            return (
              <span
                key={`${h.x}-${h.y}-${i}`}
                aria-hidden
                className="absolute rounded-[10px]"
                style={{
                  left: `${h.x - h.w / 2}%`,
                  top: `${h.y - h.h / 2}%`,
                  width: `${h.w}%`,
                  height: `${h.h}%`,
                  border: `2px solid ${MARK}`,
                  boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${MARK}22`,
                }}
              >
                <span
                  className="absolute"
                  style={
                    nearTop
                      ? { insetInlineStart: -18, bottom: -18 }
                      : { insetInlineStart: -18, top: -18 }
                  }
                >
                  {badge}
                </span>
              </span>
            );
          }
          return (
            <span
              key={`${h.x}-${h.y}-${i}`}
              aria-hidden
              className="absolute"
              style={{ left: `${h.x}%`, top: `${h.y}%`, marginInlineStart: -26, marginTop: -26 }}
            >
              {badge}
            </span>
          );
        })}
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
