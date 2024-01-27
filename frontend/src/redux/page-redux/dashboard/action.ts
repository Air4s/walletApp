import * as types from './type';


export const displayCashInModal = (payload: boolean): types.DisplayCashInModalAction => {
  return {
    type: types.DISPLAY_CASH_IN_MODAL,
    payload,
  };
};