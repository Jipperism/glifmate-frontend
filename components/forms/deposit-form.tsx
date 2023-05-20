import React, { useMemo, useState } from "react";

import { useAccount, useContractWrite } from "wagmi";
import { PublicGoodsDonator__factory } from "@/contract-types";
import { parseUnits, toBigInt } from "ethers";
import { toast } from "react-toastify";

export const DepositForm = () => {
  const {
    data,
    isLoading,
    isSuccess,
    writeAsync: deposit,
  } = useContractWrite({
    address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
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
          name="receiveAmount"
          max={depositAmount}
          onChange={(e) => setReceiveAmount(e.target.valueAsNumber)}
        />
      </label>
      <h4>Donate: {donationPercentageClamped}%</h4>
      <button type="button" disabled={disabled} onClick={onClear}>
        Clear
      </button>
      <button disabled={disabled} type={"button"} onClick={onDeposit}>
        Send
      </button>
    </form>
  );
};

export default DepositForm;
