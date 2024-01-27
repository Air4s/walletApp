/* eslint-disable @typescript-eslint/no-explicit-any */
import * as types from './type';


const dashboardPageReducer = (
  state = types.initialState,
  action: any
):types.DashboardPageState => {

  switch (action.type) {
    
  case types.DISPLAY_CASH_IN_MODAL: {
    return {
      ...state,
      isCashInModalOpen: action.payload,
    };
  }

  default:
    return state;
  }
};

export default dashboardPageReducer;
