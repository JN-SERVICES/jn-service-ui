// import { FirebaseOptions, initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const FIREBASE_CONFIG: FirebaseOptions = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

// export const FIREBASE_APP = initializeApp(FIREBASE_CONFIG);
// export const FIREBASE_AUTH = getAuth();

export const FIREBASE_CONFIG = {};
export const FIREBASE_APP = class FirebaseApp {};
export const FIREBASE_AUTH = class FirebaseAuth {};
