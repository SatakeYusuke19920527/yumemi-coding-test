import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import resasReducer from '../features/resasSlice';

export const store = configureStore({
  reducer: {
    resas: resasReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
