import { test } from "node:test";
import assert from "node:assert/strict";

import { BETA_SIGNUP_CLOSES_AT, betaSignupOpen, timeLeft } from "./beta-window.ts";

test("beta sign-up closes on Thursday 2026-10-22 at 20:00 Israel time", () => {
  assert.equal(new Date(BETA_SIGNUP_CLOSES_AT).toISOString(), "2026-10-22T17:00:00.000Z");
  assert.equal(betaSignupOpen(Date.parse("2026-10-22T16:59:59Z")), true);
  assert.equal(betaSignupOpen(Date.parse("2026-10-22T17:00:00Z")), false);
});

test("time left counts down to zero and stops there", () => {
  const close = Date.parse("2026-10-22T17:00:00Z");
  assert.deepEqual(timeLeft(close - (2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000, close), { total: 183845, days: 2, hours: 3, minutes: 4, seconds: 5 });
  assert.equal(timeLeft(close + 5000, close).total, 0);
});
