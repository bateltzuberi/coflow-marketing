# Builds the research report in the same document system as the Coflow
# business brief: a cover with a two-column contents, then one section per
# page made of cards, stat tiles, tables and callouts — never running prose.
import pathlib, asyncio
from playwright.async_api import async_playwright

OUT = pathlib.Path("/home/user/coflow-marketing/reports/Coflow business first positioning.pdf")
HTMLF = pathlib.Path("/tmp/claude-0/-home-user-coflow-marketing/7c0f80cb-4ac7-5060-8ae2-e2766b07879a/scratchpad/brief.html")

CSS = """
@page{ size:A4; margin:0; }
:root{
  --plum:#3E2130; --rose:#B03A5F; --rose-mid:#C2547C;
  --fill:#F9DCE5; --page:#FDF4F6; --tint:#FEF8FA;
  --line:#F2D8E0; --body:#4A4550; --muted:#8C8189; --white:#fff;
}
*{ box-sizing:border-box; margin:0; padding:0; }
html{ -webkit-print-color-adjust:exact; print-color-adjust:exact; }
body{ font-family:Lato,"Noto Sans Hebrew",sans-serif; color:var(--body);
      font-size:9.6pt; line-height:1.62; }
p,li,td,th,h1,h2,h3,h4,div{ unicode-bidi:plaintext; }
.he{ font-family:"Noto Serif Hebrew",serif; }

.page{ width:210mm; min-height:288mm; padding:17mm 16mm 6mm; background:var(--page);
       position:relative; break-after:page; }
.page:last-child{ break-after:auto; }

/* cover */
.cover{ overflow:hidden; background:linear-gradient(150deg,#FDEEF3 0%,#FBE2EB 46%,#F7D8E6 100%);
        padding:20mm 18mm 16mm; display:flex; flex-direction:column; }
.brand{ display:flex; align-items:center; gap:4mm; }
.dot{ width:11mm; height:11mm; border-radius:50%; background:var(--rose); }
.brand span{ font-family:"Noto Serif",serif; font-size:17pt; font-weight:700; color:var(--plum); }
.blob{ position:absolute; border-radius:50%; background:rgba(255,255,255,.34); }
.b1{ width:96mm; height:96mm; top:-22mm; right:-16mm; }
.b2{ width:70mm; height:70mm; bottom:24mm; right:-24mm; background:rgba(200,160,220,.18); }
.eyebrow{ font-size:7.6pt; font-weight:700; letter-spacing:.15em; text-transform:uppercase;
          color:var(--rose); }
.cover .eyebrow{ margin-top:30mm; }
.cover h1{ font-family:"Noto Serif",serif; font-size:33pt; line-height:1.14; font-weight:700;
           color:var(--plum); margin:5mm 0 6mm; max-width:150mm; letter-spacing:-.4pt; }
.cover .lede{ font-size:11.4pt; line-height:1.55; max-width:130mm; color:var(--body); }
.flow{ display:flex; align-items:center; gap:4mm; margin:11mm 0 13mm; }
.step{ background:var(--white); border:1px solid var(--line); border-radius:3mm;
       padding:3.6mm 5mm; font-family:"Noto Serif",serif; font-weight:700;
       font-size:10pt; color:var(--plum); }
.step.on{ background:var(--rose); border-color:var(--rose); color:#fff; }
.arrow{ color:var(--rose-mid); font-size:9pt; letter-spacing:.1em; }
.inside{ margin-top:2mm; }
.toc{ display:grid; grid-template-columns:1fr 1fr; gap:0 11mm; margin-top:5mm; }
.toc div{ display:flex; gap:4mm; align-items:baseline; padding:2.5mm 0;
          border-bottom:1px solid rgba(176,58,95,.18); font-size:9.2pt; }
.toc b{ color:var(--rose); font-weight:700; font-size:8.6pt; min-width:6mm; }
.cover .foot{ margin-top:auto; font-size:8pt; color:var(--muted); }

/* section furniture */
.secno{ font-size:7.6pt; font-weight:700; letter-spacing:.14em; color:var(--rose); }
h2{ font-family:"Noto Serif",serif; font-size:23pt; font-weight:700; color:var(--plum);
    line-height:1.16; margin:2mm 0 4mm; letter-spacing:-.3pt; }
.intro{ font-size:10.2pt; line-height:1.6; max-width:158mm; margin-bottom:7mm; }
h3{ font-family:"Noto Serif",serif; font-size:11.4pt; font-weight:700; color:var(--rose);
    line-height:1.3; margin-bottom:2.2mm; }

/* cards */
.cards{ display:grid; gap:5mm; margin-bottom:6mm; }
.c2{ grid-template-columns:repeat(2,1fr); } .c3{ grid-template-columns:repeat(3,1fr); }
.card{ background:var(--white); border:1px solid var(--line); border-radius:4mm;
       padding:5mm 5.5mm; }
.card p{ font-size:9.2pt; line-height:1.55; }
.card p+p{ margin-top:2.5mm; }
.card.fill{ background:var(--fill); border-color:transparent; }

/* stat tiles */
.stats{ display:grid; grid-template-columns:repeat(3,1fr); gap:5mm; margin-bottom:6mm; }
.stat{ background:var(--white); border:1px solid var(--line); border-radius:4mm; padding:5mm; }
.stat b{ display:block; font-family:"Noto Serif",serif; font-size:27pt; font-weight:700;
         color:var(--rose); line-height:1; margin-bottom:2.5mm; }
.stat u{ display:block; text-decoration:none; font-weight:700; color:var(--plum);
         font-size:9.2pt; margin-bottom:1.5mm; }
.stat span{ font-size:8.4pt; color:var(--muted); line-height:1.45; display:block; }

/* callout */
.callout{ background:var(--fill); border-radius:4mm; padding:4.4mm 5.5mm; margin-bottom:5.5mm;
          font-size:9.5pt; line-height:1.5; color:var(--plum); break-inside:avoid; }
.callout b{ font-weight:700; }

/* table */
table{ width:100%; border-collapse:collapse; background:var(--white);
       border:1px solid var(--line); border-radius:4mm; overflow:hidden; margin-bottom:6mm; }
th{ background:var(--fill); color:var(--plum); font-size:7.6pt; font-weight:700;
    letter-spacing:.07em; text-transform:uppercase; text-align:start; padding:3mm 3.4mm; }
td{ padding:3mm 3.4mm; border-top:1px solid var(--line); font-size:8.5pt;
    line-height:1.45; vertical-align:top; }
td:first-child{ font-weight:700; color:var(--plum); }

/* claim ladder */
.rowitem{ display:grid; grid-template-columns:1fr 30mm; gap:5mm; align-items:start;
          background:var(--white); border:1px solid var(--line); border-radius:3.5mm;
          padding:2.6mm 4.2mm; margin-bottom:1.9mm; }
.rowitem p{ font-size:8.7pt; line-height:1.42; }
.rowitem .why{ color:var(--muted); font-size:7.9pt; margin-top:.8mm; line-height:1.4; }
.pill{ font-size:7.4pt; font-weight:700; letter-spacing:.05em; text-transform:uppercase;
       padding:1.6mm 2.4mm; border-radius:2mm; text-align:center; line-height:1.3; }
.now{ background:#E7F3EA; color:#2E6B43; }
.gate{ background:var(--fill); color:var(--rose); }
.never{ background:#3E2130; color:#fff; }

/* quotes */
.quote{ background:var(--white); border-inline-start:3px solid var(--rose);
        border-radius:0 4mm 4mm 0; padding:5mm 6mm; margin-bottom:4mm; }
.quote .h{ font-family:"Noto Serif Hebrew",serif; font-size:11.4pt; font-weight:700;
           color:var(--plum); line-height:1.55; }
.quote .e{ font-size:9.4pt; color:var(--body); margin-top:2mm; font-style:italic; }
.tag{ font-size:7.4pt; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
      color:var(--rose); display:block; margin-bottom:2.5mm; }

.src{ font-size:7.8pt; color:var(--muted); line-height:1.5; }
.grade{ font-size:7.2pt; font-weight:700; letter-spacing:.05em; text-transform:uppercase;
        color:var(--muted); }
.pnum{ position:absolute; bottom:9mm; right:16mm; font-size:7.6pt; color:var(--muted); }
.chips{ display:flex; flex-wrap:wrap; gap:2.5mm; margin-bottom:5mm; }
.chip{ background:var(--white); border:1px solid var(--line); border-radius:6mm;
       padding:2mm 4mm; font-size:8.4pt; color:var(--plum); font-weight:700; }
.chip.on{ background:var(--rose); color:#fff; border-color:var(--rose); }
"""

