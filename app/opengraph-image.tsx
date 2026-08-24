import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = "Coflow — נפתחת לקבוצה סגורה";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The share card. This is the first thing anyone sees when the launch link is
// pasted into WhatsApp or a DM, so it carries the launch message, not a generic
// product line: closed group, invite code, €14.
//
// Brand colors are inlined because ImageResponse runs at the edge without our
// Tailwind pipeline. The wordmark is the REAL file, fetched over HTTP from our
// own public/ — the edge runtime has no filesystem, and redrawing the logo in
// markup is what put an off-brand "CO flow" on this card in the first place.
const BLUE = "#4054F7";
const CREAM = "#FBEEB9";
const WORDMARK = `${SITE.url}/brand/coflow-wordmark-cream.png`;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BLUE,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top: the real wordmark + the launch status */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={WORDMARK} alt="coflow" height={64} width={280} />
          <div
            style={{
              display: "flex",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: BLUE,
              background: CREAM,
              padding: "10px 18px",
              borderRadius: "999px",
            }}
          >
            Invite only
          </div>
        </div>

        {/* Middle: the launch message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Your whole brand in one place.
          </div>
          <div
            style={{
              fontSize: 28,
              color: CREAM,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Strategy · Voice · Content · Publishing · Sales · Analytics
          </div>
        </div>

        {/* Bottom: price + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(251,238,185,0.35)",
            paddingTop: "24px",
          }}
        >
          <div style={{ fontSize: 22, color: CREAM, display: "flex" }}>
            €14/month · no trial · cancel any time
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#ffffff",
              fontWeight: 600,
              display: "flex",
            }}
          >
            {SITE.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
