import { RootState } from '../..';

export const selectSignupRequest = (state: RootState): any => {
  return state.signup.data;
};
