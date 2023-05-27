import { usePublicClient, useWalletClient } from "wagmi";
import { ethers, toBigInt } from "ethers";
import {
  useChainIdWithDefault,
  useContractAddresses,
} from "@/hooks/getAddresses";
import preStakeABI from "@/abi/PreStakeABI";
import { getContract } from "@wagmi/core";
import { useEffect, useState } from "react";

export const useTotalValueLocked = () => {
  const { PRESTAKE } = useContractAddresses();
  const { isLoading } = useWalletClient();
  const [data, setData] = useState<ethers.BigNumberish>();
  const chainId = useChainIdWithDefault();
  const publicClient = usePublicClient({
    chainId,
  });

  const contract = getContract({
    address: PRESTAKE as `0x${string}`,
    abi: preStakeABI,
    walletClient: publicClient,
  });

  useEffect(() => {
    const fetchTotalValueLocked = async () => {
      const totalValueLocked =
        (await contract.read.totalValueLocked()) as string;
      setData(toBigInt(totalValueLocked) / ethers.WeiPerEther);
    };
    fetchTotalValueLocked();
  }, [isLoading, contract, chainId, publicClient]);

  return data;
};
