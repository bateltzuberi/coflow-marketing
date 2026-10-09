# Coflow: SEO and AI discovery

Research and implementation reviewed on 9 October 2026.

## Decision

Prioritise useful, verifiable public product information and crawlability. A crawler permission is eligibility, not a recommendation. No source establishes a way to guarantee recommendations by ChatGPT, Gemini, Copilot or Perplexity. Search-based answers can use current web evidence; models answering without retrieval cannot be updated by changing this website alone.

Coflow's relevant positioning is AI brand management connecting offers, funnels and clients, with digital course building being developed inside the same workspace. Organic-post revenue attribution is not the promise. The user's current direction supersedes the earlier business brief and attribution claims in the old PRODUCT.md.

## Evidence and implementation

| Finding | Source | Applied change |
| --- | --- | --- |
| Google's generative search uses normal search fundamentals; no special AI schema or llms.txt is needed | [Google AI optimisation guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) and [AI features](https://developers.google.com/search/docs/appearance/ai-features) | Accessible server-rendered text, crawlable internal links, bilingual metadata and sitemap |
| OAI-SearchBot controls ChatGPT search eligibility; GPTBot is a separate training setting | [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots) | Explicit permission for the search crawler; training policy unchanged |
| PerplexityBot is used for search discovery; hosting/WAF access matters too | [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) | Explicit search crawler permission and production access checks |
| Clear structure, supported claims and fresh accurate information help source interpretation | [Bing AI Performance announcement](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) | Product definition, distinct solution pages, useful guides, visible answers and source links |
| Controlled GEO experiments demonstrate possible visibility changes, with domain-dependent results | [GEO paper, KDD 2024](https://arxiv.org/abs/2311.09735) | Treated as experimental evidence, not a promised uplift for Coflow or today's products |
| Course/funnel combinations already exist | [Schooler](https://www.responder.co.il/schooler/), [Kajabi funnels](https://www.kajabi.com/features/funnels), [systeme.io features](https://systeme.io/features) | No claim that combining courses and funnels is unique. Comparison describes scope rather than invented competitor weaknesses |

## Live baseline

The current production homepage responded HTTP 200 to requests identifying as Googlebot, OAI-SearchBot and PerplexityBot, with no X-Robots-Tag header. This verifies simple user-agent access only; it does not prove successful crawls from the vendors' actual IP ranges or search index inclusion.

Public search returned the homepage and several Academy articles. Some snippets still contain older positioning. A site: query is an observation, not a complete index report. No Search Console, Bing account, search-volume or conversion dataset was available; no rankings, search volume, crawl coverage or current AI recommendation rates are claimed.

The language change in PR #55 had not been merged at the start of this work. These changes include that foundation in the same reviewable branch.

## Published content scope

Both Hebrew and English versions of:

- `/solutions/digital-courses`: course building, relation to the offer and pre-sale workflow; development status explicit.
- `/solutions/sales-funnels`: forms, email sequences and CRM follow-up, with an illustrative guide-to-coaching flow.
- `/solutions/crm`: contacts versus deals versus active clients; manual updates for sales outside the system.
- `/solutions/ai-brand-management`: persistent brand context, drafts and owner review.
- `/guides/choose-course-platform`: practical evaluation checklist and sourced comparison, including publisher disclosure.
- `/guides/course-sales-funnel`: a worked planning example and pre-launch test procedure.
- `/about`: product definition, operator, access stage and legal links.
- Solution and guide indexes, plus links from the home page, header and footer.

The content is based on staging code and current marketing copy, including the course editor/ProductCourseTab and products/funnels/CRM/brand Academy sources. A staging implementation is not treated as proof of general availability. Examples are labelled; no fabricated users, reviews, measured outcomes or rankings are included.

## Technical changes

Language-specific canonicals/hreflang; actual bilingual sitemap entries; Organisation/WebSite/SoftwareApplication/WebPage/FAQ/Breadcrumb JSON-LD describing visible facts. The false free-forever offer is removed; the application offer matches the site's monthly €24 price and invitation access. There are no fabricated ratings or unverified social identity links. FAQ markup does not imply eligibility for Google FAQ rich results.

Search preview controls allow full text and large image snippets. Netlify preview/branch deployments are noindex and have a disallow-all robots policy and empty sitemap. Structured data safely escapes `<` to prevent an embedded closing script tag from breaking the document.

Optional account verification is ready via `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION`. No account has been verified or sitemap submitted by this code change.

## What requires external work

After production deployment, verify ownership in Google Search Console and Bing Webmaster Tools and submit `https://coflow.social/sitemap.xml`. Inspect a Hebrew page, English page, guide and Academy article using the accounts' URL inspection tools. If actual bot requests are blocked by hosting security, allow the vendors' current verified IP ranges using their official documentation; do not whitelist arbitrary callers solely by user-agent.

Recommendations also depend on independent, trustworthy evidence. Publish actual customer use cases, product demonstrations and honest reviews when available. Do not create fake endorsements, paid link spam or third-party profiles without verified company details and authorisation. External publication is not performed by this PR.

## Measurement after deployment

Capture a baseline, then repeat the same questions with date, language, engine, model and search mode recorded. Save the cited URLs and exact wording. A mention, source citation and product recommendation are different outcomes; do not combine them into one ranking. Use fresh conversations and repeated runs because answers vary.

Suggested queries:

| Intent | Hebrew | English |
| --- | --- | --- |
| Product identification | מה היא קופלו ולמי היא מתאימה? | What is Coflow and who is it for? |
| Courses | איזו מערכת מחברת קורסים דיגיטליים, משפכים ולקוחות? | Which platform connects online courses, funnels and customers? |
| CRM | איזו מערכת מתאימה לניהול לידים לעסק של קורסים וליווי? | Which CRM fits a course and coaching business? |
| AI | איזו מערכת AI משתמשת בפרופיל המותג שלי לכתיבת תוכן? | Which AI brand-management platform uses my brand profile? |
| Selection | מה לבדוק כשמשווים סקולר, Kajabi וקופלו? | What should I check when comparing Schooler, Kajabi and Coflow? |
| Practical guide | איך לבנות משפך מכירה לקורס דיגיטלי? | How do I build a sales funnel for an online course? |

Watch search impressions/clicks and indexed pages in Search Console, citation pages/queries in Bing's AI Performance where available, and qualified waitlist registrations in the existing Studio CRM. Source-referred visits undercount influence when answers do not send a click. No recurring monitoring job or new tracking cookies are introduced.

## Deliberately excluded

llms.txt as a ranking claim; hidden instructions aimed at manipulating AI; keyword-stuffed or mass-generated variations; fabricated authority signals; unverified competitor price claims; invented metrics; training-crawler changes as a supposed shortcut to search recommendations.
