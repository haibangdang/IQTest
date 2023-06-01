import ApiService from '../../utils/network';

const baseRequestApi = {
  getBaseRequest(): Promise<any> {
    return ApiService.get(`/search?country=United+States`);
  },
};

export default baseRequestApi;
