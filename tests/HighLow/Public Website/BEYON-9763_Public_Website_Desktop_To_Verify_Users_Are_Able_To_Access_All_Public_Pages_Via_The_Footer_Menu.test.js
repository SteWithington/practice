import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-9763 - Public Website - Desktop - To Verify Users Are Able To Access All Public Pages Via The Footer Menu', async ({ page, context }) => {
        
    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Scroll Down The The Bottom Of The Screen
    const publicWebsiteTermsAndAgreementsFooter = page.locator('//div[@class="footer-terms-and-agreements"]');
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Check Correct Trade Menu Options Are Available
    const tradeMenuOptionsHeader = page.locator('//h4[contains(text(), "取引概要")]');
    await expect(tradeMenuOptionsHeader).toBeVisible( { timeout : 3000 } );
    const tradingPlatformsBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/trade/trading-platforms"]');
    await expect(tradingPlatformsBottomLink).toBeVisible();
    const optionTypesBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/trade/option-types"]');
    await expect(optionTypesBottomLink).toBeVisible();
    const tradeConditionsBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/trade/trade-conditions"]');
    await expect(tradeConditionsBottomLink).toBeVisible();
    const optionsScheduleBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/trade/options-schedule"]');
    await expect(optionsScheduleBottomLink).toBeVisible();
    const expiryRatesBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/trade/expiry-rates"]');
    await expect(expiryRatesBottomLink).toBeVisible();

    //Check Correct HighLow Menu Options Are Available
    const highlowMenuOptionsHeader = page.locator('//h4[contains(text(), "サービス案内")]');
    await expect(highlowMenuOptionsHeader).toBeVisible( { timeout : 3000 } );
    const overviewBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/overview"]');
    await expect(overviewBottomLink).toBeVisible();
    const bankingBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/banking"]');
    await expect(bankingBottomLink).toBeVisible();
    const loyaltyBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/points"]');
    await expect(loyaltyBottomLink).toBeVisible();
    const companyBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/company"]');
    await expect(companyBottomLink).toBeVisible();
    const helpAndSupportBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/help-and-support"]');
    await expect(helpAndSupportBottomLink).toBeVisible();

    //Check Correct Resources Overview Menu Options Are Available
    const resourcesMenuOptionsHeader = page.locator('//h4[contains(text(), "初めての方")]');
    await expect(resourcesMenuOptionsHeader).toBeVisible( { timeout : 3000 } );
    const resourcesOverviewBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/resources/overview"]');
    await expect(resourcesOverviewBottomLink).toBeVisible();
    const faqBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/resources/faq"]');
    await expect(faqBottomLink).toBeVisible();
    const quickDemoBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[contains(@href, "/quick-demo")]');
    await expect(quickDemoBottomLink).toBeVisible();
    const optionsGlossaryBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/resources/options-glossary"]');
    await expect(optionsGlossaryBottomLink).toBeVisible();

    //Check Correct Existing Customers Menu Options Are Available
    const existingCustomersMenuOptionsHeader = page.locator('//h4[contains(text(), "既存のお客様")]');
    await expect(existingCustomersMenuOptionsHeader).toBeVisible( { timeout : 3000 } );
    const loginBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/login"]');
    await expect(loginBottomLink).toBeVisible();
    const forgotPasswordBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[@href="/forgot-password"]');
    await expect(forgotPasswordBottomLink).toBeVisible();
    const dashboardBottomLink = page.locator('//ul[contains(@class, "footer-links-list")]//a[contains(@href, "/dashboard")]');
    await expect(dashboardBottomLink).toBeVisible();

    //Access The Trading Platforms Page
    await tradingPlatformsBottomLink.click();
    const publicWebsiteTradingPlatformsScreenTitle = page.locator('//h1/img[contains(@alt, "取引プラットフォーム")]');
    await expect(publicWebsiteTradingPlatformsScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/trading-platforms/);
    await page.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    const publicWebsiteHighLowLogo = page.locator('//*[@class="logo"]');
    await publicWebsiteHighLowLogo.click();
    const publicWebsiteHomeScreen = page.locator('//*[@id="home-app"]');
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await page.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The Option Types Page
    await expect(optionTypesBottomLink).toBeVisible();
    await optionTypesBottomLink.click();
    const publicWebsiteOptionTypesScreenTitle = page.locator('//h1/img[contains(@alt, "取扱商品")]');
    await expect(publicWebsiteOptionTypesScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/option-types/);
    await page.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await page.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The Trade Conditions Page
    await expect(tradeConditionsBottomLink).toBeVisible();
    await tradeConditionsBottomLink.click();
    const publicWebsiteTradeConditionsScreenTitle = page.locator('//h1/img[contains(@alt, "取引条件")]');
    await expect(publicWebsiteTradeConditionsScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/trade-conditions/);
    await page.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await page.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The Options Schedule Page
    await expect(optionsScheduleBottomLink).toBeVisible();
    await optionsScheduleBottomLink.click();
    const publicWebsiteOptionsScheduleScreenTitle = page.locator('//h1/img[contains(@alt, "オプション･スケジュール")]');
    await expect(publicWebsiteOptionsScheduleScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/options-schedule/);
    await page.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await page.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The Expiry Rates Page
    await expect(expiryRatesBottomLink).toBeVisible();
    await expiryRatesBottomLink.click();
    const publicWebsiteExpiryRatesScreen = page.locator('//div[contains(@class, "resources-landing") and contains(@class, "expiry-rates")]');
    await expect(publicWebsiteExpiryRatesScreen).toBeVisible();
    await expect(page).toHaveURL(/expiry-rates/);
    await page.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await page.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The Overview Page
    await expect(overviewBottomLink).toBeVisible();
    await overviewBottomLink.click();
    const publicWebsiteOverviewScreen = page.locator('//div[contains(@class, "highlow-intro")]');
    await expect(publicWebsiteOverviewScreen).toBeVisible();
    await expect(page).toHaveURL(/overview/);
    await page.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await page.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The Banking Page
    await expect(bankingBottomLink).toBeVisible();
    await bankingBottomLink.click();
    const publicWebsiteBankingScreenTitle = page.locator('//h1/img[contains(@alt, "入出金")]');
    await expect(publicWebsiteBankingScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/banking/);
    await page.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await page.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The Loyalty Page
    await expect(loyaltyBottomLink).toBeVisible();
    // await loyaltyBottomLink.click();
    // const publicWebsiteLoyaltyScreen = page.locator('//*[@class="loyaltyLandingBannerContent"]');
    // await expect(publicWebsiteLoyaltyScreen).toBeVisible();
    // await expect(page).toHaveURL(/loyalty/);
    // await page.waitForTimeout(1000);

    // //Navigate Back To The Home Screen
    // await publicWebsiteHighLowLogo.click();
    // await expect(publicWebsiteHomeScreen).toBeVisible();
    // await page.waitForTimeout(1000);

    // //Scroll Down The The Bottom Of The Screen
    // await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(1000);

    //Access The Company Page
    await expect(companyBottomLink).toBeVisible();
    await companyBottomLink.click();
    const publicWebsiteCompanyScreenTitle = page.locator('//h1/img[contains(@alt, "会社概要")]');
    await expect(publicWebsiteCompanyScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/company/);
    await page.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await page.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The Help and Support Page
    await expect(helpAndSupportBottomLink).toBeVisible();
    await helpAndSupportBottomLink.click();
    const publicWebsiteHelpAndSupportScreen = page.locator('//*[@class="help-support--banner--heading"]');
    await expect(publicWebsiteHelpAndSupportScreen).toBeVisible();
    await expect(page).toHaveURL(/help-and-support/);
    await page.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await page.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The Overview Page
    await expect(resourcesOverviewBottomLink).toBeVisible();
    await resourcesOverviewBottomLink.click();
    const publicWebsiteOverviewScreenTitle = page.locator('//h1/img[contains(@alt, "初めての方")]');
    await expect(publicWebsiteOverviewScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/resources\/overview/);
    await page.waitForTimeout(1000);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();
    await page.waitForTimeout(1000);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The FAQ Page
    await expect(faqBottomLink).toBeVisible();
    await faqBottomLink.click();
    const publicWebsiteFaqScreen = page.locator('//section[contains(@class, "help-center-sc")]');
    await expect(publicWebsiteFaqScreen).toBeVisible();
    await expect(page).toHaveURL('https://help.highlow.com/support/home');

    //Navigate Back To The Home Screen
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Scroll Down The The Bottom Of The Screen
    await publicWebsiteTermsAndAgreementsFooter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    //Access The Options Glossary Page
    await expect(optionsGlossaryBottomLink).toBeVisible();
    await optionsGlossaryBottomLink.click();
    const publicWebsiteOptionsGlossaryScreenTitle = page.locator('//h1/img[contains(@alt, "用語集")]');
    await expect(publicWebsiteOptionsGlossaryScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/resources\/options-glossary/);
    await page.waitForTimeout(1000);
});