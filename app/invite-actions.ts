"use server";

import { SITE } from "@/lib/site";

/**
 * Validate an invite code against the Studio app.
 *
 * Server-to-server on purpose: the browser never talks to the Studio API from
 * this origin, so there is no CORS surface here and no endpoint on
 * coflow.social for someone to script against directly. The Studio's own
 * /api/invite/check does the rate-limiting by IP.
 *
 * This is a UX check only. Saying "valid" here admits nobody — /signup in the
 * Studio revalidates and redeems the code inside the same request that creates
 * the account, and that is the gate that counts.
 */
export async function verifyInviteCode(
  code: string,
): Promise<{ valid: boolean; error?: "network" }> {
  const trimmed = code.trim();
  if (!trimmed) return { valid: false };

  try {
    const res = await fetch(`${SITE.studioAppUrl}/api/invite/check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: trimmed }),
      cache: "no-store",
    });
    // 429 (throttled) reads as "not valid" rather than a network error: telling
    // a guesser they hit a limit is more information than they need.
    if (!res.ok && res.status !== 429 && res.status !== 403) {
      return { valid: false, error: "network" };
    }
    const json = (await res.json().catch(() => ({}))) as { valid?: boolean };
    return { valid: json.valid === true };
  } catch {
    return { valid: false, error: "network" };
  }
}