SECTIONS = [
 "The verdict", "How to read this", "The recommendation",
 "Why attribution is the wrong proof", "Why the path survives",
 "Israel inverts the claim", "Who we sell to", "The competitive set",
 "The claim ladder", "Risks, ranked", "Never publish these",
]

def page(n, inner, cls=""):
    t = SECTIONS[n-1]
    return (f'<section class="page {cls}"><div class="secno">{n:02d}</div>'
            f'<h2>{t}</h2>{inner}</section>')

toc = "".join(f"<div><b>{i:02d}</b><span>{t}</span></div>" for i, t in enumerate(SECTIONS, 1))

COVER = f"""
<section class="page cover">
  <div class="blob b1"></div><div class="blob b2"></div>
  <div class="brand"><div class="dot"></div><span>Coflow</span></div>
  <div class="eyebrow">Marketing research &middot; September 2026</div>
  <h1>Own the business layer,<br>earn attribution later</h1>
  <p class="lede">Should Coflow move from content-first to business-first &mdash;
     and if so, what may honestly be claimed, and when.</p>
  <div class="flow">
    <div class="step">Content-first</div><div class="arrow">- - &rsaquo;</div>
    <div class="step on">Business-first</div><div class="arrow">- - &rsaquo;</div>
    <div class="step">Attribution, later</div>
  </div>
  <div class="inside"><div class="eyebrow" style="margin:0">Inside</div>
    <div class="toc">{toc}</div>
  </div>
  <div class="foot">Prepared for: Batel Tzuberi &middot; Six parallel research tracks &middot;
     Every figure graded &middot; No figure read in a primary source</div>
</section>"""

