import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-9762 - Public Website - Desktop - To Verify Logged Out Users Are Able To Access Public Pages', async ({ page, context }) => {
        
    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Click the Login Button
    const publicWebsiteHomeScreenLoginButton = page.locator('//span[contains(@class, "label") and contains(text(), "ログイン")]');
    await publicWebsiteHomeScreenLoginButton.click();

    //Check The Login Screen Is Displayed
    const desktopTradingLoginScreen = page.locator('//div[contains(@class, "LoginScreen_loginScreen__")]');
    await expect(desktopTradingLoginScreen).toBeVisible();
    await expect(page).toHaveURL(/login/);

    //Navigate Back To The Home Screen
    const publicWebsiteLoginScreenHighLowLogo = page.locator('//*[contains(@id, "LoginScreen_logo__")]');
    await publicWebsiteLoginScreenHighLowLogo.click();
    const publicWebsiteHomeScreen = page.locator('//*[@id="home-app"]');
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Click the Register Button
    const publicWebsiteNavBarRegisterButton = page.locator('//div[@class="navbar-buttons"]/a[2]');
    await expect(publicWebsiteNavBarRegisterButton).toBeVisible();
    await publicWebsiteNavBarRegisterButton.click();
    const registrationScreen = page.locator('//*[@id="rego-app"]');
    await expect(registrationScreen).toBeVisible();

    //Navigate Back To The Home Screen
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Launch Quick Demo
    const quickDemoButton = page.locator('//a[@class="highlight"]');
    await quickDemoButton.click();
    const desktopTradingAccountMenuButton = page.locator('//div[@id="accountMenuToggleButton"]');

    //Check Account Balance
    const quickDemoAccountBalance = page.locator('//*[@id="balanceValue"]');
    await expect(quickDemoAccountBalance).toContainText("¥1,000,000");

    //Check Cashback Balance
    const quickDemoCashbackBalance = page.locator('//*[@id="cashBackValue"]');
    await expect(quickDemoCashbackBalance).toContainText("¥5,000", { wait : 3000 } );

    //Navigate Back To The Home Screen
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Expand The Trade Nav Bar Menu Option
    const publicWebsiteTradeMenuHoverLink = page.locator('//li[@data-toggle-target=".trade-menu-toggle-bookmark"]');
    await expect(publicWebsiteTradeMenuHoverLink).toBeVisible();
    await publicWebsiteTradeMenuHoverLink.hover();
    const publicWebsiteTradeMenu = page.locator('//div[contains(@class, "dropdown-mega-menu") and contains(@class, "trade-menu-toggle-bookmark") and contains(@class, "open")]');
    await expect(publicWebsiteTradeMenu).toBeVisible();

    //Check Correct Trade Menu Options Are Available
    const quickDemoMenuButton = page.locator('//a[contains(@class, "btn-extruded") and contains(text(), "今すぐ試す")]');
    await expect(quickDemoMenuButton).toBeVisible();
    const tradingPlatformsLink = page.locator('//div[contains(@class, "dropdown-mega-menu--links")]//a[contains(text(), "取引プラットフォーム")]');
    await expect(tradingPlatformsLink).toBeVisible();
    const optionTypesLink = page.locator('//div[contains(@class, "dropdown-mega-menu--links")]//a[contains(text(), "取扱商品")]');
    await expect(optionTypesLink).toBeVisible();
    const tradeConditionsLink = page.locator('//div[contains(@class, "dropdown-mega-menu--links")]//a[contains(text(), "取引条件")]');
    await expect(tradeConditionsLink).toBeVisible();
    const optionsScheduleLink = page.locator('//div[contains(@class, "dropdown-mega-menu--links")]//a[contains(text(), "取引スケジュール")]');
    await expect(optionsScheduleLink).toBeVisible();
    const expiryRatesLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/trade/expiry-rates")]');
    await expect(expiryRatesLink).toBeVisible();

    //Expand The HighLow Nav Bar Menu Option
    const publicWebsiteHighLowMenuHoverLink = page.locator('//li[@data-toggle-target=".highlow-menu-toggle-bookmark"]');
    await expect(publicWebsiteHighLowMenuHoverLink).toBeVisible();
    await publicWebsiteHighLowMenuHoverLink.hover();
    const publicWebsiteHighLowMenu = page.locator('//div[contains(@class, "dropdown-mega-menu") and contains(@class, "highlow-menu-toggle-bookmark") and contains(@class, "open")]');
    await expect(publicWebsiteHighLowMenu).toBeVisible();

    //Check Correct HighLow Menu Options Are Available
    const publicWebsiteHighLowMenuAccountLink = page.locator('//*[contains(@class, "dropdown-mega-menu--attention-grabber")]//a[contains(@href, "/account")]');
    await expect(publicWebsiteHighLowMenuAccountLink).toBeVisible();
    const registerButton = publicWebsiteHighLowMenuAccountLink;
    await expect(registerButton).toBeVisible();
    const overviewLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/overview")]/span');
    await expect(overviewLink).toBeVisible();
    const whyTradeLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/why-trade")]');
    await expect(whyTradeLink).toBeVisible();
    const bankingLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/banking")]');
    await expect(bankingLink).toBeVisible();
    const loyaltyLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/points")]');
    await expect(loyaltyLink).toBeVisible();
    const companyLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/company")]');
    await expect(companyLink).toBeVisible();
    const helpAndSupportLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/help-and-support")]');
    await expect(helpAndSupportLink).toBeVisible();

    //Expand The Resources Overview Nav Bar Menu Option
    const publicWebsiteResourcesOverviewMenuHoverLink = page.locator('//li[@data-toggle-target=".resources-menu-toggle-bookmark"]');
    await expect(publicWebsiteResourcesOverviewMenuHoverLink).toBeVisible();
    await publicWebsiteResourcesOverviewMenuHoverLink.hover();
    const publicWebsiteResourcesOverviewMenu = page.locator('//div[contains(@class, "dropdown-mega-menu") and contains(@class, "resources-menu-toggle-bookmark") and contains(@class, "open")]');
    await expect(publicWebsiteResourcesOverviewMenu).toBeVisible();

    //Check Correct Resources Overview Menu Options Are Available
    const filterField = page.locator('//*[@name="filter"]');
    await expect(filterField).toBeVisible();
    await expect(filterField).toBeVisible();
    const resourcesOverviewLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/resources/overview")]');
    await expect(resourcesOverviewLink).toBeVisible();
    const faqLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/resources/faq")]');
    await expect(faqLink).toBeVisible();
    const quickDemoLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/quick-demo")]');
    await expect(quickDemoLink).toBeVisible();
    const optionsGlossaryLink = page.locator('//*[contains(@class, "dropdown-mega-menu--links")]//a[contains(@href, "/resources/options-glossary")]');
    await expect(optionsGlossaryLink).toBeVisible();

    //Expand The Trade Nav Bar Menu Option
    await expect(publicWebsiteTradeMenuHoverLink).toBeVisible();
    await publicWebsiteTradeMenuHoverLink.hover();
    await expect(publicWebsiteTradeMenu).toBeVisible();

    //Access The Quick Demo
    await quickDemoButton.hover();
    await expect(quickDemoButton).toBeVisible();
    await quickDemoButton.click();

    //Check Account Balance
    await expect(quickDemoAccountBalance).toContainText("¥1,000,000");

    //Check Cashback Balance
    await expect(quickDemoCashbackBalance).toContainText("¥5,000", { wait : 3000 } );

    //Click the Account Menu Button
    await desktopTradingAccountMenuButton.click();
    const desktopTradingAccountMenu = page.locator('//div[contains(@class, "AppMenu__Container-sc")]');
    await expect(desktopTradingAccountMenu).toBeVisible();

    //Click The HighLow.com Link
    const publicWebsiteLoggedOutAccountMenuHighlowComLink = page.locator('//a[@id="goToHighlowButton"]');
    await expect(publicWebsiteLoggedOutAccountMenuHighlowComLink).toBeVisible();
    await publicWebsiteLoggedOutAccountMenuHighlowComLink.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The Trade Nav Bar Menu Option
    await expect(publicWebsiteTradeMenuHoverLink).toBeVisible();
    await publicWebsiteTradeMenuHoverLink.hover();
    await expect(publicWebsiteTradeMenu).toBeVisible();

    //Access The Trading Platform Page
    await tradingPlatformsLink.hover();
    await expect(tradingPlatformsLink).toBeVisible();
    await tradingPlatformsLink.click();
    const publicWebsiteTradingPlatformsScreenTitle = page.locator('//h1/img[contains(@alt, "取引プラットフォーム")]');
    await expect(publicWebsiteTradingPlatformsScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/trading-platforms/);

    //Navigate Back To The Home Screen
    const publicWebsiteHighLowLogo = page.locator('//*[@class="logo"]');
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The Trade Nav Bar Menu Option
    await expect(publicWebsiteTradeMenuHoverLink).toBeVisible();
    await publicWebsiteTradeMenuHoverLink.hover();
    await expect(publicWebsiteTradeMenu).toBeVisible();

    //Access The Option Types Page
    await optionTypesLink.hover();
    await expect(optionTypesLink).toBeVisible();
    await optionTypesLink.click();
    const publicWebsiteOptionTypesScreenTitle = page.locator('//h1/img[contains(@alt, "取扱商品")]');
    await expect(publicWebsiteOptionTypesScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/option-types/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The Trade Nav Bar Menu Option
    await expect(publicWebsiteTradeMenuHoverLink).toBeVisible();
    await publicWebsiteTradeMenuHoverLink.hover();
    await expect(publicWebsiteTradeMenu).toBeVisible();

    //Access The Trade Conditions Page
    await tradeConditionsLink.hover();
    await expect(tradeConditionsLink).toBeVisible();
    await tradeConditionsLink.click();
    const publicWebsiteTradeConditionsScreenTitle = page.locator('//h1/img[contains(@alt, "取引条件")]');
    await expect(publicWebsiteTradeConditionsScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/trade-conditions/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The Trade Nav Bar Menu Option
    await expect(publicWebsiteTradeMenuHoverLink).toBeVisible();
    await publicWebsiteTradeMenuHoverLink.hover();
    await expect(publicWebsiteTradeMenu).toBeVisible();

    //Access The Options Schedule Page
    await optionsScheduleLink.hover();
    await expect(optionsScheduleLink).toBeVisible();
    await optionsScheduleLink.click();
    const publicWebsiteOptionsScheduleScreenTitle = page.locator('//h1/img[contains(@alt, "オプション･スケジュール")]');
    await expect(publicWebsiteOptionsScheduleScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/options-schedule/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The Trade Nav Bar Menu Option
    await expect(publicWebsiteTradeMenuHoverLink).toBeVisible();
    await publicWebsiteTradeMenuHoverLink.hover();
    await expect(publicWebsiteTradeMenu).toBeVisible();

    //Access The Expiry Rates Page
    await expiryRatesLink.hover();
    await expect(expiryRatesLink).toBeVisible();
    await expiryRatesLink.click();
    const publicWebsiteExpiryRatesScreen = page.locator('//div[contains(@class, "resources-landing") and contains(@class, "expiry-rates")]');
    await expect(publicWebsiteExpiryRatesScreen).toBeVisible();
    await expect(page).toHaveURL(/expiry-rates/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The HighLow Nav Bar Menu Option
    await expect(publicWebsiteHighLowMenuHoverLink).toBeVisible();
    await publicWebsiteHighLowMenuHoverLink.hover();
    await expect(publicWebsiteHighLowMenu).toBeVisible();

    //Click the Register Button
    await registerButton.hover();
    await expect(registerButton).toBeVisible();
    await registerButton.click();
    await expect(registrationScreen).toBeVisible();

    //Navigate Back To The Home Screen
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Expand The HighLow Nav Bar Menu Option
    await expect(publicWebsiteHighLowMenuHoverLink).toBeVisible();
    await publicWebsiteHighLowMenuHoverLink.hover();
    await expect(publicWebsiteHighLowMenu).toBeVisible();

    //Access The Overview Page
    await overviewLink.hover();
    await expect(overviewLink).toBeVisible();
    await overviewLink.click();
    const publicWebsiteOverviewScreen = page.locator('//div[contains(@class, "highlow-intro")]');
    await expect(publicWebsiteOverviewScreen).toBeVisible();
    await expect(page).toHaveURL(/overview/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The HighLow Nav Bar Menu Option
    await expect(publicWebsiteHighLowMenuHoverLink).toBeVisible();
    await publicWebsiteHighLowMenuHoverLink.hover();
    await expect(publicWebsiteHighLowMenu).toBeVisible();

    //Access The Expiry Rates Page
    await whyTradeLink.hover();
    await expect(whyTradeLink).toBeVisible();
    await whyTradeLink.click();
    const publicWebsiteExpiryRatesScreenTitle = page.locator('//h1/img[contains(@alt, "バイナリーオプション取引のメリット")]');
    await expect(publicWebsiteExpiryRatesScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/why-trade/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The HighLow Nav Bar Menu Option
    await expect(publicWebsiteHighLowMenuHoverLink).toBeVisible();
    await publicWebsiteHighLowMenuHoverLink.hover();
    await expect(publicWebsiteHighLowMenu).toBeVisible();

    //Access The Banking Page
    await bankingLink.hover();
    await expect(bankingLink).toBeVisible();
    await bankingLink.click();
    const publicWebsiteBankingScreenTitle = page.locator('//h1/img[contains(@alt, "入出金")]');
    await expect(publicWebsiteBankingScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/banking/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The HighLow Nav Bar Menu Option
    await expect(publicWebsiteHighLowMenuHoverLink).toBeVisible();
    await publicWebsiteHighLowMenuHoverLink.hover();
    await expect(publicWebsiteHighLowMenu).toBeVisible();

    //Access The Company Page
    await companyLink.hover();
    await expect(companyLink).toBeVisible();
    await companyLink.click();
    const publicWebsiteCompanyScreenTitle = page.locator('//h1/img[contains(@alt, "会社概要")]');
    await expect(publicWebsiteCompanyScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/company/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The HighLow Nav Bar Menu Option
    await expect(publicWebsiteHighLowMenuHoverLink).toBeVisible();
    await publicWebsiteHighLowMenuHoverLink.hover();
    await expect(publicWebsiteHighLowMenu).toBeVisible();

    //Access The Help and Support Page
    await helpAndSupportLink.hover();
    await expect(helpAndSupportLink).toBeVisible();
    await helpAndSupportLink.click();
    const publicWebsiteHelpAndSupportScreen = page.locator('//*[@class="help-support--banner--heading"]');
    await expect(publicWebsiteHelpAndSupportScreen).toBeVisible();
    await expect(page).toHaveURL(/help-and-support/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The Resources Overview Nav Bar Menu Option
    await expect(publicWebsiteResourcesOverviewMenuHoverLink).toBeVisible();
    await publicWebsiteResourcesOverviewMenuHoverLink.hover();
    await expect(publicWebsiteResourcesOverviewMenu).toBeVisible();

    //Access The Overview Page
    await resourcesOverviewLink.hover();
    await expect(resourcesOverviewLink).toBeVisible();
    await resourcesOverviewLink.click();
    const publicWebsiteOverviewScreenTitle = page.locator('//h1/img[contains(@alt, "初めての方")]');
    await expect(publicWebsiteOverviewScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/resources\/overview/);

    //Navigate Back To The Home Screen
    await expect(publicWebsiteHighLowLogo).toBeVisible();
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The Resources Nav Bar Menu Option
    await expect(publicWebsiteResourcesOverviewMenuHoverLink).toBeVisible();
    await publicWebsiteResourcesOverviewMenuHoverLink.hover();
    await expect(publicWebsiteResourcesOverviewMenu).toBeVisible();

    //Access The FAQ Page
    await faqLink.hover();
    await expect(faqLink).toBeVisible();
    await faqLink.click();
    const publicWebsiteFaqScreen = page.locator('//section[contains(@class, "help-center-sc")]');
    await expect(publicWebsiteFaqScreen).toBeVisible();
    await expect(page).toHaveURL("https://help.highlow.com/support/home");

    //Navigate Back To The Home Screen
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Expand The Resources Nav Bar Menu Option
    await expect(publicWebsiteResourcesOverviewMenuHoverLink).toBeVisible();
    await publicWebsiteResourcesOverviewMenuHoverLink.hover();
    await expect(publicWebsiteResourcesOverviewMenu).toBeVisible();

    //Access The Quick Demo
    await quickDemoLink.hover();
    await expect(quickDemoLink).toBeVisible();
    await quickDemoLink.click();

    //Check Account Balance
    await expect(quickDemoAccountBalance).toContainText("¥1,000,000");

    //Check Cashback Balance
    await expect(quickDemoCashbackBalance).toContainText("¥5,000", { wait : 3000 } );

    //Click the Account Menu Button
    await desktopTradingAccountMenuButton.click();
    await expect(desktopTradingAccountMenu).toBeVisible();

    //Click The HighLow.com Link
    await publicWebsiteLoggedOutAccountMenuHighlowComLink.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Expand The Resources Nav Bar Menu Option
    await expect(publicWebsiteResourcesOverviewMenuHoverLink).toBeVisible();
    await publicWebsiteResourcesOverviewMenuHoverLink.hover();
    await expect(publicWebsiteResourcesOverviewMenu).toBeVisible();

    //Access The Options Glossary Page
    await optionsGlossaryLink.hover();
    await optionsGlossaryLink.click();
    const publicWebsiteOptionsGlossaryScreenTitle = page.locator('//h1/img[contains(@alt, "用語集")]');
    await expect(publicWebsiteOptionsGlossaryScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/resources\/options-glossary/);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Access The Trading Platforms Page
    const tradingPlatformsImageLink = page.locator('//a[@class="download-mobile-cta-link"][contains(@href, "/trade/trading-platforms")]');
    await tradingPlatformsImageLink.scrollIntoViewIfNeeded();
    await tradingPlatformsImageLink.click();
    await expect(publicWebsiteTradingPlatformsScreenTitle).toBeVisible();
    await expect(page).toHaveURL(/trade\/trading-platforms/);

    //Navigate Back To The Home Screen
    await publicWebsiteHighLowLogo.click();
    await expect(publicWebsiteHomeScreen).toBeVisible();

    //Launch Affiliate Login Via Public Website
    const publicWebsiteAffiliatesLoginButton = page.locator('//a[contains(@class, "affiliates-login-link")]');
    await publicWebsiteAffiliatesLoginButton.scrollIntoViewIfNeeded();
    await publicWebsiteAffiliatesLoginButton.click();
    const affiliatesLoginScreen = page.locator('//div[contains(@id, "signin-popup") and contains(@class, "static")]');
    await page.waitForTimeout(1000);
    await expect(affiliatesLoginScreen).toBeVisible();
    await expect(page).toHaveURL(/ja\/sign-in/);
});