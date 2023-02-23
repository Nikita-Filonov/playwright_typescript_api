declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      TEST_USER_EMAIL: string;
      TEST_USER_PASSWORD: string;
    }
  }
}

export {};