P1 = page(1, """
<p class="intro">Shift the frame. Refuse the proof. The research backs the move to business-first
and rejects revenue attribution as the thing we promise underneath it.</p>
<div class="cards c3">
  <div class="card"><h3>Shift the frame</h3>
    <p>"AI that writes your content" is a commodity claim. The G2 AI-writing category lists
    1,227 products, up from 68 in 2024, and TikTok gave Symphony away free to individual
    creators in April 2026.</p></div>
  <div class="card"><h3>Refuse the proof</h3>
    <p>"Which content made the money" cannot be substantiated today and cannot be
    statistically true at this customer's volume. It is unsafe, not merely early.</p></div>
  <div class="card fill"><h3>The third position</h3>
    <p>Own the business underneath your brand, and see the path your buyers take through it
    &mdash; including where they drop off.</p></div>
</div>
<div class="callout"><b>The work is narrower than a repositioning.</b> Coflow has already made
most of the shift: <b>MESSAGING.md</b> already says "Coflow is the business layer underneath a
personal brand". What is live is one unsubstantiated clause in the product sentence, and an
ICP that is too wide.</div>
<div class="cards c2">
  <div class="card"><h3>Do now</h3>
    <p>Adopt the business-layer frame. Delete the "tracks what the content sold" clause.
    Narrow the ICP to multi-offer coaches and course sellers above $50k.</p></div>
  <div class="card"><h3>Do next</h3>
    <p>Build the step-to-step join and capture the source next to the money. The claim
    unlocks when the data does &mdash; not before.</p></div>
</div>""")

