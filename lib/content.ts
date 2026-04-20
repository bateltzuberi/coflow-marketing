// Per-competitor content used by /vs/[slug] pages.
// When we build a flagship page for a competitor (e.g. /vs/planable), the static
// segment wins over the dynamic one — so these entries are for the remaining set.

export const COMPETITOR_CONTENT: Record<
  string,
  {
    name: string;
    category: string;
    // What the competitor is good at — name it honestly.
    strength: string;
    // Why an agency often outgrows it.
    gap: string;
    // Rows for the comparison table (value = "yes" | "no" | "partial").
    rows: { feature: string; coflow: "yes" | "no" | "partial"; theirs: "yes" | "no" | "partial" }[];
  }
> = {
  asana: {
    name: "Asana",
    category: "Project management",
    strength:
      "Asana is a capable general-purpose project tracker. Lots of teams use it, lots of integrations exist.",
    gap: "It knows nothing about social content. No calendar per brand, no client review, no post statuses, no agency CRM. You end up paying Asana plus Planable plus Pipedrive to get what Coflow does in one workspace.",
    rows: [
      { feature: "General project tasks", coflow: "yes", theirs: "yes" },
      { feature: "Per-brand content calendar", coflow: "yes", theirs: "no" },
      { feature: "Client post approvals", coflow: "yes", theirs: "no" },
      { feature: "Built-in CRM + deals", coflow: "yes", theirs: "no" },
      { feature: "Free for solo users", coflow: "yes", theirs: "partial" },
      { feature: "Clients reviewing without a seat", coflow: "yes", theirs: "no" },
      { feature: "Private agency-only docs", coflow: "yes", theirs: "partial" },
    ],
  },
  monday: {
    name: "Monday",
    category: "Project management",
    strength:
      "Monday is a flexible work OS — you can bend it into almost any workflow if you're willing to configure it.",
    gap: "Agencies spend weeks customising Monday to look like a content calendar. Coflow ships that workflow by default, plus approvals, CRM, and analytics your team actually uses on day one.",
    rows: [
      { feature: "Configurable workflows", coflow: "partial", theirs: "yes" },
      { feature: "Content calendar out of the box", coflow: "yes", theirs: "no" },
      { feature: "Client review links", coflow: "yes", theirs: "no" },
      { feature: "Agency CRM", coflow: "yes", theirs: "partial" },
      { feature: "Per-seat pricing trap", coflow: "no", theirs: "yes" },
      { feature: "Free single-brand plan", coflow: "yes", theirs: "no" },
    ],
  },
  later: {
    name: "Later",
    category: "Social scheduling",
    strength:
      "Later does visual scheduling well, especially for Instagram, and has been around for a long time.",
    gap: "Later was built for single creators posting for themselves. Running a client-serving agency on it means no approval flow, no agency tasks, no CRM — just a schedule queue.",
    rows: [
      { feature: "Visual Instagram scheduler", coflow: "partial", theirs: "yes" },
      { feature: "Per-brand calendar", coflow: "yes", theirs: "yes" },
      { feature: "Client approval flow", coflow: "yes", theirs: "partial" },
      { feature: "Agency-side tasks", coflow: "yes", theirs: "no" },
      { feature: "CRM + deals pipeline", coflow: "yes", theirs: "no" },
      { feature: "Unlimited client reviewers free", coflow: "yes", theirs: "no" },
    ],
  },
  hootsuite: {
    name: "Hootsuite",
    category: "Social scheduling",
    strength:
      "Hootsuite is an enterprise-grade scheduler with wide network coverage and reporting.",
    gap: "It's priced for enterprise, built for enterprise, and still leaves agencies stitching together approvals, tasks, and CRM with other tools.",
    rows: [
      { feature: "Broad network coverage", coflow: "partial", theirs: "yes" },
      { feature: "Per-brand workspaces", coflow: "yes", theirs: "partial" },
      { feature: "Client approvals without a seat", coflow: "yes", theirs: "no" },
      { feature: "Agency CRM", coflow: "yes", theirs: "no" },
      { feature: "Friendly pricing for small agencies", coflow: "yes", theirs: "no" },
    ],
  },
  notion: {
    name: "Notion",
    category: "Docs & tasks",
    strength:
      "Notion is a gorgeous, flexible workspace for docs, wikis, and light databases.",
    gap: "You can build a content calendar in Notion — and then spend months maintaining it. Coflow ships a calendar, approval flow, CRM, and analytics that were designed for social media agencies, not bent into shape.",
    rows: [
      { feature: "Docs + wiki", coflow: "partial", theirs: "yes" },
      { feature: "Purpose-built content calendar", coflow: "yes", theirs: "no" },
      { feature: "Client approval flow", coflow: "yes", theirs: "no" },
      { feature: "CRM + deals", coflow: "yes", theirs: "partial" },
      { feature: "Agency-ready on day one", coflow: "yes", theirs: "no" },
    ],
  },
  pipedrive: {
    name: "Pipedrive",
    category: "CRM",
    strength:
      "Pipedrive is a solid mid-market CRM with a clear deals pipeline.",
    gap: "It's a CRM — nothing else. Agencies running Pipedrive still pay for Planable, Asana, and Later on top. Coflow folds the CRM into the same workspace as the content and the work.",
    rows: [
      { feature: "Deals pipeline", coflow: "yes", theirs: "yes" },
      { feature: "Contacts + activity", coflow: "yes", theirs: "yes" },
      { feature: "Content calendar per brand", coflow: "yes", theirs: "no" },
      { feature: "Client approval flow", coflow: "yes", theirs: "no" },
      { feature: "Agency tasks + templates", coflow: "yes", theirs: "no" },
    ],
  },
};

