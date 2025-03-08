import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { Env } from './env';

export const FIREBASE_CONFIG: FirebaseOptions = {
  apiKey: Env.FIREBASE_API_KEY,
  authDomain: Env.FIREBASE_AUTH_DOMAIN,
  projectId: Env.FIREBASE_PROJECT_ID,
  storageBucket: Env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Env.FIREBASE_MESSAGING_SENDER_ID,
  appId: Env.FIREBASE_APP_ID,
  measurementId: Env.FIREBASE_MEASUREMENT_ID,
};

export const FIREBASE_APP = initializeApp(FIREBASE_CONFIG);

/* firebaseAuth module */
export const FIREBASE_AUTH_MODULE = getAuth(FIREBASE_APP);
