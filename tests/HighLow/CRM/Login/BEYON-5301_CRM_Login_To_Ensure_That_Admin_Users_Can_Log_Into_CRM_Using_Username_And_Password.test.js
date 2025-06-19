import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-5301 - CRM - Login - To Ensure That Admin Users Can Log Into CRM Using Username And Password', async ({ page, context }) => {

    // Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    // Launch HighLow CRM
    const crmTab = await highlowSharedTestActions.launchHighLowCRM(page);

    //Attempt To Access With No Credentials
    const crmUsername = crmTab.locator('//*[@name="_username"]');
    await crmUsername.fill(" ");
    const crmPassword = crmTab.locator('//*[@name="_password"]');
    await crmPassword.fill(" ");
    const crmLoginButton = crmTab.locator('//button');
    await crmLoginButton.click();
    const crmBadCredsMessage = await crmTab.locator('//*[@id="error"]');
    await expect(crmBadCredsMessage).toBeVisible();
    await expect(crmBadCredsMessage).toContainText("Error!");
    await expect(crmBadCredsMessage).toContainText("Bad credentials");
    await crmTab.reload();

    //Attempt To Access With Invalid Username And Password
    await crmUsername.fill("invalidusername");
    await crmPassword.fill("xxxxxxx");
    await crmLoginButton.click();
    await expect(crmBadCredsMessage).toBeVisible();
    await expect(crmBadCredsMessage).toContainText("Error!");
    await expect(crmBadCredsMessage).toContainText("Bad credentials");
    await crmTab.reload();

    //Attempt To Access With Invalid Username
    await crmUsername.fill("invalidusername");
    await crmPassword.fill("kYf5WLm9");
    await crmLoginButton.click();
    await expect(crmBadCredsMessage).toBeVisible();
    await expect(crmBadCredsMessage).toContainText("Error!");
    await expect(crmBadCredsMessage).toContainText("Bad credentials");
    await crmTab.reload();

    //Attempt To Access With Invalid Password
    await crmUsername.fill("automatedtest");
    await crmPassword.fill("xxxxxx");
    await crmLoginButton.click();
    await expect(crmBadCredsMessage).toBeVisible();
    await expect(crmBadCredsMessage).toContainText("Error!");
    await expect(crmBadCredsMessage).toContainText("Bad credentials");
    await crmTab.reload();

    //Log into HighLow CRM As An Admin User
    await highlowSharedTestActions.loginHighLowCRMAdmin(crmTab);

    // Check Page Title Message is Displayed
    const crmHomeScreenDefaultScreenName = crmTab.locator('//h2[contains(@class, "page-title") and contains(text(), "Transaction Dashboard")]');
    await expect(crmHomeScreenDefaultScreenName).toHaveText("Transaction Dashboard");
    await expect(crmTab).toHaveURL(/crm/);
    const title = await crmTab.title();
    await expect(title).toMatch(/Transaction Dashboard - HighLow Binary Options/);
});