import ApiService from '../../utils/network';

const signupApi = {
  requestSignup(SingupData: any): Promise<any> {
    return ApiService.post(`/api/users/signup`, JSON.stringify(SingupData));
  },
};

export default signupApi;
