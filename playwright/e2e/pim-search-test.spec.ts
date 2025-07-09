import { test } from '../fixtures/fixturesManager';

test.describe('PIM Search Test', () => {
    test('Search employee in PIM', async ({ utils, dashboardPage, pimPage }) => {
        const data = utils.jsonParser('pimsearchdata.json');
        for (const details of data) {
            await dashboardPage.gotoDashboardPage();
            await dashboardPage.verifyDashboardLoaded();
            await dashboardPage.goToPIM();
            await pimPage.searchByEmployeeName(details.employeeName);
        }
    });
});
