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
    showPrefectures: [],
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
    set_showPrefectures: (state, action) => {
      state.data.showPrefectures?.push(action.payload);
    },
    delete_showPrefectures: (state, action) => {
      state.data.showPrefectures = state.data.showPrefectures?.filter(
        (sp) => sp.prefCode !== action.payload.prefCode
      );
    },
  },
});

export const {
  get_prefectures_list,
  get_demographics,
  set_showPrefectures,
  delete_showPrefectures,
} = resasSlice.actions;

export const selectResasData = (state: RootState) => state.resas.data;

export default resasSlice.reducer;
