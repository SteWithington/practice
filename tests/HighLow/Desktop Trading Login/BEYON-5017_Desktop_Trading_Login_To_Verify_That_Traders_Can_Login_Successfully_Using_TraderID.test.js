import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-5017 - Desktop Trading - Login - To Verify Traders Can Login Successfully Using UserID', async ({ page, context }) => {

    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);
        
    //Get Trader Username For Future Use
    const env = await page.url();
    const traderUsername = await highlowSharedTestActions.getTestTraderID(env);
    console.log("Trader Account In Use = " + traderUsername);

    //Access the Login Screen
    await highlowSharedTestActions.launchDesktopTradingLoginScreen(page);

    //Click Login Without Any Credentials Added
    const desktopTradingLoginScreenSubmitButton = page.locator('//*[@id="login-submit-button"]');
    await desktopTradingLoginScreenSubmitButton.click();
    const desktopLoginUsernameRequiredFieldsError = page.locator('(//div[contains(text(), "必須項目")])[1]');
    await expect(desktopLoginUsernameRequiredFieldsError).toBeVisible();
    const desktopLoginPasswordRequiredFieldsError = page.locator('(//div[contains(text(), "必須項目")])[2]');
    await expect(desktopLoginPasswordRequiredFieldsError).toBeVisible();
    
    //Login to site Using TraderID
    await highlowSharedTestActions.loginDesktopTraderUserID(page, traderUsername);
});       