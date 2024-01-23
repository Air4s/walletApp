import { combineReducers } from 'redux';
import walletReducer from './wallet/reducer';


const rootReducer = combineReducers({
  wallet: walletReducer,
  // Just add other reducer here, it is recommended "per module"
});

export default rootReducer;
