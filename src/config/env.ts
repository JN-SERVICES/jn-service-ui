const createEnv = <T extends string>(envs: T[]): Record<T, string> => {
  return envs.reduce(
    (acc, envName) => {
      acc[envName] = process.env[envName] as string;
      return acc;
    },
    {} as Record<T, string>
  );
};

export const Env = createEnv([
  'API_URL',
  'FIREBASE_APP_ID',
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_STORAGE_BUCKET',
  'FIREBASE_MESSAGING_SENDER_ID',
  'FIREBASE_MEASUREMENT_ID',
]);
