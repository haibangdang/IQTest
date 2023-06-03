import { RootState } from '../..';

export const selectLoginRequest = (state: RootState): any => {
  return state.signup.data;
};
