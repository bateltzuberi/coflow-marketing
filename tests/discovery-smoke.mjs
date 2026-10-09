import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as pause } from "node:timers/promises";
import { SOLUTION_SLUGS, GUIDE_SLUGS } from "../lib/discovery-content.ts";
import { isPreviewDeployment } from "../lib/indexing.ts";

const port = 3187;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)], { stdio: ["ignore", "pipe", "pipe"] });
let output = "";
server.stdout.on("data", d => { output += d; });
server.stderr.on("data", d => { output += d; });
const paths = ["/", "/about", "/solutions", "/guides", ...SOLUTION_SLUGS.map(s => `/solutions/${s}`), ...GUIDE_SLUGS.map(s => `/guides/${s}`), "/waitlist", "/terms", "/privacy", "/academy", "/academy/getting-started"];
try {
  let ready = false;
  for (let i = 0; i < 80; i++) {
    try { if ((await fetch(`${origin}/robots.txt`)).ok) { ready = true; break; } } catch { /* not listening yet */ }
    await pause(100);
  }
  assert.ok(ready, output);
  for (const locale of ["he", "en"]) {
    for (const path of paths) {
      const url = `/${locale}${path === "/" ? "" : path}`;
      const other = locale === "he" ? "en" : "he";
      const response = await fetch(origin + url, { headers: { "User-Agent": "OAI-SearchBot", Cookie: `locale=${other}`, "Accept-Language": other, "x-coflow-locale": other } });
      assert.equal(response.status, 200, url);
      const html = await response.text();
      assert.match(html, new RegExp(`<html[^>]*lang="${locale}"[^>]*dir="${locale === "he" ? "rtl" : "ltr"}"`), url);
      assert.ok(html.includes(`<link rel="canonical" href="https://coflow.social${url}"`), url);
      for (const lang of ["he", "en", "x-default"]) assert.ok(html.includes(`hrefLang="${lang}"`), `${url}: ${lang}`);
      assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${url}: one h1`);
      const visibleText = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/\s+/g, " ");
      const json = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m => JSON.parse(m[1]));
      assert.ok(json.some(s => s["@type"] === "Organization" && s.legalName === "SheBossIt (Cyprus) Ltd"));
      for (const schema of json.filter(s => s["@type"] === "FAQPage")) {
        for (const question of schema.mainEntity) {
          assert.ok(visibleText.includes(question.name), `${url}: visible FAQ question`);
          assert.ok(visibleText.includes(question.acceptedAnswer.text.replace(/\s+/g, " ")), `${url}: visible FAQ answer`);
        }
      }
      assert.ok(!html.includes("Free forever for your first brand"));
      if (path === "/solutions/digital-courses") assert.ok(html.includes(locale === "he" ? "עדיין בפיתוח" : "still in development"));
    }
  }
  const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
  for (const path of paths) for (const locale of ["he", "en"]) assert.ok(sitemap.includes(`<loc>https://coflow.social/${locale}${path === "/" ? "" : path}</loc>`));
  const robots = await (await fetch(origin + "/robots.txt")).text();
  for (const agent of ["OAI-SearchBot", "PerplexityBot"]) assert.ok(robots.includes(`User-Agent: ${agent}`));
  assert.ok(!robots.includes("Disallow: /"));
  for (const [old, target] of [["/solutions/crm?ref=email", "/he/solutions/crm?ref=email"], ["/en/join?ref=email", "/en?ref=email"]]) {
    const r = await fetch(origin + old, { redirect: "manual" });
    assert.equal(r.status, 308); assert.ok(r.headers.get("location").endsWith(target));
  }
  const deep = await (await fetch(origin + "/en/solutions/crm?ref=email")).text();
  assert.ok(deep.includes('href="/he/solutions/crm?ref=email"'));
  for (const path of ["/en/solutions/not-a-solution", "/he/guides/not-a-guide", "/fr/solutions/crm"]) {
    const r = await fetch(origin + path); assert.equal(r.status, 404, path);
  }
  const oldContext = process.env.CONTEXT;
  process.env.CONTEXT = "deploy-preview"; assert.equal(isPreviewDeployment(), true);
  process.env.CONTEXT = "branch-deploy"; assert.equal(isPreviewDeployment(), true);
  process.env.CONTEXT = "production"; assert.equal(isPreviewDeployment(), false);
  if (oldContext === undefined) delete process.env.CONTEXT; else process.env.CONTEXT = oldContext;
  console.log(`PASS: ${paths.length * 2} bilingual pages, metadata, visible FAQ schema, sitemap, search bots, redirects, 404s and preview detection.`);
} finally {
  server.kill("SIGTERM");
}
