import { AxiosInstance, AxiosResponse } from 'axios';
import axios, { AxiosRequestConfig } from 'axios';

// headers nếu ở dạng JSON thì cần 'Content-Type': 'application/json', còn form-data thì ko cần khai báo header
export const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 40000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiServices: AxiosInstance = axios.create(axiosConfig);

// Add a request interceptor
apiServices.interceptors.request.use(
  // function (config: AxiosRequestConfig) {
  function (config: any) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
apiServices.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //return Promise.reject(error);
    return error?.response?.data;
  },
);

export default apiServices;
