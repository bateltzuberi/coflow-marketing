import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { DiagnosisMock } from "@/components/home/diagnosis-mock";
import {
  CentralMessage,
  WhatItShows,
  BluntAudit,
  WhyItMatters,
  MidCta,
} from "@/components/home/sections";
import { buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

// /diagnosis — the free Instagram read.
//
// This used to be the home page. It moved when the launch went invite-only:
// the front door is now registration (app/page.tsx), and the diagnosis is the
// thing you can still do without an account, on its own URL. Every CTA that
// used to point at "/#start" points here instead.

export const metadata = buildMetadata({
  title: "Coflow — a blunt diagnosis of your Instagram",
  description:
    "Paste your Instagram link and get a blunt, outside-in diagnosis of your profile in minutes: clarity, authority, differentiation, trust, and the path to money. No sign-up.",
  path: "/diagnosis",
});

export default async function DiagnosisPage() {
  const locale = await getLocale();
  const dict = getDict(locale);

  return (
    <>
      <Nav />
      <main>
        {/* Short and sharp. Pain, curiosity, diagnosis. The system is explained
         *   on /how-it-works; registration lives on the home page.
         *   1. Hero — the paste field + the promise
         *   2. CentralMessage — the core positioning line
         *   3. DiagnosisMock — show it's a sharp scorecard, not an AI report
         *   4. WhatItShows — the six questions it answers
         *   5. BluntAudit — what the audit hands you
         *   6. WhyItMatters — clarity, not content
         *   7. MidCta — back to the diagnosis
         */}
        <Hero t={dict.hero} locale={locale} />
        <CentralMessage text={dict.centralMessage} />
        <DiagnosisMock t={dict.mock} />
        <WhatItShows t={dict.whatItShows} />
        <BluntAudit t={dict.bluntAudit} />
        <WhyItMatters t={dict.whyItMatters} />
        <MidCta t={dict.midCta} href="#start" />
      </main>
      <Footer />
    </>
  );
}