P2 = page(2, """
<p class="intro">Network egress was blocked for the whole research run. Vendor sites, research
domains and the web archive were all denied, so search summaries were readable and primary
documents were not.</p>
<div class="stats">
  <div class="stat"><b>0</b><u>Verified figures</u><span>Not one number was read in its
    primary source</span></div>
  <div class="stat"><b>6</b><u>Research tracks</u><span>Demand, competitors, attribution,
    AI content, Israel, positioning</span></div>
  <div class="stat"><b>5</b><u>Client-data numbers</u><span>The only first-hand measurements
    here &mdash; and the most reliable evidence in the document</span></div>
</div>
<table>
  <tr><th>Grade</th><th>What it means</th></tr>
  <tr><td>Client data</td><td>Measured inside Coflow's own product. First-hand.</td></tr>
  <tr><td>Secondhand</td><td>The source exists at the URL given; read as a search summary,
    not opened.</td></tr>
  <tr><td>Vendor claim</td><td>Published by a party that profits from the conclusion.</td></tr>
  <tr><td>Aggregator</td><td>Statistics blog recycling other blogs; publisher or sample
    unestablished.</td></tr>
  <tr><td>Practitioner opinion</td><td>A named person's judgement, not a measured outcome.</td></tr>
  <tr><td>Inference</td><td>Arithmetic or reasoning by the research team.</td></tr>
</table>
<div class="callout"><b>Nothing external here is usable in copy yet.</b> Under Coflow's own
rule &mdash; no unverified number in marketing &mdash; every third-party figure in this report
needs a human to open the source first. Section 11 lists the ones that must never be used at all.</div>""")

P3 = page(3, """
<p class="intro">Keep the category sentence. Cut one clause. Do not promise the source.
"Run the business behind your brand" is a scope claim about products, funnels, CRM and a
dashboard that all exist &mdash; it is safe today.</p>
<div class="quote"><span class="tag">Say this today</span>
  <div class="h he">מגדירה על מה המותג, כותבת את התוכן מתוך ההגדרה הזאת, ומחברת אותו למוצרים, למשפכים ולהכנסה במקום אחד.</div>
  <div class="e">It defines what the brand is about, writes the content off that definition,
  and connects it to the products, funnels and revenue in one place.</div></div>
<div class="quote"><span class="tag">Hold until the join ships</span>
  <div class="h he">מראה את הדרך מהתוכן ללקוחה, ואיפה היא נקטעת.</div>
  <div class="e">It shows the path from the content to the customer, and where that path breaks.</div></div>
<div class="cards c3">
  <div class="card"><h3>Keep</h3><p>The chain: brand definition, anchors, real references,
    template, then content. It is the genuine differentiator, and the market still pays for
    stored brand context &mdash; Jasper meters Brand Voices and Knowledge assets; Writer raised
    $200M at $1.9B selling brand-governed generation.</p></div>
  <div class="card"><h3>Cut</h3><p>The third clause of the product sentence,
    <span class="he">"ועוקבת מה התוכן מכר"</span> &mdash; "tracks what the content sold".
    With 0 of 61 sales carrying a confirmed source, it describes an intention, not a
    capability.</p></div>
  <div class="card fill"><h3>Never say</h3><p>"We show you which post produced the customer."
    "Know exactly what your content earned." Any construction implying per-source revenue
    certainty, in any language.</p></div>
</div>""")

P4 = page(4, """
<p class="intro">Four findings say the attribution version will not work, and they are the
best-sampled evidence in the whole research file.</p>
<div class="cards c2">
  <div class="card"><h3>Nobody names it as a pain</h3>
    <p>No creator-economy survey anywhere asks whether creators can attribute revenue.
    Platform reports name other problems: burnout (59% of full-time creators, Kit 2024),
    discovery and unstable monetisation (Patreon, n=1,000+), isolation (Indie Hackers).</p>
    <p class="src">The strongest "measurement is the top problem" figure &mdash; 33%, n=1,500+
    &mdash; is HubSpot asking employed marketers, one layer above this audience.</p></div>
  <div class="card"><h3>Chasing reach is rational</h3>
    <p>CreatorIQ's State of Creators 2026 &mdash; n=5,095 across 100 regions, &plusmn;1.4pp
    &mdash; finds earnings track follower count and views more than engagement. The market
    pays for reach.</p>
    <p class="src">67% of creators earn under $10,000 a year. The modal creator has nothing
    worth attributing.</p></div>
</div>
<div class="stats">
  <div class="stat"><b>400</b><u>Conversions a month</u><span>What GA4 asks before data-driven
    attribution is meaningful</span></div>
  <div class="stat"><b>9</b><u>Clients a month</u><span>The target business, roughly 44&times;
    below that threshold</span></div>
  <div class="stat"><b>&euro;320</b><u>Lifetime revenue</u><span>At 6.1% monthly churn &mdash;
    a CAC ceiling near &euro;105</span></div>
</div>
<div class="callout"><b>At nine sales a month the question is unanswerable, not just unanswered.</b>
Spread nine sales over four sources and each expects about 2.25, with counting noise of roughly
&plusmn;1.5. "Four from the podcast, one from Reels" is indistinguishable from chance. And
&euro;320 of lifetime revenue cannot fund a category that Play Bigger's own research puts at
6&ndash;10 years.</div>""")

