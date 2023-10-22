import { createSlice } from '@reduxjs/toolkit';
import { aboutUserResponse } from './types';

export const aboutUserSlice = createSlice({
  name: 'aboutUserSlice',
  initialState: {
    name: {} as aboutUserResponse,
    isInProgress: false,
    isCompleted: false,
  },
  reducers: {
    aboutUserInfo: (state, action) => {
      state.isInProgress = true;
      state.name = action.payload;
    },
    aboutUserInfoSuccess(state, action: { payload: aboutUserResponse }) {
      state.isInProgress = false;
      state.isCompleted = true;
      state.name = action.payload;
    },
    aboutUserInfoFailure(state) {
      state.isInProgress = false;
    },
  },
});

export const {
  actions: { aboutUserInfo, aboutUserInfoSuccess, aboutUserInfoFailure },
  reducer: aboutUserReducer,
} = aboutUserSlice;
