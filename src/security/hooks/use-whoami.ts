import { cacheProvider } from '@/providers';

export const useWhoami = () => {
  return cacheProvider.whoami.get()!;
};
