import React, { useMemo, useState } from "react";

import { useAccount, useContractWrite } from "wagmi";
import { ethers, toBigInt } from "ethers";
import { toast } from "react-toastify";

import Button from "@/components/Button";
import { useContractAddresses } from "@/hooks/getAddresses";

export const DepositForm = () => {
  const { PUBLIC_GOODS } = useContractAddresses();
  const { address, isConnecting } = useAccount();

  //@ts-ignore
  const { isLoading, writeAsync: deposit } = useContractWrite({
    address: PUBLIC_GOODS as `0x${string}`,
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "donationPercent",
            type: "uint256",
          },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    functionName: "deposit",
  });

  const [depositAmount, setDepositAmount] = useState(1);
  const [receiveAmount, setReceiveAmount] = useState(1);

  function onClear() {
    setDepositAmount(0);
    setReceiveAmount(0);
  }

  const donationPercentage =
    isNaN(receiveAmount) || isNaN(depositAmount) || depositAmount === 0
      ? 0
      : 1 - receiveAmount / depositAmount;

  const donationPercentageClamped = Math.max(
    0,
    Math.min(100, donationPercentage)
  );

  async function onDeposit() {
    if (!address) {
      return;
    }

    const depositAmountInWei = toBigInt(depositAmount) * ethers.WeiPerEther;

    // Percentage should be (0 <= x <= 1) * ethers.WeiPerEther
    const donationPercentageWei =
      (toBigInt(donationPercentageClamped * 100) * ethers.WeiPerEther) /
      toBigInt(100);

    try {
      await deposit({
        args: [address, donationPercentageWei],
        value: depositAmountInWei,
      });
    } catch (e) {
      toast("Error depositing", {
        type: "error",
      });
      console.error(e);
    }
  }

  const disabled = useMemo(() => {
    return !address || isLoading || isConnecting;
  }, [address, isLoading, isConnecting]);

  return (
    <form>
      <div>
        <label>
          Deposit
          <input
            disabled={disabled}
            type="number"
            value={depositAmount}
            name="depositAmount"
            onChange={(e) => {
              setDepositAmount(e.target.valueAsNumber);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Receive
          <input
            disabled={disabled}
            type="number"
            value={receiveAmount}
            name="receiveAmount"
            max={depositAmount}
            onChange={(e) => setReceiveAmount(e.target.valueAsNumber)}
          />
        </label>
      </div>
      <h4>Donate: {donationPercentageClamped * 100}%</h4>

      <div style={{ display: "flex" }}>
        <Button onClick={onClear} isDisabled={disabled}>
          Clear
        </Button>
        <Button isDisabled={disabled} type={"button"} onClick={onDeposit}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default DepositForm;
