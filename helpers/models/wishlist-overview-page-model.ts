import { Page, Locator } from "@playwright/test";

export class WishlistOverviewModel {
  readonly page: Page;
  readonly optionsButton: Locator;
  readonly deleteWishButton: Locator;
  readonly deleteLinkDialog: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.optionsButton = page.getByTestId("more-button-popover");
    this.deleteWishButton = page.getByText("Slet ønske");
    this.deleteLinkDialog = page.getByText("Slet ønske").nth(2);
    this.deleteButton = page.getByRole("button", { name: "Slet" });
  }

  async deleteItemFromWishlistOverview() {
    await this.optionsButton.click();
    await this.deleteWishButton.click();
    await this.deleteLinkDialog.click();
    await this.deleteButton.click();
  }
}
