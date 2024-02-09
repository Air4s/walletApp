import mainApi from "../constants/url";
import * as payloads from "../interfaces/payloads/wallet";

export const walletRequests = {
  getWalletApi: (payload: payloads.WalletBalancePayload) => {
    const { userId } = payload;
    return mainApi.get("/balance", {
      params: {
        user_id: userId,
      },
    });
  },

  walletCashInApi: (payload: payloads.WalletCashInPayload) => {
    const { userId, cashInAmount } = payload;

    return mainApi.post("/credit", {
      amount: cashInAmount,
      user_id: userId,
    });
  },

  walletDebitApi: (payload: payloads.WalletDebitPayload) => {
    const { userId, debitAmount } = payload;

    return mainApi.post("/debit", {
      amount: debitAmount,
      user_id: userId,
    });
  },
};
