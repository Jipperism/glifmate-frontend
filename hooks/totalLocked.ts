import { useContractRead } from "wagmi";
import { ethers, toBigInt } from "ethers";
import { useContractAddresses } from "@/hooks/getAddresses";
import preStakeABI from "@/abi/PreStakeABI";

export const useTotalValueLocked = () => {
  const { PRESTAKE } = useContractAddresses();
  const { data } = useContractRead({
    address: PRESTAKE as `0x${string}`,
    abi: preStakeABI,
    functionName: "totalValueLocked",
    watch: true,
  });
  return data ? toBigInt(data as string) / ethers.WeiPerEther : undefined;
};
