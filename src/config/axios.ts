import axios, { AxiosInstance } from 'axios';
import { Env } from './env';

let axiosInstance: AxiosInstance | null;
export const getAxios = (): AxiosInstance => {
  if (axiosInstance === null) {
    return axios.create({ baseURL: Env.API_URL });
  }

  // axiosInstance.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     if (error.response) {
  //       const status = error.response.status;
  //       const location = error.response.headers['location'];

  //       if ((status === 302 || status === 307) && location) {
  //         window.location.href = location;
  //       }
  //     }
  //     return error;
  //   });
  return axiosInstance;
};
