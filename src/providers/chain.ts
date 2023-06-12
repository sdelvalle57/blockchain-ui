import { Chain } from 'wagmi'
 
export const smartTradeNetworks = {
  id: 18122,
  name: 'Smart Trade Networks',
  network: 'std',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://beefledgerwallet.com:8544/'] },
    default: { http: ['https://beefledgerwallet.com:8544/'] },
  },
  //TODO: @tom configure block explorer
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  }
} as const satisfies Chain