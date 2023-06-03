import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './signup.initialState';

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    requestSignup(
      state,
      {}: PayloadAction<{
        jsonData: any;
      }>,
    ) {
      state.error = null;
      state.isFetching = true;
    },

    requestSignupSuccessful(state, { payload }) {
      state.data = payload;
      state.error = null;
      state.isFetching = false;
    },

    requestSignupFailed(state, { payload }) {
      const { error } = payload;
      state.error = error;
      state.isFetching = false;
    },
  },
});

export const { requestSignup, requestSignupSuccessful, requestSignupFailed } =
  signupSlice.actions;

export default signupSlice.reducer;
