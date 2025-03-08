import {
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { cacheProvider } from './cache-provider';
import { FIREBASE_AUTH_MODULE } from '../config/firebase-conf';

export type SigninProviderType =
  | {
      email: string;
      password: string;
    }
  | { new (): GoogleAuthProvider };

const cacheCredential = async (credential: UserCredential) => {
  const user = credential?.user;
  if (!user) return credential;
  cacheProvider.firebaseAuth.replace({
    id: user.uid,
    email: user.email!,
    tokenId: await user.getIdToken(),
  });
  return credential;
};

export const firebaseAuthProvider = {
  signIn: async (provider: SigninProviderType) => {
    if ('password' in provider) {
      const { email, password } = provider;
      return cacheCredential(
        await signInWithEmailAndPassword(FIREBASE_AUTH_MODULE, email, password)
      );
    }
    return cacheCredential(
      await signInWithPopup(FIREBASE_AUTH_MODULE, new provider())
    );
  },
  signOut: async () => {
    await firebaseSignOut(FIREBASE_AUTH_MODULE);
    cacheProvider.invalidate();
  },
};
