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
        { label: "פודקאסטים", href: "/studio#podcast" },
        { label: "ניוזלטרים", href: "/studio#newsletter" },
        { label: "סושיאל", href: "/studio#social" },
        { label: "אנליטיקס", href: "/studio#analytics" },
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

    agenciesPage: {
      eyebrow: "COFLOW AGENCIES",
      titleA: "שכבה אחת",
      titleB: "מעל ה־Studio —",
      titleC: "לסוכנות שלך.",
      subtitle:
        "ניהול לקוחות, אישורים, CRM וצוות — כל מה שסוכנות צריכה כדי להפעיל אינסוף Studios של לקוחות, ממקום אחד.",
      ctaPrimary: "להתחיל ניסיון",
      ctaSecondary: "ראי את הטבלה",
      caption: "Studio של הלקוח כלול. בלי כפילויות.",
      surfaces: {
        eyebrow: "WHAT THE AGENCY ADDS",
        title: "מה הסוכנות מקבלת מעל ה־Studio.",
        subtitle:
          "Studio של הלקוח נשאר Studio של הלקוח. הסוכנות יושבת מעליו ומפעילה — לא משכפלת.",
        items: [
          {
            id: "clients",
            tag: "Clients",
            title: "ניהול לקוחות",
            body:
              "כל לקוח עם ה־Studio שלו, פרופיל מותג, וצוות סוכנות שמוקצה אליו. תצוגה אחת לכל ההתקדמות.",
          },
          {
            id: "approvals",
            tag: "Approvals",
            title: "אישורים",
            body:
              "הלקוח רואה רק מה שצריך אישור — בודק, מאשר או מבקש שינוי, כולל הקשר. בלי וואטסאפ, בלי Loom.",
          },
          {
            id: "crm",
            tag: "CRM",
            title: "CRM של הסוכנות",
            body:
              "אנשי קשר, צינור עסקאות, פעילות. צמוד למותגים שאת באמת משרתת — בלי לעבור בין כלים.",
          },
          {
            id: "team",
            tag: "Team",
            title: "צוות והרשאות",
            body:
              "מנהלות סושיאל, עורכות, גרפיקאיות — כל אחת רואה את מה שהיא צריכה. הרשאות פר תפקיד, לא פר משימה.",
          },
        ],
      },
      pillars: {
        eyebrow: "WHY AGENCIES SWITCH",
        title: "ארבע סיבות שסוכנות עוברת ל־Coflow.",
        items: [
          {
            title: "Studio של הלקוח כלול",
            body: "הלקוח עובד בכלי אמיתי, לא בטופס אישור. את עובדת מעליו.",
          },
          {
            title: "מחליף חמישה כלים",
            body: "Planable, Asana, Pipedrive, Notion, Later — בתוכנית אחת.",
          },
          {
            title: "אישורים בלי דרמה",
            body: "תהליך אחד שכולם מבינים. בלי לרדוף אחרי אישור בוואטסאפ.",
          },
          {
            title: "דוחות חודשיים מוכנים",
            body: "מספרים לכל לקוח, מקובץ אוטומטית. ללחיצה אחת.",
          },
        ],
      },
      cta: {
        eyebrow: "READY?",
        title: "תיכנסי לקבוצה הראשונה של סוכנויות.",
        body:
          "Coflow Agencies בגרסה מוקדמת. אנחנו פותחות קבוצה חדשה כל שבוע — לא יותר מ־5 סוכנויות בכל פעם.",
        ctaPrimary: "להצטרף לרשימה",
        ctaSecondary: "ראי את התמחור",
      },
    },

    studioPage: {
      eyebrow: "COFLOW STUDIO",
      titleA: "כל ניהול",
      titleB: "המותג האישי",
      titleC: "במקום אחד.",
      subtitle:
        "פודקאסט, ניוזלטר, סושיאל ואנליטיקס — תכננת, פרסמת, מדדת. מותג אחד חינם לתמיד.",
      ctaPrimary: "התחילי בחינם",
      ctaSecondary: "מנהלת סוכנות?",
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
              "תכנון פרקים, ניהול אורחים, פרסום לכל הפלטפורמות עם תיאור וצ'אפטרים אוטומטיים.",
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
          {
            title: "מוכן ליום הראשון",
            body: "אינטגרציות לכל הערוצים בקליק. בלי תוספים, בלי תיכנות.",
          },
        ],
      },
      cta: {
        eyebrow: "READY?",
        title: "התחילי עם המותג הראשון בחינם.",
        body:
          "כל הערוצים, אנליטיקס מאוחד, ספריית מדיה — חינם לתמיד למותג אחד.",
        ctaPrimary: "להתחיל",
        ctaSecondary: "ראי את התמחור",
      },
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
        { label: "Podcasts", href: "/studio#podcast" },
        { label: "Newsletters", href: "/studio#newsletter" },
        { label: "Social", href: "/studio#social" },
        { label: "Analytics", href: "/studio#analytics" },
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

    agenciesPage: {
      eyebrow: "COFLOW AGENCIES",
      titleA: "One layer",
      titleB: "on top of Studio —",
      titleC: "for your agency.",
      subtitle:
        "Client management, approvals, CRM, and team — everything an agency needs to operate any number of client Studios from one place.",
      ctaPrimary: "Start trial",
      ctaSecondary: "See the comparison",
      caption: "Client's Studio is included. No duplication.",
      surfaces: {
        eyebrow: "WHAT THE AGENCY ADDS",
        title: "What the agency gets on top of Studio.",
        subtitle:
          "The client's Studio stays the client's Studio. The agency sits above and operates — never duplicates.",
        items: [
          {
            id: "clients",
            tag: "Clients",
            title: "Client management",
            body:
              "Each client with their own Studio, brand profile, and assigned agency team. One view for everything in motion.",
          },
          {
            id: "approvals",
            tag: "Approvals",
            title: "Approvals",
            body:
              "Clients see only what needs them — review, approve, or request changes in context. No more WhatsApp, no more Loom.",
          },
          {
            id: "crm",
            tag: "CRM",
            title: "Agency CRM",
            body:
              "Contacts, deal pipeline, activity. Right next to the brands you actually serve — no tool-hopping.",
          },
          {
            id: "team",
            tag: "Team",
            title: "Team & permissions",
            body:
              "Social managers, editors, designers — each sees what they need. Permissions by role, not per task.",
          },
        ],
      },
      pillars: {
        eyebrow: "WHY AGENCIES SWITCH",
        title: "Four reasons agencies move to Coflow.",
        items: [
          {
            title: "Client's Studio is included",
            body: "The client works in a real tool, not an approval form. You operate above it.",
          },
          {
            title: "Replaces five tools",
            body: "Planable, Asana, Pipedrive, Notion, Later — in one plan.",
          },
          {
            title: "Approvals without drama",
            body: "One process everyone gets. No more chasing approvals on WhatsApp.",
          },
          {
            title: "Monthly reports, ready",
            body: "Numbers per client, aggregated automatically. One click.",
          },
        ],
      },
      cta: {
        eyebrow: "READY?",
        title: "Join the first cohort of agencies.",
        body:
          "Coflow Agencies is in early access. We open a new cohort each week — no more than 5 agencies at a time.",
        ctaPrimary: "Join the waitlist",
        ctaSecondary: "See pricing",
      },
    },

    studioPage: {
      eyebrow: "COFLOW STUDIO",
      titleA: "Your whole",
      titleB: "personal brand",
      titleC: "in one place.",
      subtitle:
        "Podcast, newsletter, social and analytics. Plan it, ship it, measure it. One brand free, forever.",
      ctaPrimary: "Start free",
      ctaSecondary: "Running an agency?",
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
          {
            title: "Day-one ready",
            body: "Integrations to every channel in one click. No plugins, no code.",
          },
        ],
      },
      cta: {
        eyebrow: "READY?",
        title: "Start with your first brand for free.",
        body:
          "All channels, unified analytics, media library — free forever for one brand.",
        ctaPrimary: "Get started",
        ctaSecondary: "See pricing",
      },
    },
  },
} as const;

export type Dictionary = (typeof DICT)["he"];

export function getDict(locale: Locale): Dictionary {
  return DICT[locale] as Dictionary;
}
