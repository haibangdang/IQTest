// import { AnyObject, Nullable } from '@/utils/common/types';

export type LoginData = {
  id: number;
  userName: string;
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};
