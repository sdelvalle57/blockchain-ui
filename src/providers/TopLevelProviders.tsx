import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygon } from 'wagmi/chains'


const { chains, provider } = configureChains(
  [ polygon ], 
  [ publicProvider() ]
)

const { connectors } = getDefaultWallets({ appName: 'POC Blockchain', chains });

// Set up client
const client = createClient({
  autoConnect: true,
  connectors,
  provider,
})


export default function TopLevelProviders({ children }: { children: any; path: string; }) {

  return (
    <>
      <WagmiConfig client={client}>
        <RainbowKitProvider theme={darkTheme({
          accentColor: 'transparent',
          accentColorForeground: 'rgb(203 185 150)',
          borderRadius: 'none',
          fontStack: 'system',
          overlayBlur: 'small',
        })} chains={chains}>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}