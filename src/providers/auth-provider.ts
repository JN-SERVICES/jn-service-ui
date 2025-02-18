import { AuthProvider } from 'react-admin';
import { isAxiosError } from 'axios';
import {
  firebaseAuthProvider,
  SigninProviderType,
  USER_TOKEN_ID_CACHE_NAME,
} from './firebase-auth-provider';

export const authProvider: AuthProvider = {
  login: async (data: SigninProviderType) => {
    return firebaseAuthProvider.signIn(data);
  },
  logout: () => {
    return firebaseAuthProvider.signOut();
  },
  checkAuth: async () => {
    //TODO
    return localStorage.getItem(USER_TOKEN_ID_CACHE_NAME)
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
