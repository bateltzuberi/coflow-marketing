import type { Locale } from "./locale";

/**
 * All marketing copy in one place, ported 1:1 from the approved copy doc.
 * Hebrew is primary (לשון נקבה); `en` mirrors the `he` shape key-for-key.
 *
 * Positioning: the site sells ONE thing - the free Instagram diagnosis (the
 * lead magnet). Every CTA points only at the diagnosis. Page 1 is the
 * diagnosis landing; Page 2 explains the system but still returns to the
 * diagnosis CTA.
 */
export const DICT = {
  he: {
    nav: {
      howItWorks: "איך Coflow עובדת",
      signIn: "התחברות",
      cta: "להתחיל אבחון בחינם",
      // The invite door. Quiet by design: it means nothing to a visitor who
      // wasn't sent a code, and is the only thing that matters to one who was.
      haveCode: "יש לי קוד",
    },

    hero: {
      title: "תפסיקי לנחש מה האינסטגרם שלך משדר.",
      sub: "קבלי אבחון חד של הפרופיל שלך - לפי הביו, הפוסטים והמסרים שכבר קיימים אצלך בעמוד.",
      promise: "מדביקה לינק לאינסטגרם. מקבלת אבחון תוך דקות.",
      inputPlaceholder: "מדביקה לינק לאינסטגרם",
      inputCta: "קבלי אבחון",
      secondary: "בלי הרשמה. בלי חיבור חשבונות. רק לינק לאינסטגרם.",
    },

    centralMessage: "האינסטגרם שלך כבר ממצב אותך. Coflow מראה לך אם הוא עושה את זה נכון.",

    mock: {
      label: "דוגמה לאבחון",
      handle: "@your_page",
      rows: [
        { lens: "בהירות", verdict: "חלש", tone: "weak" },
        { lens: "בידול", verdict: "חלקי", tone: "partial" },
        { lens: "סמכות", verdict: "חזק", tone: "strong" },
        { lens: "דרך להכנסה", verdict: "חסר", tone: "weak" },
      ],
      evidenceLabel: "על סמך",
      evidence: "הביו אומר ׳עוזרת לנשים׳, אבל לא ברור במה בדיוק ולמי.",
      fixLabel: "לתקן השבוע",
      fix: "להחליף את שורת הביו במשפט אחד: מה את עושה, ולמי.",
    },

    whatItShows: {
      lead: "העמוד שלך כבר מספר סיפור. השאלה היא אם זה הסיפור הנכון.",
      intro: "Coflow מסתכלת על האינסטגרם שלך מבחוץ ומראה לך:",
      bullets: [
        "האם ברור מה את עושה?",
        "האם ברור למי זה מיועד?",
        "האם את נקראת כאוטוריטה - או כעוד יוצרת תוכן?",
        "האם הבידול שלך באמת עובר?",
        "האם התוכן שלך בונה אמון?",
        "האם יש דרך ברורה מתשומת לב להכנסה?",
      ],
    },

    bluntAudit: {
      lead: "לא דוח AI גנרי. קריאה אמיתית של העמוד שלך.",
      intro: "האבחון מראה לך:",
      bullets: [
        "מה כבר עובד",
        "מה מבלבל אנשים",
        "מה מחליש את הסמכות שלך",
        "מה כנראה עולה לך בלידים, אמון או מכירות",
        "מה הכי חשוב לתקן כבר השבוע",
      ],
    },

    whyItMatters: {
      lead: "כי ״לפרסם יותר״ לא יפתור מיצוב לא ברור.",
      p1a: "לרוב האנשים אין בעיית תוכן.",
      p1b: "יש להם בעיית בהירות.",
      p2: "הם מפרסמים, משקיעים, מצלמים, עורכים - אבל העמוד עדיין לא עונה מספיק מהר על השאלות החשובות:",
      questions: ["למה דווקא את?", "למה עכשיו?", "למה לסמוך עלייך?", "ומה הצעד הבא?"],
      close: "זה בדיוק מה שהאבחון חושף.",
    },

    midCta: {
      line: "תראי מה האינסטגרם שלך באמת משדר.",
      cta: "להתחיל אבחון בחינם",
    },

    howItWorks: {
      heroTitle: "מ״מה בכלל לפרסם?״ לאסטרטגיית תוכן שאפשר לעבוד איתה.",
      heroSub: "Coflow מתחילה מאבחון של האינסטגרם שלך, ואז הופכת את האבחון לכיוון ברור, עוגני תוכן, רעיונות, קופי ולוח עבודה שעוזר לך באמת לפרסם.",
      cta: "להתחיל באבחון חינם",
      stepLabel: "שלב",
      steps: [
        {
          name: "אבחון",
          title: "קודם Coflow קוראת את העמוד שלך מבחוץ.",
          body: "לפני שהיא אומרת לך מה לפרסם, Coflow בודקת מה האינסטגרם שלך משדר עכשיו: בהירות, סמכות, קהל יעד, בידול, אמון ודרך להכנסה.",
        },
        {
          name: "כיוון",
          title: "אחר כך היא שואלת לאן את רוצה לקחת את המותג.",
          body: "העמוד הנוכחי הוא רק צד אחד של התמונה. Coflow צריכה להבין גם את הרצוי: את מי את רוצה למשוך, על מה את רוצה שיכירו אותך, ומה את רוצה שיקרה בעסק עכשיו.",
        },
        {
          name: "אסטרטגיה",
          title: "Coflow מזהה את הפער בין איך שהמותג נראה עכשיו לבין לאן שאת רוצה לקחת אותו.",
          body: "ואז היא הופכת את הפער הזה לאסטרטגיה ברורה: קהל, מיצוב, קול, כיוון תוכן ו־2–6 עוגני תוכן שאפשר לחזור אליהם שוב ושוב.",
        },
        {
          name: "רעיונות",
          title: "בלי דף ריק.",
          body: "מקבלת רעיונות שמתאימים לאסטרטגיה שלך - לא הצעות AI גנריות. כל רעיון מחובר לעוגן תוכן ולמטרה ברורה.",
        },
        {
          name: "קופי",
          title: "להפוך רעיון לתוכן בקול שלך.",
          body: "בוחרת רעיון, ו־Coflow כותבת הוק, קופי, האשטגים ופירוק לקרוסלה - לפי האסטרטגיה, הקול והמסרים שלך.",
        },
        {
          name: "לוח",
          title: "כי אסטרטגיה לא שווה כלום אם היא לא יוצאת החוצה.",
          body: "מעבירה פוסטים מרעיון, לעבודה, למוכן, לפורסם. מוסיפה תאריכים, תתי־משימות ושומרת על תנועה.",
        },
      ],
      authority: {
        title: "בנוי על אסטרטגיית מותג, לא על טריקים של תוכן.",
        p1: "Coflow מבוססת על תהליך אסטרטגי: קודם מאבחנים איך המותג נראה היום, אחר כך מבינים לאן את רוצה לקחת אותו, מזהים את הפער - והופכים את הפער הזה לפעולות ברורות.",
        p2: "זה אומר שהתוכן שלך לא נוצר מטרנדים בלבד, מטמפלטים או מפרומפטים רנדומליים. הוא נוצר מתוך החיבור בין:",
        bullets: [
          "איך המותג שלך נתפס עכשיו",
          "על מה את רוצה שיכירו אותך",
          "את מי את רוצה למשוך",
          "מה צריך להפוך לברור יותר",
          "איזה תוכן באמת יקדם את המותג קדימה",
        ],
        closeA: "לכן Coflow לא רק מייצרת פוסטים.",
        closeB: "היא עוזרת לך לבנות מותג שאנשים מבינים, סומכים עליו - וקונים ממנו.",
        cta: "להתחיל אבחון בחינם",
      },
    },

    // ----- /join — the invite-only launch landing -----
    // Coflow opens to a closed group first. This page is the door: a code, an
    // account, €14/month. No free tier, no diagnosis first — the diagnosis is
    // one of the things waiting inside.
    join: {
      eyebrow: "פתיחה בהזמנה בלבד",
      title: "Coflow נפתחת לקבוצה סגורה.",
      sub: "בשלב הזה נכנסים רק עם קוד. אם קיבלת אחד — הוא הכרטיס שלך פנימה.",
      codeLabel: "קוד ההזמנה",
      codePlaceholder: "הקוד שקיבלת",
      cta: "כניסה",
      ctaLoading: "בודקת…",
      errInvalid: "הקוד לא תקף. בדקי שהעתקת אותו במלואו.",
      errEmpty: "צריך להזין קוד.",
      errNetwork: "לא הצלחנו לבדוק את הקוד. נסי שוב.",
      priceLine: "€14 לחודש. בלי תקופת ניסיון, בלי התחייבות — אפשר לבטל בכל רגע.",
      noCodeLabel: "אין לך קוד?",
      noCodeCta: "כתבי לנו",

      includesTitle: "מה מחכה בפנים",
      includes: [
        {
          title: "אבחון המותג",
          body: "אותה קריאה חדה של האינסטגרם שלך — בהירות, סמכות, בידול, דרך להכנסה. רצה מתוך המערכת, מתי שתרצי.",
        },
        {
          title: "אסטרטגיה ועוגני תוכן",
          body: "מהאבחון לכיוון: קהל, מיצוב, קול, ו־2–6 עוגני תוכן שחוזרים אליהם שוב ושוב.",
        },
        {
          title: "רעיונות וקופי בקול שלך",
          body: "הוק, קופי, האשטגים ופירוק לקרוסלה — לפי האסטרטגיה שלך, לא לפי פרומפט גנרי.",
        },
        {
          title: "לוח תוכן שמזיז דברים",
          body: "מרעיון, לעבודה, למוכן, לפורסם. תאריכים, תתי־משימות, וכל הפלטפורמות במקום אחד.",
        },
      ],

      whyTitle: "למה בהזמנה בלבד",
      whyBody: "כי בקבוצה קטנה אפשר לשבת על כל מותג ברצינות, לתקן מהר, ולבנות את המערכת סביב מה שבאמת חסר. המחיר הזה הוא מחיר של השלב הזה.",
    },

    footer: {
      tagline: "מתחילים מאבחון חינמי של האינסטגרם. ממשיכים לאסטרטגיה ולפוסטים בקול שלך.",
      cols: {
        product: "המוצר",
        company: "החברה",
        legal: "משפטי",
      },
      productLinks: [
        { label: "איך Coflow עובדת", href: "/how-it-works" },
        { label: "להתחיל אבחון", href: "/#start" },
        { label: "כניסה עם קוד", href: "/join" },
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
  },

  en: {
    nav: {
      howItWorks: "How Coflow works",
      signIn: "Log in",
      cta: "Start free diagnosis",
      haveCode: "I have a code",
    },

    hero: {
      title: "Stop guessing what your Instagram says about your brand.",
      sub: "Get a blunt, outside-in diagnosis of your Instagram profile - based on your actual bio and recent posts.",
      promise: "Paste your Instagram link. Get your brand diagnosis in minutes.",
      inputPlaceholder: "Paste your Instagram link",
      inputCta: "Get my diagnosis",
      secondary: "No sign-up. No account connection. Just your Instagram link.",
    },

    centralMessage: "Your Instagram is already positioning you. Coflow shows you whether it's positioning you correctly.",

    mock: {
      label: "Sample diagnosis",
      handle: "@your_page",
      rows: [
        { lens: "Clarity", verdict: "Weak", tone: "weak" },
        { lens: "Differentiation", verdict: "Partial", tone: "partial" },
        { lens: "Authority", verdict: "Strong", tone: "strong" },
        { lens: "Path to money", verdict: "Missing", tone: "weak" },
      ],
      evidenceLabel: "Based on",
      evidence: "Your bio says “I help women,” but not with what, exactly, or for whom.",
      fixLabel: "Fix this week",
      fix: "Replace the bio line with one sentence: what you do, and who for.",
    },

    whatItShows: {
      lead: "Your page is already saying something. The question is whether it's saying the right thing.",
      intro: "Coflow reads your Instagram from the outside and shows you:",
      bullets: [
        "Is it clear what you do?",
        "Is it clear who this is for?",
        "Do you look like an authority - or just another content creator?",
        "Is your differentiation visible?",
        "Does your content create trust?",
        "Is there a clear path from attention to money?",
      ],
    },

    bluntAudit: {
      lead: "Not a generic AI report. A real read of your page.",
      intro: "You'll get a direct profile audit with:",
      bullets: [
        "what's already working",
        "what's confusing people",
        "what's weakening your authority",
        "what might be costing you leads, trust, or sales",
        "what to fix first this week",
      ],
    },

    whyItMatters: {
      lead: "Because “posting more” won't fix unclear positioning.",
      p1a: "Most people don't have a content problem.",
      p1b: "They have a clarity problem.",
      p2: "They post consistently, but the page still doesn't make it obvious:",
      questions: ["why them,", "why now,", "why trust them,", "and what to do next."],
      close: "That's exactly what the diagnosis exposes.",
    },

    midCta: {
      line: "See what your Instagram is really communicating.",
      cta: "Start free diagnosis",
    },

    howItWorks: {
      heroTitle: "From “what should I post?” to a brand strategy you can actually use.",
      heroSub: "Coflow starts with a diagnosis of your Instagram, then turns that diagnosis into direction, content anchors, ideas, captions, and a simple board that helps you actually publish.",
      cta: "Start with free diagnosis",
      stepLabel: "Step",
      steps: [
        {
          name: "Diagnosis",
          title: "First, Coflow reads your page from the outside.",
          body: "Before it tells you what to post, Coflow checks what your Instagram currently communicates: clarity, authority, audience, differentiation, trust, and money path.",
        },
        {
          name: "Direction",
          title: "Then it asks where you want the brand to go.",
          body: "Your current page is only one side of the picture. Coflow also needs to understand your desired direction - who you want to attract, what you want to be known for, and what business outcome you want next.",
        },
        {
          name: "Strategy",
          title: "Coflow finds the gap between where your brand is and where you want it to go.",
          body: "Then it turns that gap into a clear strategy: audience, positioning, voice, content direction, and 2–6 repeatable content anchors.",
        },
        {
          name: "Ideas",
          title: "No more blank page.",
          body: "Get post ideas that fit your strategy - not random AI suggestions. Each idea is connected to a content anchor and a clear purpose.",
        },
        {
          name: "Captions",
          title: "Turn ideas into content in your voice.",
          body: "Pick an idea and Coflow writes the hook, caption, hashtags, and carousel breakdown - based on your strategy and talking points.",
        },
        {
          name: "Board",
          title: "Because strategy only matters if it ships.",
          body: "Move posts from idea to in progress to ready to published. Add dates, subtasks, and keep the content moving.",
        },
      ],
      authority: {
        title: "Built on brand strategy, not content hacks.",
        p1: "Coflow is based on a strategic brand-building process: first diagnose the current brand, then understand the desired direction, identify the gap, and turn that gap into focused action.",
        p2: "That means your content is not created from trends alone, templates, or random prompts. It is created from the relationship between:",
        bullets: [
          "how your brand is perceived now",
          "what you want to be known for",
          "who you want to attract",
          "what needs to become clearer",
          "what content can move the brand forward",
        ],
        closeA: "This is why Coflow does not just generate posts.",
        closeB: "It helps you build a brand people can understand, trust, and buy from.",
        cta: "Start free diagnosis",
      },
    },

    // ----- /join — the invite-only launch landing -----
    join: {
      eyebrow: "Invite-only launch",
      title: "Coflow is opening to a closed group.",
      sub: "Right now you get in with a code. If you were sent one, that's your way in.",
      codeLabel: "Invite code",
      codePlaceholder: "The code you were sent",
      cta: "Enter",
      ctaLoading: "Checking…",
      errInvalid: "That code isn't valid. Check you copied all of it.",
      errEmpty: "Enter your code first.",
      errNetwork: "We couldn't check that code. Try again.",
      priceLine: "€14/month. No trial, no lock-in — cancel any time.",
      noCodeLabel: "Don't have a code?",
      noCodeCta: "Get in touch",

      includesTitle: "What's waiting inside",
      includes: [
        {
          title: "The brand diagnosis",
          body: "The same blunt read of your Instagram — clarity, authority, differentiation, path to money. Run it from inside, whenever you want.",
        },
        {
          title: "Strategy and content anchors",
          body: "From the diagnosis to a direction: audience, positioning, voice, and 2–6 content anchors you come back to.",
        },
        {
          title: "Ideas and copy in your voice",
          body: "Hook, copy, hashtags and the carousel breakdown — off your strategy, not off a generic prompt.",
        },
        {
          title: "A board that actually moves",
          body: "Idea to in-progress to ready to published. Dates, subtasks, every platform in one place.",
        },
      ],

      whyTitle: "Why invite-only",
      whyBody: "Because with a small group we can sit on every brand properly, fix things fast, and build the product around what's actually missing. This price belongs to this stage.",
    },

    footer: {
      tagline: "Start with a free diagnosis of your Instagram. Then a strategy and posts in your voice.",
      cols: {
        product: "Product",
        company: "Company",
        legal: "Legal",
      },
      productLinks: [
        { label: "How Coflow works", href: "/how-it-works" },
        { label: "Start free diagnosis", href: "/#start" },
        { label: "Enter with a code", href: "/join" },
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
      langSwitcherAria: "החלפה לעברית",
    },
  },
} as const;

export type Dictionary = (typeof DICT)["he"];

export function getDict(locale: Locale): Dictionary {
  return DICT[locale] as Dictionary;
}
