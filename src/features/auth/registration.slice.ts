import { createSlice } from '@reduxjs/toolkit';
import { RegistrationPayload } from './types';

const registrationSlice = createSlice({
  name: 'registrationSlice',
  initialState: {
    isInProgress: false,
  },
  reducers: {
    register(state, action: { payload: RegistrationPayload }) {
      state.isInProgress = true;
    },
    registerSuccess() {},
    registerFailure() {},
  },
});

export const {
  actions: { register },
  reducer: registrationReducer,
} = registrationSlice;                                        