import { IPayload } from '../../interfaces/common/common';
import { IGetWallet } from '../../interfaces/wallet';


export type WalletState = typeof initialState;

export const initialState = {
  getWallet: {} as IGetWallet,
};


export const GET_WALLET_ACTION  = 'GET_WALLET';
export const GET_WALLET_REQUEST = 'GET_WALLET_REQUEST';
export const GET_WALLET_SUCCESS = 'GET_WALLET_SUCCESS';
export const GET_WALLET_FAILED  = 'GET_WALLET_FAILED';


export type GetWalletAction = {
  type: typeof GET_WALLET_REQUEST,
  payload: IPayload
};

export type WalletActionTypes = 
| GetWalletAction;
