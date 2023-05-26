import React, { useMemo, useState } from "react";

import { useAccount, useContractWrite } from "wagmi";
import { ethers, toBigInt } from "ethers";
import { toast } from "react-toastify";

import Button from "@/components/Button";
import { useContractAddresses } from "@/hooks/getAddresses";
import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
  VStack,
} from "@chakra-ui/react";

export interface DepositFormProps {
  className?: string;
}

export const DepositForm = ({ className }: DepositFormProps) => {
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

  const [depositAmount, setDepositAmount] = useState(0);
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [sliderValue, setSliderValue] = React.useState(10);
  const [showTooltip, setShowTooltip] = React.useState(false);

  function onClear() {
    setDepositAmount(0);
    setReceiveAmount(0);
  }
  //
  // const donationPercentage =
  //   isNaN(receiveAmount) || isNaN(depositAmount) || depositAmount === 0
  //     ? 0
  //     : 1 - receiveAmount / depositAmount;
  //
  // const donationPercentageClamped = Math.max(
  //   0,
  //   Math.min(100, donationPercentage)
  // );

  async function onDeposit() {
    if (!address) {
      return;
    }

    const depositAmountInWei = toBigInt(depositAmount) * ethers.WeiPerEther;

    // Percentage should be (0 <= x <= 1) * ethers.WeiPerEther
    const donationPercentageWei =
      (toBigInt(sliderValue) * ethers.WeiPerEther) / toBigInt(100);

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
    <form className={className} style={{ width: "100%" }}>
      <VStack width={"100%"}>
        <Flex alignItems={"center"} width={"100%"}>
          <FormLabel minWidth={"110px"} fontWeight={700} mb={0}>
            Deposit
          </FormLabel>
          <FormControl flexDirection={"row"}>
            <Input
              disabled={disabled}
              type="number"
              value={depositAmount}
              name="depositAmount"
              onChange={(e) => {
                setDepositAmount(e.target.valueAsNumber);
                setReceiveAmount(
                  ((100 - sliderValue) * e.target.valueAsNumber) / 100
                );
              }}
            />
          </FormControl>
        </Flex>
        <Flex alignItems={"center"} width="100%" pr={1}>
          <FormLabel minWidth={"110px"} fontWeight={700} mb={0}>
            Donate {sliderValue}%
          </FormLabel>
          <Slider
            px={1}
            width={"100%"}
            onChange={(v) => {
              setSliderValue(v);
              setReceiveAmount(((100 - v) * depositAmount) / 100);
            }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            value={sliderValue}
          >
            <SliderTrack>
              <SliderFilledTrack
                background={
                  "linear-gradient(270deg, #000000 0%, #963D97 4%, #E03A3E 32%, #963D97 62%, #56B9FF 89%)"
                }
              />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="rgb(191,72,86)"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`${sliderValue}%`}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </Flex>

        <Flex alignItems={"center"} width={"100%"}>
          <FormLabel minWidth={"110px"} fontWeight={700} mb={0}>
            Receive
          </FormLabel>
          <FormControl flexDirection={"row"}>
            <Input
              type="number"
              value={receiveAmount}
              name="receiveAmount"
              readOnly
            />
          </FormControl>
        </Flex>
      </VStack>

      <HStack spacing={2} mt={4}>
        <Button onClick={onClear} isDisabled={disabled}>
          Clear
        </Button>
        <Button isDisabled={disabled} type={"button"} onClick={onDeposit}>
          Send
        </Button>
      </HStack>
    </form>
  );
};

export default DepositForm;
