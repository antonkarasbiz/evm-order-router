export type VenueQuote = {
  venue: "uniswap" | "0x" | "cowswap";
  outAmount: bigint;
  gasUsd: number;
  simulated: boolean;
};

export type RouteChoice = {
  venue: VenueQuote["venue"];
  outAmount: bigint;
  gasUsd: number;
};

export function selectRoute(quotes: VenueQuote[], maxGasUsd: number): RouteChoice | null {
  const eligible = quotes.filter((quote) => quote.simulated && quote.gasUsd <= maxGasUsd);
  if (eligible.length === 0) return null;
  return eligible.reduce((best, quote) => (quote.outAmount > best.outAmount ? quote : best));
}
