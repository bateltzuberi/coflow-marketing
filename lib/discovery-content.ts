import type { Locale } from "./locale-path";

export type ContentSection = { title: string; paragraphs: string[]; steps?: string[] };
export type DiscoveryPage = {
  title: string;
  description: string;
  intro: string;
  sections: ContentSection[];
  faqs: { q: string; a: string }[];
  academy?: string;
};
export const SOLUTION_SLUGS = ["digital-courses", "sales-funnels", "crm", "ai-brand-management"] as const;
export const GUIDE_SLUGS = ["choose-course-platform", "course-sales-funnel"] as const;

const solutions: Record<string, Record<Locale, DiscoveryPage>> = {
  "digital-courses": {
    he: {
      title: "קורסים דיגיטליים והשיווק שמסביבם",
      description: "בונים קורס דיגיטלי בקופלו, מוכרים אותו בסליקה שלך ופותחים גישה אחרי התשלום. הקורס, הרשימה והלקוחות באותה מערכת.",
      intro: "קורס דיגיטלי הוא מוצר בעסק שלך. בקופלו הקורס נמצא באותה מערכת שבה את מנהלת את המוצר, דף הרכישה, הרשימות והלקוחות, כך שלא צריך לחבר סליקה, דיוור וקורס דרך כלים נפרדים.",
      sections: [
        { title: "מה יש בתוך הקורס", paragraphs: ["פרקים ושיעורים: וידאו מיוטיוב, וימאו, וויסטיה או באני, טקסט, קובץ להורדה ובוחן. עמוד קורס, תעודת סיום ורשימת תלמידות שבה רואים איפה כל אחת עצרה. במסלול Pro אפשר לשחרר פרקים לפי לוח זמנים.", "בכל המסלולים אפשר לבנות קורסים ותלמידות ללא הגבלה, למכור אותם בסליקה שלך ולפתוח גישה מיד אחרי התשלום."] },
        { title: "מה קורה לפני ההרשמה", paragraphs: ["אם צריך לאסוף מתעניינות לפני המכירה, אפשר להתחיל בדף נחיתה ובטופס. מי שממלאת אותו נשמרת כאיש קשר, ורצף מיילים יכול להמשיך את השיחה. אם המוצר מצריך שיחת התאמה, הפנייה יכולה להמשיך לעסקה ב-CRM."] },
        { title: "מתחילים במה שאת מוכרת", paragraphs: ["הגדירי למי הקורס מיועד, מה הוא מלמד ומה המחיר. משם בונים את הקורס ואת הדרך שבה מצטרפים אליו. ה-AI עוזר להכין טיוטות; את בודקת את התוכן, את ההבטחה ואת המסלול לפני הפרסום."], steps: ["הגדירי את הקורס כמוצר.", "סדרי את הפרקים ואת השיעורים.", "בחרי הרשמה ישירה או איסוף מתעניינות לפני המכירה.", "בדקי את הדף, הטופס, התשלום והגישה כתלמידה לפני ההשקה."] },
      ],
      faqs: [
        { q: "האם מערכת הקורסים כבר פתוחה לכולן?", a: "כן. היא כלולה בכל אחד משלושת המסלולים. אם הקורס שלך יושב היום במערכת אחרת, קלוד יכול להעביר אותו, ואת התלמידות מייבאים מקובץ." },
        { q: "האם חייבים קורס כדי להשתמש בקופלו?", a: "לא. המוצר שלך יכול להיות גם ליווי, פגישה, סדנה או מוצר דיגיטלי. הקורס הוא אחד מסוגי המוצרים שסביבם נבנית המערכת." },
        { q: "האם ה-AI מחליף את התוכן שאני מלמדת?", a: "לא. את אחראית לידע ולתוצאה שהקורס מבטיח. AI יכול לעזור בטיוטות ובארגון, והאישור המקצועי נשאר אצלך." },
      ], academy: "products",
    },
    en: {
      title: "Digital courses and the business around them",
      description: "Build a digital course in Coflow, sell it through your own card processor and open access after payment. Course, list and clients in one system.",
      intro: "A digital course is an offer in your business. In Coflow the course sits in the same system as your offer, buy page, lists and clients, so you don't have to connect payments, email and the course through separate tools.",
      sections: [
        { title: "What is inside the course", paragraphs: ["Chapters and lessons: video from YouTube, Vimeo, Wistia or Bunny, text, a downloadable file and a quiz. A course page, a completion certificate and a student list that shows where each one stopped. On the Pro plan you can release chapters on a schedule.", "On every plan you can build unlimited courses with unlimited students, sell them through your own processor and open access right after payment."] },
        { title: "Before someone enrols", paragraphs: ["When a course needs an interested audience before a sale, start with a landing page and form. Each submission becomes a contact, and an email sequence can continue the conversation. Offers that need a fit call can continue as deals in the CRM."] },
        { title: "Start with your offer", paragraphs: ["Define who the course serves, what it teaches and its price. Then build the course and the path to joining it. AI helps prepare drafts; you review the content, promise and flow before publishing."], steps: ["Define the course as an offer.", "Organise chapters and lessons.", "Choose direct enrolment or a lead collection step before the sale.", "Test the page, form, payment and access as a student before launch."] },
      ],
      faqs: [
        { q: "Is course building open to everyone?", a: "Yes. It is included in all three plans. If your course lives in another system today, Claude can bring it over, and you import the students from a file." },
        { q: "Do I need a course to use Coflow?", a: "No. Your offer can also be coaching, an appointment, a workshop or a digital product. A course is one of the offer types the system is built around." },
        { q: "Does AI replace what I teach?", a: "No. You are responsible for the expertise and outcome your course promises. AI can help organise and draft; professional review stays with you." },
      ], academy: "products",
    },
  },
  "sales-funnels": {
    he: {
      title: "משפך שיווקי שמחובר למוצר וללקוחות",
      description: "בני דף נחיתה, טופס ורצף מיילים בקופלו, וחברי אותם למוצר ולאנשי הקשר שלך. כך מתכננים מה קורה אחרי הפנייה.",
      intro: "משפך בקופלו מחבר את המקום שבו משאירים פרטים למה שקורה אחר כך: איש קשר, רשימת תפוצה, מיילים ועסקה. המוצר שאת מוכרת קובע לאן המסלול מוביל.",
      sections: [
        { title: "מה קורה אחרי מילוי הטופס", paragraphs: ["הטופס מחובר למוצר ולרשימת תפוצה. הפנייה נשמרת עם התשובות שלה, ורצף אוטומטי יכול לשלוח מייל, להמתין, להוסיף תגית ולהעביר לרשימה. כשצריך למכור בשיחה, עסקה בלוח עוזרת לך להמשיך את הטיפול."] },
        { title: "אוטומציות ומי שלא סיימה לשלם", paragraphs: ["במסלולי Business ו-Pro את בונה אוטומציה פעם אחת, למשל: מי שקנתה מקבלת סדרת קליטה, ואחרי שבוע הזמנה לשיחה. אפשר להגדיר גם מייל המשך למי שהתחילה לשלם ולא סיימה.", "בעמוד של כל מוצר יש לשונית אוטומציות, ושם רואים את מה שרץ סביבו."] },
        { title: "דוגמה: מדריך חינמי שמוביל לליווי", paragraphs: ["הגולשת מגיעה לדף המדריך ומשאירה מייל. היא מקבלת את המדריך, ובהמשך הזמנה לשיחת התאמה. את רואה את פרטי הפנייה ב-CRM ומעדכנת את מצב העסקה לפי מה שקרה בשיחה. זה מסלול לדוגמה, לא הבטחה למכירות."], steps: ["הגדירי את הליווי כמוצר ואת המדריך כשלב מקדים.", "בני דף וטופס עם השדות שאת באמת צריכה.", "כתבי רצף שמוסר את המדריך ומסביר את הצעד הבא.", "בדקי את הרצף בכתובת מייל שלך לפני הפעלה."] },
        { title: "איפה AI עוזר", paragraphs: ["הוא יכול לעזור בהכנת טיוטות לדף ולמיילים מתוך המידע על המותג וההצעה שלך. את מחליטה מה לפרסם ומתי. הפרסום, קבוצת הוואטסאפ והשיחות עם הלקוחות אינם הופכים אוטומטית לחלק מהמשפך."] },
      ], faqs: [
        { q: "מה ההבדל בין דף נחיתה למשפך?", a: "דף נחיתה הוא עמוד שבו מבצעים פעולה, כמו הרשמה. משפך כולל גם את ההמשך: המיילים, הרשימות והפעולות שנקבעו אחרי ההרשמה." },
        { q: "האם קופלו מנהלת בשבילי פרסום או קבוצות וואטסאפ?", a: "לא. המשפך המתואר כאן מתחיל בתוך המערכת אחרי השארת פרטים. מודעות והפעילות בקבוצה נשארות מחוץ לו." },
      ], academy: "funnels",
    },
    en: {
      title: "Sales funnels connected to your offers and CRM",
      description: "Build landing pages, forms and email sequences in Coflow, connected to your offers and contacts. Plan what happens after an enquiry.",
      intro: "A Coflow funnel connects the place where someone leaves their details to what happens next: a contact, mailing list, emails and a deal. The offer you sell determines where the path leads.",
      sections: [
        { title: "After the form submission", paragraphs: ["Attach the form to an offer and mailing list. The enquiry is saved with its answers. An automated sequence can send an email, wait, add a tag or move a person to another list. When a sale needs a conversation, a deal on the board helps you follow up."] },
        { title: "Automations and unfinished checkouts", paragraphs: ["On Business and Pro you build an automation once. For example: whoever buys gets a welcome series, and a week later an invitation to a call. You can also set up a follow-up email for anyone who starts paying and doesn't finish.", "Each product's page has an Automations tab that shows what runs around it."] },
        { title: "Example: a free guide leading to coaching", paragraphs: ["A visitor leaves an email on the guide page, receives the guide and then an invitation to a fit call. You keep the enquiry in your CRM and update the deal according to the conversation. This is an illustrative flow, not a promise of sales."], steps: ["Define coaching as the offer and the guide as an earlier step.", "Build a page and form with the fields you actually need.", "Write a sequence that delivers the guide and explains the next step.", "Test the flow with your own email address before enabling it."] },
        { title: "Where AI helps", paragraphs: ["AI can help draft pages and emails from your brand and offer information. You decide what to publish and when. Advertising, WhatsApp groups and customer conversations do not automatically become part of the funnel."] },
      ], faqs: [
        { q: "How is a landing page different from a funnel?", a: "A landing page is where someone takes an action such as signing up. A funnel also includes the follow-up emails, lists and actions configured after signup." },
        { q: "Does Coflow manage ads or WhatsApp groups?", a: "No. The flow described here starts inside the system after someone leaves their details. Ads and group activity remain outside it." },
      ], academy: "funnels",
    },
  },
  crm: {
    he: {
      title: "ניהול לידים ולקוחות לעסק של קורסים וליווי",
      description: "CRM בקופלו מחבר טפסים, אנשי קשר, עסקאות ולקוחות פעילות למוצרים שלך. ניהול הפניות והמכירות באותו מקום.",
      intro: "ה-CRM של קופלו מרכז את האנשים בעסק שלך: מי השאירה פרטים, מה היא מחפשת, לאיזה מוצר היא מתאימה ואיפה עומדת השיחה איתה. הטפסים, העסקאות והלקוחות נשענים על אותם אנשי קשר.",
      sections: [
        { title: "מטופס לפנייה שאפשר לטפל בה", paragraphs: ["התשובות שנמסרו בטופס נשמרות עם הפנייה. בדרך כלל נפתחת גם עסקה בלוח; טופס הרשמה לניוזלטר אינו פותח עסקה. כך את יכולה להפריד בין מי שביקשה לקנות לבין מי שרק רוצה לקרוא."] },
        { title: "מכירה ולקוחה פעילה הם שני שלבים", paragraphs: ["עסקה מתארת את תהליך המכירה. אחרי שסוגרים אותה, צריך גם לנהל את העבודה עם הלקוחה. קופלו מפרידה בין לוח העסקאות ללקוחות הפעילות, כדי שמכירה שסגרת לא תיעלם מהטיפול."] },
        { title: "תשלום שנכנס מעדכן את הכרטיס", paragraphs: ["כשלקוחה משלמת בדף רכישה של קופלו, הכרטיס שלה ב-CRM מתעדכן. במסך הכסף את רואה מה באמת נכנס, לפי המסמכים שלך במורנינג, בקארדקום או ב-Grow, בנפרד ממה שעוד פתוח בלוח העסקאות."] },
        { title: "מה כדאי לסדר לפני שמתחילים", paragraphs: ["בחרי שלבים שמתארים את המכירה שלך, והגדירי למי שייכת כל פנייה ומה הצעד הבא. המערכת מחזיקה את המידע; את עדיין צריכה לעדכן את מה שקרה בשיחות ובמכירות שבוצעו מחוץ למערכת."], steps: ["הגדירי את המוצרים והשירותים שאת מוכרת.", "חברי את טפסי הפנייה למוצר המתאים.", "עדכני את שלב העסקה ואת המעקב אחרי השיחה.", "בדקי שללקוחה שסגרה יש גם מקום בניהול הלקוחות הפעילות."] },
      ], faqs: [
        { q: "האם איש קשר הוא גם עסקה?", a: "לא. איש הקשר הוא האדם. עסקה היא תהליך מכירה מולו. אותו אדם יכול להישאר בכרטיס אחד גם כשיש איתו כמה עסקאות." },
        { q: "האם ה-CRM יודע לבד על מכירה שסגרתי בטלפון?", a: "לא בהכרח. מה שנסגר מחוץ למערכת דורש עדכון. לוח העסקאות משקף את מה שהוזן אליו ואת הפעולות שחוברו אליו." },
      ], academy: "crm",
    },
    en: {
      title: "CRM for course and coaching businesses",
      description: "Coflow CRM connects forms, contacts, deals and active clients with your offers. Manage enquiries and sales in the same place.",
      intro: "Coflow CRM holds the people in your business: who enquired, what they need, which offer fits and where the conversation stands. Forms, deals and active clients connect to the same contacts.",
      sections: [
        { title: "A form becomes an enquiry you can handle", paragraphs: ["Answers submitted through a form stay with the enquiry. A deal usually opens on the board too; a newsletter signup does not open one. You can distinguish a buying enquiry from someone who only wants to read."] },
        { title: "A sale and an active client are different stages", paragraphs: ["A deal describes the sales process. Once it closes, the work with the client still needs a place. Coflow separates the deal board from active clients, so a sale does not disappear from your working day."] },
        { title: "A payment updates the card", paragraphs: ["When a client pays on a Coflow buy page, her CRM card updates. The money screen shows what actually came in, read from your own Morning, Cardcom or Grow documents, apart from what is still open on the deal board."] },
        { title: "Before you start", paragraphs: ["Choose stages that describe your sales process, decide who owns each enquiry and record the next step. The system holds the information; you still update conversations and sales made outside it."], steps: ["Define the offers and services you sell.", "Connect enquiry forms to the right offer.", "Update the deal stage and follow-up after each conversation.", "Check that a won client also has a place among your active clients."] },
      ], faqs: [
        { q: "Is a contact the same as a deal?", a: "No. A contact is the person. A deal is a sales process with them. One person can remain in one contact record across several deals." },
        { q: "Does the CRM know about a sale I made by phone?", a: "Not automatically in every case. Sales made outside the system need updating. The board reflects the information entered and actions connected to it." },
      ], academy: "crm",
    },
  },
  "ai-brand-management": {
    he: {
      title: "מערכת לניהול מותג עם AI",
      description: "מחברים את קופלו לקלוד או ל-ChatGPT, והוא בונה טיוטות של דפי נחיתה, סדרות מיילים, טפסים וקורסים בחשבון שלך. את מאשרת לפני פרסום.",
      intro: "קופלו היא מערכת לניהול מותג עם AI. את מחברת אותה לקלוד או ל-ChatGPT, כותבת מה צריך, והטיוטה נבנית בחשבון שלך: דף נחיתה, סדרת מיילים, טופס או קורס.",
      sections: [
        { title: "המותג שלך הוא הקלט", paragraphs: ["ככל שפרופיל המותג מדויק יותר, כך הטיוטות יכולות להתאים יותר לעסק שלך. הקהל, ההצעה והקול שלך נשמרים כמסגרת לעבודה. כשמשהו בעסק משתנה, עדכני גם את הפרופיל."] },
        { title: "מה קלוד בונה בקופלו", paragraphs: ["דף הרשמה לוובינר, סדרת מיילים להשקה, טופס או טיוטת קורס. אפשר לבקש ממנו גם להעביר קורס שיושב היום במערכת אחרת, או לבנות מחדש סדרות מיילים אחרי שהרשימות שלך עברו מרב מסר."], steps: ["חברי את קופלו לקלוד או ל-ChatGPT.", "כתבי מה את צריכה ולאיזה מוצר.", "עברי על הטיוטה שנבנתה בקופלו ותקני מה שצריך.", "אשרי לפרסם או לשלוח."] },
        { title: "האישור נשאר אצלך", paragraphs: ["שום דבר לא נשלח ולא מתפרסם לפני שאישרת. בדקי עובדות, מחירים והבטחות בטיוטה. AI אינו מכיר כל שינוי בעסק שלך ואינו מחליף שיקול דעת מקצועי."] },
      ], faqs: [
        { q: "במה זה שונה משיחה רגילה עם ChatGPT או קלוד?", a: "בשיחה רגילה את מקבלת טקסט ומעתיקה אותו בעצמך. כשקופלו מחוברת, הדף, הטופס או סדרת המיילים נבנים כטיוטה בחשבון שלך, לצד המוצרים ואנשי הקשר. הטיוטה עדיין דורשת בדיקה ואישור שלך." },
        { q: "האם קופלו מפרסמת כל טיוטה אוטומטית?", a: "טיוטה שנוצרה אינה אישור לפרסום. בדקי את התוכן ואת הפעולות שבחרת להפעיל לפני שימוש מול לקוחות." },
      ], academy: "brand",
    },
    en: {
      title: "AI brand management for your business",
      description: "Connect Coflow to Claude or ChatGPT and it builds drafts of landing pages, email sequences, forms and courses in your account. You approve before anything is published.",
      intro: "Coflow is an AI brand-management system. Connect it to Claude or ChatGPT, write what you need, and the draft is built in your account: a landing page, an email sequence, a form or a course.",
      sections: [
        { title: "Your brand is the input", paragraphs: ["A more accurate profile gives drafts a better chance of fitting your business. Your audience, offer and voice remain the context for the work. Update the profile when the business changes."] },
        { title: "What Claude builds in Coflow", paragraphs: ["A webinar sign-up page, a launch email sequence, a form or a course draft. You can also ask it to bring over a course that lives in another system, or to rebuild email sequences after your lists have moved from Rav Messer."], steps: ["Connect Coflow to Claude or ChatGPT.", "Write what you need and for which offer.", "Go over the draft built in Coflow and fix what needs fixing.", "Approve publishing or sending."] },
        { title: "You keep the final review", paragraphs: ["Nothing is sent or published until you approve it. Check facts, prices and promises in the draft. AI does not know every change in your business and does not replace professional judgement."] },
      ], faqs: [
        { q: "How is this different from a regular chat with ChatGPT or Claude?", a: "In a regular chat you get text and copy it over yourself. With Coflow connected, the page, form or email sequence is built as a draft in your account, next to your offers and contacts. You still review and approve it." },
        { q: "Does every AI draft publish automatically?", a: "A generated draft is not approval to publish. Review the content and the actions you choose to enable before using them with customers." },
      ], academy: "brand",
    },
  },
};

export function getSolution(slug: string, locale: Locale): DiscoveryPage | null {
  return solutions[slug]?.[locale] ?? null;
}

export const discoveryLabels = {
  he: { solutions: "מה אפשר לבנות", guides: "מדריכים", about: "על קופלו", faq: "שאלות נפוצות", details: "איך זה עובד", join: "להרשמה", academy: "הסבר מפורט באקדמיה", related: "עוד בקופלו", availability: "קופלו פתוחה להרשמה. בדקי את זמינות היכולות לפני הצטרפות.", home: "בית", joinClosed: "להרשמה", availabilityClosed: "ההרשמה פתוחה: שלושה מסלולים, ובכל אחד תקופת ניסיון בחינם." },
  en: { solutions: "What you can build", guides: "Guides", about: "About Coflow", faq: "Common questions", details: "How it works", join: "Sign up", academy: "Detailed instructions in the Academy", related: "More in Coflow", availability: "Coflow is open for sign-up. Confirm feature availability before joining.", home: "Home", joinClosed: "Sign up", availabilityClosed: "Sign-up is open: three plans, each with a free trial period." },
};
