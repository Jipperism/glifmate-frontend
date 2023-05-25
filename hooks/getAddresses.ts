import { useAccount, useChainId } from "wagmi";
import {
  PUBLIC_GOODS_ADDRESS_HYPERSPACE,
  PRESTAKE_ADDRESS_HYPERSPACE,
  PRESTAKE_ADDRESS_MAINNET,
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

export const useContractAddresses = () => {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  if (!isConnected) {
    return {
      PRESTAKE: undefined,
      PUBLIC_GOODS: undefined,
    };
  }
  return getAddresses(chainId);
};
