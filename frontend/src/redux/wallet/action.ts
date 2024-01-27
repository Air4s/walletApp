import { IPayload } from '../../interfaces/common/common';
import * as types from './type';
import * as payloads from '../../interfaces/payloads/wallet';


export const getWallet = (payload: IPayload): types.GetWalletAction => {
  return {
    type: types.GET_WALLET_REQUEST,
    payload,
  };
};

export const walletCashIn = (payload: payloads.WalletCashInPayload): types.WalletCashInAction => {
  return {
    type: types.WALLET_CASH_IN_REQUEST,
    payload,
  };
};

export const walletDebit = (payload: payloads.WalletDebitPayload): types.WalletDebitAction => {
  return {
    type: types.WALLET_DEBIT_REQUEST,
    payload,
  };
};

