import { combineReducers } from 'redux';
import walletReducer from './wallet/reducer';
import dashboardPageReducer from './page-redux/dashboard/reducer';


const rootReducer = combineReducers({
  wallet: walletReducer,
  dashboard: dashboardPageReducer
  // Just add other reducer here, it is recommended "per module"
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
