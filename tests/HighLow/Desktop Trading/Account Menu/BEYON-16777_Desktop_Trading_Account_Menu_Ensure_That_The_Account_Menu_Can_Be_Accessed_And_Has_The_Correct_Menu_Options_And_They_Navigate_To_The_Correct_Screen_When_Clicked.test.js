import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-16777 - Desktop Trading - Navigation - Ensure That The Account Menu Can Be Accessed And Has The Correct Menu Options And They Navigate To The Correct Page When Clicked', async ({ page, context }) => {
        
    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);
    
    //Get Trader Username For Future Use
    const env = await page.url();
    const traderUsername = await highlowSharedTestActions.getTestTraderID(env);
    console.log("Trader Account In Use = " + traderUsername);

    //Log Trader In
    await highlowSharedTestActions.launchDesktopTradingLoginScreen(page);
    await highlowSharedTestActions.loginDesktopTraderUserID(page, traderUsername);
    await highlowSharedTestActions.dismissAnyDesktopNotifications(page);

    //Click the Account Menu Button
    const desktopTradingAccountMenuButton = page.locator('//div[@id="accountMenuToggleButton"]');
    await expect(desktopTradingAccountMenuButton).toBeVisible();
    await desktopTradingAccountMenuButton.click();
    const desktopTradingAccountMenu = page.locator('//div[contains(@class, "AppMenu__Container-sc")]');
    await expect(desktopTradingAccountMenu).toBeVisible();

    //Check The Correct Menu Options Are Displayed In The Upper Section
    const desktopTradingAccountMenuAvatar = page.locator('//div[contains(@class, "BOAccountMenu__Container-")]//img[contains(@class, "BOAccountMenu__ProfilePic-")]');
    const desktopTradingAccountMenuTraderName = page.locator('//div[contains(@class, "BOAccountMenu__Container-")]//div[contains(@class, "BOAccountMenu__Header-")]');
    const desktopTradingAccountMenuQuickDemoToggle = page.locator('//div[contains(@class, "BOAccountMenu__Container-")]//div[contains(@class, "ClickBounce_container__")]');
    await expect(desktopTradingAccountMenuAvatar).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuTraderName).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuQuickDemoToggle).toBeVisible( { timeout : 3000 } );

    //Check The Correct Menu Options Are Listed In The Middle Section
    const desktopTradingAccountMenuDashboardLink = page.locator('//*[@id="dashBoardMenuItem"]');
    const desktopTradingAccountMenuDashboardLinkText = page.locator('//*[@id="dashBoardMenuItem"]/div/span');
    const desktopTradingAccountMenuDepositLink = page.locator('//*[@id="depositMenuItem"]');
    const desktopTradingAccountMenuDepositLinkText = page.locator('//*[@id="depositMenuItem"]/div/span');
    const desktopTradingAccountMenuWithdrawalLink = page.locator('//*[@id="withdrawMenuItem"]');
    const desktopTradingAccountMenuWithdrawalLinkText = page.locator('//*[@id="withdrawMenuItem"]/div/span');
    const desktopTradingAccountMenuTradingHistoryLink = page.locator('//*[@id="tradeHistoryMenuItem"]');
    const desktopTradingAccountMenuTradingHistoryLinkText = page.locator('//*[@id="tradeHistoryMenuItem"]/div/span');
    const desktopTradingAccountMenuTransactionHistoryLink = page.locator('//*[@id="transactionHistoryItem"]');
    const desktopTradingAccountMenuTransactionHistoryLinkText = page.locator('//*[@id="transactionHistoryItem"]/div/span');
    await expect(desktopTradingAccountMenuDashboardLink).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuDashboardLinkText).toContainText("管理画面");
    await expect(desktopTradingAccountMenuDepositLink).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuDepositLinkText).toContainText("入金");
    await expect(desktopTradingAccountMenuWithdrawalLink).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuWithdrawalLinkText).toContainText("出金");
    await expect(desktopTradingAccountMenuTradingHistoryLink).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuTradingHistoryLinkText).toContainText("取引履歴");
    await expect(desktopTradingAccountMenuTransactionHistoryLink).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuTransactionHistoryLinkText).toContainText("口座詳細");

    //Check The Correct Options Are Listed On The Lower Section
    const desktopTradingAccountMenuProfileLink = page.locator('//*[@id="profileMenuItem"]');
    const desktopTradingAccountMenuProfileLinkText = page.locator('//*[@id="profileMenuItem"]/div/span');
    await expect(desktopTradingAccountMenuProfileLink).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuProfileLinkText).toContainText("お客様情報");
    const desktopTradingAccountMenuHelpAndSupportSection = page.locator('//*[@id="SupportMenuItem"]');
    const desktopTradingAccountMenuHelpAndSupportSectionText = page.locator('//*[@id="SupportMenuItem"]/div/span');
    await expect(desktopTradingAccountMenuHelpAndSupportSection).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuHelpAndSupportSectionText).toBeVisible("サポート");

    //Expand The Help And Support Menu
    await desktopTradingAccountMenuHelpAndSupportSection.click();

    //Check The Correct Help And Support Menu Options Are Displayed
    const desktopTradingAccountMenuHelpAndSupportLink = page.locator('//*[@id="helpAndSupportMenuItem"]');
    const desktopTradingAccountMenuHelpAndSupportLinkText = page.locator('//*[@id="helpAndSupportMenuItem"]/div/span');
    const desktopTradingAccountMenuOptionsScheduleLink = page.locator('//*[@id="optionsScheduleMenuItem"]');
    const desktopTradingAccountMenuOptionsScheduleLinkText = page.locator('//*[@id="optionsScheduleMenuItem"]/div/span');
    const desktopTradingAccountMenuExpiryRatesLink = page.locator('//*[@id="expiryRatesMenuItem"]');
    const desktopTradingAccountMenuExpiryRatesLinkText = page.locator('//*[@id="expiryRatesMenuItem"]/div/span');
    const desktopTradingAccountMenuNewsLink = page.locator('//*[@id="SystemNewsMenuItem"]');
    const desktopTradingAccountMenuNewsLinkText = page.locator('//*[@id="SystemNewsMenuItem"]/div/span');
    await expect(desktopTradingAccountMenuHelpAndSupportLink).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuHelpAndSupportLinkText).toContainText("ヘルプとサポート");
    await expect(desktopTradingAccountMenuOptionsScheduleLink).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuOptionsScheduleLinkText).toContainText("取引スケジュール");
    await expect(desktopTradingAccountMenuExpiryRatesLink).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuExpiryRatesLinkText).toContainText("判定レート一覧");
    await expect(desktopTradingAccountMenuNewsLink).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuNewsLinkText).toContainText("お知らせ");

    //Check The Correct Items Are Displayed In The Bottom Section
    const desktopTradingAccountMenuLogoutButton = page.locator('//*[@id="logoutAppMenuButton"]');
    const desktopTradingAccountMenuVersionNumber = page.locator('//span[contains(@class, "AppMenu__SiteVersion-")]');
    await expect(desktopTradingAccountMenuLogoutButton).toBeVisible( { timeout : 3000 } );
    await expect(desktopTradingAccountMenuVersionNumber).toBeVisible( { timeout : 3000 } );

    //Click The Dashboard Link
    await desktopTradingAccountMenuDashboardLink.click();
    await expect(page).toHaveURL(/my-account\/dashboard/);

    //Click the Back To Trade Button
    const myAccountBackToBOTradingButton = page.locator('//span[contains(@class, "cfdNonActive")]');
    await expect(myAccountBackToBOTradingButton).toBeVisible();
    await myAccountBackToBOTradingButton.click();

    //Click the Account Menu Button
    const desktopTradingAccountMenuButton1 = page.locator('//div[contains(@class, "NavigationBar_accountMenuToggle__")]');
    await desktopTradingAccountMenuButton1.click();
    await expect(desktopTradingAccountMenu).toBeVisible();

    //Click The Deposit Link
    await desktopTradingAccountMenuDepositLink.click();
    await expect(page).toHaveURL(/deposit/);

    //Click the Banking App Back To Trade Button
    const bankingBackToBOTradingButton = page.locator('//div[contains(@class, "NavigationBar_tradeLink__")]');
    await expect(bankingBackToBOTradingButton).toBeVisible();
    await bankingBackToBOTradingButton.click();

    //Click the Account Menu Button
    const desktopTradingAccountMenuButton2 = page.locator('//div[contains(@class, "NavigationBar_accountMenuToggle__")]');
    await desktopTradingAccountMenuButton2.click();
    await expect(desktopTradingAccountMenu).toBeVisible();

    //Click The Withdrawal Link
    await desktopTradingAccountMenuWithdrawalLink.click();
    await expect(page).toHaveURL(/withdraw/);

    //Click the Banking App Back To Trade Button
    await expect(bankingBackToBOTradingButton).toBeVisible();
    await bankingBackToBOTradingButton.click();

    //Click the Account Menu Button
    const desktopTradingAccountMenuButton3 = page.locator('//div[contains(@class, "NavigationBar_accountMenuToggle__")]');
    await desktopTradingAccountMenuButton3.click();
    await expect(desktopTradingAccountMenu).toBeVisible();

    //Click The Trade Action History Link
    await desktopTradingAccountMenuTradingHistoryLink.click();
    await expect(page).toHaveURL(/my-account\/trading\/trade-action-history/);

    //Click the Back To Trade Button
    await expect(myAccountBackToBOTradingButton).toBeVisible();
    await myAccountBackToBOTradingButton.click();

    //Click the Account Menu Button
    const desktopTradingAccountMenuButton4 = page.locator('//div[contains(@class, "NavigationBar_accountMenuToggle__")]');
    await desktopTradingAccountMenuButton4.click();
    await expect(desktopTradingAccountMenu).toBeVisible();

    //Click The Transaction History Link
    await desktopTradingAccountMenuTransactionHistoryLink.click();
    await expect(page).toHaveURL(/my-account\/trading\/transaction-history/);

    //Click the Back To Trade Button
    await expect(myAccountBackToBOTradingButton).toBeVisible();
    await myAccountBackToBOTradingButton.click();

    //Click the Account Menu Button
    const desktopTradingAccountMenuButton5 = page.locator('//div[contains(@class, "NavigationBar_accountMenuToggle__")]');
    await desktopTradingAccountMenuButton5.click();
    await expect(desktopTradingAccountMenu).toBeVisible();

    //Click The Profile Link
    await desktopTradingAccountMenuProfileLink.click();
    await expect(page).toHaveURL(/my-account\/profile/);

    //Click the Back To Trade Button
    await expect(myAccountBackToBOTradingButton).toBeVisible();
    await myAccountBackToBOTradingButton.click();

    //Click the Account Menu Button
    const desktopTradingAccountMenuButton6 = page.locator('//div[contains(@class, "NavigationBar_accountMenuToggle__")]');
    await desktopTradingAccountMenuButton6.click();
    await expect(desktopTradingAccountMenu).toBeVisible();

    //Expand The Help And Support Menu
    await desktopTradingAccountMenuHelpAndSupportSection.click();

    //Click The Help & Support Link
    const [helpAndSupportTab] = await Promise.all([context.waitForEvent('page'), desktopTradingAccountMenuHelpAndSupportLink.click(),]);

    //Switch Focus To Help & Support Tab
    await helpAndSupportTab.bringToFront();
    await helpAndSupportTab.waitForLoadState('load');
    await helpAndSupportTab.setViewportSize({ width: 1920, height: 1080 });
    await expect(helpAndSupportTab).toHaveURL(/help-and-support/);

    //Close The Browser Window
    await helpAndSupportTab.close();

    //Switch Back To The Trading Page
    await page.bringToFront();
   
    //Click The Options Schedule Link
    const [optionsScheduleTab] = await Promise.all([context.waitForEvent('page'), desktopTradingAccountMenuOptionsScheduleLink.click(),]);

    //Switch Focus To Options Schedule Tab
    await optionsScheduleTab.bringToFront();
    await optionsScheduleTab.waitForLoadState('load');
    await optionsScheduleTab.setViewportSize({ width: 1920, height: 1080 });
    await expect(optionsScheduleTab).toHaveURL(/options-schedule/);

    //Close The Browser Window
    await optionsScheduleTab.close();

    //Switch Back To The Trading Page
    await page.bringToFront();
   
    //Click The Expiry Rates Link
    const [expiryRatesTab] = await Promise.all([context.waitForEvent('page'), desktopTradingAccountMenuExpiryRatesLink.click(),]);

    //Switch Focus To Expiry Rates Tab
    await expiryRatesTab.bringToFront();
    await expiryRatesTab.waitForLoadState('load');
    await expiryRatesTab.setViewportSize({ width: 1920, height: 1080 });
    await expect(expiryRatesTab).toHaveURL(/expiry-rates/);

    //Close The Browser Window
    await expiryRatesTab.close();

    //Switch Back To The Trading Page
    await page.bringToFront();

    //Click The News Link
    await desktopTradingAccountMenuNewsLink.click();
    await expect(page).toHaveURL(/my-account\/news/);
});