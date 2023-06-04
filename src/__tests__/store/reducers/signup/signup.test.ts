// libs
import 'jest';
import { call, put, takeLatest } from 'redux-saga/effects';
// networks
import {
  requestSignup,
  requestSignupSuccessful,
} from '@/store/reducers/signup/signup.slice';
import signupApi from '@/services/signup/signupApi';
import signupSaga, {
  requestSignupSaga,
} from '@/store/reducers/signup/signup.saga';

const mockedSignupPayload = {
  userName: '',
};

describe('test signupSaga watcher', () => {
  const genObject = signupSaga();

  it('should wait for latest requestSignup action and call requestSignupSaga', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(requestSignup, requestSignupSaga),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('test requestSignupSaga', () => {
  const mockedSignupData = {
    id: 1,
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    phoneNumber: '',
    address: '',
    country: '',
    accounType: '',
    accounStatus: '',
    updatedAt: '',
    createdAt: '',
    avatarPath: '',
    provider: '',
    lastLogin: '',
    resetLink: '',
    token: '',
  };

  const generator = requestSignupSaga({
    payload: {
      // @ts-ignore
      json: mockedSignupPayload,
    },
    type: 'requestSignupSaga' as string,
  });

  it('call function get signup data', () => {
    expect(generator.next().value).toEqual(
      call(signupApi.requestSignup, undefined),
    );
  });

  it('successfully', () => {
    const testValue = generator.next(mockedSignupData).value;
    expect(testValue).toEqual(put(requestSignupSuccessful(mockedSignupData)));
  });
});
