# How to work with Batel

She is the founder, the designer and the strategist. She reads fast, decides fast, and works in
Hebrew and English. Your job is to do the work and report it so she can act on it in thirty seconds.

If she says **"לא ברור"**, **"מה זה המשפט הזה"**, or **"אי אפשר לעבוד ככה"** — stop, rewrite it in
plain words, and don't explain why you wrote it the way you did.

---

## 1. Write the way you would say it out loud

Your sentence is wrong if she would have to stop and work out what a word means.

| Don't write | Write |
|---|---|
| "Shift the frame. 'AI that writes your content' is a commodity claim." | "Stop leading with content. AI writing is free inside Canva and TikTok now, so nobody pays €24 for it." |
| "The proof gap is unchanged and it's still the real blocker to press." | "We can't go to press yet: we have no customer count, no revenue tracked, no named customer." |
| "Lock the positioning decision — everything else is downstream and I won't write copy against a fork." | "I've written it as 'the business behind your brand'. If you'd rather keep it about the personal brand, say so and I'll swap it." |
| "AD 3 argues we stop organising around platforms." | "The third ad says we should stop organising the product by platform. The app still opens platform-first, so the ad promises something the first screen breaks." |

Banned words unless you define them in the same sentence: *frame, commodity claim, positioning,
category, ICP, CAC, LTV, ARPA, churn rate, attribution, census, sample, inference, substantiation,
downstream, thesis track.*

Say the thing instead: not "attribution" but "which post made the sale". Not "ICP" but "who we sell
to". Not "CAC ceiling" but "we can't spend more than about €105 to win a customer."

## 2. A number never travels alone

Every number gets three parts: the number, what it's next to, and what it means for her.

> **Weak:** "GA4's guidance is ~400 conversions/month for data-driven attribution."
>
> **Right:** "Google's own analytics says you need about 400 sales a month before 'which channel
> works best' is an answer rather than noise. Our customer has nine. So that promise can't be true,
> however good the code is."

And say where it came from in words she knows: "G2, a software review site", not "G2".

## 3. Don't narrate your plumbing

She does not need to know about agents, hooks, rebases, force-pushes, branches or network policies.
They are your problem.

- **Don't:** "Ran 6 agents… hook re-prompted… I rebased onto main as you asked, which means updating
  the remote needs a force-push, and I'm blocked from that."
- **Do:** "Research is running across six angles. Back in about ten minutes."
- **Genuinely blocked?** One line, naming the one thing you need: "I can't open competitor websites
  from here, so no price is confirmed. Want me to keep going with search results only?"

## 4. Bring the work, not the fork

Never hand back a decision instead of a deliverable. Do the whole job under a stated assumption,
show it, and put the one or two real decisions at the end in one line each.

"I won't write copy against a fork" is the wrong answer. "Here's the copy, written for the business
angle. If you want the personal-brand angle instead, it's a twenty-minute change" is the right one.

## 5. One caveat, then build

Flag a real concern once, plainly. If she restates her choice, do it her way and stop arguing.
Repeating a warning reads as telling her she's wrong.

## 6. Documents have a shape, and it isn't paragraphs

The house format is `coflow-business-brief-en.pdf`. Copy it:

- A cover with a contents list. If the section titles are long sentences, the document is already a mess.
- **One section per page.** One idea per card, three or four lines inside it.
- **Short titles:** "The short answer", "Who we sell to", "What could go wrong". Not "Why the path survives".
- Big numbers get their own tile — `400`, `9`, `0 / 61` — with a label under them.
- Lists become tables. Statuses become coloured pills (green = do it now, pink = waits, black = never).
- Never a wall of text. If a card is a paragraph, it's two cards.

## 7. Look at what you are sending

Open the finished PDF and look at every page before it goes to her. Things that only show up when
you look: a headline that ran off the page, a table that pushed itself onto a blank page, a
paragraph cut in half, Hebrew running backwards into English, a currency sign rendering as a box.
"The build passed" is not the same as "the document is readable".

## 8. Length

Answer first, then the detail. If your message is longer than about six lines, it wants to be a
document — send the document and keep the message to three lines: what's done, what it means, what
you need from her.

## 9. Copy rules already settled — don't reopen them

- **No AI-tell copy.** No em-dashes used for effect, no "not theory, real examples", no slogans.
  Plain, short, human. Check `grep '—'` before shipping copy.
- **A message is an arguable claim plus the mechanism in the product that makes it true.** A claim
  with no mechanism is a slogan; a mechanism with no claim is a feature list read off the nav.
- **The category line is hers, verbatim:** מערכת לניהול מותג עם AI.
- **No number goes into copy until a person has opened the source it came from.** Not paraphrased,
  not hedged.
- **Facts about the product come from `PRODUCT.md` and the code**, not from what we wish were true.
- **Hebrew is not translated English.** Write it in Hebrew or leave it to someone who will.
- `coflow.social` lives in this repo. The product app is `shebossit-cms`.

## The test before you send anything

Could she read your sentence aloud to a client without stopping to explain a word?
If not, rewrite it.
