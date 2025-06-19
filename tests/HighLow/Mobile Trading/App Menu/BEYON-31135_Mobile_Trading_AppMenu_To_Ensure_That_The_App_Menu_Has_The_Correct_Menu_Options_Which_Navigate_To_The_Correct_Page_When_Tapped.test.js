import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-31135 - Mobile Trading - App Menu - To Ensure That The App Menu Has The Correct Menu Options Which Navigate To The Correct Page When Tapped', async ({ page, context }) => {
        
    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Get Trader Username For Future Use
    const env = await page.url();
    const traderUsername = await highlowSharedTestActions.getTestTraderID(env);

    //Launch The HighLow Public Website 
    const mobile = await highlowSharedTestActions.launchMobileHighLowPublicWebsite();
    await page.close();
    await mobile.bringToFront();

    //Log Trader In
    await highlowSharedTestActions.launchMobileTradingLoginScreen(mobile);
    await highlowSharedTestActions.loginMobileTraderUserID(mobile, traderUsername);
    await highlowSharedTestActions.dismissAnyMobileNotifications(mobile);

    //Clear Guided Tour Toast If Required
    await highlowSharedTestActions.clearGuidedTourModalMobile(mobile);

    //Tap The Hamburger Menu
    const mobileTradingAccountMenuButton = mobile.locator('//*[@id="my-account-menu-avatar-trigger"]');
    await expect(mobileTradingAccountMenuButton).toBeVisible();
    await mobileTradingAccountMenuButton.click();
    const mobileTradingAccountMenuBalanceCard = mobile.locator('//*[@id="right-menu-balance-card"]');
    await expect(mobileTradingAccountMenuBalanceCard).toBeVisible();
    const mobileTradingAccountMenuAccountBalanceValue = mobile.locator('//descendant::span[contains(@class, "counter_value__") and contains(text(), "¥")][3]');
    await expect(mobileTradingAccountMenuAccountBalanceValue).toBeVisible();

    //Check That The Deposit button is displayed on the main card
    const depositButton = mobile.locator('//*[@id="right-menu-balance-card"]/a/div/div[2]/span');
    await expect(depositButton).toBeVisible( { timeout : 3000 } );
    await expect(depositButton).toContainText('入金をする');

    //Check That The Correct Menu Options Are Available On The Menu List
    const mobileTradingAccountMenuHomeLink = mobile.locator('//*[@id="appMenu_tradeAreaLink"]');
    const mobileTradingAccountMenuHomeLinkText = mobile.locator('//*[@id="appMenu_tradeAreaLink"]/div/div/span');
    await expect(mobileTradingAccountMenuHomeLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingAccountMenuHomeLinkText).toHaveText("取引画面へ");
    const mobileTradingAccountOpenTradesLink = mobile.locator('//*[@id="appMenu_openTradesLink"]');
    const mobileTradingAccountOpenTradesLinkText = mobile.locator('//*[@id="appMenu_openTradesLink"]/div/div/span');
    await expect(mobileTradingAccountOpenTradesLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingAccountOpenTradesLinkText).toHaveText("購入オプション詳細");
    const mobileTradingAccountMenuDepositLink = mobile.locator('//*[@id="appMenu_depositBankLink"]');
    const mobileTradingAccountMenuDepositLinkText = mobile.locator('//*[@id="appMenu_depositBankLink"]/div/div/span');
    await expect(mobileTradingAccountMenuDepositLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingAccountMenuDepositLinkText).toHaveText("入金");
    const mobileTradingAccountMenuWithdrawLink = mobile.locator('//*[@id="appMenu_withdrawalBankLink"]');
    const mobileTradingAccountMenuWithdrawLinkText = mobile.locator('//*[@id="appMenu_withdrawalBankLink"]/div/div/span');
    await expect(mobileTradingAccountMenuWithdrawLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingAccountMenuWithdrawLinkText).toHaveText("出金");
    const mobileTradingAccountMenuHistorySection = mobile.locator('//*[@id="appMenu_historyLink"]');
    const mobileTradingAccountMenuHistorySectionText = mobile.locator('//*[@id="appMenu_historyLink"]/div/div/span');
    await expect(mobileTradingAccountMenuHistorySection).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingAccountMenuHistorySectionText).toHaveText("取引履歴");
    await mobileTradingAccountMenuHistorySection.click();
    const mobileTradingAccountMenuTradeActionHistoryLink = mobile.locator('//*[@id="tradeActionsMenuItem"]');
    const mobileTradingAccountMenuTradeActionHistoryLinkText = mobile.locator('//*[@id="tradeActionsMenuItem"]/div/div/span');
    await expect(mobileTradingAccountMenuTradeActionHistoryLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingAccountMenuTradeActionHistoryLinkText).toHaveText("取引履歴");
    const mobileTradingAccountMenuTraderTransactionHistoryLink = mobile.locator('//*[@id="transactionsMenuItem"]');
    const mobileTradingAccountMenuTraderTransactionHistoryLinkText = mobile.locator('//*[@id="transactionsMenuItem"]/div/div/span');
    await expect(mobileTradingAccountMenuTraderTransactionHistoryLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingAccountMenuTraderTransactionHistoryLinkText).toHaveText("口座詳細");
    const mobileTradingAccountMenuDashboardLink = mobile.locator('//*[@id="appMenu_dashboardLink"]');
    const mobileTradingAccountMenuDashboardLinkText = mobile.locator('//*[@id="appMenu_dashboardLink"]/div/div/span');
    await expect(mobileTradingAccountMenuDashboardLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingAccountMenuDashboardLinkText).toHaveText("管理画面");
    const mobileTradingAccountMenuProfileLink = mobile.locator('//*[@id="appMenu_myProfileLink"]');
    const mobileTradingAccountMenuProfileLinkText = mobile.locator('//*[@id="appMenu_myProfileLink"]/div/div/span');
    await expect(mobileTradingAccountMenuProfileLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingAccountMenuProfileLinkText).toHaveText("お客様情報");
    const mobileTradingMenuHelpAndSupportSection = mobile.locator('//*[@id="appMenu_support"]');
    const mobileTradingMenuHelpAndSupportSectionText = mobile.locator('//*[@id="appMenu_support"]/div/div/span');
    await expect(mobileTradingMenuHelpAndSupportSection).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingMenuHelpAndSupportSectionText).toHaveText("サポート");

    //Check The Correct Help And Support Menu Options Are Displayed
    await mobileTradingMenuHelpAndSupportSectionText.click();
    const mobileTradingMenuHelpAndSupportLink = mobile.locator('//*[@id="helpAndSupportMenuItem"]');
    const mobileTradingMenuHelpAndSupportLinkText = mobile.locator('//*[@id="helpAndSupportMenuItem"]/div/div/span');
    await expect(mobileTradingMenuHelpAndSupportLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingMenuHelpAndSupportLinkText).toHaveText("ヘルプとサポート");
    const mobileTradingMenuOptionsScheduleLink = mobile.locator('//*[@id="tradingScheduleMenuItem"]');
    const mobileTradingMenuOptionsScheduleLinkText = mobile.locator('//*[@id="tradingScheduleMenuItem"]/div/div/span');
    await expect(mobileTradingMenuOptionsScheduleLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingMenuOptionsScheduleLinkText).toHaveText("取引スケジュール");
    const mobileTradingMenuExpiryRatesLink = mobile.locator('//*[@id="judgementRatesMenuItem"]');
    const mobileTradingMenuExpiryRatesLinkText = mobile.locator('//*[@id="judgementRatesMenuItem"]/div/div/span');
    await expect(mobileTradingMenuExpiryRatesLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingMenuExpiryRatesLinkText).toHaveText("判定レート一覧");
    const mobileTradingMenuNewsLink = mobile.locator('//*[@id="siteNewsMenuItem"]');
    const mobileTradingMenuNewsLinkText = mobile.locator('//*[@id="siteNewsMenuItem"]/div/div/span');
    await expect(mobileTradingMenuNewsLink).toBeVisible( { timeout : 3000 } );
    await expect(mobileTradingMenuNewsLinkText).toHaveText("お知らせ");

    //Click The Home Link
    await mobileTradingAccountMenuHomeLink.click();

    //Check The Home Screen Is Launched Again
    const mobileTradingAssetTypeSelectorBar = mobile.locator('//*[@id="asset-overview-option-types"]');
    await expect(mobileTradingAssetTypeSelectorBar).toBeVisible();

    //Tap The Hamburger Menu
    await expect(mobileTradingAccountMenuButton).toBeVisible();
    await mobileTradingAccountMenuButton.click();
    await expect(mobileTradingAccountMenuBalanceCard).toBeVisible();
    await expect(mobileTradingAccountMenuAccountBalanceValue).toBeVisible();

    //Click The Open Trades Link
    await mobileTradingAccountOpenTradesLink.click();

    //Check The Open Trades Screen Is Launched
    const mobileTradingOpenTradesScreen = mobile.locator('//span[contains(@class, "title_titleText__") and contains (text(), "購入オプション詳細")]');
    await expect(mobileTradingOpenTradesScreen).toBeVisible();
    await expect(mobile).toHaveURL(/open-trades/);

    //Tap The Hamburger Menu
    await expect(mobileTradingAccountMenuButton).toBeVisible();
    await mobileTradingAccountMenuButton.click();
    await expect(mobileTradingAccountMenuBalanceCard).toBeVisible();
    await expect(mobileTradingAccountMenuAccountBalanceValue).toBeVisible();

    //Click The Deposit Link
    await mobileTradingAccountMenuDepositLink.click();

    //Check The Deposit Screen Is Launched
    const myAccountDepositScreen = mobile.locator('(//div[contains(@class, "ui__DepositListItemRoot")])[1]');
    await expect(myAccountDepositScreen).toBeVisible();
    await expect(mobile).toHaveTitle(/入金 | HighLow/);
    await expect(mobile).toHaveURL(/deposit/);

    //Tap The Hamburger Menu
    const myAccountMobileHamburgerMenuButton = mobile.locator('//div[@id="accountMenuToggleButton"]');
    await myAccountMobileHamburgerMenuButton.click();

    //Click The Withdrawal Link
    const mobileBankingAccountMenuWithdrawLink = mobile.locator('//span[contains(text(), "出金")]');
    await mobileBankingAccountMenuWithdrawLink.click();

    //Check The Withdrawal Screen Is Launched
    const myAccountWithdrawalScreen = mobile.locator('(//div[contains(@class, "Module__ModuleBody")])[1]');
    await expect(myAccountWithdrawalScreen).toBeVisible();
    await expect(mobile).toHaveTitle(/出金 | HighLow/);
    await expect(mobile).toHaveURL(/withdraw/);

    //Tap the Hamburger menu
    await myAccountMobileHamburgerMenuButton.click();

    //Click The Profile Link
    const mobileBankingAccountMenuProfileLink = mobile.locator('//a[contains(@href,"/my-account/profile")]');
    await expect(mobileBankingAccountMenuProfileLink).toBeVisible();
    await mobileBankingAccountMenuProfileLink.click();

    //Check The Profile Screen Is Launched
    const myAccountProfileScreen = mobile.locator('//*[@id="profile"]');
    await expect(myAccountProfileScreen).toBeVisible();
    await expect(mobile).toHaveURL(/my-account\/profile/);
    await mobile.reload();

    //Tap The Hamburger Menu
    const mobileTradingMyAccountMenuButton = mobile.locator('//button[contains(@class, "navbar-toggle")]');
    await mobile.waitForTimeout(1000);
    await mobileTradingMyAccountMenuButton.click();

    //Expand The Trading History Menu Section
    await mobileTradingAccountMenuHistorySection.click();

    //Click The Trading History Link
    await mobileTradingAccountMenuTradeActionHistoryLink.click();

    //Check The Trading History Screen Is Launched
    const myAccountTradeActionHistoryScreen = mobile.locator('//*[@id="trade-actions-history"]');
    await expect(myAccountTradeActionHistoryScreen).toBeVisible();
    await expect(mobile).toHaveURL(/my-account\/trading\/trade-action-history/);

    //Tap The Hamburger Menu
    await mobile.waitForTimeout(1000);
    await mobileTradingMyAccountMenuButton.click();
    await expect(mobileTradingAccountMenuBalanceCard).toBeVisible();

    //Expand The Transaction History Menu Section
    await mobileTradingAccountMenuHistorySection.click();

    //Click The Transaction History Link
    await mobileTradingAccountMenuTraderTransactionHistoryLink.click();

    //Check The Transaction History Screen Is Launched
    const myAccountTradeTransactionHistoryScreen = mobile.locator('//*[@id="trade-transactions-history"]');
    await expect(myAccountTradeTransactionHistoryScreen).toBeVisible();
    await expect(mobile).toHaveURL(/my-account\/trading\/transaction-history/);

    //Tap The Hamburger Menu
    await mobile.waitForTimeout(1000);
    await mobileTradingMyAccountMenuButton.click();
    await expect(mobileTradingAccountMenuBalanceCard).toBeVisible();

    //Click The Dashboard Link
    await mobileTradingAccountMenuDashboardLink.click();

    //Check The Dashboard Screen Is Launched
    const myAccountDashboardScreen = mobile.locator('//*[@id="dashboard"]');
    await expect(myAccountDashboardScreen).toBeVisible();
    await expect(mobile).toHaveURL(/my-account\/dashboard/);

    //Tap The Hamburger Menu
    await mobile.waitForTimeout(1000);
    await mobileTradingMyAccountMenuButton.click();
    await expect(mobileTradingAccountMenuBalanceCard).toBeVisible();

    //Click The Profile Link
    await mobileTradingAccountMenuProfileLink.click();

    //Check The Profile Screen Is Launched
    await expect(myAccountProfileScreen).toBeVisible();
    await expect(mobile).toHaveURL(/my-account\/profile/);

    //Tap The Hamburger Menu
    await mobile.waitForTimeout(1000);
    await mobileTradingMyAccountMenuButton.click();
    await expect(mobileTradingAccountMenuBalanceCard).toBeVisible();

    //Expand The Help And Support Menu Section
    await mobileTradingMenuHelpAndSupportSectionText.click();

    //Click The Help And Support Link
    await mobileTradingMenuHelpAndSupportLink.click();

    //Check The Help And Support Screen Is Loaded
    const publicWebsiteHelpAndSupportScreen = mobile.locator('//*[@class="help-support--content"]');
    await expect(publicWebsiteHelpAndSupportScreen).toBeVisible();
    await expect(mobile).toHaveURL(/help-and-support/);

    //Tap The Hamburger Menu
    await mobile.waitForTimeout(1000);
    await mobileTradingMyAccountMenuButton.click();
    await expect(mobileTradingAccountMenuBalanceCard).toBeVisible();

    //Expand The Help And Support Menu Section
    await mobileTradingMenuHelpAndSupportSectionText.click();

    //Click The Options Schedule Link
    await mobileTradingMenuOptionsScheduleLink.click();

    //Check The Options Schedule Screen Is Loaded
    const publicWebsiteOptionsScheduleScreen = mobile.locator('//div[contains(@class, "options-schedule") and contains (@class, "resources-landing")]');
    await expect(publicWebsiteOptionsScheduleScreen).toBeVisible();
    await expect(mobile).toHaveURL(/trade\/options-schedule/);

    //Tap The Hamburger Menu
    await mobile.waitForTimeout(1000);
    await mobileTradingMyAccountMenuButton.click();
    await expect(mobileTradingAccountMenuBalanceCard).toBeVisible();

    //Expand The Help And Support Menu Section
    await mobileTradingMenuHelpAndSupportSectionText.click();

    //Click The Expiry Rate Link
    await mobileTradingMenuExpiryRatesLink.click();

    //Check The Expiry Rates Screen Is Loaded
    const publicWebsiteExpiryRatesScreen = mobile.locator('//div[contains(@class, "expiry-rates") and contains (@class, "resources-landing")]');
    await expect(publicWebsiteExpiryRatesScreen).toBeVisible();
    await expect(mobile).toHaveURL(/trade\/expiry-rates/);

    //Tap The Hamburger Menu
    await mobile.waitForTimeout(1000);
    await mobileTradingMyAccountMenuButton.click();
    await expect(mobileTradingAccountMenuBalanceCard).toBeVisible();

    //Expand The Help And Support Menu Section
    await mobileTradingMenuHelpAndSupportSectionText.click();

    //Click The My Account News Link
    await mobileTradingMenuNewsLink.click();

    //Check The My Account News Screen Is Loaded
    const myAccountNewsScreen = mobile.locator('//*[@id="news"]');
    await expect(myAccountNewsScreen).toBeVisible();
    await expect(mobile).toHaveURL(/my-account\/news/);
});