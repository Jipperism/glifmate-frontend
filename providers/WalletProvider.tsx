import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { filecoin, filecoinCalibration } from "wagmi/chains";
import React from "react";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "@rainbow-me/rainbowkit/styles.css";

const config = getDefaultConfig({
  appName: "PG Staking",
  projectId: "YOUR_PROJECT_ID",
  chains: [filecoin, filecoinCalibration],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export const WalletProvider = (props: React.PropsWithChildren) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{props.children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
