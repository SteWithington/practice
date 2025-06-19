import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-32127 - Public Website - Mobile - To Verify Users Are Able To Access All Public Pages Via The Footer Menu', async ({ page, context }) => {
        
    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Launch The HighLow Public Website 
    const mobile = await highlowSharedTestActions.launchMobileHighLowPublicWebsite();
    await page.close();
    await mobile.bringToFront();

    //Scroll Down The The Bottom Of The Screen
    const publicWebsiteTermsAndAgreementsFooter = mobile.locator('//div[@class="footer-terms-and-agreements"]');
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Check Correct Trade Menu Options Are Available
    const tradeMenuOptionsHeader = mobile.locator('//h4[contains(text(), "取引概要")]');
    await expect(tradeMenuOptionsHeader).toBeVisible( { timeout : 3000 } );
    const tradingPlatformsBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/trade/trading-platforms"]');
    await expect(tradingPlatformsBottomLink).toBeVisible();
    const optionTypesBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/trade/option-types"]');
    await expect(optionTypesBottomLink).toBeVisible();
    const tradeConditionsBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/trade/trade-conditions"]');
    await expect(tradeConditionsBottomLink).toBeVisible();
    const optionsScheduleBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/trade/options-schedule"]');
    await expect(optionsScheduleBottomLink).toBeVisible();
    const expiryRatesBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/trade/expiry-rates"]');
    await expect(expiryRatesBottomLink).toBeVisible();

    //Check Correct HighLow Menu Options Are Available
    const highlowMenuOptionsHeader = mobile.locator('//h4[contains(text(), "サービス案内")]');
    await expect(highlowMenuOptionsHeader).toBeVisible( { timeout : 3000 } );
    const overviewBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/overview"]');
    await expect(overviewBottomLink).toBeVisible();
    const bankingBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/banking"]');
    await expect(bankingBottomLink).toBeVisible();
    const loyaltyBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/points"]');
    await expect(loyaltyBottomLink).toBeVisible();
    const companyBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/company"]');
    await expect(companyBottomLink).toBeVisible();
    const helpAndSupportBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/help-and-support"]');
    await expect(helpAndSupportBottomLink).toBeVisible();

    //Check Correct Resources Overview Menu Options Are Available
    const resourcesMenuOptionsHeader = mobile.locator('//h4[contains(text(), "初めての方")]');
    await expect(resourcesMenuOptionsHeader).toBeVisible( { timeout : 3000 } );
    const resourcesOverviewBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/resources/overview"]');
    await expect(resourcesOverviewBottomLink).toBeVisible();
    const faqBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/resources/faq"]');
    await expect(faqBottomLink).toBeVisible();
    const quickDemoBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[contains(@href, "/quick-demo")]');
    await expect(quickDemoBottomLink).toBeVisible();
    const optionsGlossaryBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/resources/options-glossary"]');
    await expect(optionsGlossaryBottomLink).toBeVisible();

    //Check Correct Existing Customers Menu Options Are Available
    const existingCustomersMenuOptionsHeader = mobile.locator('//h4[contains(text(), "既存のお客様")]');
    await expect(existingCustomersMenuOptionsHeader).toBeVisible( { timeout : 3000 } );
    const loginBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/login"]');
    await expect(loginBottomLink).toBeVisible();
    const forgotPasswordBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/forgot-password"]');
    await expect(forgotPasswordBottomLink).toBeVisible();
    const dashboardBottomLink = mobile.locator('//ul[contains(@class, "footer-links-list")]//a[contains(@href, "/dashboard")]');
    await expect(dashboardBottomLink).toBeVisible();

    //Access The Trading Platforms Page
    await tradingPlatformsBottomLink.click();
    const publicWebsiteTradingPlatformsScreenTitle = mobile.locator('//h1/img[contains(@alt, "取引プラットフォーム")]');
    await expect(publicWebsiteTradingPlatformsScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/trading-platforms/);
    await mobile.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    const publicWebsiteHighLowLogo = mobile.locator('//*[@class="logo"]');
    await publicWebsiteHighLowLogo.click();
    const publicWebsiteHomeScreen = mobile.locator('//*[@id="home-app"]');
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The Option Types Page
    await expect(optionTypesBottomLink).toBeVisible();
    await optionTypesBottomLink.click();
    const publicWebsiteOptionTypesScreenTitle = mobile.locator('//h1/img[contains(@alt, "取扱商品")]');
    await expect(publicWebsiteOptionTypesScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/option-types/);
    await mobile.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The Trade Conditions Page
    await expect(tradeConditionsBottomLink).toBeVisible();
    await tradeConditionsBottomLink.click();
    const publicWebsiteTradeConditionsScreenTitle = mobile.locator('//h1/img[contains(@alt, "取引条件")]');
    await expect(publicWebsiteTradeConditionsScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/trade-conditions/);
    await mobile.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The Options Schedule Page
    await expect(optionsScheduleBottomLink).toBeVisible();
    await optionsScheduleBottomLink.click();
    const publicWebsiteOptionsScheduleScreenTitle = mobile.locator('//h1/img[contains(@alt, "オプション･スケジュール")]');
    await expect(publicWebsiteOptionsScheduleScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/options-schedule/);
    await mobile.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The Expiry Rates Page
    await expect(expiryRatesBottomLink).toBeVisible();
    await expiryRatesBottomLink.click();
    const publicWebsiteExpiryRatesScreen = mobile.locator('//div[contains(@class, "resources-landing") and contains(@class, "expiry-rates")]');
    await expect(publicWebsiteExpiryRatesScreen).toBeVisible();
    await expect(mobile).toHaveURL(/expiry-rates/);
    await mobile.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The Overview Page
    await expect(overviewBottomLink).toBeVisible();
    await overviewBottomLink.click();
    const publicWebsiteOverviewScreen = mobile.locator('//div[contains(@class, "highlow-intro")]');
    await expect(publicWebsiteOverviewScreen).toBeVisible();
    await expect(mobile).toHaveURL(/overview/);
    await mobile.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The Banking Page
    await expect(bankingBottomLink).toBeVisible();
    await bankingBottomLink.click();
    const publicWebsiteBankingScreenTitle = mobile.locator('//h1/img[contains(@alt, "入出金")]');
    await expect(publicWebsiteBankingScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/banking/);
    await mobile.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The Loyalty Page
    await expect(loyaltyBottomLink).toBeVisible();
    // await loyaltyBottomLink.click();
    // const publicWebsiteLoyaltyScreen = mobile.locator('//*[@class="loyaltyLandingBannerContent"]');
    // await expect(publicWebsiteLoyaltyScreen).toBeVisible();
    // await expect(mobile).toHaveURL(/loyalty/);
    // await mobile.waitForTimeout(1000);

    // //Navigate Back To The Home Screen
    // await publicWebsiteHighLowLogo.click();
    // await expect(publicWebsiteHomeScreen).toBeVisible();
    // await mobile.waitForTimeout(1000);

    // //Scroll Down The The Bottom Of The Screen
    // await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    // await mobile.waitForTimeout(1000);

    //Access The Company Page
    await expect(companyBottomLink).toBeVisible();
    await companyBottomLink.click();
    const publicWebsiteCompanyScreenTitle = mobile.locator('//h1/img[contains(@alt, "会社概要")]');
    await expect(publicWebsiteCompanyScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/company/);
    await mobile.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The Help and Support Page
    await expect(helpAndSupportBottomLink).toBeVisible();
    await helpAndSupportBottomLink.click();
    const publicWebsiteHelpAndSupportScreen = mobile.locator('//*[@class="help-support--banner--heading"]');
    await expect(publicWebsiteHelpAndSupportScreen).toBeVisible();
    await expect(mobile).toHaveURL(/help-and-support/);
    await mobile.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The Overview Page
    await expect(resourcesOverviewBottomLink).toBeVisible();
    await resourcesOverviewBottomLink.click();
    const publicWebsiteOverviewScreenTitle = mobile.locator('//h1/img[contains(@alt, "初めての方")]');
    await expect(publicWebsiteOverviewScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/resources\/overview/);
    await mobile.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The FAQ Page
    await expect(faqBottomLink).toBeVisible();
    await faqBottomLink.click();
    const publicWebsiteFaqScreen = mobile.locator('//section[contains(@class, "help-center-sc")]');
    await expect(publicWebsiteFaqScreen).toBeVisible();
    await expect(mobile).toHaveURL('https://help.highlow.com/support/home');

    //Navigate Back To The Home Screen
    // await highlowSharedTestActions.launchMobileHighLowPublicWebsite(mobile);
    await mobile.goBack();

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1000);

    //Access The Options Glossary Page
    await expect(optionsGlossaryBottomLink).toBeVisible();
    await optionsGlossaryBottomLink.click();
    const publicWebsiteOptionsGlossaryScreenTitle = mobile.locator('//h1/img[contains(@alt, "用語集")]');
    await expect(publicWebsiteOptionsGlossaryScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/resources\/options-glossary/);
});