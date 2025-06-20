import { test } from "../helpers/fixtures/base-fixture";

test.describe("GoWish management wishList flow", () => {
  const wishlistUrl = "https://www.scandicplus.dk/en/products/silke-sovemaske";
  const wishlistName = "My wishlist";

  test.beforeEach("Open the page that already login", async ({ page }) => {
    await page.goto("/");
  });

  test("Verify user is able to add new wish item", async ({
    dashboardModel,
    wishItemDialogModel,
  }) => {
    await dashboardModel.clickAddWishButton();

    await wishItemDialogModel.addItemToWishlist(wishlistUrl, wishlistName);

    await dashboardModel.verifyToastNotification("Ønsket blev oprettet på");
    //TODO: Use API to validate creation of wish item and cleanup.
  });

  test("Verify user is able to delete wish item from overview", async ({
    dashboardModel,
    wishlistOverviewModel,
  }) => {
    //TODO: Use API to create wish item.
    await dashboardModel.selectWishlistOverview(wishlistName);

    await wishlistOverviewModel.deleteItemFromWishlistOverview();

    await dashboardModel.verifyToastNotification("Ønsket blev slettet");
    //TODO: Use API to validate deletion of wish item.
  });
});
