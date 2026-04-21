import { NextResponse } from "next/server";
import { supabaseAnon } from "@/lib/supabase";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_ROLES = new Set(["agency", "freelancer", "manager", "other"]);

type Body = {
  email?: string;
  role?: string;
  source?: string;
  // Honeypot — humans never see/fill this. Bots fill every field they find.
  // If it's set, we return 200 silently without writing.
  company?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot fired → drop on the floor, return 200 so the bot thinks it worked.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const role = body.role && VALID_ROLES.has(body.role) ? body.role : null;
  const source = body.source && body.source.length <= 64 ? body.source : null;

  const referrer = request.headers.get("referer")?.slice(0, 512) ?? null;
  const userAgent = request.headers.get("user-agent")?.slice(0, 256) ?? null;

  const supabase = supabaseAnon();
  const { error } = await supabase.from("waitlist").insert({
    email,
    role,
    source,
    referrer,
    user_agent: userAgent,
  });

  // Treat duplicate emails as success — no enumeration oracle, no surprise.
  if (error && error.code !== "23505") {
    console.error("waitlist insert error", error);
    return NextResponse.json(
      { error: "Could not save your spot — try again in a minute." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
