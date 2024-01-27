
export const DISPLAY_CASH_IN_MODAL = 'DISPLAY_CASH_IN_MODAL';

export interface DisplayCashInModalAction {
  type: typeof DISPLAY_CASH_IN_MODAL;
  payload: boolean;
}

export type DashboardPageState = {
  isCashInModalOpen: boolean;
};


// Set initial state here
export const initialState: DashboardPageState = {
  isCashInModalOpen: false,
};
