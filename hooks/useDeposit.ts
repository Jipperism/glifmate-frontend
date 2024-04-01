import { Address } from "@zondax/izari-tools";
import { BrowserProvider, ethers, JsonRpcSigner } from "ethers";
import {
  DONATION_MULTISIG_ADDRESS,
  FIL_FORWARDER_ABI,
  FIL_FORWARDER_ADDRESS,
  STAKING_MULTISIG_ADDRESS,
} from "@/hooks/getAddresses";
import {
  type Account,
  type Chain,
  type Client,
  formatEther,
  type Transport,
} from "viem";
import { waitForTransactionReceipt } from "viem/actions";
import { useMutation } from "@tanstack/react-query";
import { type Config, useClient, useConnectorClient } from "wagmi";
import { useMemo } from "react";

export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId });
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client]);
}

export const useDeposit = () => {
  const client = useClient();
  const signer = useEthersSigner();

  const sendByForward = async (to: string, amount: bigint) => {
    const destination = Address.fromString(to);
    const destinationBytes = destination.toBytes();
    if (!signer) {
      throw new Error("No signer");
    }
    const contract = new ethers.Contract(
      FIL_FORWARDER_ADDRESS,
      FIL_FORWARDER_ABI
    ).connect(signer);

    // @ts-ignore
    return contract.forward(destinationBytes, { value: amount });
  };

  return useMutation({
    mutationKey: ["deposit"],
    mutationFn: async ({
      stakeAmountWei,
      donationAmountWei,
    }: {
      stakeAmountWei: bigint;
      donationAmountWei: bigint;
    }) => {
      if (!stakeAmountWei || !donationAmountWei || !client) {
        return;
      }

      console.log(
        "sending",
        formatEther(stakeAmountWei),
        formatEther(donationAmountWei)
      );

      const stakingTx = await sendByForward(
        STAKING_MULTISIG_ADDRESS,
        stakeAmountWei
      );

      const donationTx = await sendByForward(
        DONATION_MULTISIG_ADDRESS,
        donationAmountWei
      );
      //
      await Promise.all(
        [stakingTx, donationTx].map((tx) =>
          waitForTransactionReceipt(client, {
            hash: tx.hash,
          })
        )
      );
    },
  });
};