P5 = page(5, """
<p class="intro">One distinction carries the whole recommendation: a census needs no statistical
power, a sample does.</p>
<div class="cards c2">
  <div class="card"><h3>What kills "which source made the money"</h3>
    <p>It is an inference from a sample of the open internet. SparkToro measures 100% of visits
    from TikTok, Slack, Discord and WhatsApp arriving with no referrer, logged as "direct", and
    68% of US searches ending without a click.</p>
    <p class="src">Google retired its own Attribution Reporting API in October 2025 for low
    adoption, after keeping third-party cookies in April 2025. The replacement died too.</p></div>
  <div class="card fill"><h3>Why the path is different</h3>
    <p>"Of the 29 who clicked, 6 reached checkout, 2 bought" is a descriptive statement about a
    complete population Coflow owns. No sampling, so no power problem.</p>
    <p>It is immune to referrer stripping, ITP, ATT and the Privacy Sandbox retirement, because
    none of those touch a funnel you own end to end.</p></div>
</div>
<div class="callout"><b>Honest counter-arguments, given weight.</b> The join is also unbuilt
today &mdash; 0 connections recorded between steps. Funnel-step reporting may already exist in
GoHighLevel and Kartra. And no survey shows demand for drop-off visibility either. Which is why
consolidation is the reason to buy, the path is the reason it matters, and attribution is never
promised.</div>
<div class="callout" style="background:#fff;border:1px solid var(--line)">
<b>Dunford's test, applied.</b> Unique attributes are defined as capabilities you
<i>have</i>. Every documented successful repositioning shipped capability alongside the message
&mdash; the research found no case where the new claim's capability did not exist.</div>""")

P6 = page(6, """
<p class="intro">Israel makes one half of the claim easier than anywhere else, and the other
half harder. Both are load-bearing for the first market.</p>
<div class="cards c2">
  <div class="card"><h3>Revenue truth is easier here</h3>
    <p>Every business, including an <span class="he">עוסק פטור</span>, must issue a named
    document for every payment. The Tax Authority's allocation-number threshold is tightening
    on a fixed schedule.</p>
    <div class="chips" style="margin:3mm 0 0"><div class="chip">&#8362;20,000 &middot; 2025</div>
      <div class="chip">&#8362;10,000 &middot; Jan 2026</div>
      <div class="chip on">&#8362;5,000 &middot; Jun 2026</div></div>
    <p style="margin-top:3mm">Morning and iCount both publish APIs with webhooks, so an
    invoicing integration sees customer, amount and timestamp for effectively all revenue
    &mdash; cash, transfer, Bit and PayBox included. A more complete ledger than Stripe gives
    internationally. Stripe is not a supported country here.</p></div>
  <div class="card"><h3>Cause is harder here</h3>
    <p>WhatsApp reaches 99% of the Israeli population and is a primary sales channel, not
    support. The closing conversation is end-to-end encrypted, usually on a personal number,
    and outside the Business API.</p>
    <p>The entry and the payment are observable. The causal middle is not.</p>
    <p class="src">And the smallest businesses take money with no gateway at all &mdash; PayBox
    for business is fee-free to &#8362;100,000/year, which maps almost exactly onto the
    <span class="he">עוסק פטור</span> ceiling of &#8362;122,833.</p></div>
</div>
<div class="callout"><b>So the message inverts for the first market.</b> Hebrew copy leads on
complete, reconciled revenue truth from receipts. International copy leads on the business
layer. Source attribution is described as assisted reconstruction &mdash; never as measurement.</div>
<div class="cards c2">
  <div class="card"><h3>Morning is the real competitor</h3>
    <p>Roughly 150,000&ndash;170,000 Israeli business customers, acquired by TeamSystem, already
    marketing itself as more than a document tool. The invoicing category sits at
    &#8362;50&ndash;100/month, which brackets Coflow's price.</p></div>
  <div class="card"><h3>And a pricing-model threat</h3>
    <p>Schoolyland sells an Israeli all-in-one for creators as a one-off
    &#8362;2,970&ndash;9,970 build-and-own, pitched as 85% cheaper than recurring SaaS.</p>
    <p class="src">Nobody sells revenue attribution in Hebrew. White space and warning in the
    same sentence.</p></div>
</div>""")

