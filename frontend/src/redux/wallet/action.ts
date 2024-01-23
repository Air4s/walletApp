import { IPayload } from '../../interfaces/common/common';
import * as types from './type';

export const getWallet = (payload: IPayload): types.GetWalletAction => {
  return {
    type: types.GET_WALLET_REQUEST,
    payload,
  };
};
