import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  // mainnet,
  // polygon,
  // optimism,
  // arbitrum,
  // localhost,
  filecoinHyperspace,
  filecoin,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import React from "react";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, publicClient } = configureChains(
  [filecoinHyperspace, filecoin],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === 314) {
          return {
            http: "https://api.node.glif.io/rpc/v1",
            webSocket: "wss://wss.node.glif.io/apigw/lotus/rpc/v1",
          };
        }
        if (chain.id === 3141) {
          return {
            http: "https://api.hyperspace.node.glif.io/rpc/v1",
            webSocket: "wss://api.hyperspace.node.glif.io/rpc/v1/ws",
          };
        }
        return {
          http: "https://api.hyperspace.node.glif.io/rpc/v1",
          webSocket: "wss://api.hyperspace.node.glif.io/rpc/v1/ws",
        };
      },
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const WalletProvider = (props: React.PropsWithChildren) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>{props.children}</RainbowKitProvider>
    </WagmiConfig>
  );
};
