import { IPayload } from '../common/common';


export interface WalletCashInPayload extends IPayload {
  cashInAmount: number;
  userId: number;
}

export interface WalletDebitPayload extends IPayload {
  debitAmount: number;
  userId: number;
}
