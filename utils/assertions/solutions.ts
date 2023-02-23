import { expect, test } from '@playwright/test';

type AssertStatusCode = {
  actual: number;
  expected: number;
  api: string;
};

export const assertStatusCode = async ({ actual, expected, api }: AssertStatusCode): Promise<void> => {
  await test.step(`Checking that response status code of API "${api}" equal to ${expected}`, async () => {
    expect(actual).toBe(expected);
  });
};
