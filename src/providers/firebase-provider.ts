// import {
//   GoogleAuthProvider,
//   UserCredential,
//   signOut as firebaseSignOut,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
// } from 'firebase/auth';

// DUMMY_TYP
class DummyGoogleAuthProvider {}
type UserCredential = {
  user?: {
    uid: string;
    email: string;
    getIdToken: () => Promise<string>;
  };
};

export type SigninProviderType =
  | {
      email: string;
      password: string;
    }
  | { new (): DummyGoogleAuthProvider };

const USER_ID_CACHE_NAME = 'auth-user-id';
const TOKEN_ID_CACHE_NAME = 'auth-token-id';
const USER_EMAIL_CACHE_NAME = 'auth-user-email';

const getCachedCredential = () => ({
  token: localStorage.getItem(TOKEN_ID_CACHE_NAME),
  id: localStorage.getItem(USER_ID_CACHE_NAME),
  email: localStorage.getItem(USER_EMAIL_CACHE_NAME),
});

const cacheCredential = async (credential: UserCredential) => {
  const user = credential?.user;
  if (!user) return credential;
  localStorage.setItem(TOKEN_ID_CACHE_NAME, await user.getIdToken());
  localStorage.setItem(USER_ID_CACHE_NAME, user.uid);
  localStorage.setItem(USER_EMAIL_CACHE_NAME, user.email!);
  return credential;
};

const signIn = async (provider: SigninProviderType) => {
  console.log(provider);
  return cacheCredential({});
};

const signup = async (provider: SigninProviderType) => {
  console.log(provider);
  //TODO
};

const signOut = async () => {
  //TODO
  localStorage.clear();
};

const resetPassword = async (email: string) => {
  console.log(email);
  //TODO
};

export const firebaseAuthProvider = {
  signIn,
  signOut,
  signup,
  resetPassword,
  cacheCredential,
  getCachedCredential,
};
