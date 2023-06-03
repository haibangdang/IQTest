import ApiService from '../../utils/network';

const loginApi = {
  requestLoginExecute(loginData: any): Promise<any> {
    return ApiService.post(`/api/users/login`, JSON.stringify(loginData));
  },
};

export default loginApi;
