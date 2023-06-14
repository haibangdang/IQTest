import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './login.initialState';
// import { LoginPayload } from './login.types';

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    requestLogin(
      state,
      {}: PayloadAction<{
        // jsonData: LoginPayload;
        jsonData: any;
      }>,
    ) {
      state.error = null;
      state.isFetching = true;
    },

    requestLoginSuccessful(state, { payload }) {
      state.data = payload;
      state.error = null;
      state.isFetching = false;
    },

    requestLoginFailed(state, { payload }) {
      const { error } = payload;
      state.error = error;
      state.isFetching = false;
    },
  },
});

export const { requestLogin, requestLoginSuccessful, requestLoginFailed } =
  loginSlice.actions;

export default loginSlice.reducer;
