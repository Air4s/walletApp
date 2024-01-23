import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as types from './type';
import * as interfaces from '../../interfaces/wallet'


// Define the initial state for the wallet
const initialState: types.WalletState = types.initialState;

// Create a Redux slice for the wallet
const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    getWalletSuccess: (state, action: PayloadAction<interfaces.IGetWallet>) => {
      return {
        ...state,
        getWallet: action.payload,
      };
    },
    // Additional Reducers here . . .
    // getWalletSuccess: (state, action: PayloadAction<interfaces.IGetWallet>) => {
    //   return {
    //     ...state,
    //     getWallet: action.payload,
    //   };
    // },
  },
});

// Extract action creators for the wallet
export const { getWalletSuccess } = walletSlice.actions;

// Export the reducer for the wallet
export default walletSlice.reducer;
