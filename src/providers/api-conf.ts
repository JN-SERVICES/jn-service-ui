import { Configuration } from '@/gen/jn-service-api-client';
import { Env } from '@/config/env';
import { cacheProvider } from './cache-provider';

export const getConfiguration = () => {
  const conf = new Configuration();
  conf.accessToken = cacheProvider.firebaseAuth.get()?.tokenId ?? '';
  conf.basePath = Env.API_URL;
  return conf;
};
