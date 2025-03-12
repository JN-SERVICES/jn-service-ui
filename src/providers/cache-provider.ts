import { Whoami } from '@/gen/jn-service-api-client';
import { CacheObject, createCacheInLocalStorage } from '../utils/cache';

const firebaseIdCache = createCacheInLocalStorage<string>('firebase-user-id');
const firebaseTokenIdCache =
  createCacheInLocalStorage<string>('firebase-token-id');
const firebaseEmailCache = createCacheInLocalStorage<string>('firebase-email');
const whoamiCache = createCacheInLocalStorage<Whoami>('whoami');

export const cacheProvider = {
  invalidate: () => {
    cacheProvider.firebaseAuth.invalidate();
  },
  whoami: { ...whoamiCache },
  firebaseAuth: {
    get: () => ({
      tokenId: firebaseTokenIdCache.get(),
      email: firebaseEmailCache.get(),
      id: firebaseIdCache.get(),
    }),
    replace: (value) => ({
      id: firebaseIdCache.replace(value.id),
      email: firebaseEmailCache.replace(value.email),
      tokenId: firebaseTokenIdCache.replace(value.tokenId),
    }),
    isPresent: () =>
      firebaseIdCache.isPresent() &&
      firebaseTokenIdCache.isPresent() &&
      firebaseEmailCache.isPresent(),
    invalidate: () => {
      firebaseIdCache.invalidate();
      firebaseEmailCache.invalidate();
      firebaseTokenIdCache.invalidate();
    },
  } as CacheObject<{ id: string; tokenId: string; email: string }>,
};
