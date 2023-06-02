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
import { RPC_HYPERSPACE, RPC_MAINNET } from "@/constants";

const { chains, publicClient } = configureChains(
  [filecoin, filecoinHyperspace],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === filecoin.id) {
          return {
            http: RPC_MAINNET,
            webSocket: "wss://wss.node.glif.io/apigw/lotus/rpc/v1",
          };
        }
        if (chain.id === filecoinHyperspace.id) {
          return {
            http: RPC_HYPERSPACE,
            webSocket: "wss://api.hyperspace.node.glif.io/rpc/v1/ws",
          };
        }
        throw new Error("Unsupported chain!");
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
