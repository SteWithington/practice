import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-54791 - Affiliates - Public Website - To Verify Users Can Access All The Public Pages While Logged In And Logged Out - Mobile', async ({ page, context }) => {

    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Get Affiliate Details For Future Use
    const env = testInfo.project.use.baseURL;
    const affiliateID = await highlowSharedTestActions.getTestAffiliateID(env);
    console.log("Affiliate Account In Use = " + affiliateID);
    
    //Launch Mobile Affiliates Site
    const mobile = await highlowSharedTestActions.launchMobileAffiliatePublicWebsite(page);
    await page.close();
    await mobile.bringToFront();

    //Expand The Hamburger Menu
    const affiliatePublicWebsiteMobileHamburgerMenuButton = mobile.locator('//button[@data-toggle-class="show-mobile-menu"]');
    await affiliatePublicWebsiteMobileHamburgerMenuButton.click();
    const affiliatePublicWebsiteMobileHamburgerMenu = mobile.locator('//div[@id="main-menu"]');
    await expect(affiliatePublicWebsiteMobileHamburgerMenu).toBeVisible();

    //Click The Affiliate Homepage
    const publicWebsiteAffiliateLink = mobile.locator('//span[contains(@class, "main-menu-label main-menu-affiliates-label")]');
    await publicWebsiteAffiliateLink.click();
    const affiliatesPublicWebsiteSignUpButton = mobile.locator('(//a[@href="sign-up"][contains(text(), "無料登録はこちら")])[1]');
    await expect(affiliatesPublicWebsiteSignUpButton).toBeVisible();
    await expect(mobile).toHaveURL(/ja/);

    //Click The HighLow Logo
    const affiliatePublicWebsiteMobileHighLowLogo = mobile.locator('//a[contains(@href, "/ja/") and contains(@class, "logo")]');
    await affiliatePublicWebsiteMobileHighLowLogo.click();
    await expect(affiliatesPublicWebsiteSignUpButton).toBeVisible();

    //Expand The Hamburger Menu
    await affiliatePublicWebsiteMobileHamburgerMenuButton.click();
    await expect(affiliatePublicWebsiteMobileHamburgerMenu).toBeVisible();

    //Click The Marketing Tools
    const publicWebsiteMarketingTools = mobile.locator('//span[contains(@class, "main-menu-label main-menu-marketing-tools-label")]');
    await publicWebsiteMarketingTools.click();
    await expect(mobile).toHaveURL(/ja\/marketing-tools/);

    //Click The HighLow Logo
    await affiliatePublicWebsiteMobileHighLowLogo.click();
    await expect(affiliatesPublicWebsiteSignUpButton).toBeVisible();

    //Expand The Hamburger Menu
    await affiliatePublicWebsiteMobileHamburgerMenuButton.click();
    await expect(affiliatePublicWebsiteMobileHamburgerMenu).toBeVisible();

    //Click The FAQ
    const publicWebsiteFAQ = mobile.locator('//span[contains(@class, "main-menu-label main-menu-faq-label")]');
    await publicWebsiteFAQ.click();
    await expect(mobile).toHaveURL(/affiliate-help/);
    await expect(mobile).toHaveURL(/support\/home/);

    //Click The Browser 'Back' Button
    await mobile.goBack();

    //Expand The Hamburger Menu
    await affiliatePublicWebsiteMobileHamburgerMenuButton.click();
    await expect(affiliatePublicWebsiteMobileHamburgerMenu).toBeVisible();

    //Click The Contact Us
    const publicWebsiteContactUs = mobile.locator('//span[contains(@class, "main-menu-label main-menu-contact-label")]');
    await publicWebsiteContactUs.click();
    await expect(mobile).toHaveURL(/ja\/contact-us/);

    //Click The HighLow Logo
    await affiliatePublicWebsiteMobileHighLowLogo.click();
    await expect(affiliatesPublicWebsiteSignUpButton).toBeVisible();

    //Click on Sign Up button
    await affiliatesPublicWebsiteSignUpButton.click();
    await expect(mobile).toHaveURL(/ja\/sign-up/);

    //Navigate back to the previous page
    await mobile.goBack();

    //Login Japanese Affiliate
    await highlowSharedTestActions.launchMobileAffiliateLogin(mobile);
    await highlowSharedTestActions.loginMobileAffiliate(mobile, affiliateID);

    //Click the HighLow Logo
    const affiliateDashboardHighLowLogo = mobile.locator('//div[@class="navbar-header"]/a[1]');
    await affiliateDashboardHighLowLogo.click();
    const affiliatePublicWebsite = mobile.locator('//*[@id="common-nav"]');
    await expect(affiliatePublicWebsite).toBeVisible();

    //Expand The Hamburger Menu
    await affiliatePublicWebsiteMobileHamburgerMenuButton.click();
    await expect(affiliatePublicWebsiteMobileHamburgerMenu).toBeVisible();

    //Click The Marketing Tools
    await publicWebsiteMarketingTools.click();
    await expect(mobile).toHaveURL(/ja\/marketing-tools/);

    //Click The HighLow Logo
    await affiliatePublicWebsiteMobileHighLowLogo.click();
    await expect(affiliatesPublicWebsiteSignUpButton).toBeVisible();

    //Expand The Hamburger Menu
    await affiliatePublicWebsiteMobileHamburgerMenuButton.click();
    await expect(affiliatePublicWebsiteMobileHamburgerMenu).toBeVisible();

    //Click The FAQ
    await publicWebsiteFAQ.click();
    await expect(mobile).toHaveURL(/affiliate-help/);
    await expect(mobile).toHaveURL(/support\/home/);

    //Click The Browser 'Back' Button
    await mobile.goBack();

    //Expand The Hamburger Menu
    await affiliatePublicWebsiteMobileHamburgerMenuButton.click();
    await expect(affiliatePublicWebsiteMobileHamburgerMenu).toBeVisible();

    //Click The Contact Us
    await publicWebsiteContactUs.click();
    await expect(mobile).toHaveURL(/ja\/contact-us/);
});