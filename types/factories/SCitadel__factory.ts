/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SCitadel, SCitadelInterface } from "../SCitadel";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rebase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "LogRebase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "stakingContract",
        type: "address",
      },
    ],
    name: "LogStakingContractUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "LogSupply",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gons",
        type: "uint256",
      },
    ],
    name: "balanceForGons",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "debtor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
    ],
    name: "changeDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "circulatingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "debtBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "fromG",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gCTDL",
    outputs: [
      {
        internalType: "contract IgCTDL",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "gonsForBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "index",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profit_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epoch_",
        type: "uint256",
      },
    ],
    name: "rebase",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rebases",
    outputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rebase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStakedBefore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStakedAfter",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountRebased",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumberOccured",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "setIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gCTDL",
        type: "address",
      },
    ],
    name: "setgCTDL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingContract",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "toG",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
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
];

const _bytecode =
  "0x6101606040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140523480156200003757600080fd5b506040518060400160405280600b81526020016a14dd185ad9590810d5111360aa1b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600b81526020016a14dd185ad9590810d5111360aa1b815250604051806040016040528060058152602001641cd0d5111360da1b81525060098260039080519060200190620000d392919062000317565b508151620000e990600490602085019062000317565b5060f81b7fff00000000000000000000000000000000000000000000000000000000000000166080525050815160208084019190912082519183019190912060e08290526101008190524660c081905291907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f62000169818484620001c1565b60a052610120525050600680546001600160a01b0319163317905550506611c37937e080006002819055620001b8925090508060001906600019036200020660201b620016f11790919060201c565b600b55620003c3565b604080516020808201959095528082019390935260608301919091524660808301523060a0808401919091528151808403909101815260c09092019052805191012090565b60006200025083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506200025760201b60201c565b9392505050565b60008183620002e75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620002ab57818101518382015260200162000291565b50505050905090810190601f168015620002d95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581620002f457fe5b0490508385816200030157fe5b068185020185146200030f57fe5b949350505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200034f57600085556200039a565b82601f106200036a57805160ff19168380011785556200039a565b828001600101855582156200039a579182015b828111156200039a5782518255916020019190600101906200037d565b50620003a8929150620003ac565b5090565b5b80821115620003a85760008155600101620003ad565b60805160f81c60a05160c05160e051610100516101205161014051611ff86200041a60003980611594525080611a28525080611a6a525080611a495250806119d45250806119fc525080610b1a5250611ff86000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c806370a0823111610104578063a9059cbb116100a2578063c4ef1c4c11610071578063c4ef1c4c146105b9578063d505accf146105df578063dd62ed3e14610630578063ee99205c1461065e576101da565b8063a9059cbb14610516578063aab7828d14610542578063ae5c6cd314610568578063b8fbd5331461059c576101da565b80637ecebe00116100de5780637ecebe00146104b45780639358928b146104da57806395d89b41146104e2578063a457c2d7146104ea576101da565b806370a082311461041c57806373c69eb7146104425780637965d56d14610497576101da565b80632986c0e51161017c578063395093511161014b578063395093511461039b57806340a5737f146103c7578063485cc955146103e657806361d027b314610414576101da565b80632986c0e514610349578063313ce5671461035157806334291fd31461036f5780633644e51514610393576101da565b8063095ea7b3116101b8578063095ea7b3146102ae57806318160ddd146102ee5780631bd39674146102f657806323b872dd14610313576101da565b8063058ecdb4146101df57806306fdde0314610214578063095be81814610291575b600080fd5b610202600480360360408110156101f557600080fd5b5080359060200135610666565b60408051918252519081900360200190f35b61021c6107f6565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561025657818101518382015260200161023e565b50505050905090810190601f1680156102835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610202600480360360208110156102a757600080fd5b503561088d565b6102da600480360360408110156102c457600080fd5b506001600160a01b03813516906020013561090b565b604080519115158252519081900360200190f35b610202610921565b6102026004803603602081101561030c57600080fd5b5035610927565b6102da6004803603606081101561032957600080fd5b506001600160a01b0381358116916020810135909116906040013561093e565b610202610b06565b610359610b18565b6040805160ff9092168252519081900360200190f35b610377610b3c565b604080516001600160a01b039092168252519081900360200190f35b610202610b4b565b6102da600480360360408110156103b157600080fd5b506001600160a01b038135169060200135610b55565b6103e4600480360360208110156103dd57600080fd5b5035610b90565b005b6103e4600480360360408110156103fc57600080fd5b506001600160a01b0381358116916020013516610c3d565b610377610e25565b6102026004803603602081101561043257600080fd5b50356001600160a01b0316610e34565b61045f6004803603602081101561045857600080fd5b5035610e5c565b604080519788526020880196909652868601949094526060860192909252608085015260a084015260c0830152519081900360e00190f35b610202600480360360208110156104ad57600080fd5b5035610eae565b610202600480360360208110156104ca57600080fd5b50356001600160a01b0316610ec5565b610202610ee6565b61021c611088565b6102da6004803603604081101561050057600080fd5b506001600160a01b0381351690602001356110e9565b6102da6004803603604081101561052c57600080fd5b506001600160a01b03813516906020013561113e565b6103e46004803603602081101561055857600080fd5b50356001600160a01b0316611272565b6103e46004803603606081101561057e57600080fd5b508035906001600160a01b0360208201351690604001351515611380565b610202600480360360208110156105b257600080fd5b50356114dd565b610202600480360360208110156105cf57600080fd5b50356001600160a01b0316611529565b6103e4600480360360e08110156105f557600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561153b565b6102026004803603604081101561064657600080fd5b506001600160a01b03813581169160200135166116b7565b6103776116e2565b6008546000906001600160a01b031633146106b25760405162461bcd60e51b815260040180806020018281038252602e815260200180611f99602e913960400191505060405180910390fd5b6000806106bd610ee6565b90508461074c57600254604080519182525185917f0417b340e646d4be71f9b2da63b5c3c69bc9cfa069f0e0db4756271886130bf4919081900360200190a2837f6012dbce857565c4a40974aa5de8373a761fc429077ef0c8c8611d1e20d63fb26000610728610b06565b6040805192835260208301919091528051918290030190a2600254925050506107f0565b8015610778576107718161076b6002548861173a90919063ffffffff16565b906116f1565b915061077c565b8491505b6002546107899083611793565b60028190556fffffffffffffffffffffffffffffffff10156107ba576fffffffffffffffffffffffffffffffff6002555b6107da6002546611c37937e08000600019816107d257fe5b0619906116f1565b600b556107e88186866117ed565b600254925050505b92915050565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108825780601f1061085757610100808354040283529160200191610882565b820191906000526020600020905b81548152906001019060200180831161086557829003601f168201915b505050505090505b90565b600954604080516319a948db60e21b81526004810184905290516000926001600160a01b0316916366a5236c916024808301926020929190829003018186803b1580156108d957600080fd5b505afa1580156108ed573d6000803e3d6000fd5b505050506040513d602081101561090357600080fd5b505192915050565b600061091833848461192b565b50600192915050565b60025490565b60006107f0600b548361173a90919063ffffffff16565b6001600160a01b0383166000908152600d6020908152604080832033845290915281205461096c908361198d565b6001600160a01b0385166000818152600d60209081526040808320338085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a360006109d383610927565b6001600160a01b0386166000908152600c60205260409020549091506109f9908261198d565b6001600160a01b038087166000908152600c60205260408082209390935590861681522054610a289082611793565b6001600160a01b038086166000908152600c60209081526040808320949094559188168152600f9091522054610a5d86610e34565b1015610ab0576040805162461bcd60e51b815260206004820152601c60248201527f446562743a2063616e6e6f74207472616e7366657220616d6f756e7400000000604482015290519081900360640190fd5b836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3506001949350505050565b6000610b13600754610eae565b905090565b7f000000000000000000000000000000000000000000000000000000000000000090565b6009546001600160a01b031681565b6000610b136119cf565b336000818152600d602090815260408083206001600160a01b03871684529091528120549091610918918590610b8b9086611793565b61192b565b6006546001600160a01b03163314610bd95760405162461bcd60e51b8152600401808060200182810382526027815260200180611f726027913960400191505060405180910390fd5b60075415610c2e576040805162461bcd60e51b815260206004820152601660248201527f43616e6e6f742073657420494e44455820616761696e00000000000000000000604482015290519081900360640190fd5b610c3781610927565b60075550565b6006546001600160a01b03163314610c865760405162461bcd60e51b8152600401808060200182810382526027815260200180611f726027913960400191505060405180910390fd5b6001600160a01b038216610ce1576040805162461bcd60e51b815260206004820152600760248201527f5374616b696e6700000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600880546001600160a01b0319166001600160a01b0384811691909117918290559081166000908152600c60205260409020660e3d2cfe61ffff1990558116610d71576040805162461bcd60e51b815260206004820152601660248201527f5a65726f20616464726573733a20547265617375727900000000000000000000604482015290519081900360640190fd5b600e80546001600160a01b0319166001600160a01b0383811691909117909155600854600254604080519182525191909216916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef916020908290030190a3600854604080516001600160a01b039092168252517f817c653428858ed536dc085c5d8273734c517b55de44b55f5c5877a75e3373a19181900360200190a15050600680546001600160a01b0319169055565b600e546001600160a01b031681565b600b546001600160a01b0382166000908152600c602052604081205490916107f091906116f1565b600a8181548110610e6c57600080fd5b90600052602060002090600702016000915090508060000154908060010154908060020154908060030154908060040154908060050154908060060154905087565b60006107f0600b54836116f190919063ffffffff16565b6001600160a01b03811660009081526005602052604081206107f090611a96565b6000610b13600860009054906101000a90046001600160a01b03166001600160a01b031663201386416040518163ffffffff1660e01b815260040160206040518083038186803b158015610f3957600080fd5b505afa158015610f4d573d6000803e3d6000fd5b505050506040513d6020811015610f6357600080fd5b5051600954604080516318160ddd60e01b81529051611082926001600160a01b03169163a82487689183916318160ddd916004808301926020929190829003018186803b158015610fb357600080fd5b505afa158015610fc7573d6000803e3d6000fd5b505050506040513d6020811015610fdd57600080fd5b5051604080517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526004810192909252516024808301926020929190829003018186803b15801561103457600080fd5b505afa158015611048573d6000803e3d6000fd5b505050506040513d602081101561105e57600080fd5b505160085461108290611079906001600160a01b0316610e34565b6002549061198d565b90611793565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108825780601f1061085757610100808354040283529160200191610882565b336000908152600d602090815260408083206001600160a01b0386168452909152812054808310611125576111203385600061192b565b611134565b6111343385610b8b848761198d565b5060019392505050565b600080611156600b548461173a90919063ffffffff16565b336000908152600c6020526040902054909150611173908261198d565b336000908152600c6020526040808220929092556001600160a01b0386168152205461119f9082611793565b6001600160a01b0385166000908152600c602090815260408083209390935533808352600f90915291902054906111d590610e34565b1015611228576040805162461bcd60e51b815260206004820152601c60248201527f446562743a2063616e6e6f74207472616e7366657220616d6f756e7400000000604482015290519081900360640190fd5b6040805184815290516001600160a01b0386169133917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35060019392505050565b6006546001600160a01b031633146112bb5760405162461bcd60e51b8152600401808060200182810382526027815260200180611f726027913960400191505060405180910390fd5b6009546001600160a01b031615611319576040805162461bcd60e51b815260206004820152601960248201527f674354444c3a2020674354444c20616c72656164792073657400000000000000604482015290519081900360640190fd5b6001600160a01b03811661135e5760405162461bcd60e51b8152600401808060200182810382526025815260200180611fc76025913960400191505060405180910390fd5b600980546001600160a01b0319166001600160a01b0392909216919091179055565b600e546001600160a01b031633146113df576040805162461bcd60e51b815260206004820152600d60248201527f4f6e6c7920747265617375727900000000000000000000000000000000000000604482015290519081900360640190fd5b8015611426576001600160a01b0382166000908152600f60205260409020546114089084611793565b6001600160a01b0383166000908152600f6020526040902055611463565b6001600160a01b0382166000908152600f6020526040902054611449908461198d565b6001600160a01b0383166000908152600f60205260409020555b61146c82610e34565b6001600160a01b0383166000908152600f602052604090205411156114d8576040805162461bcd60e51b815260206004820152601b60248201527f734354444c3a20696e73756666696369656e742062616c616e63650000000000604482015290519081900360640190fd5b505050565b6009546040805163150490ed60e31b81526004810184905290516000926001600160a01b03169163a8248768916024808301926020929190829003018186803b1580156108d957600080fd5b600f6020526000908152604090205481565b83421115611590576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b60007f00000000000000000000000000000000000000000000000000000000000000008888886115bf8c611a9a565b8960405160200180878152602001866001600160a01b03168152602001856001600160a01b031681526020018481526020018381526020018281526020019650505050505050604051602081830303815290604052805190602001209050600061162882611acc565b9050600061163882878787611adf565b9050896001600160a01b0316816001600160a01b0316146116a0576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6116ab8a8a8a61192b565b50505050505050505050565b6001600160a01b039182166000908152600d6020908152604080832093909416825291909152205490565b6008546001600160a01b031681565b600061173383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611b07565b9392505050565b600082611749575060006107f0565b8282028284828161175657fe5b04146117335760405162461bcd60e51b8152600401808060200182810382526021815260200180611f516021913960400191505060405180910390fd5b600082820183811015611733576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60006118058461076b85670de0b6b3a764000061173a565b9050600a6040518060e0016040528084815260200183815260200186815260200161182e610ee6565b8152602001858152602001611841610b06565b81524360209182015282546001818101855560009485529382902083516007909202019081558282015193810193909355604080830151600280860191909155606084015160038601556080840151600486015560a0840151600586015560c09093015160069094019390935590548251908152915184927f0417b340e646d4be71f9b2da63b5c3c69bc9cfa069f0e0db4756271886130bf492908290030190a2817f6012dbce857565c4a40974aa5de8373a761fc429077ef0c8c8611d1e20d63fb28261190d610b06565b6040805192835260208301919091528051918290030190a250505050565b6001600160a01b038084166000818152600d6020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600061173383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611bc0565b6000467f0000000000000000000000000000000000000000000000000000000000000000811415611a23577f000000000000000000000000000000000000000000000000000000000000000091505061088a565b611a8e7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c1a565b91505061088a565b5490565b6001600160a01b0381166000908152600560205260408120611abb81611a96565b9150611ac681611c5f565b50919050565b60006107f0611ad96119cf565b83611c68565b6000806000611af087878787611ca3565b91509150611afd81611d98565b5095945050505050565b60008183611b935760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b58578181015183820152602001611b40565b50505050905090810190601f168015611b855780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611b9f57fe5b049050838581611bab57fe5b06818502018514611bb857fe5b949350505050565b60008184841115611c125760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611b58578181015183820152602001611b40565b505050900390565b604080516020808201959095528082019390935260608301919091524660808301523060a0808401919091528151808403909101815260c09092019052805191012090565b80546001019055565b6040805161190160f01b6020808301919091526022820194909452604280820193909352815180820390930183526062019052805191012090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611cda5750600090506003611d8f565b8460ff16601b14158015611cf257508460ff16601c14155b15611d035750600090506004611d8f565b600060018787878760405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611d5f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d8857600060019250925050611d8f565b9150600090505b94509492505050565b6000816004811115611da657fe5b1415611db157611f09565b6001816004811115611dbf57fe5b1415611e12576040805162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b6002816004811115611e2057fe5b1415611e73576040805162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b6003816004811115611e8157fe5b1415611ebe5760405162461bcd60e51b8152600401808060200182810382526022815260200180611f0d6022913960400191505060405180910390fd5b6004816004811115611ecc57fe5b1415611f095760405162461bcd60e51b8152600401808060200182810382526022815260200180611f2f6022913960400191505060405180910390fd5b5056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c7565536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77496e697469616c697a65723a202063616c6c6572206973206e6f7420696e697469616c697a65725374616b696e67436f6e74726163743a202063616c6c206973206e6f74207374616b696e6720636f6e7472616374674354444c3a2020674354444c206973206e6f7420612076616c696420636f6e7472616374a164736f6c6343000705000a";

export class SCitadel__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SCitadel> {
    return super.deploy(overrides || {}) as Promise<SCitadel>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SCitadel {
    return super.attach(address) as SCitadel;
  }
  connect(signer: Signer): SCitadel__factory {
    return super.connect(signer) as SCitadel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SCitadelInterface {
    return new utils.Interface(_abi) as SCitadelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SCitadel {
    return new Contract(address, _abi, signerOrProvider) as SCitadel;
  }
}
