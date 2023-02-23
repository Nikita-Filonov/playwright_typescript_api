import test, { APIRequestContext, APIResponse } from '@playwright/test';
import { APIRoutes } from '../../utils/constants/routes';
import { APIClient } from '../../utils/types/api/client';
import { AuthUser } from '../../utils/types/authentication';
import { getDefaultAPIContext } from '../context/default-context';

class AuthAPIClient implements APIClient {
  constructor(public context: APIRequestContext) {}

  async getAuthTokenApi(data: AuthUser): Promise<APIResponse> {
    const stepName = `Getting token for user with email "${data.email}" and password "${data.password}"`;

    return await test.step(stepName, async () => {
      return await this.context.post(APIRoutes.Auth, { data });
    });
  }

  async getAuthToken(data: AuthUser): Promise<string> {
    // Should be used like this:

    // const response = await this.getAuthTokenApi(data);
    // const json = await response.json();

    // expect(response.status()).toBe(200);

    // return json.token;

    return 'token';
  }
}

export const getAuthAPIClient = async (): Promise<AuthAPIClient> => {
  const defaultContext = await getDefaultAPIContext();
  return new AuthAPIClient(defaultContext);
};
