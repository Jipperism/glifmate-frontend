/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  PublicGoodsDonator,
  PublicGoodsDonatorInterface,
} from "../PublicGoodsDonator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "contract IPreStake",
        name: "_preStake",
        type: "address",
      },
      {
        internalType: "contract IWFIL",
        name: "_wFIL",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_liquidStakingToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidParams",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "donationAmount",
        type: "uint256",
      },
    ],
    name: "Donate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawFunds",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "donationPercent",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "preStake",
    outputs: [
      {
        internalType: "contract IPreStake",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610100604052670de0b6b3a764000060805234801561001d57600080fd5b50604051610de0380380610de083398101604081905261003c916100fe565b836001600160a01b0381166100645760405163e6c4247b60e01b815260040160405180910390fd5b61006d8161008c565b506001600160a01b0392831660a05290821660c0521660e0525061015d565b600180546001600160a01b0319908116909155600080546001600160a01b03848116938216841783556040519116929183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100fb57600080fd5b50565b6000806000806080858703121561011457600080fd5b845161011f816100e6565b6020860151909450610130816100e6565b6040860151909350610141816100e6565b6060860151909250610152816100e6565b939692955090935050565b60805160a05160c05160e051610bf66101ea600039600081816103420152818161044f01528181610501015281816105a0015281816106c2015281816107c1015261094501526000818161020001526102bc01526000818161014d0152818161028d015281816103d4015261074d0152600081816101920152818161065601526108df0152610bf66000f3fe60806040526004361061007b5760003560e01c80638da5cb5b1161004e5780638da5cb5b146100df578063e30c39781461011b578063f1d72e251461013b578063f2fde38b1461016f57600080fd5b80630efe6a8b1461008057806324600fc3146100a257806347e7ef24146100b757806379ba5097146100ca575b600080fd5b34801561008c57600080fd5b506100a061009b366004610a9e565b61018f565b005b3480156100ae57600080fd5b506100a06104e1565b6100a06100c5366004610ad1565b610653565b3480156100d657600080fd5b506100a061084d565b3480156100eb57600080fd5b506000546100ff906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b34801561012757600080fd5b506001546100ff906001600160a01b031681565b34801561014757600080fd5b506100ff7f000000000000000000000000000000000000000000000000000000000000000081565b34801561017b57600080fd5b506100a061018a366004610afb565b610882565b807f00000000000000000000000000000000000000000000000000000000000000008111156101d157604051635435b28960e11b815260040160405180910390fd5b6001600160a01b0384166040516323b872dd60e01b8152336004820152306024820152604481018590529094507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610251573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102759190610b1d565b5060405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af1158015610305573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103299190610b1d565b506040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610391573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b59190610b3f565b6040516311f9fbc960e21b8152306004820152602481018690529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906347e7ef2490604401600060405180830381600087803b15801561042057600080fd5b505af1158015610434573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691506370a0823190602401602060405180830381865afa15801561049f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c39190610b3f565b90506104d9866104d38484610b6e565b866108db565b505050505050565b6104e96109fe565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610550573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105749190610b3f565b60005460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018390529192507f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156105e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060d9190610b1d565b506000546040518281526001600160a01b03909116907f21901fa892c430ea8bd38b9390225ac8e67eac75ee10ffba16feefc539a288f99060200160405180910390a250565b807f000000000000000000000000000000000000000000000000000000000000000081111561069557604051635435b28960e11b815260040160405180910390fd5b6001600160a01b0383166040516370a0823160e01b81523060048201529093506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610709573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072d9190610b3f565b60405163f340fa0160e01b81523060048201529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f340fa019034906024016000604051808303818588803b15801561079257600080fd5b505af11580156107a6573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600093507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692506370a082319150602401602060405180830381865afa158015610812573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108369190610b3f565b9050610846856104d38484610b6e565b5050505050565b6001546001600160a01b03163314610877576040516282b42960e81b815260040160405180910390fd5b61088033610a28565b565b61088a6109fe565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e227009190a350565b60007f00000000000000000000000000000000000000000000000000000000000000006109088385610b87565b6109129190610b9e565b61091c9084610b6e565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb906044016020604051808303816000875af1158015610990573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b49190610b1d565b50836001600160a01b03167f0553260a2e46b0577270d8992db02d30856ca880144c72d6e9503760946aef13826040516109f091815260200190565b60405180910390a250505050565b6000546001600160a01b03163314610880576040516282b42960e81b815260040160405180910390fd5b600180546001600160a01b0319908116909155600080546001600160a01b03848116938216841783556040519116929183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b0381168114610a9957600080fd5b919050565b600080600060608486031215610ab357600080fd5b610abc84610a82565b95602085013595506040909401359392505050565b60008060408385031215610ae457600080fd5b610aed83610a82565b946020939093013593505050565b600060208284031215610b0d57600080fd5b610b1682610a82565b9392505050565b600060208284031215610b2f57600080fd5b81518015158114610b1657600080fd5b600060208284031215610b5157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610b8157610b81610b58565b92915050565b8082028115828204841417610b8157610b81610b58565b600082610bbb57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212204cf4cab24ccbb61609a1e86015f228b6727d6ea12f9c74668af906609ca08c3a64736f6c63430008110033";

type PublicGoodsDonatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PublicGoodsDonatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PublicGoodsDonator__factory extends ContractFactory {
  constructor(...args: PublicGoodsDonatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _owner: AddressLike,
    _preStake: AddressLike,
    _wFIL: AddressLike,
    _liquidStakingToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _owner,
      _preStake,
      _wFIL,
      _liquidStakingToken,
      overrides || {}
    );
  }
  override deploy(
    _owner: AddressLike,
    _preStake: AddressLike,
    _wFIL: AddressLike,
    _liquidStakingToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _owner,
      _preStake,
      _wFIL,
      _liquidStakingToken,
      overrides || {}
    ) as Promise<
      PublicGoodsDonator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PublicGoodsDonator__factory {
    return super.connect(runner) as PublicGoodsDonator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PublicGoodsDonatorInterface {
    return new Interface(_abi) as PublicGoodsDonatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PublicGoodsDonator {
    return new Contract(address, _abi, runner) as unknown as PublicGoodsDonator;
  }
}