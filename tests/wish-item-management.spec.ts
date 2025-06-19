import { test } from "../helpers/fixtures/base-fixture";

test.describe("GoWish management wishList flow", () => {
  const wishlistUrl = "https://www.scandicplus.dk/en/products/silke-sovemaske";
  const wishlistName = "My wishlist";

  test.beforeEach("Open the page that already login", async ({ page }) => {
    await page.goto("/");
  });

  test("Verify user is able to add new wish item", async ({
    dashboardModel,
    wishItemModel,
  }) => {
    await dashboardModel.clickAddWishButton();
    await wishItemModel.addItemToWishlist(wishlistUrl, wishlistName);
    await dashboardModel.verifyToastNotification("Ønsket blev oprettet på");
  });

  test("Verify user is able to delete wish item from overview", async ({
    dashboardModel,
    wishlistOverviewModel,
  }) => {
    await dashboardModel.selectWishlistOverview(wishlistName);
    await wishlistOverviewModel.deleteItemFromWishlistOverview();
    await dashboardModel.verifyToastNotification("Ønsket blev slettet");
  });
});
