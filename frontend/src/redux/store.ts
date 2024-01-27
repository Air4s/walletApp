import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import dashboardPageReducer from './page-redux/dashboard/reducer';


const store = configureStore({
  reducer: {
    wallet: rootReducer,
    dashboard: dashboardPageReducer
    // Just add other reducer here, it is recommended "per module"
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
