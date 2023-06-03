// import { AnyObject, Nullable } from '@/utils/common/types';

export type SignupData = {
  id: number;
  userName: string;
  email: string;
  password: string;
};

export type SignupPayload = {
  userName: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  dob?: Date;
  phoneNumber?: string;
  address?: string;
};
