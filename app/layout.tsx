import type { Metadata } from "next";
import { Heebo, Geist, JetBrains_Mono, Red_Hat_Display } from "next/font/google";
import { SITE } from "@/lib/site";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { getLocale, dirFor } from "@/lib/locale";
import { isPreviewDeployment } from "@/lib/indexing";
import { FunnelBeacon } from "@/components/funnel-beacon";
import { WaitlistPopup } from "@/components/waitlist/waitlist-popup";
import { getDict } from "@/lib/dictionary";
import { betaSignupOpen } from "@/lib/beta-window";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { localizedPath } from "@/lib/locale-path";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// The home page's English face (Batel's pick, 2026-10-08): built like Heebo
// 900 (geometric, even strokes, solid), so the English page has the Hebrew's
// presence. Used through --font-redhat in app/home.css.
const redHat = Red_Hat_Display({
  variable: "--font-redhat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: { index: !isPreviewDeployment(), follow: !isPreviewDeployment() },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION, other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : {} },
  // No explicit `icons` — Next.js auto-generates the favicon link tag
  // from `app/icon.png` (file-based icon convention) — the real brand mark on
  // a blue tile, generated from public/brand/coflow-mark-cream.png.
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      dir={dirFor(locale)}
      className={`${heebo.variable} ${geist.variable} ${redHat.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {children}
        {/* Anonymous sign-up funnel counts for the Studio's /admin/traffic; never on a preview deploy. */}
        {!isPreviewDeployment() && <FunnelBeacon locale={locale} />}
        {!betaSignupOpen() && <WaitlistPopup locale={locale} t={getDict(locale).waitlist} />}
        {/* On every page, in the page's language (components/accessibility-menu). */}
        <AccessibilityMenu lang={locale} t={getDict(locale).a11y} statementHref={localizedPath("/accessibility", locale)} />
      </body>
    </html>
  );
}
