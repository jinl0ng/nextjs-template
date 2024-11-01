import { expect, test } from "@playwright/experimental-ct-react";

import { ChartComp } from "@/app/[locale]/test/chart-comp";

test("should work", async ({ mount }) => {
  const component = await mount(<ChartComp />);
  await expect(component).toContainText("Showing total v");
});
