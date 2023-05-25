import { useContractRead } from "wagmi";
import { ethers } from "ethers";
import { usePrestakeAddress } from "@/hooks/getPrestakeAddress";

export const useTotalValueLocked = () => {
  const prestakeAddress = usePrestakeAddress();
  const { data } = useContractRead({
    address: prestakeAddress,
    abi: [
      {
        inputs: [],
        name: "totalValueLocked",
        outputs: [
          {
            internalType: "uin256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "totalValueLocked",
    watch: true,
  });
  return data ? data / ethers.WeiPerEther : undefined;
};
