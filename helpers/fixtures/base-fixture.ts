import { test as base } from "@playwright/test";
import { WishItemDialogModel } from "../models/wish-item-dialog-page-model";
import { DashboardModel } from "../models/dashboard-page-model";
import { WishlistOverviewModel as WishlistOverviewModel } from "../models/wishlist-overview-page-model";

type BaseItemFixtures = {
  wishItemDialogModel: WishItemDialogModel;
  dashboardModel: DashboardModel;
  wishlistOverviewModel: WishlistOverviewModel;
};

export const test = base.extend<BaseItemFixtures>({
  wishItemDialogModel: async ({ page }, use) => {
    await use(new WishItemDialogModel(page));
  },
  dashboardModel: async ({ page }, use) => {
    await use(new DashboardModel(page));
  },
  wishlistOverviewModel: async ({ page }, use) => {
    await use(new WishlistOverviewModel(page));
  },
});

export { expect } from "@playwright/test";
