import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './baseRequest.initialState';

const baseRequestSlice = createSlice({
  name: 'baseRequest',
  initialState,
  reducers: {
    requestBaseRequest(state) {
      state.error = null;
      state.isFetching = true;
    },

    requestBaseRequestSuccess(state, { payload }) {
      state.data = payload;
      state.error = null;
      state.isFetching = false;
    },

    rrequestBaseRequestFail(state, { payload }) {
      const { error } = payload;
      state.error = error;
      state.isFetching = false;
    },
  },
});

export const {
  requestBaseRequest,
  requestBaseRequestSuccess,
  rrequestBaseRequestFail,
} = baseRequestSlice.actions;

export default baseRequestSlice.reducer;
