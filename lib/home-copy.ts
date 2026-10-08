import type { Locale } from "./locale";

/**
 * The home page's words, he + en. Hebrew is primary (לשון נקבה); English
 * mirrors it key for key.
 *
 * The page describes the NEW studio (the dock, the "+", the six set-ups),
 * read off shebossit-cms `origin/staging`. The Hebrew came back from the copy
 * agent against a brief that listed every slot; the mock texts (what is drawn
 * inside the phones and cards) are an example customer, a business coach
 * named Maya Levi, and are written to look like her real content.
 */

export type PlusKey = "sort" | "bio" | "gift" | "call" | "week" | "launch";

type Row = readonly [string, string];

export type PlusItem = {
  key: PlusKey;
  title: string;
  desc: string;
  gets: readonly string[];
};

const he = {
  meta: {
    title: "קופלו | שיווק, מכירות ולקוחות למותג אישי",
    description:
      "קופלו מרכזת את השיווק, המכירות והלקוחות שלך במקום אחד, עם שאלונים, לינק בביו, לוח תוכן, לידים, משימות ולקוחות פעילות.",
    ogTitle: "קופלו | העסק שמאחורי המותג שלך במקום אחד",
  },
  signIn: "התחברות",
  dock: {
    aria: "תפריט",
    marketing: "שיווק",
    sales: "מכירות",
    clients: "ניהול לקוחות",
    price: "מחיר",
    join: "להצטרף",
    plus: "מה בא לך להקים היום?",
    close: "סגירה",
  },
  hero: {
    h1a: "העסק שמאחורי",
    h1b: "המותג שלך",
    builtFor: "נבנה בשביל",
    audiences: [
      "עסקים דיגיטליים",
      "מאמנות",
      "יועצות",
      "משווקות",
      "מנטוריות",
      "מטפלות",
      "יוצרות קורסים",
      "מרצות ומנחות סדנאות",
      "יוצרות תוכן",
      "פודקאסטריות",
      "תזונאיות",
      "מאמנות כושר",
    ],
    sub: "שיווק, מכירות, ניהול לקוחות ומשימות במקום אחד.",
    cta: "להצטרף ←",
    hintA: "לחצי על",
    hintB: "ותראי מה אפשר להקים",
    hintAria: "פתיחת התפריט",
  },
  profile: {
    name: "מאיה לוי · ליווי עסקי",
    bio: "עוזרת לעצמאיות לתמחר שירותים ולמכור אותם.",
    link: "maya.coflow.website/bio",
    stats: [
      ["86", "פוסטים"],
      ["1,240", "עוקבות"],
      ["310", "במעקב"],
    ] as readonly Row[],
    highlights: ["שאלון", "מדריך", "שיחה", "השקה"],
    grid: ["3 טעויות בתמחור", "מה למדתי השנה", "סדנה ב-12.11"],
  },
  notes: [
    { who: "נ", title: "נועה מילאה את השאלון", sub: "מתאימה לליווי · נכנסה ללידים" },
    { who: "ש", title: "שירה נרשמה למדריך", sub: "מהלינק בביו · נכנסה לרשימת התפוצה" },
    { who: "ד", title: "דנה קבעה שיחת היכרות", sub: "יום ג׳ 14:00 · נכנסה ליומן" },
    { who: "א", title: "אורית רכשה את התוכנית", sub: "עברה ללקוחות פעילות" },
  ],
  sales: {
    label: "מכירות",
    h2: "כל פנייה בשאלון מגיעה למוצר שמתאים לה",
    lead: "מי שמגיעה לשאלון עונה על כמה שאלות. קופלו שולחת אותה למוצר שמתאים לה, ואם היא צריכה שיחה נפתחת לה עסקה בלוח העסקאות עם הטלפון והתשובות שלה.",
    formOwner: "מאיה לוי · ליווי עסקי",
    question: "מה הכי מתאים לך עכשיו?",
    answers: ["לסדר את התמחור", "ליווי אישי לאורך הדרך", "סדנה ממוקדת"],
    stage: "ליד חדש · 11",
    deals: [
      { who: "נ", name: "נועה כהן", product: "ליווי עסקי 1:1", note: "רוצה להתחיל אחרי החגים, שאלה על תשלומים.", amount: "₪3,500", source: "שאלון התאמה" },
      { who: "ר", name: "רוני לוי", product: "קורס מותג בשבוע", note: "", amount: "₪690", source: "לינק בביו" },
    ],
  },
  marketing: {
    label: "שיווק",
    h2: "הרעיונות לשבוע כבר בלוח התוכן",
    lead: "קופלו קוראת את הפוסטים האחרונים שלך באינסטגרם, רואה על מה כתבת ומה עבד, ומסדרת רעיונות לשבוע בלוח התוכן. כל רעיון מגיע עם הוק מהמסרים שלך. משם אפשר ליצור פוסט או רילס.",
    weekTitle: "השבוע בלוח התוכן",
    week: [
      ["א׳", "טעות בתמחור", "אינסטגרם"],
      ["ג׳", "מתי להעלות מחיר", "אינסטגרם"],
      ["ה׳", "מה כולל הליווי", "ניוזלטר"],
    ] as readonly (readonly [string, string, string])[],
    slideCount: "1/6",
    slide: "למה תמחור לפי שעה לא תמיד עובד",
    handle: "maya.levi",
    caption: "אני בודקת קודם מה התוצאה ומה כולל הליווי. השאלון בביו.",
  },
  clients: {
    label: "ניהול לקוחות",
    h2: "פותחת את היום ורואה מה נכנס ומה מחכה",
    lead: "בדף הבית את רואה כמה נכנס החודש, מי הלקוחות הפעילות, אילו לידים פתוחים ומה מחכה לך היום. מתחת לזה מופיע ״קופלו שם לב״ עם תובנות כמו זמן סגירה, הכנסה חוזרת ופוסטים לשבוע הבא.",
    incomeLabel: "הכנסות החודש",
    income: "₪6,110",
    change: "▲ ₪1,600 מהחודש שעבר",
    tasksTitle: "המשימות של היום",
    tasks: [
      ["לחזור לשירה על ההצעה", "late"],
      ["פגישה עם אורית", "today"],
      ["לכתוב פוסט לשבוע הבא", "today"],
    ] as readonly (readonly [string, "late" | "today"])[],
    late: "באיחור",
    today: "היום",
    noticed: "קופלו שם לב · זמן הסגירה הממוצע התארך",
  },
  plus: {
    resultTitle: "זה מה שתקבלי",
    cta: "להקים את זה אצלך ←",
    back: "לראות עוד",
    items: [
      { key: "sort", title: "למיין פניות למוצר הנכון", desc: "שאלון ששולח כל פנייה למוצר שמתאים לה", gets: ["שאלון לשיתוף", "דפי סיום", "לוח עסקאות"] },
      { key: "bio", title: "לינק בביו עם כל המוצרים שלי", desc: "דף לאינסטגרם עם כל מה שאת מוכרת", gets: ["לינק בביו", "מוצרים ותוכן", "כפתור וואטסאפ"] },
      { key: "gift", title: "לאסוף מיילים עם מתנה", desc: "דף הרשמה, רשימת תפוצה וסדרת מיילים", gets: ["דף הרשמה", "רשימת תפוצה", "סדרת מיילים"] },
      { key: "call", title: "שיקבעו איתי שיחה", desc: "דף קביעת שיחה שמכניס את הפגישה ליומן", gets: ["דף קביעת שיחה", "הזמנה ליומן", "עסקה בלוח"] },
      { key: "week", title: "לתכנן תוכן לשבוע", desc: "רעיונות לשבוע עם הוקים ותאריכים בלוח התוכן", gets: ["רעיונות לשבוע", "הוקים מהמסרים שלך", "תאריכים בלוח"] },
      { key: "launch", title: "לתכנן השקה", desc: "תוכנית, רשימת המתנה, תוכן ודף מכירה", gets: ["תוכנית השקה", "רשימת המתנה", "דף מכירה"] },
    ] as readonly PlusItem[],
    mock: {
      owner: "מאיה לוי",
      ownerSub: "ליווי עסקי",
      sort: {
        question: "מה הכי מתאים לך עכשיו?",
        answers: ["לסדר את התמחור", "ליווי אישי לאורך הדרך", "סדנה ממוקדת"],
        cardTitle: "ליד חדש",
        who: "נ",
        name: "נועה כהן",
        rows: [["מוצר", "ליווי 1:1"], ["טלפון", "050-•••••••"]] as readonly Row[],
      },
      bio: {
        sub: "עוזרת לעצמאיות לתמחר שירותים",
        links: [["שאלון התאמה לליווי", "←"], ["קורס מותג בשבוע", "₪690"], ["מדריך חינמי לתמחור", "←"], ["שיחת היכרות", "←"]] as readonly Row[],
      },
      gift: {
        sub: "מתנה ממאיה לוי",
        title: "המדריך החינמי: איך לתמחר ליווי",
        fields: ["השם שלך", "המייל שלך"],
        button: "שלחי לי את המדריך",
        cardTitle: "סדרת מיילים",
        rows: [["מיד", "המדריך שלך"], ["אחרי יומיים", "הטעות הנפוצה"], ["אחרי 5 ימים", "הזמנה לשיחה"]] as readonly Row[],
      },
      call: {
        title: "שיחת היכרות · 20 דק׳",
        days: [["א׳", "12"], ["ג׳", "14"], ["ד׳", "15"], ["ה׳", "16"]] as readonly Row[],
        slots: ["10:00", "11:30", "14:00", "16:30"],
        button: "לקבוע",
        cardTitle: "נקבעה שיחה",
        rows: [["מי", "דנה רז"], ["מתי", "ג׳ 14:00"], ["איפה", "ביומן שלך"]] as readonly Row[],
      },
      week: {
        cardTitle: "השבוע",
        rows: [["א׳", "קרוסלה על תמחור"], ["ג׳", "ניוזלטר"], ["ה׳", "פרק בפודקאסט"]] as readonly Row[],
      },
      launch: {
        cardTitle: "השקה: סדנת תמחור · 12.11 · ₪290",
        rows: [
          ["שבוע לפני", "פוסט: למה תמחור מפחיד"],
          ["5 ימים לפני", "מייל לרשימה"],
          ["3 ימים לפני", "רילס + לינק להרשמה"],
          ["יום לפני", "סטורי: נשארו מקומות"],
          ["12.11", "הסדנה"],
          ["יום אחרי", "מייל תודה + הצעה לליווי"],
        ] as readonly Row[],
      },
    },
  },
  price: {
    h2: "כמה זה עולה?",
    tileLabel: "מנוי חודשי",
    amount: "€24",
    chip: "לחודש · המחיר נשאר שלך",
    facts: ["כל מה שיש בקופלו, בלי חבילות", "המחיר שנרשמת בו נשאר שלך", "בלי התחייבות, מבטלים מתי שרוצים"],
    fine: "קופלו נפתחת בהדרגה. נרשמים כאן, ואנחנו שולחים הזמנה כשמגיע התור שלך.",
    signupTitle: "הרשמה לקופלו",
    formTitle: "טופס רשימת המתנה",
    haveCode: "יש לך קוד הזמנה?",
  },
  footer: {
    links: [
      { label: "אקדמיה", href: "/academy" },
      { label: "רשימת המתנה", href: "/waitlist" },
    ],
    company: "SheBossIt LTD",
  },
};

