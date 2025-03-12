import { AuthProvider } from 'react-admin';
import { isAxiosError } from 'axios';
import {
  SigninProviderType,
  firebaseAuthProvider,
} from './firebase-auth-provider';
import { securityApi } from './api';
import { cacheProvider } from './cache-provider';
import { unwrap } from './utils';

const TO_SIGNOUT_STATUS_CODES = [403];
const shouldSignout = (error: any) => {
  return (
    isAxiosError(error) && TO_SIGNOUT_STATUS_CODES.includes(error.status ?? 0)
  );
};
export const authProvider: AuthProvider = {
  login: async (data: SigninProviderType) => {
    return firebaseAuthProvider.signIn(data);
  },
  logout: () => {
    return firebaseAuthProvider.signOut();
  },
  checkAuth: async () => {
    try {
      const whoami = await unwrap(() => securityApi().whoami());
      cacheProvider.whoami.replace(whoami);
    } catch (e) {
      if (shouldSignout(e)) {
        return Promise.reject();
      }
    }
    return Promise.resolve();
  },
  checkError: (error) => {
    return shouldSignout(error) ? Promise.reject() : Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
  // getIdentity: () => Promise.resolve(),
};
