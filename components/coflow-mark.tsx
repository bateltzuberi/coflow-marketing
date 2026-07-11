import { useId } from "react";

type Tone = "bridge" | "white" | "ink" | "lime" | "lavender";

/**
 * The brand mark — the CF monogram from the master logo files. The
 * mark alone is the approved logo; the "coflow" wordmark beside it is
 * NOT part of the official brand assets and must be opted into
 * explicitly via `showWordmark`.
 */
export function CoflowMark({
  className = "",
  size = 28,
  showWordmark = false,
  tone = "bridge",
}: {
  className?: string;
  /** Mark height in px. The wordmark (when shown) scales relative to this. */
  size?: number;
  showWordmark?: boolean;
  tone?: Tone;
}) {
  const id = useId();
  const gradId = `cf-grad-${id.replace(/:/g, "")}`;
  const fill =
    tone === "bridge"
      ? `url(#${gradId})`
      : tone === "white"
        ? "#ffffff"
        : tone === "ink"
          ? "#1a1a1c"
          : tone === "lime"
            ? "#871A18"
            : "#FBEEB9";

  const textClass =
    tone === "bridge"
      ? "coflow-mark"
      : tone === "white"
        ? "coflow-mark coflow-mark--solid text-white"
        : tone === "ink"
          ? "coflow-mark coflow-mark--solid text-ink-900"
          : tone === "lime"
            ? "coflow-mark coflow-mark--solid text-lime-ink"
            : "coflow-mark coflow-mark--solid text-lavender-ink";

  return (
    <span className={`inline-flex items-center gap-2 leading-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        aria-hidden="true"
        className="shrink-0"
      >
        {tone === "bridge" && (
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBEEB9" />
              <stop offset="100%" stopColor="#871A18" />
            </linearGradient>
          </defs>
        )}
        <path
          d="M 110 28 L 60 28 A 50 50 0 0 0 60 128 L 110 128 L 110 100 L 78 100 A 22 22 0 0 1 78 56 L 110 56 Z"
          fill={fill}
        />
        <path
          d="M 118 28 L 172 28 L 172 56 L 146 56 L 146 78 L 168 78 L 168 100 L 146 100 L 146 172 L 118 172 Z"
          fill={fill}
        />
        <rect x="106" y="100" width="16" height="28" fill={fill} opacity={0.6} />
      </svg>
      {showWordmark && (
        <span
          lang="en"
          className={textClass}
          style={{ fontSize: Math.round(size * 0.85) }}
        >
          coflow
        </span>
      )}
    </span>
  );
}
