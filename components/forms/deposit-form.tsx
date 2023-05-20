import React, { useState } from "react";

import { useAccount, useContractWrite } from "wagmi";
import { PublicGoodsDonator__factory } from "@/contract-types";
import { toBigInt } from "ethers";

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

  const { address } = useAccount();

  const [depositAmount, setDepositAmount] = useState(0);
  const [receiveAmount, setReceiveAmount] = useState(0);

  function onClear() {
    setDepositAmount(0);
    setReceiveAmount(0);
  }

  const donationPercentage =
    100 - Math.round((receiveAmount / depositAmount) * 100);

  const donationPercentageClamped = Math.max(
    0,
    Math.min(100, donationPercentage)
  );

  async function onDeposit() {
    if (!address) {
      return;
    }
    await deposit({
      args: [
        address,
        toBigInt(depositAmount),
        toBigInt(donationPercentageClamped),
      ],
    });
  }

  const disabled = !address || isLoading;

  return (
    <form>
      <label>
        Deposit
        <input
          disabled={disabled}
          type="number"
          min={0}
          name="depositAmount"
          value={depositAmount}
          onChange={(e) => {
            if (e.target.value === "") {
              return;
            }
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
          value={receiveAmount}
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
