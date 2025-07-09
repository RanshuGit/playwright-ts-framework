import { test as setup, expect } from '@playwright/test';
import config from '../../config/env-config'
import path from 'path';

const authFile = path.join(__dirname, '../storage/.auth/user.json');

setup('Setup Authentication', async ({ page }) => {
  await page.goto(config.envData.baseUrl + '/web/index.php/auth/login');
  await page.locator('input[name="username"]').fill(config.envData.DEFAULT_USER_EMAIL);
  await page.locator('input[name="password"]').fill(config.envData.DEFAULT_USER_PASSWORD);
  await page.locator('button[type="submit"]').click();
  
  await page.waitForURL(config.envData.baseUrl + '/web/index.php/dashboard/index');

  await page.context().storageState({ path: authFile });
});