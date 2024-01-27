import * as types from './type';


export const displayCashInModal = (payload: boolean): types.DisplayCashInModalAction => {
  return {
    type: types.DISPLAY_CASH_IN_MODAL,
    payload,
  };
};

export const displayBankTransferModal = (payload: boolean): types.DisplayBankTransferModalAction => {
  return {
    type: types.DISPLAY_BANK_TRANSFER_MODAL,
    payload,
  };
};