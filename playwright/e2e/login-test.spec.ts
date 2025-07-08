import { test } from '../fixtures/fixturesManager';
import config from "../../config/env-config";

test.describe('Login Test', () => {
  test('Login and validate dashboard', async ({ dashboardPage }) => {
    await dashboardPage.gotoDashboardPage();
    await dashboardPage.verifyDashboardLoaded();
    await dashboardPage.logout();
  });

  test('Invalid login shows error', async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(config.envData.INVALID_USER_EMAIL, config.envData.INVALID_USER_PASSWORD);
    await loginPage.verifyInvalidLoginError();
  });
});