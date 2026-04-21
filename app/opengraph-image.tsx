import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = "Coflow — invite-only workspace for social media agencies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens duplicated here on purpose: ImageResponse runs at the edge
// without our Tailwind/CSS pipeline, so we inline the few colors we need.
const INK = "#2B2A27";
const PAPER = "#FAF8F2";
const PARCHMENT = "#F3F0E7";
const OCHRE = "#E8B84A";
const MUTED = "#7A7870";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: PAPER,
          color: INK,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top: wordmark + status pill */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", color: INK }}>
            <span style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-0.02em" }}>CO</span>
            <span
              style={{
                fontSize: 56,
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: "#4A4944",
                borderBottom: `4px solid ${OCHRE}`,
                paddingBottom: "4px",
                lineHeight: 1,
              }}
            >
              flow
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: INK,
              background: "#F7E9B8",
              padding: "10px 18px",
              borderRadius: "999px",
            }}
          >
            Invite-only · Early access
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: 980 }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: INK,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            The all-in-one workspace social media agencies have been waiting for.
          </div>
          <div style={{ fontSize: 28, color: MUTED, lineHeight: 1.4, display: "flex" }}>
            Content calendar · Client approvals · Agency CRM · Tasks
          </div>
        </div>

        {/* Bottom: replaces strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${PARCHMENT}`,
            paddingTop: "24px",
          }}
        >
          <div style={{ fontSize: 22, color: MUTED, display: "flex" }}>
            Replaces Planable, Asana, Later, Pipedrive
          </div>
          <div style={{ fontSize: 22, color: INK, fontWeight: 600, display: "flex" }}>
            {SITE.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
