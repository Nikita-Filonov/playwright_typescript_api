import { expect, test } from '@playwright/test';

type ExpectToEqual<T> = {
  actual: T;
  expected: T;
  description: string;
};

type ExpectStatusCode = { api: string } & Omit<ExpectToEqual<number>, 'description'>;

export const expectToEqual = async <T>({ actual, expected, description }: ExpectToEqual<T>) => {
  await test.step(`Checking that "${description}" is equal to "${expected}"`, async () => {
    expect(actual).toEqual(expected);
  });
};

export const expectStatusCode = async ({ actual, expected, api }: ExpectStatusCode): Promise<void> => {
  await test.step(`Checking that response status code for API "${api}" equal to ${expected}`, async () => {
    await expectToEqual({ actual, expected, description: 'Response Status code' });
  });
};