P7 = page(7, """
<p class="intro">Narrow to multi-offer coaches and course sellers above roughly $50k a year.
It is the highest-evidence move available, it costs nothing, and it needs no unbuilt capability.</p>
<div class="cards c3">
  <div class="card fill"><h3>Who</h3>
    <p>Someone running a ladder &mdash; a free guide, a paid offer, a high-ticket program
    &mdash; who sells their own products rather than their reach.</p></div>
  <div class="card"><h3>Why this group</h3>
    <p>Multi-offer complexity, not audience size, is what creates a question worth answering.
    ICF's 2023 study (n=14,591, 157 countries) finds 93% of coaches sell beyond coaching.
    Kajabi reports bundlers earn 4.5&times; single-offer creators.</p></div>
  <div class="card"><h3>The precedent</h3>
    <p>Superhuman's published account: product-market fit 22% &rarr; 33% from segmenting alone,
    then 58% after three quarters of work.</p>
    <p class="src">Caveat kept: the first step changes the measurement population, it does not
    prove revenue grew.</p></div>
</div>
<div class="callout"><b>The cost, stated plainly.</b> Only about 4% of creators are full-time,
and only 12% of those clear $50k. Narrowing points us at a low-single-digit slice of the
apparent market &mdash; and no data was found on whether narrowing hurts top-of-funnel volume.
The gain is fit, lower churn and comparison content that converts; the loss is unmeasured.</div>
<div class="callout" style="background:#fff;border:1px solid var(--line)">
<b>For a creator paid by brand deals and platform payouts, reach <i>is</i> the product</b> and
this message is wrong for them. For a coach selling their own offers, reach is an input nobody
has measured. That is the line the ICP draws.</div>""")

ROWS = [
 ("\"Coflow is the business layer underneath a personal brand\" / \"Run the business behind your brand\"",
  "Scope and point-of-view claim. Products, funnels, CRM, tasks and dashboard all exist.", "now", "Sayable today"),
 ("The chain: brand definition &rarr; anchors &rarr; real references &rarr; template &rarr; content",
  "Built, and it is the differentiator the market still pays for.", "now", "Sayable today"),
 ("\"One system instead of five\" / consolidation",
  "Best-evidenced demand in the research &mdash; but without any of the tool-count numbers.", "now", "Today, no numbers"),
 ("\"Connects your content to your products, funnels and revenue in one place\"",
  "Describes co-location, not causation.", "now", "Sayable today"),
 ("\"Shows the path from content to customer, and where it breaks\"",
  "Step-to-step joins exist and are populated. Today: 0 connections recorded.", "gate", "Gate 1"),
 ("\"Every sale carries the source your customer told you\"",
  "Source on &ge;90% of new sales for 90 consecutive days. Today: 20 of 245 CRM deals, 0 of 61 sales.", "gate", "Gate 2"),
 ("Aggregate multi-month source patterns",
  "&ge;100 sales with a source in a rolling 12 months, shown as a pattern with its uncertainty.", "gate", "Gate 3"),
 ("Any business number on the home page",
  "Publish only from Coflow's own measured data, never from research.", "gate", "Gate 4"),
 ("\"We show you which post produced the customer\"",
  "Cannot be true at 9 sales/month, and falsified by WhatsApp-closed sales.", "never", "Never"),
 ("\"AI that writes your posts\" as a headline",
  "Deletes seven links of the chain and prices Coflow against $0.", "never", "Never"),
 ("Any third-party statistic before a human opens the source",
  "Coflow's own rule, in PRODUCT.md and MESSAGING.md.", "never", "Never"),
]
ladder = "".join(
  f'<div class="rowitem"><div><p>{c}</p><p class="why">{w}</p></div>'
  f'<div class="pill {k}">{lbl}</div></div>' for c, w, k, lbl in ROWS)

