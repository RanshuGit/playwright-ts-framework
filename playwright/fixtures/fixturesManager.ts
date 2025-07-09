import { test as base } from '@playwright/test';
import { Utils } from '../support/utilities/utils';
import { LoginPage } from '../support/pageObjects/LoginPage';
import { DashboardPage } from '../support/pageObjects/DashboardPage';
import { PimPage } from '../support/pageObjects/PimPage';

type MyFixtures = {
    utils: Utils
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    pimPage: PimPage;
};

export const test = base.extend<MyFixtures>({
    utils: async ({ page }, use) => {
        await use(new Utils(page));
    },
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