import assert from "node:assert/strict";
import { test } from "node:test";
import { localeFromPath, localizedPath, localeRoute } from "./locale-path.ts";

test("legacy URLs redirect once to a fixed Hebrew URL", () => {
  for (const path of ["/", "/home", "/join", "/pricing"]) {
    assert.equal(localeRoute(path).redirect, "/he");
    assert.equal(localeRoute(localeRoute(path).redirect).redirect, null);
  }
  assert.equal(localeRoute("/academy/forms").redirect, "/he/academy/forms");
});
test("explicit language survives deep links and aliases", () => {
  assert.deepEqual(localeRoute("/en/academy/forms"), {locale:"en",path:"/academy/forms",redirect:null});
  assert.equal(localeRoute("/en/join").redirect, "/en");
  assert.equal(localeFromPath("/english"), null);
});
test("language switch preserves deep paths and query/fragment", () => {
  assert.equal(localizedPath("/he/academy/forms?ref=email#answer", "en"), "/en/academy/forms?ref=email#answer");
  assert.equal(localizedPath("/en", "he"), "/he");
  assert.equal(localizedPath("/en?ref=email", "he"), "/he?ref=email");
});
test("localization never redirects assets, APIs or external links", () => {
  for (const path of ["/og/home-en.png", "/api/academy", "/_next/image", "https://studio.coflow.social/login", "//example.com", "#sales"]) {
    assert.equal(localizedPath(path, "en"), path);
  }
});
