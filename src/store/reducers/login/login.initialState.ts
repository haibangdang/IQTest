import { Nullable } from './../../../utils/common/types';

export type InitialState = {
  data: any;
  error: Nullable<string>;
  isFetching: boolean;
};

export const initialState: InitialState = {
  data: {},
  error: '',
  isFetching: false,
};