P9 = page(9, f"""
<p class="intro">What may be said today, what unlocks when the foundation ships, and what is
never sayable at all.</p>
{ladder}
<div class="callout"><b>Substantiation must exist when the claim is made, and it covers implied
claims.</b> The FTC's Operation AI Comply launched 25 September 2024 and by August 2026 had
produced more than a dozen AI-washing cases; DoNotPay settled for $193,000 over "the world's
first robot lawyer". A category headline can be an implied capability claim even when every
sentence under it is literally true. <b>The EU and UK dimension was not researched, and must be
closed before a euro-priced launch.</b></div>""")

TBL = [
 ("Kajabi","$179/mo Basic to $499 Pro","(a) analytics as a feature line",
  "Owns the business-first aspiration and has the budget to defend it. Raised Basic $149&rarr;$179 while cutting contacts 10,000&rarr;2,500 &mdash; a migration story"),
 ("Kit (ex-ConvertKit)","Free to 10k subs; $39; $79","(a)",
  "Renamed October 2024 to widen from email to creator monetisation; raised Creator $25&rarr;$39"),
 ("Stan Store","$29/mo; Pro $99","(a), publicly faulted for lacking (c)",
  "The demand proof: a 2026 review states \"you can't identify which content or campaign drove it\""),
 ("Systeme.io","Free; $27; $47; $97","(a)",
  "The free tier includes checkout, funnels, unlimited email and memberships &mdash; the real floor"),
 ("Teachable / Thinkific","$29&ndash;$399 / $36&ndash;$149+","(a)",
  "Both removed or restructured free plans in 2025&ndash;26; analytics is a paywalled report, not a position"),
 ("GoHighLevel","$97 / $297 / $497","(b) likely; (c) unconfirmed",
  "The most plausible holder of funnel-step reporting &mdash; granularity unverified"),
 ("Skool / Circle","$9&ndash;$99 / $89&ndash;$199","(a)",
  "Fee architecture, not monthly price, is where the category differentiates"),
 ("Gumroad","No monthly fee; 10% + $0.50","(a)",
  "&euro;24/mo competes against $0 subscription, not against $27"),
 ("CreatorOS","Not found; early access","(a) cross-platform unification",
  "Nearest linguistic neighbour: \"The Business Operating System for Creators\". Claims dashboard unification, not attribution"),
]
rows = "".join(f"<tr><td>{a}</td><td>{b}</td><td>{c}</td><td>{d}</td></tr>" for a,b,c,d in TBL)

P8 = page(8, f"""
<p class="intro">Attribution claims are classed as (a) generic dashboard, (b) funnel-step
conversion rates, (c) source-to-sale attribution naming the content that produced a buyer.
Every price is secondhand from competitor-authored comparison content.</p>
<table><tr><th>Platform</th><th>Price</th><th>Attribution claim</th><th>What it means for us</th></tr>
{rows}</table>
<div class="callout"><b>No all-in-one creator platform was found making a (c) claim.</b> The
direction of travel is unambiguously content-first &rarr; business-first and nobody is moving
back &mdash; but no incumbent is priced to serve this customer either. The real attribution
floor runs SegMetrics $57 to Northbeam ~$1,000+, and the honest advice to a solo business under
$50/month is GA4 plus UTMs plus a "how did you hear about us" field. That gap is simultaneously
the opportunity and the reason nobody has taken it.</div>""")

P10 = page(10, """
<p class="intro">Ranked by what they would actually cost, not by how likely they feel.</p>
<div class="cards c2">
  <div class="card"><h3>1. Churn eats everything else</h3>
    <p>Median monthly churn below $25 ARPA is 6.1% &mdash; about a 16-month life. Twelve-month
    retention runs 41% on monthly plans against 62% on annual.</p>
    <p class="src">Billing term moves retention more than messaging does at this price. Fix the
    plan before fixing the headline.</p></div>
  <div class="card"><h3>2. Squeezed from both sides</h3>
    <p>Kajabi owns the aspiration and has the budget to defend it. Morning owns the data and
    170,000 Israeli businesses. Coflow has to win on the mechanism in the middle &mdash; the
    chain and the path &mdash; because it cannot outspend either.</p></div>
  <div class="card"><h3>3. Repositioning lag</h3>
    <p>Old copy survives in places nobody audits: help centre, onboarding emails, app strings,
    the Instagram bio. Real even though the widely-quoted 87% figure behind it is a vendor
    claim that must not be published.</p></div>
  <div class="card"><h3>4. Demand risk sits under the plan</h3>
    <p>No survey shows this audience naming the problem. If the reframe lands as a scolding
    rather than a relief, the message fails regardless of how well it is written.</p>
    <p class="src">A first-party survey closes this and produces the owned research the media
    ambition needs.</p></div>
</div>
<div class="callout"><b>5. Legal exposure is asymmetric and cheap to avoid.</b> Holding the
attribution claim until the data supports it costs a few months of a stronger-sounding
headline. Making it early risks refunds, review damage and an implied-claim problem &mdash;
and the EU/UK dimension has not been researched at all.</div>""")

