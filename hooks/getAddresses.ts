import { useAccount, useChainId } from "wagmi";
import {
  PUBLIC_GOODS_ADDRESS_HYPERSPACE,
  PRESTAKE_ADDRESS_HYPERSPACE,
  PRESTAKE_ADDRESS_MAINNET,
  DEFAULT_CHAIN_ID,
} from "@/constants";

export const getNetworkNameByChainId = (chainId: number) => {
  switch (chainId) {
    case 314: {
      return "mainnet";
    }
    case 3141: {
      return "hyperspace";
    }
    default: {
      return undefined;
    }
  }
};

export const getAddresses = (chainId: number) => {
  const networkName = getNetworkNameByChainId(chainId);
  switch (networkName) {
    case "mainnet":
      return {
        PRESTAKE: PRESTAKE_ADDRESS_MAINNET,
        PUBLIC_GOODS: undefined,
      };
    case "hyperspace":
      return {
        PRESTAKE: PRESTAKE_ADDRESS_HYPERSPACE,
        PUBLIC_GOODS: PUBLIC_GOODS_ADDRESS_HYPERSPACE,
      };
    default:
      throw new Error("Unsupported network");
  }
};

export const useChainIdWithDefault = () => {
  const chainId = useChainId();
  return chainId ?? DEFAULT_CHAIN_ID;
};

export const useContractAddresses = () => {
  const chainId = useChainId();
  const chainIdOrDefault = chainId ?? DEFAULT_CHAIN_ID;
  return getAddresses(chainIdOrDefault);
};
