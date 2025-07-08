import { Page, Locator, expect } from '@playwright/test';

export class PimPage {
  private readonly employeeNameInput: Locator;
  private readonly searchButton: Locator;
  private readonly firstNameColumn: Locator;

  constructor(public readonly page: Page) {
    this.employeeNameInput = this.page.getByRole('textbox', { name: 'Type for hints...' }).first();
    this.searchButton = this.page.getByRole('button', { name: 'Search' });
    this.firstNameColumn = this.page.locator('div.oxd-table-cell:nth-child(3) > div:nth-child(1)').first();
  }

  async searchByEmployeeName(name: string) {
    await this.employeeNameInput.fill(name);
    await this.searchButton.click();
    await expect(this.firstNameColumn).toContainText(name.split(" ")[0]);
  }
}
