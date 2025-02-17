import { AuthProvider } from 'react-admin';
import {
  auth,
  provider,
  signInWithPopup,
  signOut,
} from '../conf/firebase-conf';
import { User } from 'firebase/auth';

const authProvider: AuthProvider = {
  login: async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user: User = result.user;
      localStorage.setItem('firebase_token', await user.getIdToken());
      localStorage.setItem('user', JSON.stringify(user));
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },

  logout: () => {
    return signOut(auth)
      .then(() => {
        localStorage.removeItem('firebase_token');
        localStorage.removeItem('user');
        return Promise.resolve();
      })
      .catch((error) => Promise.reject(error));
  },

  checkAuth: () => {
    return localStorage.getItem('firebase_token')
      ? Promise.resolve()
      : Promise.reject();
  },

  checkError: (error) => {
    console.error(error);
    return Promise.reject();
  },

  getPermissions: () => Promise.resolve(),
  getIdentity: () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return Promise.resolve({
      id: user.uid,
      fullName: user.displayName,
      avatar: user.photoURL,
    });
  },
};

export default authProvider;
