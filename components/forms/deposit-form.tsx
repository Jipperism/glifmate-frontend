import React, { useEffect, useState } from "react";

import { useAccount } from "wagmi";

import Button from "@/components/Button";

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
  Spinner,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import ConnectWalletButton from "@/components/connect-wallet-button";
import { parseEther } from "viem";
import { useDeposit } from "@/hooks/useDeposit";

export interface DepositFormProps {
  className?: string;
}

export const DepositForm = ({ className }: DepositFormProps) => {
  const { address, isConnecting } = useAccount();
  const { mutateAsync: depositAsync, isPending, isError, error } = useDeposit();

  const [showConnectWallet, setShowConnectWallet] = useState(false);

  useEffect(() => {
    setShowConnectWallet(!address);
  }, [address]);

  const [formValues, setFormValues] = useState<
    | {
        depositAmountInWei?: bigint;
        donationPercentageWei?: bigint;
        donationAmountWei?: bigint;
        stakeAmountWei?: bigint;
      }
    | undefined
  >(undefined);

  const [showTooltip, setShowTooltip] = React.useState(false);

  async function onDeposit() {
    await depositAsync({
      stakeAmountWei: formValues?.stakeAmountWei!,
      donationAmountWei: formValues?.donationAmountWei!,
    });
    console.log("deposited succesfully");
  }

  return (
    <Formik
      initialValues={{
        depositAmount: "0.0000000000000001",
        receiveAmount: 0,
        sliderValue: 10,
      }}
      validateOnMount
      validate={(values) => {
        const depositAmount =
          typeof values.depositAmount === "string"
            ? values.depositAmount
            : (values.depositAmount as number).toFixed(18);
        const depositAmountInWei =
          values.depositAmount !== ""
            ? parseEther(depositAmount as `${number}`)
            : undefined;

        if (depositAmountInWei === undefined) {
          return;
        }

        const donationAmountWei =
          (BigInt(values.sliderValue) * depositAmountInWei) / BigInt(100);

        const stakeAmountWei = depositAmountInWei - donationAmountWei;

        console.log(
          "validating",
          values,
          depositAmountInWei,
          donationAmountWei,
          stakeAmountWei
        );

        setFormValues({
          depositAmountInWei,
          donationAmountWei,
          stakeAmountWei,
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
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,

        /* and other goodies */
      }) => {
        // const isErrored = isPrepareError || isWriteError;
        // const error = prepareError || writeError;
        const disabled = showConnectWallet || isPending || isConnecting;
        const submitDisabled = disabled || isError;
        const isSuccess = false;

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
                  isDisabled={disabled}
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
                        "linear-gradient(270deg, #cdc7b6 0%, #a89f86 4%, #a89f86 62%, #5c5b57 89%)"
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
              {isError && (
                <Alert status="error">
                  <AlertIcon />
                  <Box>
                    <AlertTitle mr={2}>Error</AlertTitle>
                    <AlertDescription>
                      {/*//@ts-ignore*/}
                      {error?.cause?.details ||
                        // @ts-ignore
                        error?.shortMessage ||
                        // @ts-ignore
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
                {isPending ? <Spinner color="black" /> : "Deposit"}
              </Button>
            </HStack>
          </form>
        );
      }}
    </Formik>
  );
};

export default DepositForm;
