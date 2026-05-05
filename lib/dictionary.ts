import type { Locale } from "./locale";

/**
 * All marketing copy in one place. Hebrew is primary (the brand voice
 * is written in Hebrew first, then translated). Keep the structure
 * mirror-symmetric across languages or `t()` calls will break.
 *
 * Positioning: Studio-led. The home page sells coflow studio — "your
 * whole personal brand in one place". Agencies is surfaced as (a) a
 * nav link, (b) a mid-page band, (c) a paid tier in Pricing, and (d) a
 * footer column. Lime is the dominant accent; lavender only appears on
 * agency-tagged surfaces.
 */
export const DICT = {
  he: {
    nav: {
      features: "תכונות",
      pricing: "מחירים",
      blog: "בלוג",
      forAgencies: "לסוכנויות",
      signIn: "התחברות",
      cta: "התחילי בחינם",
    },

    hero: {
      eyebrow: "COFLOW STUDIO",
      titleA: "כל ניהול המותג",
      titleB: "האישי שלך —",
      titleC: "במקום אחד.",
      subtitle:
        "פודקאסט, ניוזלטר, סושיאל ואנליטיקס — תכננת, פרסמת, מדדת. בלי לקפוץ בין חמישה כלים.",
      cta: "התחילי בחינם",
      ctaSecondary: "מנהלת סוכנות?",
      caption: "המותג הראשון חינם, לתמיד. בלי כרטיס.",
      visualLabel: "studio",
      visualCaption: "תכנון פרק 14 · גרסה 2",
      visualMetric: "12 / 7",
    },

    surfaces: {
      eyebrow: "WHAT YOU SHIP",
      title: "מה את יוצרת השבוע?",
      subtitle:
        "כל פורמט של תוכן מקבל את המקום שלו — תכנון, פרסום, מעקב. ללא תוספים, ללא צ'אט עם לקוחות.",
      items: [
        {
          tag: "Podcast",
          title: "פודקאסט",
          body: "תכנון פרקים, ניהול אורחים, פרסום לכל הפלטפורמות עם תיאור וצ'אפטרים אוטומטיים.",
        },
        {
          tag: "Newsletter",
          title: "ניוזלטר",
          body: "כתיבה, תזמון ושליחה. מעקב פתיחות וקליקים שמתרגם לאנליטיקס במקום אחד.",
        },
        {
          tag: "Social",
          title: "סושיאל",
          body: "לוח שנה לכל הערוצים. תזמון, ארכיון פוסטים ושימוש חוזר במה שעבד.",
        },
        {
          tag: "Analytics",
          title: "אנליטיקס",
          body: "מספרים אחידים על פני כל הערוצים. רואה מה עובד באמת — לא דוחות נפרדים.",
        },
      ],
    },

    features: {
      eyebrow: "INSIDE THE STUDIO",
      title: "מה שיקבלת ביום הראשון.",
      subtitle: "תכונות הליבה שכבר בנויות. אין מה לחפש בתוספים.",
      items: [
        { title: "לוח שנה לכל הערוצים", body: "תכנון שבועי וחודשי, גרירה והעתקה. החודש כולו על מסך אחד." },
        { title: "אוטומציות", body: "שגרות חוזרות שמייצרות משימות בעצמן. את לא צריכה לזכור." },
        { title: "אנליטיקס", body: "מספרים ברורים. לא דוח של חמישים עמודים שאף אחד לא קורא." },
        { title: "ספריית מדיה", body: "קבצים, גרסאות, אסטים. הכל במקום אחד שאפשר לחפש בו." },
        { title: "שיתוף פעולה", body: "תגובות והערות בתוך הפוסט עצמו. בלי וואטסאפ ובלי Loom." },
        { title: "אינטגרציות", body: "יוטיוב, מטא, טיקטוק, גוגל ועוד. בקליק, בלי תיכנות." },
      ],
    },

    testimonials: {
      eyebrow: "WHAT OUR PEOPLE SAY",
      title: "מה שאומרים עלינו.",
      items: [
        {
          quote:
            "סוף סוף הפסקתי לקפוץ בין חמישה טאבים בכל פרק. הפודקאסט והניוזלטר חיים יחד.",
          name: "מיכל גרין",
          role: "פודקאסטרית · The Quiet Way",
          product: "studio" as const,
        },
        {
          quote:
            "אני שולחת ניוזלטר אחד בשבוע ופוסט כל יום. עד שהגעתי לכאן הייתי משלמת על שלושה כלים.",
          name: "נטע בן־דוד",
          role: "יוצרת תוכן · Indie Studio",
          product: "studio" as const,
        },
        {
          quote:
            "המספרים סוף סוף מסתדרים יחד. רואה את המסע של פוסט מהרעיון עד הקליק בניוזלטר.",
          name: "ענת לוי",
          role: "סופרת · בלי תהילה",
          product: "studio" as const,
        },
        {
          quote:
            "כשהצטרפנו עם הצוות לגרסת הסוכנויות, החלפנו ארבעה כלים. הסטודיו עבד יום ראשון.",
          name: "תמר אבני",
          role: "Founder · Bloom Agency",
          product: "agencies" as const,
        },
      ],
    },

    pricing: {
      eyebrow: "PRICING",
      title: "תוכניות פשוטות. בלי הפתעות.",
      subtitle: "התחילי בחינם. שדרגי כשהעבודה גדלה.",
      perMonth: "/ חודש",
      featured: "Studio",
      tiers: [
        {
          chip: "studio",
          product: "studio" as const,
          name: "Studio",
          price: "₪0",
          priceNote: "חינם לתמיד למותג אחד",
          bullets: [
            "מותג אחד, כל הערוצים",
            "פודקאסט · ניוזלטר · סושיאל",
            "אנליטיקס מאוחד",
            "ספריית מדיה",
            "אינטגרציות מלאות",
          ],
          cta: "התחילי בחינם",
          featured: true,
        },
        {
          chip: "agencies",
          product: "agencies" as const,
          name: "Agency",
          price: "₪149",
          priceNote: "לעורך, כולל את כל ה־Studio",
          bullets: [
            "כל מה שיש ב־Studio",
            "ניהול לקוחות ללא הגבלה",
            "אישורים, חשבוניות, CRM",
            "צוות עם הרשאות",
            "דוחות חודשיים מוכנים",
            "תמיכה ייעודית",
          ],
          cta: "להתחיל ניסיון",
          featured: false,
        },
      ],
      footnote: "צריכה משהו אחר? ",
      footnoteCta: "דברי איתנו →",
    },

    agencyBand: {
      eyebrow: "FOR AGENCIES",
      title: "מנהלת סוכנות?",
      body:
        "Coflow Agencies מקבלות את כל ה־Studio — ובנוסף ניהול לקוחות, אישורים, CRM וצוות. שכבה שלמה מעל המוצר שאת כבר מכירה.",
      cta: "ראי את חבילת הסוכנויות →",
    },

    footer: {
      tagline: "כל ניהול המותג האישי שלך במקום אחד.",
      cols: {
        studio: "Studio",
        agencies: "Agencies",
        company: "החברה",
        legal: "משפטי",
      },
      studioLinks: [
        { label: "פודקאסטים", href: "/#surfaces" },
        { label: "ניוזלטרים", href: "/#surfaces" },
        { label: "סושיאל", href: "/#surfaces" },
        { label: "אנליטיקס", href: "/#surfaces" },
      ],
      agenciesLinks: [
        { label: "ניהול לקוחות", href: "/agencies" },
        { label: "אישורים", href: "/agencies#approvals" },
        { label: "CRM", href: "/agencies#crm" },
        { label: "צוות", href: "/agencies#team" },
      ],
      companyLinks: [
        { label: "עלינו", href: "/about" },
        { label: "בלוג", href: "/blog" },
        { label: "צרי קשר", href: "/contact" },
      ],
      legalLinks: [
        { label: "פרטיות", href: "/privacy" },
        { label: "תנאי שימוש", href: "/terms" },
      ],
      copy: "© {year} Coflow · coflow.social",
      langSwitcher: "EN",
      langSwitcherAria: "Switch to English",
    },

    waitlist: {
      placeholder: "האימייל שלך",
      submit: "להתחיל",
      sourceLabel: "מי את?",
      sources: ["יוצרת תוכן", "סוכנות סושיאל", "פרילנסרית", "אחר"],
      success: "נכנסת! נחזור אליך בהקדם.",
      error: "משהו לא עבד, ננסי שוב?",
      privacy: "אנחנו לא שולחים ספאם. אפשר להסיר את עצמך בכל רגע.",
    },
  },

  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      blog: "Blog",
      forAgencies: "For agencies",
      signIn: "Sign in",
      cta: "Start free",
    },

    hero: {
      eyebrow: "COFLOW STUDIO",
      titleA: "Your whole",
      titleB: "personal brand —",
      titleC: "in one place.",
      subtitle:
        "Podcast, newsletter, social and analytics. Plan it, ship it, measure it. No more jumping between five tools.",
      cta: "Start free",
      ctaSecondary: "Running an agency?",
      caption: "First brand free, forever. No card.",
      visualLabel: "studio",
      visualCaption: "Episode 14 · v2",
      visualMetric: "12 / 7",
    },

    surfaces: {
      eyebrow: "WHAT YOU SHIP",
      title: "What are you making this week?",
      subtitle:
        "Every content format gets its own home — plan, publish, track. No add-ons, no client chat.",
      items: [
        {
          tag: "Podcast",
          title: "Podcast",
          body: "Plan episodes, manage guests, publish to every platform with auto descriptions and chapters.",
        },
        {
          tag: "Newsletter",
          title: "Newsletter",
          body: "Write, schedule, send. Open and click tracking that flows into one analytics view.",
        },
        {
          tag: "Social",
          title: "Social",
          body: "Calendar across every channel. Schedule, archive, and reuse what worked.",
        },
        {
          tag: "Analytics",
          title: "Analytics",
          body: "One unified view across all channels. See what actually worked — not separate dashboards.",
        },
      ],
    },

    features: {
      eyebrow: "INSIDE THE STUDIO",
      title: "What you get on day one.",
      subtitle: "Core features built in. Nothing to hunt for in plugins.",
      items: [
        { title: "Calendar across channels", body: "Weekly and monthly planning, drag and copy. The whole month on one screen." },
        { title: "Automations", body: "Recurring routines that create their own tasks. You don't have to remember." },
        { title: "Analytics", body: "Clear numbers. Not a fifty-page report nobody reads." },
        { title: "Media library", body: "Files, versions, assets. One place you can search through." },
        { title: "Collaboration", body: "Comments and approvals on the post itself. No more WhatsApp, no more Loom." },
        { title: "Integrations", body: "YouTube, Meta, TikTok, Google and more. One click, no code." },
      ],
    },

    testimonials: {
      eyebrow: "WHAT OUR PEOPLE SAY",
      title: "What people say.",
      items: [
        {
          quote: "Finally stopped jumping between five tabs for every episode. Podcast and newsletter live together.",
          name: "Michal Green",
          role: "Podcaster · The Quiet Way",
          product: "studio" as const,
        },
        {
          quote: "I send one newsletter a week and a daily post. Before this I was paying for three tools.",
          name: "Neta Ben-David",
          role: "Creator · Indie Studio",
          product: "studio" as const,
        },
        {
          quote: "The numbers finally line up. I can see a post's journey from idea to newsletter click.",
          name: "Anat Levy",
          role: "Author · No Spotlight",
          product: "studio" as const,
        },
        {
          quote: "When we joined the Agency tier with our team we replaced four tools. Studio worked from day one.",
          name: "Tamar Avni",
          role: "Founder · Bloom Agency",
          product: "agencies" as const,
        },
      ],
    },

    pricing: {
      eyebrow: "PRICING",
      title: "Simple plans. No surprises.",
      subtitle: "Start free. Upgrade when the work grows.",
      perMonth: "/ month",
      featured: "Studio",
      tiers: [
        {
          chip: "studio",
          product: "studio" as const,
          name: "Studio",
          price: "$0",
          priceNote: "Free forever for one brand",
          bullets: [
            "One brand, every channel",
            "Podcast · newsletter · social",
            "Unified analytics",
            "Media library",
            "Full integrations",
          ],
          cta: "Start free",
          featured: true,
        },
        {
          chip: "agencies",
          product: "agencies" as const,
          name: "Agency",
          price: "$39",
          priceNote: "Per editor — includes all of Studio",
          bullets: [
            "Everything in Studio",
            "Unlimited clients",
            "Approvals, invoices, CRM",
            "Team with permissions",
            "Monthly reports ready",
            "Dedicated support",
          ],
          cta: "Start trial",
          featured: false,
        },
      ],
      footnote: "Need something different? ",
      footnoteCta: "Talk to us →",
    },

    agencyBand: {
      eyebrow: "FOR AGENCIES",
      title: "Running an agency?",
      body:
        "Coflow Agencies includes everything in Studio — plus client management, approvals, CRM, and team. A whole layer on top of the product you already know.",
      cta: "See the agency tier →",
    },

    footer: {
      tagline: "Your whole personal brand in one place.",
      cols: {
        studio: "Studio",
        agencies: "Agencies",
        company: "Company",
        legal: "Legal",
      },
      studioLinks: [
        { label: "Podcasts", href: "/#surfaces" },
        { label: "Newsletters", href: "/#surfaces" },
        { label: "Social", href: "/#surfaces" },
        { label: "Analytics", href: "/#surfaces" },
      ],
      agenciesLinks: [
        { label: "Client mgmt", href: "/agencies" },
        { label: "Approvals", href: "/agencies#approvals" },
        { label: "CRM", href: "/agencies#crm" },
        { label: "Team", href: "/agencies#team" },
      ],
      companyLinks: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
      legalLinks: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
      copy: "© {year} Coflow · coflow.social",
      langSwitcher: "עב",
      langSwitcherAria: "Switch to Hebrew",
    },

    waitlist: {
      placeholder: "Your email",
      submit: "Get started",
      sourceLabel: "Who are you?",
      sources: ["Creator", "Social media agency", "Freelancer", "Other"],
      success: "You're in! We'll be in touch shortly.",
      error: "Something didn't work. Try again?",
      privacy: "We don't send spam. Unsubscribe anytime.",
    },
  },
} as const;

export type Dictionary = (typeof DICT)["he"];

export function getDict(locale: Locale): Dictionary {
  return DICT[locale] as Dictionary;
}
