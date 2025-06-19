import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-32126 - Public Website - Mobile - To Verify Logged Out Users Are Able To Access Public Pages', async ({ page, context }) => {
        
    //Launch The HighLow Public Website
    const mobile = await highlowSharedTestActions.launchMobileHighLowPublicWebsite();

    //Click the Login Button
    const publicWebsiteHomeScreenLoginButton = mobile.locator('//a[contains(@href, "/login") and contains(@class, "menu-bar-logIn")]');
    await expect(publicWebsiteHomeScreenLoginButton).toBeVisible();
    await publicWebsiteHomeScreenLoginButton.click();

    //Check The Login Screen Is Displayed
    const mobileTradingLoginScreen = mobile.locator('//*[@id="login-page"]');
    await expect(mobileTradingLoginScreen).toBeVisible();
    await expect(mobile).toHaveURL(/login/);

    //Navigate Back To The Home Screen
    const publicWebsiteLoginScreenHighLowLogo = mobile.locator('//*[contains(@class, "standaloneForm_logo__")]');
    await expect(publicWebsiteLoginScreenHighLowLogo).toBeVisible();
    await publicWebsiteLoginScreenHighLowLogo.click();
    const publicWebsiteHomeScreen = mobile.locator('//*[@id="home-app"]');
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Click the Register Button
    const publicWebsiteNavBarRegisterButton = mobile.locator('//div[contains(@class, "BigHero-module_getStartedButtonShape_")]/div/span[contains(text(), "新規口座開設")]');
    await expect(publicWebsiteNavBarRegisterButton).toBeVisible();
    await publicWebsiteNavBarRegisterButton.click();
    const registrationScreen = mobile.locator('//*[@id="rego-app"]');
    await expect(registrationScreen).toBeVisible();

    //Navigate Back To The Home Screen
    await mobile.goto('/');
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    const mobileTradingLoggedOutMenuButton = mobile.locator('//button[contains(@data-toggle-class, "show-mobile-menu")]');
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    const mobileTradingLoggedOutMenuOptions = mobile.locator('//ul[contains(@class, "menu-bar-menu")]');
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The Trade Section
    const mobileTradingLoggedOutMenuTradeSectionLabel = mobile.locator('//*[@id="main-menu"]/div/ul/li[2]');
    await expect(mobileTradingLoggedOutMenuTradeSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();
    
    //Check Correct Trade Menu Options Are Available
    const quickDemoMenuLink = mobile.locator('//li[1]/a[contains(text(), "取引画面へ")]');
    await expect(quickDemoMenuLink).toBeVisible();
    const tradingPlatformsLink = mobile.locator('//li[2]/a[contains(text(), "取引プラットフォーム")]');
    await expect(tradingPlatformsLink).toBeVisible();
    const optionTypesLink = mobile.locator('//li[3]/a[contains(text(), "取扱商品")]');
    await expect(optionTypesLink).toBeVisible();
    const tradeConditionsLink = mobile.locator('//li[4]/a[contains(text(), "取引条件")]');
    await expect(tradeConditionsLink).toBeVisible();
    const optionsScheduleLink = mobile.locator('//li[5]/a/span[contains(text(), "取引スケジュール")]');
    await expect(optionsScheduleLink).toBeVisible();
    const expiryRatesLink = mobile.locator('//li[6]/a/span[contains(text(), "判定レート一覧")]');
    await expect(expiryRatesLink).toBeVisible();

    //Expand The HighLow Section
    const mobileTradingLoggedOutMenuHighLowSectionLabel = mobile.locator('//*[@id="main-menu"]/div/ul/li[3]');
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();

    //Check Correct HighLow Menu Options Are Available
    const overviewLink = mobile.locator('//li[contains(@class, "highlow-menu-toggle-bookmark")]/ul[@class="dropdown-menu"]/li[1]/a[contains(@href, "/overview")]');
    await expect(overviewLink).toBeVisible();
    const whyTradeLink = mobile.locator('//li[contains(@class, "highlow-menu-toggle-bookmark")]/ul[@class="dropdown-menu"]/li[2]/a[contains(@href, "/why-trade")]');
    await expect(whyTradeLink).toBeVisible();
    const bankingLink = mobile.locator('//li[contains(@class, "highlow-menu-toggle-bookmark")]/ul[@class="dropdown-menu"]/li[3]/a[contains(@href, "/banking")]');
    await expect(bankingLink).toBeVisible();
    const companyLink = mobile.locator('//li[contains(@class, "highlow-menu-toggle-bookmark")]/ul[@class="dropdown-menu"]/li[5]/a[contains(@href, "/company")]');
    await expect(companyLink).toBeVisible();
    const helpAndSupportLink = mobile.locator('//li[contains(@class, "highlow-menu-toggle-bookmark")]/ul[@class="dropdown-menu"]/li[6]/a[contains(@href, "/help-and-support")]');
    await expect(helpAndSupportLink).toBeVisible();

    //Expand The Resources Overview Section
    const mobileTradingLoggedOutMenuResourcesSectionLabel = mobile.locator('//*[@id="main-menu"]/div/ul/li[4]');
    await mobileTradingLoggedOutMenuResourcesSectionLabel.click();

    //Check Correct Resources Overview Menu Options Are Available
    const resourcesOverviewLink = mobile.locator('//li[contains(@class, "resources-menu-toggle-bookmark")]/ul[@class="dropdown-menu"]/li[1]/a[contains(@href, "/resources/overview")]');
    await expect(resourcesOverviewLink).toBeVisible();
    const faqLink = mobile.locator('//li[contains(@class, "resources-menu-toggle-bookmark")]/ul[@class="dropdown-menu"]/li[2]/a[contains(@href, "/resources/faq")]');
    await expect(faqLink).toBeVisible();
    const quickDemoLink = mobile.locator('//li[contains(@class, "resources-menu-toggle-bookmark")]/ul[@class="dropdown-menu"]/li[3]/a[contains(@href, "/quick-demo")]');
    await expect(quickDemoLink).toBeVisible();
    const optionsGlossaryLink = mobile.locator('//li[contains(@class, "resources-menu-toggle-bookmark")]/ul[@class="dropdown-menu"]/li[4]/a[contains(@href, "/resources/options-glossary")]');
    await expect(optionsGlossaryLink).toBeVisible();

    //Expand The Trade Menu Options
    await expect(mobileTradingLoggedOutMenuTradeSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();

    //Access The Trading Platform Page
    await expect(tradingPlatformsLink).toBeVisible();
    await tradingPlatformsLink.click();
    const publicWebsiteTradingPlatformsScreenTitle = mobile.locator('//h1/img[contains(@alt, "取引プラットフォーム")]');
    await expect(publicWebsiteTradingPlatformsScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/trading-platforms/);

    //Navigate Back To The Home Screen
    const publicWebsiteHighLowLogo = mobile.locator('//*[@class="logo"]');
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap The Hamburger Menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The Trade Menu Options
    await expect(mobileTradingLoggedOutMenuTradeSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();

    //Access The Option Types Page
    await expect(optionTypesLink).toBeVisible();
    await optionTypesLink.click();
    const publicWebsiteOptionTypesScreenTitle = mobile.locator('//h1/img[contains(@alt, "取扱商品")]');
    await expect(publicWebsiteOptionTypesScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/option-types/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The Trade Menu Options
    await expect(mobileTradingLoggedOutMenuTradeSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();

    //Access The Trade Conditions Page
    await expect(tradeConditionsLink).toBeVisible();
    await tradeConditionsLink.click();
    const publicWebsiteTradeConditionsScreenTitle = mobile.locator('//h1/img[contains(@alt, "取引条件")]');
    await expect(publicWebsiteTradeConditionsScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/trade-conditions/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The Trade Menu Options
    await expect(mobileTradingLoggedOutMenuTradeSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();

    //Access The Options Schedule Page
    await expect(optionsScheduleLink).toBeVisible();
    await optionsScheduleLink.click();
    const publicWebsiteOptionsScheduleScreenTitle = mobile.locator('//h1/img[contains(@alt, "オプション･スケジュール")]');
    await expect(publicWebsiteOptionsScheduleScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/options-schedule/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The Trade Menu Options
    await expect(mobileTradingLoggedOutMenuTradeSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuTradeSectionLabel.click();

    //Access The Expiry Rates Page
    await expect(expiryRatesLink).toBeVisible();
    await expiryRatesLink.click();
    const publicWebsiteExpiryRatesScreen = mobile.locator('//div[contains(@class, "resources-landing") and contains(@class, "expiry-rates")]');
    await expect(publicWebsiteExpiryRatesScreen).toBeVisible();
    await expect(mobile).toHaveURL(/expiry-rates/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The HighLow Section
    await expect(mobileTradingLoggedOutMenuHighLowSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();

    //Access The Overview Page
    await expect(overviewLink).toBeVisible();
    await overviewLink.click();
    const publicWebsiteOverviewScreen = mobile.locator('//div[contains(@class, "highlow-intro")]');
    await expect(publicWebsiteOverviewScreen).toBeVisible();
    await expect(mobile).toHaveURL(/overview/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The HighLow Section
    await expect(mobileTradingLoggedOutMenuHighLowSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();

    //Access The Expiry Rates Page
    await expect(whyTradeLink).toBeVisible();
    await whyTradeLink.click();
    const publicWebsiteExpiryRatesScreenTitle = mobile.locator('//h1/img[contains(@alt, "バイナリーオプション取引のメリット")]');
    await expect(publicWebsiteExpiryRatesScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/why-trade/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The HighLow Section
    await expect(mobileTradingLoggedOutMenuHighLowSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();

    //Access The Banking Page
    await expect(bankingLink).toBeVisible();
    await bankingLink.click();
    const publicWebsiteBankingScreenTitle = mobile.locator('//h1/img[contains(@alt, "入出金")]');
    await expect(publicWebsiteBankingScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/banking/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The HighLow Section
    await expect(mobileTradingLoggedOutMenuHighLowSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();

    //Access The Company Page
    await expect(companyLink).toBeVisible();
    await companyLink.click();
    const publicWebsiteCompanyScreenTitle = mobile.locator('//h1/img[contains(@alt, "会社概要")]');
    await expect(publicWebsiteCompanyScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/company/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The HighLow Section
    await expect(mobileTradingLoggedOutMenuHighLowSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuHighLowSectionLabel.click();

    //Access The Help and Support Page
    await expect(helpAndSupportLink).toBeVisible();
    await helpAndSupportLink.click();
    const publicWebsiteHelpAndSupportScreen = mobile.locator('//*[@class="help-support--banner--heading"]');
    await expect(publicWebsiteHelpAndSupportScreen).toBeVisible();
    await expect(mobile).toHaveURL(/help-and-support/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The Resources Overview Section
    await expect(mobileTradingLoggedOutMenuResourcesSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuResourcesSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuResourcesSectionLabel.click();

    //Access The Overview Page
    await expect(resourcesOverviewLink).toBeVisible();
    await resourcesOverviewLink.click();
    const publicWebsiteOverviewScreenTitle = mobile.locator('//h1/img[contains(@alt, "初めての方")]');
    await expect(publicWebsiteOverviewScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/resources\/overview/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The Resources Section
    await expect(mobileTradingLoggedOutMenuResourcesSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuResourcesSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuResourcesSectionLabel.click();

    //Access The FAQ Page
    await expect(faqLink).toBeVisible();
    await faqLink.click();
    const publicWebsiteFaqScreen = mobile.locator('//section[contains(@class, "help-center-sc")]');
    await expect(publicWebsiteFaqScreen).toBeVisible();
    await expect(mobile).toHaveURL("https://help.highlow.com/support/home");

    //Navigate Back To The Home Screen
    await mobile.goBack();

    //Tap the Hamburger menu
    await expect(mobileTradingLoggedOutMenuButton).toBeVisible();
    await mobileTradingLoggedOutMenuButton.click();
    await mobile.waitForTimeout(500);
    await expect(mobileTradingLoggedOutMenuOptions).toBeVisible();

    //Expand The Resources Section
    await expect(mobileTradingLoggedOutMenuResourcesSectionLabel).toBeVisible();
    await mobileTradingLoggedOutMenuResourcesSectionLabel.click();
    await mobile.waitForTimeout(500);
    await mobileTradingLoggedOutMenuResourcesSectionLabel.click();

    //Access The Options Glossary Page
    await expect(optionsGlossaryLink).toBeVisible();
    await optionsGlossaryLink.click();
    const publicWebsiteOptionsGlossaryScreenTitle = mobile.locator('//h1/img[contains(@alt, "用語集")]');
    await expect(publicWebsiteOptionsGlossaryScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/resources\/options-glossary/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Access The Trading Platforms Page
    const tradingPlatformsImageLink = mobile.locator('//a[@class="download-mobile-cta-link"][contains(@href, "/trade/trading-platforms")]');
    await tradingPlatformsImageLink.scrollIntoViewIfNeeded();
    await tradingPlatformsImageLink.click();
    await expect(publicWebsiteTradingPlatformsScreenTitle).toBeVisible();
    await expect(mobile).toHaveURL(/trade\/trading-platforms/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Launch Affiliate Login Via Public Website
    const publicWebsiteAffiliatesLoginButton = mobile.locator('//a[contains(@class, "affiliates-login-link")]');
    await publicWebsiteAffiliatesLoginButton.scrollIntoViewIfNeeded();
    await expect(publicWebsiteAffiliatesLoginButton).toBeVisible();
    await publicWebsiteAffiliatesLoginButton.click();
    const affiliatesLoginScreen = mobile.locator('//div[contains(@id, "signin-popup") and contains(@class, "static")]');
    await expect(affiliatesLoginScreen).toBeVisible();
    await expect(mobile).toHaveURL(/ja\/sign-in/);
});