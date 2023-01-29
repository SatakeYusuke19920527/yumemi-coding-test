import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ResasDataType } from '../types/types';

type InitialStateType = {
  data: ResasDataType;
};

const initialState: InitialStateType = {
  data: {
    prefectureList: [],
    demographics: [],
  },
};

export const resasSlice = createSlice({
  name: 'resas',
  initialState,
  reducers: {
    get_prefectures_list: (state, action) => {
      state.data.prefectureList = action.payload;
    },
    get_demographics: (state, action) => {
      state.data.demographics = action.payload;
    },
  },
});

export const { get_prefectures_list, get_demographics } = resasSlice.actions;

export const selectResasData = (state: RootState) => state.resas.data;

export default resasSlice.reducer;
