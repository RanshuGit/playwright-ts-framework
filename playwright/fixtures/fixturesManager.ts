import { test as base } from '@playwright/test';
import { LoginPage } from '../support/pageObjects/LoginPage';
import { DashboardPage } from '../support/pageObjects/DashboardPage';
import { PimPage } from '../support/pageObjects/PimPage';

type MyFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    pimPage: PimPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    pimPage: async ({ page }, use) => {
        await use(new PimPage(page));
    },
});
export { expect } from '@playwright/test';