export type HomeCopy = typeof he;

const en: HomeCopy = {
  meta: {
    title: "Coflow | Marketing, sales and clients for a personal brand",
    description:
      "Coflow keeps your marketing, sales and clients in one place: questionnaires, a link in bio, a content board, leads, tasks and active clients.",
    ogTitle: "Coflow | The business behind your brand, in one place",
  },
  signIn: "Log in",
  dock: {
    aria: "Menu",
    marketing: "Marketing",
    sales: "Sales",
    clients: "Clients",
    price: "Price",
    join: "Join",
    plus: "What do you want to set up today?",
    close: "Close",
  },
  hero: {
    h1a: "The business behind",
    h1b: "your brand",
    builtFor: "Built for",
    audiences: [
      "digital businesses",
      "coaches",
      "consultants",
      "marketers",
      "mentors",
      "therapists",
      "course creators",
      "speakers and workshop leaders",
      "content creators",
      "podcasters",
      "nutritionists",
      "fitness coaches",
    ],
    sub: "Marketing, sales, client management and tasks in one place.",
    cta: "Join →",
    hintA: "Tap",
    hintB: "to see what you can set up",
    hintAria: "Open the menu",
  },
  profile: {
    name: "Maya Levi · Business coaching",
    bio: "Helping freelancers price their services and sell them.",
    link: "maya.coflow.website/bio",
    stats: [
      ["86", "posts"],
      ["1,240", "followers"],
      ["310", "following"],
    ],
    highlights: ["Quiz", "Guide", "Call", "Launch"],
    grid: ["3 pricing mistakes", "What I learned this year", "Workshop on 12.11"],
  },
  notes: [
    { who: "N", title: "Noa filled in the questionnaire", sub: "Fits coaching · added to leads" },
    { who: "S", title: "Shira signed up for the guide", sub: "From the link in bio · added to the list" },
    { who: "D", title: "Dana booked an intro call", sub: "Tue 14:00 · in the calendar" },
    { who: "O", title: "Orit bought the program", sub: "Moved to active clients" },
  ],
  sales: {
    label: "Sales",
    h2: "Every questionnaire lead reaches the offer that fits her",
    lead: "Whoever reaches the questionnaire answers a few questions. Coflow sends her to the offer that fits, and if she needs a call, a deal opens on your board with her phone number and answers.",
    formOwner: "Maya Levi · Business coaching",
    question: "What fits you best right now?",
    answers: ["Sorting out my pricing", "One-to-one coaching", "A focused workshop"],
    stage: "New lead · 11",
    deals: [
      { who: "N", name: "Noa Cohen", product: "1:1 coaching", note: "Wants to start after the holidays, asked about payments.", amount: "₪3,500", source: "Questionnaire" },
      { who: "R", name: "Roni Levi", product: "Brand in a week", note: "", amount: "₪690", source: "Link in bio" },
    ],
  },
  marketing: {
    label: "Marketing",
    h2: "This week's ideas are already on your content board",
    lead: "Coflow reads your latest Instagram posts, sees what you wrote about and what worked, and lays out a week of ideas on your content board. Each idea comes with a hook from your messages. From there you can create the post or reel.",
    weekTitle: "This week on the board",
    week: [
      ["Sun", "A pricing mistake", "Instagram"],
      ["Tue", "When to raise prices", "Instagram"],
      ["Thu", "What coaching includes", "Newsletter"],
    ],
    slideCount: "1/6",
    slide: "Why hourly pricing doesn't always work",
    handle: "maya.levi",
    caption: "I start from the result and what the coaching includes. Quiz in bio.",
  },
  clients: {
    label: "Client management",
    h2: "Open the day and see what came in and what's waiting",
    lead: "Home shows what came in this month, who your active clients are, which leads are open and what's waiting for you today. Under it, \"Coflow noticed\" shows insights like time to close, recurring income and next week's posts.",
    incomeLabel: "Income this month",
    income: "₪6,110",
    change: "▲ ₪1,600 vs last month",
    tasksTitle: "Today's tasks",
    tasks: [
      ["Get back to Shira about the offer", "late"],
      ["Meeting with Orit", "today"],
      ["Write next week's post", "today"],
    ],
    late: "Late",
    today: "Today",
    noticed: "Coflow noticed · average time to close went up",
  },
  plus: {
    resultTitle: "This is what you get",
    cta: "Set this up →",
    back: "See more",
    items: [
      { key: "sort", title: "Sort leads to the right offer", desc: "A questionnaire that sends each lead to the offer that fits", gets: ["Questionnaire to share", "Ending screens", "Deals board"] },
      { key: "bio", title: "A link in bio with all my offers", desc: "One Instagram page with everything you sell", gets: ["Link in bio", "Offers and content", "WhatsApp button"] },
      { key: "gift", title: "Collect emails with a free gift", desc: "A sign-up page, a list and an email sequence", gets: ["Sign-up page", "Mailing list", "Email sequence"] },
      { key: "call", title: "Let people book a call", desc: "A booking page that puts the call in your calendar", gets: ["Booking page", "Calendar invite", "Deal on the board"] },
      { key: "week", title: "Plan a week of content", desc: "A week of ideas with hooks and dates on your board", gets: ["A week of ideas", "Hooks from your messages", "Dates on the board"] },
      { key: "launch", title: "Plan a launch", desc: "A plan, a waitlist, content and a sales page", gets: ["Launch plan", "Waitlist", "Sales page"] },
    ],
    mock: {
      owner: "Maya Levi",
      ownerSub: "Business coaching",
      sort: {
        question: "What fits you best right now?",
        answers: ["Sorting out my pricing", "One-to-one coaching", "A focused workshop"],
        cardTitle: "New lead",
        who: "N",
        name: "Noa Cohen",
        rows: [["Offer", "1:1 coaching"], ["Phone", "050-•••••••"]],
      },
      bio: {
        sub: "Helping freelancers price their services",
        links: [["Coaching fit questionnaire", "→"], ["Brand in a week", "₪690"], ["Free pricing guide", "→"], ["Intro call", "→"]],
      },
      gift: {
        sub: "A gift from Maya Levi",
        title: "The free guide: how to price coaching",
        fields: ["Your name", "Your email"],
        button: "Send me the guide",
        cardTitle: "Email sequence",
        rows: [["Right away", "Your guide"], ["After 2 days", "The common mistake"], ["After 5 days", "Invite to a call"]],
      },
      call: {
        title: "Intro call · 20 min",
        days: [["Sun", "12"], ["Tue", "14"], ["Wed", "15"], ["Thu", "16"]],
        slots: ["10:00", "11:30", "14:00", "16:30"],
        button: "Book",
        cardTitle: "Call booked",
        rows: [["Who", "Dana Raz"], ["When", "Tue 14:00"], ["Where", "Your calendar"]],
      },
      week: {
        cardTitle: "This week",
        rows: [["Sun", "Pricing carousel"], ["Tue", "Newsletter"], ["Thu", "Podcast episode"]],
      },
      launch: {
        cardTitle: "Launch: pricing workshop · 12.11 · ₪290",
        rows: [
          ["A week before", "Post: why pricing is scary"],
          ["5 days before", "Email to the list"],
          ["3 days before", "Reel + sign-up link"],
          ["Day before", "Story: places left"],
          ["12.11", "The workshop"],
          ["Day after", "Thank-you email + coaching offer"],
        ],
      },
    },
  },
  price: {
    h2: "How much is it?",
    tileLabel: "Monthly plan",
    amount: "€24",
    chip: "a month · your price stays yours",
    facts: ["Everything in Coflow, no tiers", "The price you join at stays yours", "No commitment, cancel any time"],
    fine: "Coflow is opening gradually. Sign up here and we'll send you an invite when it's your turn.",
    signupTitle: "Sign up for Coflow",
    formTitle: "Waitlist form",
    haveCode: "Have an invite code?",
  },
  footer: {
    links: [
      { label: "Academy", href: "/academy" },
      { label: "Waitlist", href: "/waitlist" },
    ],
    company: "SheBossIt LTD",
  },
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return locale === "en" ? en : he;
}
