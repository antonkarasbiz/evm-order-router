import { selectRoute } from "./router.ts";

const route = selectRoute(
  [
    { venue: "uniswap", outAmount: 1_000n, gasUsd: 8, simulated: true },
    { venue: "0x", outAmount: 1_010n, gasUsd: 6, simulated: true },
    { venue: "cowswap", outAmount: 1_040n, gasUsd: 22, simulated: false },
  ],
  15,
);

console.log(JSON.stringify({ chain: "evm", route }, (_, value) => (typeof value === "bigint" ? value.toString() : value)));
