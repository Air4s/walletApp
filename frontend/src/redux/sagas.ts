import { StrictEffect, all } from 'redux-saga/effects';
import { walletSaga } from './wallet/saga';


export default function* rootSaga(): Generator<StrictEffect> {
  yield all([
    // Add your saga here
    ...walletSaga,
  ]);
}