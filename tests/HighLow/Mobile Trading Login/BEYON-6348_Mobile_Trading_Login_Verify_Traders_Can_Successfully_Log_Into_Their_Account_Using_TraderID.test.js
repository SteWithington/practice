import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-6348 - Mobile Trading - Login - To Verify Traders Can Login Successfully Using UserID', async ({ page, context }) => {
        
    //Launch The HighLow Public Website
    const mobile = await highlowSharedTestActions.launchMobileHighLowPublicWebsite();

    //Get Trader Username For Future Use
    const env = await mobile.url();
    const traderUsername = await highlowSharedTestActions.getTestTraderID(env);
    console.log("Trader Account In Use = " + traderUsername);

    //Access the Login Screen
    await highlowSharedTestActions.launchMobileTradingLoginScreen(mobile);
    await page.close();
    await mobile.bringToFront();

    //Click Login Without Any Credentials Added
    const mobileTradingLoginScreenSubmitButton = mobile.locator('//*[@id="pwa-login"]');
    await mobileTradingLoginScreenSubmitButton.click();
    const mobileTradingLoginUsernameRequiredErrorPart1 = mobile.locator('//*[contains(@class, "style_formContainer_")]/div[2]/div[1]/div[2]/div/div/span[contains(text(), "必須入力の")]');
    await expect(mobileTradingLoginUsernameRequiredErrorPart1).toBeVisible();
    const mobileTradingLoginUsernameRequiredErrorPart2 = mobile.locator('//*[contains(@class, "style_formContainer_")]/div[2]/div[1]/div[2]/div/div/span[contains(text(), "項目です")]');
    await expect(mobileTradingLoginUsernameRequiredErrorPart2).toBeVisible();
    const mobileTradingLoginPasswordRequiredErrorPart1 = mobile.locator('//*[contains(@class, "style_formContainer_")]/div[2]/div[2]/div[2]/div/div/span[contains(text(), "必須入力の")]');
    await expect(mobileTradingLoginPasswordRequiredErrorPart1).toBeVisible();
    const mobileTradingLoginPasswordRequiredErrorPart2 = mobile.locator('//*[contains(@class, "style_formContainer_")]/div[2]/div[2]/div[2]/div/div/span[contains(text(), "項目です")]');
    await expect(mobileTradingLoginPasswordRequiredErrorPart2).toBeVisible();

    //Login to site Using TraderID
    await highlowSharedTestActions.loginMobileTraderUserID(mobile, traderUsername);
});