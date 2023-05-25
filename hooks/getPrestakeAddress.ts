import { useAccount, useChainId } from "wagmi";
import {
  PUBLIC_GOODS_PRESTAKE_ADDRESS_HYPERSPACE,
  PUBLIC_GOODS_PRESTAKE_ADDRESS_MAINNET,
} from "@/constants";

const getNetworkNameByChainId = (chainId: number) => {
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

export const getPrestakeAddress = (chainId: number) => {
  const networkName = getNetworkNameByChainId(chainId);
  switch (networkName) {
    case "mainnet":
      return PUBLIC_GOODS_PRESTAKE_ADDRESS_MAINNET;
    case "hyperspace":
      return PUBLIC_GOODS_PRESTAKE_ADDRESS_HYPERSPACE;
    default:
      throw new Error("Unsupported network");
  }
};

export const usePrestakeAddress = () => {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  if (!isConnected) {
    return undefined;
  }
  return getPrestakeAddress(chainId);
};