// Per-persona content for /for/[slug].
export const PERSONA_CONTENT: Record<
  string,
  {
    title: string;
    h1: string;
    description: string;
    pains: string[];
    wins: string[];
    ctaTitle: string;
  }
> = {
  "social-media-managers": {
    title: "Tools for social media managers",
    h1: "The best tool for social media managers in 2026.",
    description:
      "Coflow is the all-in-one tool social media managers actually want — content calendar, client approvals, tasks, and a light CRM in one workspace. Free for your first brand.",
    pains: [
      "Bouncing between Later, Planable, Asana, Notion, and email to ship one post",
      "Losing approval history when a client changes their mind in WhatsApp",
      "Paying per-seat in five different tools and still not feeling organised",
    ],
    wins: [
      "One calendar per brand, with every status on the post itself",
      "Clients review in context — comments, versions, approvals all on the post",
      "Tasks, briefs, and monthly routines that show up automatically for every new brand",
    ],
    ctaTitle: "Run your whole SMM workflow on Coflow.",
  },
  agencies: {
    title: "Social media agency software",
    h1: "Social media agency software that replaces five tools.",
    description:
      "Coflow is the all-in-one software for social media agencies. Content planning, client approvals, agency CRM, tasks, and per-brand analytics — one workspace your whole team works in.",
    pains: [
      "Five tools, five invoices, and your team forgets which one has the latest post",
      "Client review confusion — screenshots in DMs, Loom videos, lost approvals",
      "Strategy docs and pricing leaking into client-visible spaces",
    ],
    wins: [
      "Per-brand workspaces with clean separation between clients, teams, and owners",
      "Private agency-only tasks, docs, and pipeline — never shown to clients",
      "One bill, one login, one source of truth",
    ],
    ctaTitle: "Consolidate your agency's stack in a week.",
  },
  freelancers: {
    title: "Freelance social media management software",
    h1: "Freelance social media management — one clean workspace.",
    description:
      "Coflow is free forever for freelancers managing one brand. Content calendar, client approval, tasks, and a light CRM — everything you need to run your freelance social media business.",
    pains: [
      "Paying five monthly subscriptions before earning your first client retainer",
      "Tracking leads and invoices in spreadsheets that never get updated",
      "Managing client approvals across WhatsApp, email, and Google Drive",
    ],
    wins: [
      "Free forever for your first brand — no card needed",
      "Deals pipeline + contacts built in, so you stop losing leads",
      "Clients approve in one calm place, branded to you",
    ],
    ctaTitle: "Run your freelance business on Coflow.",
  },
};

// Per-feature content for /features/[slug] — used for every feature that
// does NOT have a flagship static page.
export const FEATURE_CONTENT: Record<
  string,
  {
    description: string;
    blocks: { title: string; body: string }[];
    context: string;
  }
