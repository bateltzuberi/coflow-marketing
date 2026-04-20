export const SITE = {
  name: "Coflow",
  tagline: "Invite-only workspace for social media agencies",
  url: "https://coflow.social",
  appUrl: "https://app.coflow.social",
  description:
    "Coflow is the invite-only workspace for social media agencies — content calendar, client approvals, agency CRM, and tasks in one place. Replaces Planable, Asana, Later, and Pipedrive. Join the waitlist.",
  ogImage: "/og/default.png",
  twitter: "@coflow",
} as const;

// Positioning + scarcity copy used across the site. Updating this in one
// place is enough — every page that shows waitlist scarcity reads from here.
export const INVITE = {
  status: "Invite-only · Early access",
  waitlistCopy: "Currently invite-only. We open a new cohort each week.",
  scarcityLine: "Join the waitlist · limited invites each week",
  ctaPrimary: "Request early access",
  ctaSecondary: "Join the waitlist",
} as const;

// The tools we explicitly replace — used across the site for SEO comparisons.
export const REPLACES = [
  { name: "Planable", slug: "planable", category: "Content approval" },
  { name: "Asana", slug: "asana", category: "Project management" },
  { name: "Monday", slug: "monday", category: "Project management" },
  { name: "Later", slug: "later", category: "Social scheduling" },
  { name: "Hootsuite", slug: "hootsuite", category: "Social scheduling" },
  { name: "Notion", slug: "notion", category: "Docs & tasks" },
  { name: "Pipedrive", slug: "pipedrive", category: "CRM" },
] as const;

export const FEATURES = [
  {
    slug: "content-calendar",
    name: "Content calendar",
    h1: "A content calendar built for social media agencies",
    short: "One calm calendar per brand — drafts, reviews, approvals, scheduled, published.",
  },
  {
    slug: "client-approvals",
    name: "Client approvals",
    h1: "Client approval software that ends the WhatsApp chaos",
    short: "Your clients see only the posts that need them. They approve, comment, or request changes — in context.",
  },
  {
    slug: "crm",
    name: "Agency CRM",
    h1: "A CRM built into your social media agency workspace",
    short: "Contacts, deals pipeline, activity — next to the brands you actually serve.",
  },
  {
    slug: "tasks",
    name: "Tasks & projects",
    h1: "Task management for social media managers — without the bloat",
    short: "Agency, sales, client tasks — calendar, kanban, templates. No Asana required.",
  },
  {
    slug: "analytics",
    name: "Brand analytics",
    h1: "Social media analytics, per brand, per client",
    short: "See what's performing for each brand without bouncing between tabs.",
  },
] as const;

export const PERSONAS = [
  {
    slug: "social-media-managers",
    name: "Social media managers",
    h1: "The best tool for social media managers in 2026",
  },
  {
    slug: "agencies",
    name: "Social media agencies",
    h1: "Social media agency software that replaces five tools",
  },
  {
    slug: "freelancers",
    name: "Freelance social media managers",
    h1: "Freelance social media management — one clean workspace",
  },
] as const;
