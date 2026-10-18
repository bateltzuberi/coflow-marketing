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

export type PlusKey = "sort" | "bio" | "gift" | "call" | "week" | "launch" | "course";

type Row = readonly [string, string];

export type PlusItem = {
  key: PlusKey;
  title: string;
  desc: string;
  gets: readonly string[];
};

const he = {
  meta: {
    title: "קופלו | מערכת לניהול מותג עם AI",
    description:
      "קופלו מחבר מוצרים, משפכים, שיווק ו-CRM עם AI. לעסק של קורסים, ליווי ושירותים, עם בניית קורסים שנמצאת בפיתוח.",
    ogTitle: "קופלו | כל הכלים לניהול עסק אונליין במקום אחד",
  },
  signIn: "התחברות",
  dock: {
    aria: "תפריט",
    marketing: "לקוחות חדשים",
    sales: "מכירות",
    clients: "ניהול",
    price: "מחיר",
    join: "להצטרפות",
    plus: "מה בא לך להקים היום?",
    close: "סגירה",
  },
  hero: {
    h1a: "כל הכלים לניהול עסק אונליין",
    h1b: "במקום אחד",
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
    sub: "לינק בביו, דפי נחיתה, ניהול לקוחות, מיילים, משימות ותוכן. מנוי אחד ב-€24 לחודש.",
    cta: "להצטרפות ←",
    refund: "לא מתאים לך? החזר מלא בתוך 14 יום",
    hintA: "לחצי על",
    hintB: "למטה ותראי מה אפשר להקים",
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
    h2: "כל הלידים במקום אחד, מהפנייה ועד התשלום",
    lead: "כל פנייה נכנסת ללוח העסקאות, ואת רואה באיזה שלב היא. המיילים יוצאים לבד: מי שנרשמה למדריך מקבלת סדרת מיילים, ומי שקנתה מקבלת מייל ברוכה הבאה. התשלום נעשה בדף המכירה שלך.",
    gets: ["לוח עסקאות", "דפי מכירה עם תשלום", "סדרות מיילים", "ניוזלטר", "אוטומציות"],
    sequenceTitle: "סדרת מיילים · מדריך התמחור",
    sequence: [["מיד", "המדריך שלך"], ["אחרי יומיים", "הטעות הנפוצה"], ["אחרי 5 ימים", "הזמנה לשיחה"]] as readonly (readonly [string, string])[],
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
    label: "לקוחות חדשים",
    h2: "עוקבות שמתעניינות לא הולכות לאיבוד",
    lead: "את מוסיפה לביו לינק לדף שלך. משם עוקבת יכולה להירשם למדריך, למלא שאלון או לקבוע איתך שיחה. השם, המייל והתשובות שלה נשמרים אצלך, ואת רואה מאיפה היא הגיעה.",
    gets: ["לינק בביו", "דפי נחיתה", "שאלונים וטפסים", "קביעת שיחות", "רשימת תפוצה"],
    inTitle: "פניות חדשות השבוע",
    arrivals: [["שירה נרשמה למדריך", "לינק בביו"], ["נועה מילאה את השאלון", "שאלון"], ["דנה קבעה שיחת היכרות", "דף נחיתה"]] as readonly (readonly [string, string])[],
    slideCount: "1/6",
    slide: "למה תמחור לפי שעה לא תמיד עובד",
    handle: "maya.levi",
    caption: "אני בודקת קודם מה התוצאה ומה כולל הליווי. השאלון בביו.",
  },
  clients: {
    label: "ניהול העסק",
    h2: "כל העסק במסך אחד",
    lead: "יש לך לוח תוכן עם רעיונות לפוסטים, משימות לך ולצוות, ומסך פתיחה שמראה כמה כסף נכנס החודש ומה צריך לעשות היום.",
    gets: ["לוח תוכן", "משימות לצוות", "הכנסות החודש", "לקוחות פעילות", "פודקאסט"],
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
      { key: "course", title: "לבנות קורס דיגיטלי", desc: "פרקים ושיעורים כתובים, דף הרשמה ומייל ברוכה הבאה", gets: ["קורס עם שיעורים", "דף הקורס", "מייל ברוכה הבאה"] },
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
      course: {
        name: "קורס מותג בשבוע",
        continueLabel: "ממשיכים · יום 1 · שיעור 3",
        lesson: "הסיפור שמוכר בלי למכור",
        continueButton: "להמשיך לשיעור",
        progressLabel: "ההתקדמות",
        progress: "33%",
        chapters: [["יום 1 · מי את בשביל הקהל", "2 מתוך 3", ""], ["יום 2 · ההבטחה", "נפתח ב־13.10", "locked"]] as readonly (readonly [string, string, string])[],
        cardTitle: "מייל ברוכה הבאה",
        welcome: "אפשר להתחיל עכשיו, ההתקדמות נשמרת.",
        welcomeButton: "להתחלת הקורס",
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
    chip: "לחודש · המחיר לא ישתנה לך",
    facts: ["כל הכלים כלולים, בלי חבילות", "המחיר שנרשמת איתו לא ישתנה לך", "בלי התחייבות, מבטלים מתי שרוצים", "לא מתאים לך? החזר מלא בתוך 14 יום"],
    fine: "ההרשמה פתוחה. פותחים חשבון ומתחילים.",
  },
  footer: {
    links: [
      { label: "מה אפשר לבנות", href: "/solutions" },
      { label: "מדריכים", href: "/guides" },
      { label: "על קופלו", href: "/about" },
      { label: "אקדמיה", href: "/academy" },
      { label: "תנאי שימוש", href: "/terms" },
      { label: "מדיניות פרטיות", href: "/privacy" },
    ],
    company: "SheBossIt LTD",
  },
};

export type HomeCopy = typeof he;

const en: HomeCopy = {
  meta: {
    title: "Coflow | AI brand management, funnels and CRM",
    description:
      "Coflow connects offers, funnels, marketing and CRM with AI for course, coaching and service businesses. Course building is in development.",
    ogTitle: "Coflow | All the tools to run your online business, in one place",
  },
  signIn: "Log in",
  dock: {
    aria: "Menu",
    marketing: "New clients",
    sales: "Sales",
    clients: "Running it",
    price: "Price",
    join: "Join",
    plus: "What do you want to set up today?",
    close: "Close",
  },
  hero: {
    h1a: "All the tools to run your online business",
    h1b: "in one place",
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
    sub: "Link in bio, landing pages, client management, email, tasks and content. One subscription, €24 a month.",
    cta: "Join →",
    refund: "Not for you? Full refund within 14 days",
    hintA: "Tap",
    hintB: "below to see what you can set up",
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
    h2: "Every lead in one place, from first message to payment",
    lead: "Every inquiry lands on your deals board, and you see what stage it's at. Emails go out on their own: whoever signed up for your guide gets an email sequence, and whoever bought gets a welcome email. She pays on your sales page.",
    gets: ["Deals board", "Sales pages with payment", "Email sequences", "Newsletter", "Automations"],
    sequenceTitle: "Email sequence · the pricing guide",
    sequence: [["Right away", "Your guide"], ["2 days later", "The common mistake"], ["5 days later", "An invitation to a call"]],
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
    label: "New clients",
    h2: "Interested followers don't get lost",
    lead: "Add a link to your page in your bio. From there a follower can sign up for your guide, fill in a questionnaire or book a call with you. Her name, email and answers are saved for you, and you see where she came from.",
    gets: ["Link in bio", "Landing pages", "Questionnaires and forms", "Booking calls", "Mailing list"],
    inTitle: "New this week",
    arrivals: [["Shira signed up for the guide", "Link in bio"], ["Noa filled in the questionnaire", "Questionnaire"], ["Dana booked an intro call", "Landing page"]],
    slideCount: "1/6",
    slide: "Why hourly pricing doesn't always work",
    handle: "maya.levi",
    caption: "I start from the result and what the coaching includes. Quiz in bio.",
  },
  clients: {
    label: "Running the business",
    h2: "Your whole business on one screen",
    lead: "A content board with post ideas, tasks for you and your team, and a home screen that shows how much money came in this month and what to do today.",
    gets: ["Content board", "Team tasks", "Monthly income", "Active clients", "Podcast"],
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
      { key: "course", title: "Build a digital course", desc: "Written chapters and lessons, a sign-up page and a welcome email", gets: ["Course with lessons", "Course page", "Welcome email"] },
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
      course: {
        name: "Brand in a week",
        continueLabel: "Continue · Day 1 · Lesson 3",
        lesson: "The story that sells without selling",
        continueButton: "Continue the lesson",
        progressLabel: "Progress",
        progress: "33%",
        chapters: [["Day 1 · Who you are to your audience", "2 of 3", ""], ["Day 2 · The promise", "Opens 13.10", "locked"]],
        cardTitle: "Welcome email",
        welcome: "Start now. Your progress is saved.",
        welcomeButton: "Start the course",
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
    chip: "a month · your price won't change",
    facts: ["All the tools included, no tiers", "The price you join at won't change", "No commitment, cancel any time", "Not for you? Full refund within 14 days"],
    fine: "Sign-up is open. Create an account and start.",
  },
  footer: {
    links: [
      { label: "What you can build", href: "/solutions" },
      { label: "Guides", href: "/guides" },
      { label: "About Coflow", href: "/about" },
      { label: "Academy", href: "/academy" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
    company: "SheBossIt LTD",
  },
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return locale === "en" ? en : he;
}
