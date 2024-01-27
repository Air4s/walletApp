/* eslint-disable @typescript-eslint/no-explicit-any */
import * as types from './type';


const walletReducer = (
  state = types.initialState,
  action: any
):types.WalletState => {

  switch (action.type) {
    
  case types.GET_WALLET_SUCCESS: {
    return {
      ...state,
      getWallet: action.payload,
    };
  }

  default:
    return state;
  }
};

export default walletReducer;
