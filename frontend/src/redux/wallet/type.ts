import { IPayload } from '../../interfaces/common/common';
import { IGetWalletResponse } from '../../interfaces/wallet';



// Action types
export const GET_WALLET_ACTION  = 'GET_WALLET';
export const GET_WALLET_REQUEST = 'GET_WALLET_REQUEST';
export const GET_WALLET_SUCCESS = 'GET_WALLET_SUCCESS';
export const GET_WALLET_FAILED  = 'GET_WALLET_FAILED';


// Specific action
export type GetWalletAction = {
  type: typeof GET_WALLET_REQUEST,
  payload: IPayload
};


// Initial state's type
export type WalletState = {
  getWallet: IGetWalletResponse,
};

// Initial state
export const initialState: WalletState = {
  getWallet: {} as IGetWalletResponse
};
