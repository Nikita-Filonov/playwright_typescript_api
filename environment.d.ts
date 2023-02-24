declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CI: string;
      ENV_NAME: string;
      BASE_URL: string;
      TEST_USER_EMAIL: string;
      TEST_USER_PASSWORD: string;
      ALLURE_RESULTS_FOLDER: string;
    }
  }
}

export {};
