import { chromium, type FullConfig } from "@playwright/test";
import { LandingPageModel } from "./helpers/models/landing-page-model";
import { LoginPageModel } from "./helpers/models/login-page-model";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

//Login and save session for authentication
async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL!);

  const landingPage = new LandingPageModel(page);
  await landingPage.acceptCookiesPage();

  const loginPage = new LoginPageModel(page);
  await loginPage.clickLogin();
  await loginPage.loginWithEmailPage();
  await loginPage.userCredentials(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!,
  );
  await loginPage.clickLoginButton();

  // Ensure sesssions is started before saving it
  await page.waitForLoadState("networkidle");
  await page.context().storageState({ path: storageState as string });

  await browser.close();
}

export default globalSetup;
