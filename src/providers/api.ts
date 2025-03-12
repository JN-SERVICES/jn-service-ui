import { SecurityApi } from '@/gen/jn-service-api-client';
import { getConfiguration } from './api-conf';

export const securityApi = () => new SecurityApi(getConfiguration());
