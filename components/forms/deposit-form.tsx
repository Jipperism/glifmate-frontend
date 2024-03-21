import React, { useEffect, useState } from "react";

import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { ethers, toBigInt } from "ethers";

import Button from "@/components/Button";
import { useContractAddresses } from "@/hooks/getAddresses";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
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
import { Formik } from "formik";
import ConnectWalletButton from "@/components/connect-wallet-button";

export interface DepositFormProps {
  className?: string;
}

export const DepositForm = ({ className }: DepositFormProps) => {
  const { PUBLIC_GOODS } = useContractAddresses();
  const { address, isConnecting } = useAccount();

  const [showConnectWallet, setShowConnectWallet] = useState(false);

  useEffect(() => {
    setShowConnectWallet(!address);
  }, [address]);

  const [formValues, setFormValues] = useState<
    | {
        depositAmountInWei?: bigint;
        donationPercentageWei?: bigint;
      }
    | undefined
  >(undefined);

  const {
    config,
    isError: isPrepareError,
    error: prepareError,
  } = usePrepareContractWrite({
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
    // abi: PublicGoodsABI,
    functionName: "deposit",
    enabled:
      formValues !== undefined &&
      formValues.depositAmountInWei !== undefined &&
      formValues.donationPercentageWei !== undefined,
    value: formValues?.depositAmountInWei!,
    args: [address!, formValues?.donationPercentageWei!],
  });

  const {
    data,
    write: deposit,
    isError: isWriteError,
    error: writeError,
  } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const [showTooltip, setShowTooltip] = React.useState(false);

  async function onDeposit() {
    if (!address) {
      return;
    }

    deposit?.();
  }

  return (
    <Formik
      initialValues={{ depositAmount: "0", receiveAmount: 0, sliderValue: 10 }}
      validateOnMount
      validate={(values) => {
        const depositAmountInWei =
          values.depositAmount !== ""
            ? toBigInt(values.depositAmount) * ethers.WeiPerEther
            : undefined;

        // Percentage should be (0 <= x <= 1) * ethers.WeiPerEther
        const donationPercentageWei =
          (toBigInt(values.sliderValue) * ethers.WeiPerEther) / toBigInt(100);
        console.log(
          "validating",
          values,
          depositAmountInWei,
          donationPercentageWei
        );
        setFormValues({
          depositAmountInWei,
          donationPercentageWei,
        });
        const errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
        validateForm,

        /* and other goodies */
      }) => {
        const isErrored = isPrepareError || isWriteError;
        const error = prepareError || writeError;
        const disabled = showConnectWallet || isLoading || isConnecting;
        const submitDisabled = disabled || isErrored;
        return (
          <form
            className={className}
            style={{ width: "100%" }}
            onSubmit={handleSubmit}
          >
            <VStack width={"100%"}>
              {showConnectWallet && <ConnectWalletButton />}
              <Flex alignItems={"center"} width={"100%"}>
                <FormLabel minWidth={"110px"} fontWeight={700} mb={0}>
                  Deposit
                </FormLabel>
                <FormControl flexDirection={"row"}>
                  <Input
                    disabled={disabled}
                    type="number"
                    name="depositAmount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.depositAmount}
                  />
                </FormControl>
              </Flex>
              <Flex alignItems={"center"} width="100%" pr={1}>
                <FormLabel minWidth={"110px"} fontWeight={700} mb={0}>
                  Donate {values.sliderValue}%
                </FormLabel>
                <Slider
                  px={1}
                  width={"100%"}
                  onChange={(v) => {
                    setFieldValue("sliderValue", v);
                  }}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  value={values.sliderValue}
                >
                  <SliderTrack>
                    <SliderFilledTrack
                      background={
                        "linear-gradient(270deg, #cdc7b6 0%, #a89f86 4%, #E03A3E 32%, #a89f86 62%, #5c5b57 89%)"
                      }
                    />
                  </SliderTrack>
                  <Tooltip
                    hasArrow
                    bg="rgb(191,72,86)"
                    color="white"
                    placement="top"
                    isOpen={showTooltip}
                    label={`${values.sliderValue}%`}
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
                    value={
                      ((100 - values.sliderValue) *
                        parseInt(values.depositAmount, 0)) /
                      100
                    }
                    name="receiveAmount"
                    readOnly
                  />
                </FormControl>
              </Flex>
              {isSuccess && (
                <Alert status="success">
                  <AlertIcon />
                  <Box>
                    <AlertTitle mr={2}>Success!</AlertTitle>
                    <AlertDescription>
                      You have successfully deposited {values.depositAmount} FIL
                      and donated {values.sliderValue}% to the Public Goods
                      Pool.
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
              {isErrored && (
                <Alert status="error">
                  <AlertIcon />
                  <Box>
                    <AlertTitle mr={2}>Error</AlertTitle>
                    <AlertDescription>
                      {/*//@ts-ignore*/}
                      {error?.cause?.details ||
                        // @ts-ignore
                        error?.shortMessage ||
                        error?.message}
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
            </VStack>

            <HStack spacing={2} mt={4}>
              <Button
                onClick={() => {
                  setFieldValue("sliderValue", 10, false);
                  setFieldValue("depositAmount", 0);
                }}
                isDisabled={disabled}
                size="small"
                style={{ width: "100px" }}
              >
                Clear
              </Button>
              <Button
                isDisabled={submitDisabled}
                type={"button"}
                onClick={() => onDeposit()}
                size="small"
                style={{ width: "100%" }}
              >
                Send
              </Button>
            </HStack>
          </form>
        );
      }}
    </Formik>
  );
};

export default DepositForm;
