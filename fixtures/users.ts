import { Fixtures } from '@playwright/test';
import { AuthUser } from '../utils/types/api/authentication';

export type UsersFixture = {
  testUser: AuthUser;
};

export const usersFixture: Fixtures<UsersFixture> = {
  testUser: async ({}, use) => {
    await use({ email: process.env.TEST_USER_EMAIL, password: process.env.TEST_USER_PASSWORD });
  }
};
