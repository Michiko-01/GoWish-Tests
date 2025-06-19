import { Page, Locator } from "@playwright/test";

export class WishItemModel {
  readonly page: Page;
  readonly enterProductLinkTextBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterProductLinkTextBox = page.getByRole("textbox", {
      name: "Indsæt produktlink",
    });
  }

  async addItemToWishlist(link: string, wishlistName: string) {
    await this.enterProductLinkTextBox.fill(link);
    await this.page
      .getByTestId("wishlists-select")
      .getByText(new RegExp(`^${wishlistName}`))
      .click();
  }
}
