import { END_POINTS } from '../constants/end-point';
import mainApi from '../constants/url';
import * as payloads from '../interfaces/payloads/wallet';


export const walletRequests = {
  
  getWalletApi: () => {
    return mainApi.get(`${END_POINTS.WALLET}/balance`);
  },

  walletCashInApi: (payload: payloads.WalletCashInPayload) => {

    const { userId, cashInAmount } = payload;

    return mainApi.post(`${END_POINTS.WALLET}/cash-in?userId=${userId}&cashInAmount=${cashInAmount}`);
  },

  walletDebitApi: (payload: payloads.WalletDebitPayload) => {

    const { userId, debitAmount } = payload;

    return mainApi.post(`${END_POINTS.WALLET}/debit?userId=${userId}&debitAmount=${debitAmount}`);
  },
};



