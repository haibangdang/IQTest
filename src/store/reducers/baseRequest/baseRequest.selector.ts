import { RootState } from '../..';

export const selectBaseRequest = (state: RootState): any => {
  return state.baseRequest.data;
};
