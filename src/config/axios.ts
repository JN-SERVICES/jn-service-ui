import Axios from 'axios';
import { Env } from './env';
import { cacheProvider } from '../providers';

export const getAxios = () => {
  return Axios.create({
    baseURL: Env.API_URL,
    headers: {
      Authorization: `Bearer ${cacheProvider.firebaseAuth.get()?.tokenId}`,
    },
  });
};
