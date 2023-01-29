import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type InitialStateType = {
  data: any[];
};

const initialState: InitialStateType = {
  data: [],
};

export const resasSlice = createSlice({
  name: 'resas',
  initialState,
  reducers: {
    get_pages: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { get_pages } = resasSlice.actions;

export const selectResasData = (state: RootState) => state.resas.data;

export default resasSlice.reducer;
