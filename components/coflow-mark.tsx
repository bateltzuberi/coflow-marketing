import Image from "next/image";

type Tone = "blue" | "cream";

/**
 * The brand mark — the REAL logo files, shared with the Studio app
 * (public/brand/*.png, copied from shebossit-cms so both surfaces render the
 * same artwork).
 *
 * This used to be a hand-drawn SVG approximation of the CF monogram. It was
 * close enough to look intentional and wrong enough to be off-brand, which is
 * exactly the failure mode of redrawing a logo in code. Don't do that again:
 * if a new colourway is needed, add the file.
 *
 * Two tones, because there are two files: `blue` (#4054F7) for light
 * backgrounds, `cream` for dark ones. There is no red variant — the site's
 * accent moved to the brand blue so the mark and the buttons agree.
 */

const MARK = {
  blue: "/brand/coflow-mark-blue.png",
  cream: "/brand/coflow-mark-cream.png",
} as const;

const WORDMARK = {
  blue: "/brand/coflow-wordmark-blue.png",
  cream: "/brand/coflow-wordmark-cream.png",
} as const;

// Intrinsic aspect ratios of the source files, so next/image gets honest
// dimensions and the layout doesn't shift while they load.
const MARK_RATIO = 400 / 365; // w/h
const WORDMARK_RATIO = 900 / 206;

export function CoflowMark({
  className = "",
  size = 28,
  showWordmark = false,
  tone = "blue",
}: {
  className?: string;
  /** Mark height in px. The wordmark (when shown) scales relative to this. */
  size?: number;
  showWordmark?: boolean;
  tone?: Tone;
}) {
  // The wordmark already contains the letterforms, so showing both would read
  // as the logo twice. When the wordmark is asked for, it IS the logo.
  if (showWordmark) {
    const height = Math.round(size * 0.72);
    return (
      <Image
        src={WORDMARK[tone]}
        alt="coflow"
        width={Math.round(height * WORDMARK_RATIO)}
        height={height}
        className={`h-auto w-auto ${className}`}
        priority
      />
    );
  }

  return (
    <Image
      src={MARK[tone]}
      alt="coflow"
      width={Math.round(size * MARK_RATIO)}
      height={size}
      className={`h-auto w-auto shrink-0 ${className}`}
      priority
    />
  );
}
