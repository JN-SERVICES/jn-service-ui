import { AuthProvider } from 'react-admin';
import { isAxiosError } from 'axios';
import {
  SigninProviderType,
  firebaseAuthProvider,
} from './firebase-auth-provider';
import { cacheProvider } from './cache-provider';

export const authProvider: AuthProvider = {
  login: async (data: SigninProviderType) => {
    return firebaseAuthProvider.signIn(data);
  },
  logout: () => {
    return firebaseAuthProvider.signOut();
  },
  checkAuth: async () => {
    //TODO
    return cacheProvider.firebaseAuth.isPresent()
      ? Promise.resolve()
      : Promise.reject();
  },
  checkError: (error) => {
    if (isAxiosError(error) && error?.response?.status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
  // getIdentity: () => Promise.resolve(),
};
