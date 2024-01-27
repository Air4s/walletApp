
export const DISPLAY_CASH_IN_MODAL = 'DISPLAY_CASH_IN_MODAL';
export const DISPLAY_BANK_TRANSFER_MODAL = 'DISPLAY_BANK_TRANSFER_MODAL';

export interface DisplayCashInModalAction {
  type: typeof DISPLAY_CASH_IN_MODAL;
  payload: boolean;
}

export interface DisplayBankTransferModalAction {
  type: typeof DISPLAY_BANK_TRANSFER_MODAL;
  payload: boolean;
}




export type DashboardPageState = {
  isCashInModalOpen: boolean;
  isBankTransferModalOpen: boolean;
};

// Set initial state here
export const initialState: DashboardPageState = {
  isCashInModalOpen: false,
  isBankTransferModalOpen: false
};
