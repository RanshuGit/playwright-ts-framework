import { test } from '../fixtures/fixturesManager';

test.describe('Pim Search Test', () => {
    test('Search employee in PIM', async ({ dashboardPage, pimPage }) => {
        await dashboardPage.gotoDashboardPage();
        await dashboardPage.verifyDashboardLoaded();
        await dashboardPage.goToPIM();
        await pimPage.searchByEmployeeName('Jthn Lame');
    });
});
