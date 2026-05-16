import type { Locale } from "./locale";

/**
 * All marketing copy in one place. Hebrew is primary (the brand voice
 * is written in Hebrew first, then translated). Keep the structure
 * mirror-symmetric across languages or `t()` calls will break.
 *
 * Positioning: wizard-led. The home page sells the brand-analysis
 * wizard ("see how your brand looks from the outside") as the funnel
 * entry, then explains what Studio actually does once the user is in.
 *
 * Agency surfaces are intentionally not exposed — agency tier ships
 * later. Lime is the dominant accent; lavender is reserved for the
 * wizard CTA blocks.
 */
export const DICT = {
  he: {
    nav: {
      wizard: "ניתוח המותג",
      features: "מה בסטודיו",
      pricing: "מחירים",
      signIn: "התחברות",
      cta: "ראי את הניתוח שלך",
    },

    hero: {
      eyebrow: "COFLOW STUDIO",
      titleA: "בדקי איך המותג שלך",
      titleB: "נראה מבחוץ —",
      titleC: "תוך 2 דקות.",
      subtitle:
        "מדביקות לינקים, המערכת סורקת את הנוכחות הדיגיטלית שלך ומחזירה ניתוח אסטרטגי תוך 2 דקות. משם — חידוד המסרים, הפוזיציוני וההזדמנות שעוד לא לקחת על עצמך — זו העבודה האמיתית, ואותה אנחנו עושות איתך בקצב שלך, בסטודיו שמרכז את כל הערוצים שלך במקום אחד.",
      cta: "להתחיל את הניתוח",
      ctaSecondary: "מה יש בסטודיו?",
      caption: "הניתוח חינמי. 2 דקות לתמונה. בלי כרטיס.",
      visualLabel: "studio",
      visualCaption: "תכנון פרק 14 · גרסה 2",
      visualMetric: "12 / 7",
    },

    wizard: {
      eyebrow: "BRAND ANALYSIS WIZARD",
      title: "מה הניתוח אומר לך עלייך.",
      subtitle:
        "מדביקות את כל מה שכבר קיים — אתר, אינסטגרם, לינקדאין, יוטיוב, פודקאסט. המערכת קוראת את הקול שלך, מסתכלת על הוויזואלים, ומפיקה מסמך אסטרטגי שאת חוזרת אליו לחודשים.",
      bullets: [
        {
          title: "איך המותג שלך נראה מבחוץ",
          body: "מה הוא בעצם משדר — ובאילו מקומות הוא סותר את עצמו. בלי לרכך.",
        },
        {
          title: "מה שהופך אותך לבלתי ניתנת להעתקה",
          body: "שלוש עד שבע תכונות חתימה — מה שלקוחה תזכור גם כשהיא תסגור את הטאב.",
        },
        {
          title: "המתח שעוד לא לקחת על עצמך",
          body: "האבחנה החדה ביותר במסמך — איפה את אומרת דבר אחד ומשדרת אחר, ולמה זה משתלם לדייק.",
        },
        {
          title: "ההזדמנות האסטרטגית שלך",
          body: "ה-Blue Ocean של השוק — הכאב שאף אחד לא נוגע בו, או הקהל שאף אחד לא פונה אליו ישירות.",
        },
      ],
      cta: "להתחיל את הניתוח",
      caption: "הניתוח חינמי ולוקח 2 דקות. חידוד המסרים — בקצב שלך.",
    },

    surfaces: {
      eyebrow: "AFTER THE ANALYSIS",
      title: "מהניתוח, ישר לסטודיו.",
      subtitle:
        "ברגע שהניתוח גמור, את עוברת לסטודיו עצמו — מקום אחד שמרכז את כל הערוצים שכבר בנית. תכנון, פרסום, מעקב.",
      items: [
        {
          tag: "Podcast",
          title: "פודקאסט",
          body: "תכנון פרקים, ניהול אורחים, פרסום לכל הפלטפורמות עם תיאור וצ׳אפטרים אוטומטיים.",
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
      title: "מה שמחכה לך אחרי הניתוח.",
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
            "הניתוח אמר לי משפט אחד שתפסתי את עצמי מצטטת אותו לעצמי שבועות. ידעתי שאני בידיים נכונות.",
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
            "תהליך הניתוח חידד לי את הפוזיציוני בלי לחיות בוורדים שבוע. נכנסתי לסטודיו עם בהירות.",
          name: "תמר אבני",
          role: "מאמנת מנהיגות",
          product: "studio" as const,
        },
      ],
    },

    pricing: {
      eyebrow: "PRICING",
      title: "אחת. חינם. לתמיד.",
      subtitle: "מותג אחד עם כל הערוצים — ללא תשלום, בלי כרטיס, בלי תאריך תפוגה.",
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
            "ניתוח מותג מלא",
            "פודקאסט · ניוזלטר · סושיאל",
            "אנליטיקס מאוחד",
            "ספריית מדיה",
            "אינטגרציות מלאות",
          ],
          cta: "להתחיל את הניתוח",
          featured: true,
        },
      ],
      footnote: "צריכה משהו אחר? ",
      footnoteCta: "דברי איתנו →",
    },

    footer: {
      tagline: "מתחילים מניתוח מותג. ממשיכים לסטודיו אחד שמרכז הכל.",
      cols: {
        studio: "Studio",
        company: "החברה",
        legal: "משפטי",
      },
      studioLinks: [
        { label: "ניתוח המותג", href: "/#wizard" },
        { label: "פודקאסטים", href: "/studio#podcast" },
        { label: "ניוזלטרים", href: "/studio#newsletter" },
        { label: "סושיאל", href: "/studio#social" },
        { label: "אנליטיקס", href: "/studio#analytics" },
      ],
      companyLinks: [
        { label: "עלינו", href: "/about" },
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
      submit: "להישאר בקשר",
      sourceLabel: "מי את?",
      sources: ["יוצרת תוכן", "פודקאסטרית", "מאמנת / יועצת", "אחר"],
      success: "נכנסת! נשמור עדכון כשתהיינה תכונות חדשות.",
      error: "משהו לא עבד, ננסי שוב?",
      privacy: "אנחנו לא שולחים ספאם. אפשר להסיר את עצמך בכל רגע.",
    },

    studioPage: {
      eyebrow: "COFLOW STUDIO",
      titleA: "כל ניהול",
      titleB: "המותג האישי",
      titleC: "במקום אחד.",
      subtitle:
        "פודקאסט, ניוזלטר, סושיאל ואנליטיקס — תכננת, פרסמת, מדדת. מותג אחד חינם לתמיד.",
      ctaPrimary: "להתחיל את הניתוח",
      ctaSecondary: "ראי את התמחור",
      caption: "המותג הראשון חינם לתמיד. בלי כרטיס.",
      surfaces: {
        eyebrow: "WHAT YOU SHIP",
        title: "מה את יוצרת השבוע?",
        subtitle:
          "כל פורמט של תוכן מקבל את המקום שלו — תכנון, פרסום, מעקב. במקום אחד.",
        items: [
          {
            id: "podcast",
            tag: "Podcast",
            title: "פודקאסט",
            body:
              "תכנון פרקים, ניהול אורחים, פרסום לכל הפלטפורמות עם תיאור וצ׳אפטרים אוטומטיים.",
          },
          {
            id: "newsletter",
            tag: "Newsletter",
            title: "ניוזלטר",
            body:
              "כתיבה, תזמון ושליחה. פתיחות וקליקים שמתרגם לאנליטיקס במקום אחד.",
          },
          {
            id: "social",
            tag: "Social",
            title: "סושיאל",
            body:
              "לוח שנה לכל הערוצים. תזמון, ארכיון פוסטים ושימוש חוזר במה שעבד.",
          },
          {
            id: "analytics",
            tag: "Analytics",
            title: "אנליטיקס",
            body:
              "מספרים אחידים על פני כל הערוצים. רואה מה עובד באמת — לא דוחות נפרדים.",
          },
        ],
      },
      pillars: {
        eyebrow: "WHY STUDIO",
        title: "מה הופך את ה־Studio למוצר בודד שעובד.",
        items: [
          {
            title: "מתחילים מניתוח",
            body: "ניתוח אסטרטגי של המותג שלך בכניסה — ואז כלי שעובד עם הפלט.",
          },
          {
            title: "אפס קפיצות",
            body: "תוכן, פרסום ומדידה במקום אחד. לא חמישה טאבים.",
          },
          {
            title: "מחיר שמתחיל מאפס",
            body: "מותג אחד חינם לתמיד. שדרגי כשהעבודה גדלה.",
          },
          {
            title: "אנליטיקס מאוחד",
            body: "כל הערוצים על אותו ציר זמן. מסע של פוסט מהרעיון עד הקליק.",
          },
        ],
      },
      cta: {
        eyebrow: "READY?",
        title: "התחילי עם הניתוח. ההמשך מתגלגל מאליו.",
        body:
          "כל הערוצים, אנליטיקס מאוחד, ספריית מדיה — חינם לתמיד למותג אחד.",
        ctaPrimary: "להתחיל את הניתוח",
        ctaSecondary: "ראי את התמחור",
      },
    },
  },

  en: {
    nav: {
      wizard: "Brand analysis",
      features: "What's in Studio",
      pricing: "Pricing",
      signIn: "Sign in",
      cta: "Run my analysis",
    },

    hero: {
      eyebrow: "COFLOW STUDIO",
      titleA: "See how your brand",
      titleB: "looks from the outside —",
      titleC: "in 2 minutes.",
      subtitle:
        "Paste your links and we scan your digital presence — site, Instagram, LinkedIn, YouTube, podcast — and hand back a strategic analysis in 2 minutes. From there, sharpening your messages, your positioning, and the edge you're not yet owning is the real work — and we do that together, at your pace, inside the Studio that runs every channel from one place.",
      cta: "Run my analysis",
      ctaSecondary: "See what's in the Studio",
      caption: "Free. 2 minutes for the analysis. No card.",
      visualLabel: "studio",
      visualCaption: "Episode 14 · v2",
      visualMetric: "12 / 7",
    },

    wizard: {
      eyebrow: "BRAND ANALYSIS WIZARD",
      title: "What the analysis tells you about you.",
      subtitle:
        "Paste whatever's already out there — site, Instagram, LinkedIn, YouTube, podcast. The system reads your voice, looks at your visuals, and produces a strategic document you'll come back to for months.",
      bullets: [
        {
          title: "How your brand reads from the outside",
          body: "What it actually signals — and where it contradicts itself. No softening.",
        },
        {
          title: "What makes you impossible to copy",
          body: "Three to seven signature traits — what a client remembers after she closes the tab.",
        },
        {
          title: "The tension you're not yet owning",
          body: "The sharpest finding in the doc — where you say one thing and signal another, and why sharpening it pays off.",
        },
        {
          title: "Your strategic opportunity",
          body: "The market's blue ocean — the pain no one touches, or the audience nobody is speaking to directly.",
        },
      ],
      cta: "Run my analysis",
      caption: "Free. The analysis takes 2 minutes. Sharpening continues at your pace.",
    },

    surfaces: {
      eyebrow: "AFTER THE ANALYSIS",
      title: "Straight from the analysis into the Studio.",
      subtitle:
        "The moment the analysis is ready, you step into the Studio itself — one place that runs every channel you've already built. Plan, publish, measure.",
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
      title: "What's waiting after the analysis.",
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
          quote:
            "The analysis gave me one sentence I caught myself quoting for weeks. I knew I was in the right place.",
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
          quote:
            "The analysis sharpened my positioning without a week of journaling. I walked into the Studio with clarity.",
          name: "Tamar Avni",
          role: "Leadership coach",
          product: "studio" as const,
        },
      ],
    },

    pricing: {
      eyebrow: "PRICING",
      title: "One plan. Free. Forever.",
      subtitle:
        "One brand with every channel — no charge, no card, no expiry.",
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
            "Full brand analysis",
            "Podcast · newsletter · social",
            "Unified analytics",
            "Media library",
            "Full integrations",
          ],
          cta: "Run my analysis",
          featured: true,
        },
      ],
      footnote: "Need something different? ",
      footnoteCta: "Talk to us →",
    },

    footer: {
      tagline: "Start with a brand analysis. Continue with one Studio for every channel.",
      cols: {
        studio: "Studio",
        company: "Company",
        legal: "Legal",
      },
      studioLinks: [
        { label: "Brand analysis", href: "/#wizard" },
        { label: "Podcasts", href: "/studio#podcast" },
        { label: "Newsletters", href: "/studio#newsletter" },
        { label: "Social", href: "/studio#social" },
        { label: "Analytics", href: "/studio#analytics" },
      ],
      companyLinks: [
        { label: "About", href: "/about" },
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
      submit: "Keep me posted",
      sourceLabel: "Who are you?",
      sources: ["Creator", "Podcaster", "Coach / consultant", "Other"],
      success: "You're in! We'll keep you posted on new features.",
      error: "Something didn't work. Try again?",
      privacy: "We don't send spam. Unsubscribe anytime.",
    },

    studioPage: {
      eyebrow: "COFLOW STUDIO",
      titleA: "Your whole",
      titleB: "personal brand",
      titleC: "in one place.",
      subtitle:
        "Podcast, newsletter, social and analytics. Plan it, ship it, measure it. One brand free, forever.",
      ctaPrimary: "Run my analysis",
      ctaSecondary: "See pricing",
      caption: "First brand free, forever. No card.",
      surfaces: {
        eyebrow: "WHAT YOU SHIP",
        title: "What are you making this week?",
        subtitle:
          "Every content format gets its own home — plan, publish, track. All in one place.",
        items: [
          {
            id: "podcast",
            tag: "Podcast",
            title: "Podcast",
            body:
              "Plan episodes, manage guests, publish to every platform with auto descriptions and chapters.",
          },
          {
            id: "newsletter",
            tag: "Newsletter",
            title: "Newsletter",
            body:
              "Write, schedule, send. Open and click tracking that flows into one analytics view.",
          },
          {
            id: "social",
            tag: "Social",
            title: "Social",
            body:
              "Calendar across every channel. Schedule, archive, and reuse what worked.",
          },
          {
            id: "analytics",
            tag: "Analytics",
            title: "Analytics",
            body:
              "One unified view across all channels. See what actually worked — not separate dashboards.",
          },
        ],
      },
      pillars: {
        eyebrow: "WHY STUDIO",
        title: "Why Studio works as a single product.",
        items: [
          {
            title: "Starts with analysis",
            body: "Strategic read of your brand on entry — then a tool that works with that output.",
          },
          {
            title: "Zero tab-jumping",
            body: "Content, publishing, and measurement in one place. Not five tabs.",
          },
          {
            title: "Starts at zero",
            body: "One brand free, forever. Upgrade when the work grows.",
          },
          {
            title: "Unified analytics",
            body: "Every channel on the same timeline. A post's journey from idea to click.",
          },
        ],
      },
      cta: {
        eyebrow: "READY?",
        title: "Start with the analysis. The rest flows from there.",
        body:
          "All channels, unified analytics, media library — free forever for one brand.",
        ctaPrimary: "Run my analysis",
        ctaSecondary: "See pricing",
      },
    },
  },
} as const;

export type Dictionary = (typeof DICT)["he"];

export function getDict(locale: Locale): Dictionary {
  return DICT[locale] as Dictionary;
}
