import test from '@playwright/test';
import Ajv, { JSONSchemaType } from 'ajv';

const ajv = new Ajv();

type ValidateSchemaProps<T> = {
  schema: JSONSchemaType<T>;
  json: T | T[];
};

export const validateSchema = async <T>({ schema, json }: ValidateSchemaProps<T>) => {
  await test.step('Validating json schema', async () => {
    const validate = ajv.compile(schema);

    if (!validate(json)) {
      const prettyJson = JSON.stringify(json, null, 2);
      const prettyError = JSON.stringify(validate.errors, null, 2);
      throw Error(`Schema validation error: ${prettyError}\nJSON: ${prettyJson}`);
    }
  });
};
