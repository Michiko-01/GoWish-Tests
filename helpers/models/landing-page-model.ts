import { Page, Locator } from "@playwright/test";

export class LandingPageModel {
  readonly page: Page;
  readonly acceptCookies: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookies = page.getByRole("button", { name: "Accepter alle" });
  }

  async acceptCookiesPage() {
    await this.acceptCookies.click();
  }
}
