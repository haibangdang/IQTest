import ApiService from '../../utils/network';

const loginApi = {
  requestLoginExecute(loginData: any): Promise<any> {
    console.log('loginData', JSON.stringify(loginData));
    return ApiService.post(`/api/users/login`, JSON.stringify(loginData));
  },
};

export default loginApi;
