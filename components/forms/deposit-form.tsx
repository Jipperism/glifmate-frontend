import React, { useMemo, useState } from "react";

import { useAccount, useContractWrite } from "wagmi";
import { PublicGoodsDonator__factory } from "@/contract-types";
import { parseUnits, toBigInt } from "ethers";
import { toast } from "react-toastify";
import { PUBLIC_POOLTOKEN_ADDRESS } from "@/constants";
import Button from "@/components/Button";

export const DepositForm = () => {
  const {
    data,
    isLoading,
    isSuccess,
    writeAsync: deposit,
  } = useContractWrite({
    address: PUBLIC_POOLTOKEN_ADDRESS,
    abi: PublicGoodsDonator__factory.abi,
    functionName: "deposit",
  });

  const { address, isConnecting } = useAccount();

  const [depositAmount, setDepositAmount] = useState(1);
  const [receiveAmount, setReceiveAmount] = useState(1);

  function onClear() {
    setDepositAmount(0);
    setReceiveAmount(0);
  }

  const donationPercentage =
    isNaN(receiveAmount) || isNaN(depositAmount) || depositAmount === 0
      ? 0
      : 100 - Math.round((receiveAmount / depositAmount) * 100);

  const donationPercentageClamped = Math.max(
    0,
    Math.min(100, donationPercentage)
  );

  async function onDeposit() {
    if (!address) {
      return;
    }
    const depositAmountInWei = parseUnits(depositAmount.toString());
    console.log(depositAmountInWei);
    try {
      await deposit({
        args: [
          address,
          depositAmountInWei,
          toBigInt(donationPercentageClamped),
        ],
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
      <h4>Donate: {donationPercentageClamped}%</h4>

      <div style={{ display: "flex" }}>
        <Button
          onClick={() => console.log("Clicked button")}
          isDisabled={disabled}
        >
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
