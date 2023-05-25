/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FilAddress, FilAddressInterface } from "../FilAddress";

const _abi = [
  {
    inputs: [],
    name: "CallFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220446885b2de596fdb2248c07017b423756410c0b1252ac0203bcf737bfc0d8b6a64736f6c63430008110033";

type FilAddressConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FilAddressConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FilAddress__factory extends ContractFactory {
  constructor(...args: FilAddressConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FilAddress> {
    return super.deploy(overrides || {}) as Promise<FilAddress>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FilAddress {
    return super.attach(address) as FilAddress;
  }
  override connect(signer: Signer): FilAddress__factory {
    return super.connect(signer) as FilAddress__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FilAddressInterface {
    return new utils.Interface(_abi) as FilAddressInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FilAddress {
    return new Contract(address, _abi, signerOrProvider) as FilAddress;
  }
}
