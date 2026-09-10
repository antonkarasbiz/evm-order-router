import assert from "node:assert/strict";
import { test } from "node:test";
import { selectRoute } from "./router.ts";

test("picks the simulated venue with the best output under the gas ceiling", () => {
  const route = selectRoute(
    [
      { venue: "uniswap", outAmount: 95n, gasUsd: 12, simulated: true },
      { venue: "0x", outAmount: 98n, gasUsd: 4, simulated: true },
      { venue: "cowswap", outAmount: 120n, gasUsd: 40, simulated: true },
    ],
    10,
  );
  assert.equal(route?.venue, "0x");
});
