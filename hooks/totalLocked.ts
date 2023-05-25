import { useContractRead } from "wagmi";
import { PUBLIC_GOODS_PRESTAKE_ADDRESS } from "@/constants";

export const useTotalValueLocked = () => {
  // TODO: use this hook to get the preStake address
  // const { isLoading: isLoadingPrestakeAddress, data: prestakeAddress } =
  //   useContractRead({
  //     address: PUBLIC_GOODS_DONATOR_ADDRESS,
  //     abi: PublicGoodsDonator__factory.abi,
  //     functionName: "preStake",
  //   });

  // console.log(prestakeAddress);
  return useContractRead({
    address: PUBLIC_GOODS_PRESTAKE_ADDRESS,
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
  });
};
