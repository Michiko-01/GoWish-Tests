import { Page, Locator, expect } from "@playwright/test";

export class DashboardModel {
  readonly page: Page;
  readonly addItemButton: Locator;
  readonly verifyItemIsAdded: Locator;
  readonly verifyItemisDeleted: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addItemButton = page.getByTestId("new-wish-btn");
  }

  async clickAddWishButton() {
    await this.addItemButton.click();
  }

  async verifyToastNotification(message: string) {
    await expect(this.page.getByText(message)).toBeVisible();
  }

  async selectWishlistOverview(wishlistName: string) {
    await this.page
      .getByTestId("main-container")
      .getByText(new RegExp(`^${wishlistName}`))
      .click();
  }
}
