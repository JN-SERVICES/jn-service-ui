import {
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FIREBASE_AUTH_MODULE } from '../conf/firebase-conf';

export const USER_ID_CACHE_NAME = 'firebase-auth-user-id';
export const USER_TOKEN_ID_CACHE_NAME = 'firebase-auth-token-id';
export const USER_EMAIL_CACHE_NAME = 'firebase-auth-user-email';

export type SigninProviderType =
  | {
      email: string;
      password: string;
    }
  | { new (): GoogleAuthProvider };

const getCachedCredential = () => ({
  id: localStorage.getItem(USER_ID_CACHE_NAME),
  token: localStorage.getItem(USER_TOKEN_ID_CACHE_NAME),
  email: localStorage.getItem(USER_EMAIL_CACHE_NAME),
});

const cacheCredential = async (credential: UserCredential) => {
  const user = credential?.user;
  if (!user) return credential;
  localStorage.setItem(USER_TOKEN_ID_CACHE_NAME, await user.getIdToken());
  localStorage.setItem(USER_ID_CACHE_NAME, user.uid);
  localStorage.setItem(USER_EMAIL_CACHE_NAME, user.email!);
  return credential;
};

const signIn = async (provider: SigninProviderType) => {
  if ('password' in provider) {
    const { email, password } = provider;
    return cacheCredential(
      await signInWithEmailAndPassword(FIREBASE_AUTH_MODULE, email, password)
    );
  }
  return cacheCredential(
    await signInWithPopup(FIREBASE_AUTH_MODULE, new provider())
  );
};

const signOut = async () => {
  await firebaseSignOut(FIREBASE_AUTH_MODULE);
  localStorage.clear();
};

export const firebaseAuthProvider = {
  signIn,
  signOut,
  cacheCredential,
  getCachedCredential,
};
