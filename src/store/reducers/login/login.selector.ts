import { RootState } from '../..';

export const selectLoginRequest = (state: RootState): any => {
  return state.login.data;
};
