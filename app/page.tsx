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
import { JsonLd, organizationJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

export const metadata = buildMetadata({
  title: "Coflow — a blunt diagnosis of your Instagram",
  description:
    "Paste your Instagram link and get a blunt, outside-in diagnosis of your profile in minutes: clarity, authority, differentiation, trust, and the path to money. No sign-up.",
  path: "/",
});

export default async function Home() {
  const locale = await getLocale();
  const dict = getDict(locale);

  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Nav />
      <main>
        {/* Short and sharp. Pain, curiosity, diagnosis. Every CTA points at
         *   the diagnosis only; the system is explained on /how-it-works.
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
