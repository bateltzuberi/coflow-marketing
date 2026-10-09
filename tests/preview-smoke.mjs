import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as pause } from "node:timers/promises";

// Run after CONTEXT=deploy-preview npm run build, then rebuild for production.
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3189"], { stdio: "ignore", env: { ...process.env, CONTEXT: "deploy-preview" } });
const origin = "http://127.0.0.1:3189";
try {
  for (let i = 0; i < 80; i++) {
    try { if ((await fetch(origin + "/robots.txt")).ok) break; } catch {}
    await pause(100);
  }
  const robots = await (await fetch(origin + "/robots.txt")).text();
  assert.ok(robots.includes("Disallow: /"));
  const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
  assert.ok(!sitemap.includes("<loc>"));
  for (const path of ["/he", "/en/solutions/crm", "/he/guides/choose-course-platform", "/en/about"]) {
    const r = await fetch(origin + path); assert.equal(r.status, 200);
    const html = await r.text();
    assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
  }
  console.log("PASS: deployment preview blocks crawling, exposes no sitemap URLs and returns noindex on home and discovery pages.");
} finally { server.kill("SIGTERM"); }