> = {
  "client-approvals": {
    description:
      "Client approval software built for social media agencies. Clients see only what they need to review, approve or comment in context, and never touch your agency's internal tools.",
    blocks: [
      {
        title: "One clean review page per client",
        body: "Your client sees a calm, branded page with the posts waiting on them. No hunting, no busy dashboard, no training required.",
      },
      {
        title: "Approve, request changes, or comment — in context",
        body: "Every comment, approval, and change request is attached to the specific post, with version history, so nothing gets lost in a chat thread.",
      },
      {
        title: "Private agency side",
        body: "Pricing, strategy docs, internal tasks, and other brands are invisible to the client. You control what they see, always.",
      },
      {
        title: "Unlimited client reviewers — free",
        body: "Client reviewers never count as seats on any plan. Add the marketing manager, the founder, the legal reviewer. No gating.",
      },
    ],
    context:
      "Most social media agencies run approvals in WhatsApp, email, or Loom — or pay per seat for a single-purpose tool like Planable. Coflow's approval flow is as clean as Planable's, and it's bundled with the rest of your agency workspace at no extra tool cost.",
  },
  crm: {
    description:
      "An agency CRM built into your social media workspace. Contacts, deals pipeline, activity timeline — right next to the brands you actually deliver for.",
    blocks: [
      {
        title: "Contacts that know your brands",
        body: "Link contacts to the brands they belong to. See every touchpoint — posts approved, tasks completed, deals won — in one timeline.",
      },
      {
        title: "Deals pipeline, not a spreadsheet",
        body: "Drag deals across stages. Forecast by month. See which leads are going cold. Designed for small agencies, not enterprise sales teams.",
      },
      {
        title: "Import from Pipedrive or HubSpot",
        body: "Bring your contacts and deals over in one CSV. Keep working while you migrate.",
      },
      {
        title: "Sales tasks, plugged in",
        body: "Follow-ups and onboarding tasks live in the same task system as your delivery work. No more CRM you never open.",
      },
    ],
    context:
      "Agencies pay for Pipedrive or HubSpot and then never link it back to the work they deliver. Coflow's CRM is designed so sales, onboarding, and delivery are one continuous workflow — not three disconnected tools.",
  },
  tasks: {
    description:
      "Task management for social media managers and agencies — agency, sales, client, and general tasks, all in one task system with calendar, kanban, and reusable templates.",
    blocks: [
      {
        title: "Tasks grouped the way agencies actually work",
        body: "Agency tasks (internal), sales tasks (pipeline), client tasks (per brand), general tasks (you). Each group gets its own view.",
      },
      {
        title: "Kanban, calendar, or list — per view",
        body: "Same task, three ways of looking at it. Calendar for social schedules. Kanban for workflow. List for the daily punch list.",
      },
      {
        title: "Templates that seed themselves",
        body: "Define your monthly routines once — onboarding, reporting, check-ins. Coflow seeds them for every new brand and keeps the cadence going.",
      },
      {
        title: "No Asana required",
        body: "You don't need a separate PM tool. Tasks live next to the brands, posts, and deals they relate to.",
      },
    ],
    context:
      "Agencies end up with Asana for tasks, ClickUp for some docs, Trello for a client board, and Notion for notes. Coflow's task module replaces all of it for social media agency workflows — without bloating into an enterprise PM tool.",
  },
  analytics: {
    description:
      "Social media analytics per brand, per client. See what's performing, roll it up into client reports, and stop bouncing between native insights tabs.",
    blocks: [
      {
        title: "Per-brand dashboards",
        body: "Every brand has its own analytics view. Reach, engagement, follower growth, top-performing posts — all at a glance.",
      },
      {
        title: "Client-ready reports",
        body: "Export or share a monthly report without reformatting anything. Your clients get numbers that match the plan you agreed.",
      },
      {
        title: "Tied to approved posts",
        body: "Metrics sit next to the posts you actually published through Coflow, so you can see what's working by campaign, not just by date.",
      },
    ],
    context:
      "Native insights tools are per-account and per-network. Third-party analytics is expensive and disconnected from your content. Coflow's analytics live with your content — cheaper, clearer, and always in sync.",
  },
};
