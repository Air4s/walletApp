import { IGetWalletResponse } from "../../interfaces/wallet";
import * as payloads from "../../interfaces/payloads/wallet";

// Action types
export const GET_WALLET_ACTION = "GET_WALLET";
export const GET_WALLET_REQUEST = "GET_WALLET_REQUEST";
export const GET_WALLET_SUCCESS = "GET_WALLET_SUCCESS";
export const GET_WALLET_FAILED = "GET_WALLET_FAILED";

export const WALLET_CASH_IN_ACTION = "WALLET_CASH_IN";
export const WALLET_CASH_IN_REQUEST = "WALLET_CASH_IN_REQUEST";
export const WALLET_CASH_IN_SUCCESS = "WALLET_CASH_IN_SUCCESS";
export const WALLET_CASH_IN_FAILED = "WALLET_CASH_IN_FAILED";

export const WALLET_DEBIT_ACTION = "WALLET_CASH_IN";
export const WALLET_DEBIT_REQUEST = "WALLET_DEBIT_REQUEST";
export const WALLET_DEBIT_SUCCESS = "WALLET_DEBIT_SUCCESS";
export const WALLET_DEBIT_FAILED = "WALLET_DEBIT_FAILED";

// Specific action
export type GetWalletAction = {
  type: typeof GET_WALLET_REQUEST;
  payload: payloads.WalletBalancePayload;
};

export type WalletCashInAction = {
  type: typeof WALLET_CASH_IN_REQUEST;
  payload: payloads.WalletCashInPayload;
};

export type WalletDebitAction = {
  type: typeof WALLET_DEBIT_REQUEST;
  payload: payloads.WalletDebitPayload;
};

// Initial state's type
export type WalletState = {
  getWallet: IGetWalletResponse;
};

// Initial state
export const initialState: WalletState = {
  getWallet: {} as IGetWalletResponse,
};
