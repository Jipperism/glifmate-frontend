import { useChainId } from "wagmi";
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
    case 314159: {
      return "calibration";
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
    case "calibration":
      return {
        PRESTAKE: PRESTAKE_ADDRESS_MAINNET,
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

// export const DONATION_MULTISIG_ADDRESS = "f03037055";

export const DONATION_MULTISIG_ADDRESS =
  "f2s5egxelf45ibvhyhfporarupiiurgeyuniffboy";

export const STAKING_MULTISIG_ADDRESS =
  "f2o66lvdx3vmpv4ikgojestbuistg4no42ckujvwi";

export const FIL_FORWARDER_ADDRESS =
  "0x2b3ef6906429b580b7b2080de5ca893bc282c225";

export const FIL_FORWARDER_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "destination",
        type: "bytes",
      },
    ],
    name: "forward",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
];
