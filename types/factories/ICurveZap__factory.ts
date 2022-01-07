/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICurveZap, ICurveZapInterface } from "../ICurveZap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "uint256[4]",
        name: "_deposit_amounts",
        type: "uint256[4]",
      },
      {
        internalType: "uint256",
        name: "_min_mint_amount",
        type: "uint256",
      },
    ],
    name: "add_liquidity",
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
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "uint256[4]",
        name: "_amounts",
        type: "uint256[4]",
      },
      {
        internalType: "bool",
        name: "_is_deposit",
        type: "bool",
      },
    ],
    name: "calc_token_amount",
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
        name: "_pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_burnAmount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "_min_amount",
        type: "uint256",
      },
    ],
    name: "remove_liquidity_one_coin",
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
];

export class ICurveZap__factory {
  static readonly abi = _abi;
  static createInterface(): ICurveZapInterface {
    return new utils.Interface(_abi) as ICurveZapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICurveZap {
    return new Contract(address, _abi, signerOrProvider) as ICurveZap;
  }
}
