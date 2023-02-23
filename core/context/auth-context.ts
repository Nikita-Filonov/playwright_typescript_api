import { APIRequestContext, request } from '@playwright/test';
import { APIAuth } from '../../utils/types/authentication';
import { getAuthAPIClient } from '../api/authentication-api';

export const getAuthAPIContext = async ({ user, authToken }: APIAuth): Promise<APIRequestContext> => {
  let extraHTTPHeaders: { [key: string]: string } = {
    accept: '*/*',
    'Content-Type': 'application/json'
  };

  if (!user && !authToken) {
    throw Error('Provide "user" or "authToken"');
  }

  if (user && !authToken) {
    const authClient = await getAuthAPIClient();
    const token = await authClient.getAuthToken(user);

    extraHTTPHeaders = { ...extraHTTPHeaders, token };
  }
  if (authToken && !user) {
    extraHTTPHeaders = { ...extraHTTPHeaders, token: authToken };
  }

  return await request.newContext({
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders
  });
};
