import { request } from '@playwright/test';

export const getContextWithAuth = async () => {
    return await request.newContext({
        baseURL: process.env.BASE_URL,
        extraHTTPHeaders: {
          'Accept': 'application/json',
          'Authorization': `Token ${process.env.API_TOKEN}`,
        },
      });
}