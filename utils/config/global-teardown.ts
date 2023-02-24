import { FullConfig } from '@playwright/test';
import { createAllureEnvironmentFile } from '../reporters/allure';

async function globalTeardown(_: FullConfig): Promise<void> {
  createAllureEnvironmentFile();
}

export default globalTeardown;
