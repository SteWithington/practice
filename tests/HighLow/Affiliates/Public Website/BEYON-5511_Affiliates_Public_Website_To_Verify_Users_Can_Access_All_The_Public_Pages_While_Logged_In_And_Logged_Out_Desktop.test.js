import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-5511 - Affiliates - Public Website - To Verify Users Can Access All The Public Pages While Logged In And Logged Out - Desktop', async ({ page, context }) => {

    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Get Affiliate Details For Future Use
    const env = testInfo.project.use.baseURL;
    const affiliateID = await highlowSharedTestActions.getTestAffiliateID(env);
    console.log("Affiliate Account In Use = " + affiliateID);
    
    //Launch Affiliates Site
    if (env.match(/stage.*/)) {
        await page.goto("https://affiliatesstage.highlowmi.dev/ja/"); //STAGE Url
    } else if (env.match(/test1.*/)) {
        await page.goto("https://affiliatestest1.highlowmi.dev/ja/"); //TEST1 Url
    } else {
        await page.goto("https://affiliates.highlow.com/ja/"); //PROD Url
    }

    //Click The Affiliate Homepage
    const publicWebsiteAffiliateLink = page.locator('//span[contains(@class, "main-menu-label main-menu-affiliates-label")]');
    await publicWebsiteAffiliateLink.click();
    const affiliatesPublicWebsiteHomePage = page.locator('(//a[@href="sign-up"][contains(text(), "無料登録はこちら")])[1]');
    await expect(affiliatesPublicWebsiteHomePage).toBeVisible();
    await expect(page).toHaveURL(/ja/);

    //Click The Marketing Tools
    const publicWebsiteMarketingTools = page.locator('//span[contains(@class, "main-menu-label main-menu-marketing-tools-label")]');
    await publicWebsiteMarketingTools.click();
    await expect(page).toHaveURL(/ja\/marketing-tools/);

    //Click The FAQ
    const publicWebsiteFAQ = page.locator('//span[contains(@class, "main-menu-label main-menu-faq-label")]');
    await publicWebsiteFAQ.click();
    await expect(page).toHaveURL(/affiliate-help/);
    await expect(page).toHaveURL(/support\/home/);

    //Click The Browser 'Back' Button
    await page.goBack();

    //Click The Contact Us
    const publicWebsiteContactUs = page.locator('//span[contains(@class, "main-menu-label main-menu-contact-label")]');
    await publicWebsiteContactUs.click();
    await expect(page).toHaveURL(/ja\/contact-us/);

    //Click on Sign Up button
    const publicWebsiteSignUp = page.locator('//span[contains(@class, "main-menu-label main-menu-signup-label")]');
    await publicWebsiteSignUp.click();
    await expect(page).toHaveURL(/ja\/sign-up/);

    //Navigate back to the previous page
    await page.goBack()

    //Click The Affiliate Homepage
    await publicWebsiteAffiliateLink.click();

    //Login Japanese Affiliate
    await highlowSharedTestActions.launchDesktopAffiliateLogin(page);
    await highlowSharedTestActions.loginDesktopAffiliate(page, affiliateID);

    //Click the HighLow Logo
    const affiliateDashboardHighLowLogo = page.locator('//div[@class="navbar-header"]/a[1]');
    await expect(affiliateDashboardHighLowLogo).toBeVisible();
    await affiliateDashboardHighLowLogo.click();
    const affiliatePublicWebsite = page.locator('//*[@id="common-nav"]');
    await expect(affiliatePublicWebsite).toBeVisible();

    //Click The Marketing Tools
    await publicWebsiteMarketingTools.click();
    await expect(page).toHaveURL(/ja\/marketing-tools/);

    //Click The FAQ
    await publicWebsiteFAQ.click();
    await expect(page).toHaveURL(/affiliate-help/);
    await expect(page).toHaveURL(/support\/home/);

    //Click The Browser 'Back' Button
    await page.goBack()

    //Click The Contact Us
    await publicWebsiteContactUs.click();
    await expect(page).toHaveURL(/ja\/contact-us/);
});