import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { filecoin, filecoinCalibration } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import React from "react";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { RPC_FILECOIN_CALIBRATION, RPC_MAINNET } from "@/constants";

const { chains, publicClient } = configureChains(
  [filecoin, filecoinCalibration],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === filecoin.id) {
          return {
            http: RPC_MAINNET,
            webSocket: "wss://wss.node.glif.io/apigw/lotus/rpc/v1",
          };
        }
        if (chain.id === filecoinCalibration.id) {
          return {
            http: RPC_FILECOIN_CALIBRATION,
            webSocket: "wss://filecoin-calibration.chainup.net/rpc/v1",
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
