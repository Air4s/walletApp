import { ForkEffect, call, put, takeLatest } from 'redux-saga/effects';
import * as types from './type';
import { AxiosError, AxiosResponse } from 'axios';
import { walletRequests } from '../../services/wallet';
import { IGetWalletResponse } from '../../interfaces/wallet';


function* handleGetWalletAction({ payload }: types.GetWalletAction) {

  const { onSuccess, onFailed } = payload;
  
  try {
    const response: AxiosResponse<IGetWalletResponse> = yield call(walletRequests.getWalletApi);
    const { data } = response;
  
    yield put({
      type: types.GET_WALLET_SUCCESS,
      payload: data,
    });
  
    if (onSuccess) onSuccess(response);
  } catch (err) {
    const error = err as AxiosError;
    const payload = (error);

    yield put({ type: types.GET_WALLET_FAILED, payload });

    if (onFailed) onFailed(err as AxiosError);
  }
}

export const walletSaga: ForkEffect [] = [
  takeLatest(types.GET_WALLET_REQUEST, handleGetWalletAction),
];