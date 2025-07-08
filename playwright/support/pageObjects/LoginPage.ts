import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginBtn: Locator;
    private readonly errorMessage: Locator;

    constructor(public readonly page: Page) {
        this.usernameInput = this.page.locator('input[name="username"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.loginBtn = this.page.locator('button[type="submit"]');
        this.errorMessage = this.page.locator('.oxd-alert-content-text');
    }

    async gotoLoginPage() {
        await this.page.goto('/');
    }
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
    async verifyInvalidLoginError() {
        await expect(this.errorMessage).toHaveText('Invalid credentials');
    }
}