DNP = [
 ("Jasper revenue \"$120M &rarr; $55M\"","Circulates only via a LinkedIn post and SEO teardowns"),
 ("\"61% of email marketers lack a clear ROI view\"","Publisher, year and sample never established"),
 ("All solopreneur software-spend ranges","Sources disagree by an order of magnitude; none names a survey"),
 ("\"&#8362;500M Israeli influencer industry\"","One unopenable TV segment, no visible methodology"),
 ("\"87% of repositioned SaaS still tell the old story\"","Vendor claim, method undisclosed"),
 ("Dark social at \"80&ndash;95%\"","Mutually inconsistent and untraceable. Use SparkToro's per-platform findings instead"),
 ("\"49.29% of email opens are Apple MPP\"","Vendor-sourced and falsely precise; the decimal will not survive"),
 ("\"87&ndash;91% of marketers use generative AI\"","Aggregator pages citing each other"),
 ("Bango \"53% churn and restart\", \"$66 across four tools\"","Summarised via a third party; the original release was never found"),
 ("Every competitor price in this report","Competitor-authored SEO content; several internally inconsistent"),
]
dnp = "".join(f"<tr><td>{a}</td><td>{b}</td></tr>" for a, b in DNP)

P11 = page(11, f"""
<p class="intro">These may not enter copy, a deck, a LinkedIn post or a press pitch &mdash;
not after a re-read, not with a hedge. They are unsourceable, not merely unverified.</p>
<table><tr><th>Figure</th><th>Why it is not publishable</th></tr>{dnp}</table>
<div class="callout"><b>Open these first, in this order.</b> CreatorIQ State of Creators 2026
&middot; Kajabi 2025 State of Creator Commerce (get its sample size) &middot; ChartMogul's churn
benchmark &middot; GA4's own conversion-volume guidance &middot; Google's Privacy Sandbox
retirement notice &middot; the Israel Tax Authority allocation-number schedule. The GA4 figure
carries the whole small-business argument and is the single most load-bearing unverified number
in this report.</div>
<div class="callout" style="background:#fff;border:1px solid var(--line)">
<b>The number that would make this a story does not exist.</b> No public source, in any
language, measures what share of this segment cannot attribute revenue. A survey of 300&ndash;500
Israeli multi-offer coaches would close the evidence gap and produce the owned research at the
same time.</div>""")

HTMLF.write_text(
  "<!doctype html><html lang='en'><head><meta charset='utf-8'>"
  "<title>Own the business layer, earn attribution later</title>"
  f"<style>{CSS}</style></head><body>"
  f"{COVER}{P1}{P2}{P3}{P4}{P5}{P6}{P7}{P8}{P9}{P10}{P11}</body></html>", encoding="utf-8")

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(
            executable_path="/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
            args=["--no-sandbox"])
        pg = await b.new_page()
        await pg.goto(HTMLF.as_uri(), wait_until="networkidle")
        await pg.pdf(path=str(OUT), format="A4", print_background=True,
                     display_header_footer=True, header_template="<div></div>",
                     footer_template='<div style="width:100%;font-family:Lato,sans-serif;'
                       'font-size:7.4pt;color:#8C8189;padding:0 16mm;text-align:right">'
                       '<span class="pageNumber"></span></div>',
                     margin={"top":"0","bottom":"9mm","left":"0","right":"0"})
        await b.close()
    print("pdf:", OUT.stat().st_size, "bytes")

asyncio.run(main())
