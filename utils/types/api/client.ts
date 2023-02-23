import { APIRequestContext } from '@playwright/test';

export interface APIClient {
  context: APIRequestContext;
}
