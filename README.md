# EVM order router

Venue selection for EVM swaps. Each venue must simulate successfully and stay under a gas ceiling; the router then picks the best output amount. Signing and broadcast stay in the caller.

```bash
npm install
npm test
npm run dev
```

Related: [solana-execution-engine](https://github.com/antonkarasbiz/solana-execution-engine), [crossyield-rwa-bridge](https://github.com/antonkarasbiz/crossyield-rwa-bridge), [paradex-trading](https://github.com/antonkarasbiz/paradex-trading).

MIT. Maintained by [Anton Karas](https://github.com/antonkarasbiz).
