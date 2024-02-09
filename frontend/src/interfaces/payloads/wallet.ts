import { IPayload } from "../common/common";

export interface WalletBalancePayload extends IPayload {
  userId: number;
}

export interface WalletCashInPayload extends IPayload {
  cashInAmount: number;
  userId: number;
}

export interface WalletDebitPayload extends IPayload {
  debitAmount: number;
  userId: number;
}
