import { test as base } from "@playwright/test";
import { WishItemModel } from "../models/wish-item-page-model";
import { DashboardModel } from "../models/dashboard-page-model";
import { WishlistOverviewModel as WishlistOverviewModel } from "../models/wishlist-overview-page-model";

type BaseItemFixtures = {
  wishItemModel: WishItemModel;
  dashboardModel: DashboardModel;
  wishlistOverviewModel: WishlistOverviewModel;
};

export const test = base.extend<BaseItemFixtures>({
  wishItemModel: async ({ page }, use) => {
    await use(new WishItemModel(page));
  },
  dashboardModel: async ({ page }, use) => {
    await use(new DashboardModel(page));
  },
  wishlistOverviewModel: async ({ page }, use) => {
    await use(new WishlistOverviewModel(page));
  },
});

export { expect } from "@playwright/test";
