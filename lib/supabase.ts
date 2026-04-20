import { createClient } from "@supabase/supabase-js";

// Server-side client used by /api/waitlist. Uses the public anon key —
// RLS on public.waitlist allows INSERT to anon only (no SELECT).
export function supabaseAnon() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY — set them in Netlify env vars.",
    );
  }
  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
