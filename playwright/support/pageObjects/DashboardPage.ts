import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
    private readonly welcomeText: Locator;
    private readonly userDropdown: Locator;
    private readonly logoutBtn: Locator;
    private readonly pimMenu: Locator;

    constructor(public readonly page: Page) {
        this.welcomeText = this.page.locator('h6:has-text("Dashboard")');
        this.userDropdown = this.page.locator('p.oxd-userdropdown-name');
        this.logoutBtn = this.page.getByRole('menuitem', { name: 'Logout' });
        this.pimMenu = this.page.getByRole('link', { name: 'PIM' });
    }

    async gotoDashboardPage() {
        await this.page.goto('/web/index.php/dashboard/index');
    }
    async verifyDashboardLoaded() {
        await expect(this.welcomeText).toBeVisible();
    }
    async logout() {
        await this.userDropdown.click();
        await this.logoutBtn.click();
        await expect(this.page).toHaveURL(/auth\/login/);
    }
    async goToPIM() {
        await this.pimMenu.click();
        await this.page.waitForURL(/\/pim/);
    }
}