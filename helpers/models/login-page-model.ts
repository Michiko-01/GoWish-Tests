import { Locator, Page } from "@playwright/test";

export class LoginPageModel {
  readonly page: Page;
  readonly loginWithEmail: Locator;
  readonly loginButton: Locator;
  readonly userName: Locator;
  readonly userPassword: Locator;
  readonly loginDialog: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole("button", { name: "Log ind" });

    this.loginWithEmail = page.getByRole("button", {
      name: " Fortsæt med e-mail",
    });
    this.userName = page.getByRole("textbox", { name: "E-mail" });
    this.userPassword = page.getByTestId("loginPasswordInput");
    this.loginDialog = page
      .getByRole("dialog")
      .getByRole("button", { name: "Log ind" });
  }

  async clickLogin() {
    await this.loginButton.click();
  }
  async loginWithEmailPage() {
    await this.loginWithEmail.click();
  }
  async userCredentials(Name: string, Password: string) {
    await this.userName.fill(Name);
    await this.userPassword.fill(Password);
  }
  async clickLoginButton() {
    await this.loginDialog.click();
  }
}
