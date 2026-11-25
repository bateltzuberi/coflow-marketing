# Landing page rewrite, November 2026

The open project on this site. Whoever picks it up (Batel, Yuval, or their Claude) starts here.
Written 2026-11-25 from an audit of every live Hebrew page on coflow.social against what a
customer can use in **production** Studio (`shebossit-cms` `origin/main`) that day.

Read first, in this order: `AGENTS.md`, `WORKING-WITH-BATEL.md`, `PRODUCT.md`,
`docs/landing-page-design-guide.md`, then this file.

## Where it stands

| Step | Status |
|---|---|
| Audit of the site | done (below) |
| Copy for the home page, the "+" menu, the price tile and inner-page fixes | drafted (below), not built |
| Hero headline | **open**: Batel picks the Claude headline (recommended) or option B |
| Building it into `lib/home-copy.ts`, the sections and the inner pages | not started |
| Studio-side fixes (plan lines, help centre) | not here: they live in `shebossit-cms`, Batel handles them |

## Rules for this work

- **Every claim must be live in production Studio.** On 2026-11-25 these were only on Studio's
  staging and must NOT appear on the site: email warm-up and sending-health warning, WhatsApp
  number connection, no-show/session reminders, club win-back trigger. Re-check before adding them:
  `git -C /path/to/shebossit-cms log origin/main --merges --grep="#4334 "` (also #4323, #4337,
  #4371, #4390).
- **Never promise:** a one-click upsell after payment (an order bump exists, say "אורדר באמפ"),
  Bit or instalments through Coflow, video hosting, webinar attendance or a Zoom connection,
  automatic posting to Instagram, moving pages or sequences from Rav Messer automatically (only
  lists sync; pages and sequences are rebuilt, Claude can do it).
- **Don't state the obvious.** Batel's note on the first draft: "she pays and the course opens" is
  what every course platform says. Say what this audience suffers from instead: gluing Cardcom,
  Make, Rav Messer and the course together, and the "I paid and didn't get access" messages when a
  link breaks. Cut any line that only describes what every system does.
- **Content creation is not the pitch any more.** Batel removed Instagram, YouTube and brand
  strategy from the Studio plans page on 2026-11-21. The home page must not lead with writing posts.
- Home page contract still holds (`docs/landing-page-design-guide.md` §2): dock, top bar, hero,
  sections, price, footer, nothing after the price. This rewrite has **four** sections instead of
  three; Batel approved the order on 2026-11-25.
- Hebrew copy rules: לשון נקבה, no em-dashes, no "זה לא X, זה Y", no punchline closers, no line
  that starts with a Latin word, English words inside Hebrew wrapped in `<span class="en">`.
  Coflow is masculine in Hebrew (קופלו בונה), Claude too (קלוד בונה).

## The audit (2026-11-25)

**Three things to fix**

1. Seven pages say courses are "in development", including the home page's Google description.
   Courses have been live since October: selling, access after payment, drip, certificates.
2. The home page sections are named after menus (products, marketing, sales, clients) and none of
   them shows what this audience wants most.
3. Most of what shipped since the beta is missing: checkout with an order bump, abandoned
   checkout, automations, the club, booking with payment, agreements, the money screen, Claude
   building inside Coflow.

**Inner pages**

| Page | Action | What's wrong |
|---|---|---|
| `/solutions/digital-courses` | rewrite | "in development" three times, including an FAQ answer |
| `/guides/choose-course-platform` | rewrite Coflow row | Coflow row says courses in development; checked 9 Oct |
| `/guides/course-sales-funnel` | fix 2 lines | "in development"; attribution FAQ says no, but each product now shows where its buyers came from |
| `/guides` index | fix 1 line | "מערכת הקורסים נבנית כחלק ממנה" |
| `/solutions/ai-brand-management` | re-angle | all about brand profile writing content; strongest today is Claude building pages, sequences and courses in her account |
| `/solutions/sales-funnels` | expand | missing automations, abandoned checkout, the Automations tab on each product |
| `/solutions/crm` | expand | payments now update the CRM card; the money screen exists |
| `/solutions`, `/about` | small edits | update card blurbs after the above |
| `/for/*` | fine | |
| missing pages | add later | membership club, booking and classes, moving from Rav Messer |

**Price tile (fix is in Studio, not here):** "תכנון מהלכים שיווקיים" is listed under Business while
the menu item is still "soon" in Studio; "תוכנית שותפים משלך" is marked soon in
`GET studio.coflow.social/api/plans/public` but the site doesn't draw the label. Check whether the
site's plan card renders the `soon` flag.

**Help centre:** comes from Studio (`shebossit-cms` `src/lib/academy/areas`), not this repo.
Batel handles it.

## Why this order

The order comes from customer research Batel holds privately (this repo is public, so the research
itself is not here; ask Batel for the shared summary page). In short, for Israeli course and
coaching founders:

| What they struggle with | Where on the page |
|---|---|
| Gluing payment, list and course access together, and buyers who paid but got no access | hero option B, section 1 |
| Too many systems to pay for and connect | section 2: keep your processor, the rest is in Coflow |
| Fear of moving off their current email system | section 2: Rav Messer lists sync on their own |
| Needing someone to do the technical part | hero (recommended), section 3: Claude builds it |
| Not seeing the real money | section 4: income from her own invoicing documents |
| Contracts with coaching clients | section 4: agreements signed online |
| Checkouts left halfway, coupon abuse | section 1 |

Use their words: פרונט, בק, אורדר באמפ, סליקה, וובינר. Name Morning before Zoho. They compare
prices in shekels. Never quote a real person, group or number from the research in public copy.

## The copy

The example customer in drawings is Maya Levi, business coaching, same as today.

### Hero

- **Headline, recommended:** כותבת לקלוד מה את צריכה, / והוא בונה לך את זה בקופלו.
  EN: Tell Claude what you need, and it builds it for you in Coflow.
- **Headline, option B:** הסליקה, המיילים והקורס במערכת אחת, בלי שום חיבור באמצע.
  EN: Payments, email and your course in one system, with nothing to connect in between.
- **Under it:** התשלום עובר בסליקה שלך, הקורס נפתח, היא נכנסת לרשימה והמיילים מתחילים. דפי נחיתה,
  מיילים, קורסים, פגישות ו-CRM במערכת אחת.
  EN: The payment goes through your own card processor, the course opens, she joins your list and
  the emails start. Landing pages, email, courses, bookings and CRM in one system.
  (Apply the "don't state the obvious" rule here too when building.)
- **Built for:** יוצרות קורסים · מאמנות · יועצות · מנטוריות · מטפלות · מנחות סדנאות · בעלות מועדון ·
  פודקאסטריות · תזונאיות · מאמנות כושר (drop יוצרות תוכן and משווקות)
- **Button:** להתחלת תקופת ניסיון בחינם ← / Start your free trial →
- **Phone pop-ups:**
  - אורית שילמה על הקורס · ₪690 · בסליקה שלך / Orit paid for the course · ₪690 · on your processor
  - הקורס נפתח לאורית · קיבלה מייל עם קישור כניסה / The course opened for Orit · got a sign-in link
  - אורית נכנסה לסדרת הקליטה · המייל הראשון יצא / Orit joined the welcome series · first email sent
  - נועה עצרה באמצע התשלום · קיבלה מייל המשך אחרי שעה / Noa stopped halfway through paying · got a follow-up an hour later
- **Google description:** קופלו מחבר את הסליקה שלך לקורס, לרשימת התפוצה ולמיילים. דפי נחיתה,
  קורסים, מועדון, פגישות ו-CRM במקום אחד, לעסקים של קורסים, ליווי ושירותים.
  EN: Coflow connects your card processor to your course, your mailing list and your emails.
  Landing pages, courses, a membership club, bookings and CRM in one place, for course, coaching
  and service businesses.

### Section 1 · Selling (dock: מכירות)

- **Title:** אף אחת לא כותבת לך ״שילמתי ולא קיבלתי גישה״
  EN: Nobody messages you "I paid and didn't get access"
- **Text:** את בונה דף רכישה שגובה דרך הסליקה שלך, ומוסיפה לו אורדר באמפ על אותו תשלום. אחרי
  התשלום הקורס נפתח, היא נכנסת לרשימה הנכונה והכרטיס שלה ב-CRM מתעדכן. ולמי שהתחילה לשלם ולא
  סיימה, את מגדירה פעם אחת מייל המשך שיוצא אוטומטית.
  EN: Build a buy page that charges through your own processor, and add an order bump to the same
  payment. Once she pays, the course opens, she joins the right list and her CRM card updates. For
  anyone who starts paying and doesn't finish, you set up a follow-up email once and it goes out
  automatically.
  (The follow-up is an automation: Business and Pro only.)
- **Chips:** דף רכישה · אורדר באמפ · קופונים · גישה לקורס אחרי תשלום · מי שלא סיימה לשלם
  EN: Buy page · Order bump · Coupons · Course access after payment · Unfinished checkouts
- **Drawing:** קורס מותג בשבוע · ₪690 / ☐ להוסיף את חוברת העבודה · ₪90 / [ לתשלום ] / הקורס נפתח · יום 1 · שיעור 1

### Section 2 · One system (dock: הכל כאן)

- **Title:** נשארת עם הסליקה שלך. כל השאר כבר בקופלו.
  EN: Keep your card processor. Everything else is already in Coflow.
- **Text:** מיילים וסדרות, דפי נחיתה, טפסים ושאלונים, קורסים ומועדון, תיאום פגישות, אוטומציות
  ו-CRM, בלי <span class="en">Make</span> באמצע. הסליקה נשארת בקארדקום או ב-Stripe שלך. אם
  הרשימות שלך ברב מסר, הן עוברות לקופלו לבד. על המכירות שלך קופלו לא לוקח עמלה.
  EN: Email and sequences, landing pages, forms and questionnaires, courses and a club, bookings,
  automations and CRM, with no Make in between. Payments stay on your own Cardcom or Stripe. If your
  lists are in Rav Messer, they move over to Coflow by themselves. Coflow takes no fee on your sales.
- **Chips:** ניוזלטר וסדרות מיילים · דפי נחיתה · קורסים ומועדון · תיאום פגישות · אוטומציות · רשימות מרב מסר
- **Drawing (one automation):** שילמה על הקורס ← נפתחה לה גישה ← נכנסה לרשימה ← סדרת קליטה ←
  אחרי 7 ימים: הזמנה לשיחה על ליווי

### Section 3 · Claude (dock: קלוד)

- **Title:** מבקשת מקלוד, והוא בונה את זה אצלך בקופלו (if the hero uses the Claude headline,
  rewrite this title so the two don't repeat)
  EN: Ask Claude, and it builds it in your Coflow
- **Text:** את מחברת את קופלו לקלוד או ל-ChatGPT וכותבת מה צריך: דף הרשמה לוובינר, סדרת מיילים
  להשקה, טופס או קורס. הטיוטה נבנית בחשבון שלך, ושום דבר לא נשלח ולא מתפרסם לפני שאישרת. ככה גם
  מעבירים קורס שיושב היום במערכת אחרת.
  EN: Connect Coflow to Claude or ChatGPT and write what you need: a webinar sign-up page, a launch
  email sequence, a form or a course. The draft is built in your account, and nothing is sent or
  published until you approve it. It's also how you bring over a course that lives in another
  system today.
- **Chips:** קלוד ו-ChatGPT · דפי נחיתה · סדרות מיילים · טפסים · טיוטת קורס · העברת קורס
- **Drawing:** את: תבנה לי דף הרשמה לסדנת תמחור ב-12.12, ושלושה מיילים לפני הסדנה. / קלוד: בניתי
  טיוטה של הדף ושל שלושת המיילים. הם מחכים לאישור שלך בקופלו. / טיוטה · דף הרשמה לסדנת תמחור · ממתין לאישור

### Section 4 · Clients and money (dock: לקוחות)

- **Title:** כל לקוחה, כל פגישה וכל שקל שנכנס
  EN: Every client, every session and every shekel that came in
- **Text:** מי שקנתה עוברת ללקוחות פעילות, ואת רואה מה קנתה ומתי הפגישה הבאה. לקוחה קובעת פגישה
  ומשלמת עליה באותו דף, וחותמת אונליין על הסכם העבודה שלך. במסך הכסף את רואה מה באמת נכנס, לפי
  המסמכים שלך במורנינג, בקארדקום או ב-Grow, בנפרד ממה שעוד פתוח ב-CRM.
  EN: Whoever buys moves to active clients, and you see what she bought and when your next session
  is. A client books a session and pays for it on the same page, and signs your work agreement
  online. The money screen shows what actually came in, read from your own Morning, Cardcom or Grow
  documents, apart from what is still open in the CRM.
- **Chips:** לקוחות פעילות · פגישות עם תשלום · הסכמים לחתימה · מסך הכסף · מפת המוצרים
- **Drawing:** נכנס החודש · ₪6,110 · ממורנינג ומקארדקום / עוד לא שולם · ₪1,200 · 2 עסקאות / נועה
  חתמה על הסכם הליווי · PDF חתום נשמר אצלך / פגישות השבוע · אורית ב׳ 10:00 · נועה ד׳ 14:00
- Today's Products section (entry, middle, premium map) folds in here as one chip and one row.

### The "+" menu

Swap two of the seven items; keep sort, bio, gift, call, course.

| Out | In |
|---|---|
| `week` · לתכנן תוכן לשבוע | **למכור קורס עם תשלום** · דף רכישה, אורדר באמפ וגישה לקורס אחרי התשלום / Sell a course with payment |
| `launch` · לתכנן השקה (launch planner is still "soon" in Studio) | **להעביר את הרשימה מרב מסר** · הרשימות עוברות לבד, ואת הסדרות בונים מחדש עם קלוד / Bring your Rav Messer list |

### Price

- Title unchanged: עסק שלם, סטודיו אחד.
- Under it: שלושה מסלולים, ובכל אחד תקופת ניסיון בחינם. בלי עמלה של קופלו על המכירות.
  EN: Three plans, each with a free trial. No Coflow fee on your sales.

### Inner-page replacement lines

- **Digital courses, warning box:** בכל המסלולים אפשר לבנות קורסים ותלמידות ללא הגבלה, למכור אותם
  בסליקה שלך ולפתוח גישה מיד אחרי התשלום.
- **Digital courses, what's inside:** פרקים ושיעורים: וידאו מיוטיוב, וימאו, וויסטיה או באני, טקסט,
  קובץ להורדה ובוחן. עמוד קורס, תעודת סיום ורשימת תלמידות שבה רואים איפה כל אחת עצרה. במסלול Pro
  אפשר לשחרר פרקים לפי לוח זמנים.
- **Digital courses, FAQ "האם מערכת הקורסים כבר פתוחה לכולן?":** כן. היא כלולה בכל אחד משלושת
  המסלולים. אם הקורס שלך יושב היום במערכת אחרת, קלוד יכול להעביר אותו, ואת התלמידות מייבאים מקובץ.
- **Choose a course platform, intro:** delete "מערכת הקורסים עדיין בפיתוח. אם את חייבת להעביר קורס
  פעיל עכשיו, אל תעברי…" and write: לפני מעבר, בני שיעור אחד, עשי רכישה כתלמידה ובדקי שהגישה נפתחת.
  אם את ברב מסר, הרשימות עוברות לבד. דפים וסדרות מיילים נבנים מחדש, ואפשר לבקש את זה מקלוד.
- **Choose a course platform, Coflow row:** הכיוון: קורסים, דפים, מיילים, אוטומציות ו-CRM במערכת
  אחת, עם הסליקה שלך. מה לבדוק: שהסליקה שלך נתמכת (קארדקום או Stripe), ואיך עוברים ממערכת הדיוור
  הנוכחית. Update the "נבדק ב" date.
- **Course sales funnel, how it connects:** בקופלו המוצר, דף הרכישה, הקורס, הטפסים ואנשי הקשר
  נבנים באותה סביבת עבודה. אחרי תשלום הגישה לקורס נפתחת לבד, והיא נכנסת לרשימה שבחרת.
- **Course sales funnel, FAQ "האם המשפך יגלה איזה פוסט הביא כל קונה?":** לפי ערוץ, כן. כל מוצר
  מראה מאיזה ערוץ הגיעו הקונות שלו, למשל הלינק בביו או דף נחיתה מסוים. פוסט אורגני מסוים אי אפשר
  תמיד לזהות.
- **Guides index, intro:** קופלו היא מערכת לניהול מותג עם AI. המוצרים, הקורסים, הדפים, הפניות
  והלקוחות שלך נמצאים באותה סביבת עבודה.
- English pages get the same changes, written in English (not translated word for word).

## Where things live

- Home words: `lib/home-copy.ts`. Sections: `components/home/sections.tsx`. Styles: `app/home.css`.
- Solutions and guides: `lib/discovery-content.ts`, `lib/guide-content.ts`.
- Badge pages: `lib/landing-source-copy.ts`.
- Plan cards come from Studio: `GET https://studio.coflow.social/api/plans/public`.

## Before going live

`npm run build`, `npm run lint`, `node --test lib/locale-path.test.mjs`,
`node tests/discovery-smoke.mjs` after a build. Open `/he` and `/en` at phone and laptop width.
`grep -rn '—' lib/home-copy.ts` should find nothing new. A merge to `main` is the production deploy.
When a step above is done, update the "Where it stands" table in this file.
