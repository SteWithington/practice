import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-5037 - Desktop Trading - To Verify Traders Can Trade On Turbo Options', async ({ page, context }) => {
        
    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);
    
    //Get Trader Username For Future Use
    const env = testInfo.project.use.baseURL;
    const traderUsername = await highlowSharedTestActions.getTestTraderID(env);
    console.log("Trader Account In Use = " + traderUsername);

    //Log Trader In
    await highlowSharedTestActions.launchDesktopTradingLoginScreen(page);
    await highlowSharedTestActions.loginDesktopTraderUserID(page, traderUsername);
    await highlowSharedTestActions.dismissAnyDesktopNotifications();

    //Check That There Are No Active Trades
    const desktopTradingOpenTradesIcon = page.locator('//div[contains(@class, "NavigationBar_notificationIndicator__")]');
    await expect(desktopTradingOpenTradesIcon).toBeHidden({ timeout: 3000 });

    //Click TURBO Tab
    const desktopTradingTurboTab = page.locator('//*[@id="ChangingStrikeOOD0"]');
    await desktopTradingTurboTab.click();
    const desktopTradingTurboTabActive = page.locator('//div[contains(@id, "ChangingStrikeOOD0") and contains(@class, "Tabs_active__")]');
    await expect(desktopTradingTurboTabActive).toBeVisible();

    //Find Trading Option By Asset Name
    const desktopTradingAssetNameFilter = page.locator('//div[contains(@class, "Dropdown_display_") and contains(text(), "全ての資産")]');
    await desktopTradingAssetNameFilter.click();
    const defaultHLMITradingAsset = await highlowSharedTestActions.getDefaultTradingAssetName("turbo", "hlmi");
    const defaultTradingDuration = await highlowSharedTestActions.getDefaultTradingDuration("turbo");
    const desktopTradingAssetNameFilterSearchField = page.locator('//div[contains(@class, "Dropdown_input_")]/input');
    await desktopTradingAssetNameFilterSearchField.click();
    await desktopTradingAssetNameFilterSearchField.fill(defaultHLMITradingAsset);
    const desktopTradingAssetNameFilterAsset = page.locator("//*[@id='"+defaultHLMITradingAsset+"']");
    await desktopTradingAssetNameFilterAsset.click();

    //Find The Trading Option
    const desktopTradingDurationFilter = page.locator('//div[contains(@class, "Dropdown_display_") and contains(text(), "全ての取引時間")]');
    await desktopTradingDurationFilter.click();
    const desktopTradingDurationFilterList = page.locator('(//div[contains(@class, "Dropdown_options_")])[1]');
    await expect(desktopTradingDurationFilterList).toBeVisible();
    const desktopTradingOption = page.locator("//div[contains(@class, 'Dropdown_option') and contains(text(), '"+defaultTradingDuration+"')]");
    await desktopTradingOption.click();

    //Enable 1 Click If Required
    await highlowSharedTestActions.enableDesktop1ClickIfRequired(page);

    //Click The Option Card
    const desktopTradingFirstTurboOptionCard = page.locator("(//div[contains(@id, 'scrollContainer_')])[1]/div[2]/div[1]/div[2]/span/span[2][contains (text(), '"+defaultTradingDuration+"')]"); 
    await desktopTradingFirstTurboOptionCard.click();
    const placeHighDesktop1ClickTradeButton = page.locator('//div[contains(@id, "TradePanel_oneClickHighButton__")]');
    await expect(placeHighDesktop1ClickTradeButton).toBeVisible();

    //Set The Trade Amount To 1000
    const desktopTradingTradeAmount = page.locator('//*[@data-test="trade-amount"]');
    await desktopTradingTradeAmount.click();
    await desktopTradingTradeAmount.fill("1000");

    //Grab Starting Account Balance
    const accountBalanceField = page.locator('//*[@id="balanceValue"]');
    var startingAccountBalance = await accountBalanceField.textContent();
    var startBalance = Number(startingAccountBalance.toString().replace(/[^0-9.-]+/g,"")); 

    //Place A HIGH And LOW Trade
    await highlowSharedTestActions.placeHIGHDesktopTrade(page, 1);
    await highlowSharedTestActions.placeLOWDesktopTrade(page, 2);

    //Calculate Current Date And Time
    const currentLocalDateAndTimeYYYYMMDD = await highlowSharedTestActions.calculateCurrentLocalDateTimeYYYYMMDD();
    const currentUtcDateAndTimeYYYYMMDD = await highlowSharedTestActions.calculateCurrentUtcDateTimeYYYYMMDD();
    const currentUtcDateAndTimeDDMMYYYY = await highlowSharedTestActions.calculateCurrentUtcDateTimeDDMMYYYY();

    //Calculate New Account Balance
    const tradedBalance = (startBalance - 2000);
    const tradedBalanceFormatted = (tradedBalance).toLocaleString("ja-JP");
    await expect(accountBalanceField).toContainText("¥" + tradedBalanceFormatted);

    //Wait For Balance Update
    const desktopTradingAccountBalanceUpdating = page.locator('//span[contains(@class, "counter_counting__")]');
    await expect(desktopTradingAccountBalanceUpdating).toBeVisible();
    await expect(desktopTradingAccountBalanceUpdating).not.toBeVisible();
    
    //Confirm Trade(s) Is/Are Settled
    const desktopTradingNoOpenTradesCount = page.locator('//*[@id="RECENTLY_OPENED_OPTION_TAB"]/preceding-sibling::div[contains(@class, "RecentlyOpenOptions_openTradesCount__") and contains(text(), "0")]');
    await desktopTradingNoOpenTradesCount.waitFor({ state: 'attached', timeout: 60000 });

    //Confirm Winnings Account Balance
    const payoutField = page.locator('//div[contains(@class, "scrollContainer__")]/div[2]/div/div[3]/div[1]');
    var payout = await payoutField.textContent();
    var wonBalance = ((startBalance - 2000) + (1000 * payout));
    var wonBalanceFormatted = (wonBalance).toLocaleString("ja-JP");
    await expect(accountBalanceField).toHaveText("¥" + wonBalanceFormatted, { wait : 10000 } );

    //Click the Account Menu Button
    const desktopTradingAccountMenuButton = page.locator('//div[@id="accountMenuToggleButton"]');
    await desktopTradingAccountMenuButton.click();
    const desktopTradingAccountMenu = page.locator('//div[contains(@class, "AppMenu__Container-sc")]');
    await expect(desktopTradingAccountMenu).toBeVisible();

    //Click The Dashboard Link
    const desktopTradingAccountMenuDashboardLink = page.locator('//*[@id="dashBoardMenuItem"]');
    await desktopTradingAccountMenuDashboardLink.click();
    const myAccountDashboardScreen = page.locator('//*[@id="dashboard"]');
    await expect(myAccountDashboardScreen).toBeVisible();
    const myAccountBalanceField = page.locator('//span[contains(@class, "accountBalancePolled") and contains(text(), "¥")]');

    //Check Account Balance Matches The Trading Platform
    const myAccountDashboardAccountBalance = page.locator('//descendant::span[@class="word" and contains (text(), "処理中")][2]');
    await expect(myAccountDashboardAccountBalance).toBeVisible({ timeout: 3000 });
    await expect(myAccountBalanceField).toHaveText("¥" + wonBalanceFormatted);

    //Click the Trade Action History Button
    const myAccountTradeActionHistoryTab = page.locator('//div[2]/div/ul/li[4]/a');
    await myAccountTradeActionHistoryTab.click();
    const myAccountTradeActionHistoryScreen = page.locator('//*[@id="trade-actions-history"]');
    await expect(myAccountTradeActionHistoryScreen).toBeVisible();
    await expect(page).toHaveTitle(/取引履歴 | HighLow/);
    await expect(page).toHaveURL('/my-account/trading/trade-action-history');

    //Check All History Items Are Displayed
    const myAccountTradeActionHistoryTable = page.locator('//*[@id="trade-actions-history-table"]');
    await expect(myAccountTradeActionHistoryTable).toBeVisible();
    
    //Check Specific History Item Is Displayed
    const myAccountTradeActionHistoryTableRows = page.locator('//*[@id="trade-actions-history-table"]/tbody/tr[1]/td[3]');
    await expect(myAccountTradeActionHistoryTableRows).toBeVisible();
    const webTradeAsset = page.locator('//*[@id="trade-actions-history-table"]/tbody/tr[1]/td[1]');
    await expect(webTradeAsset).toHaveText(defaultHLMITradingAsset);
    const webTradeDate = page.locator('//*[@id="trade-actions-history-table"]/tbody/tr[1]/td[3]');
    await expect(webTradeDate).toContainText(currentLocalDateAndTimeYYYYMMDD);
    const webTradeAmount = page.locator('//*[@id="trade-actions-history-table"]/tbody/tr[1]/td[7]');
    await expect(webTradeAmount).toHaveText("¥1,000");

    //Logout From My Account
    const myAccountLogoutButton = page.locator('//a[contains(text(), "ログアウト")]');
    await myAccountLogoutButton.click();   
    const desktopTradingLoginScreen = page.locator('//div[contains(@class, "LoginScreen_loginScreen__")]');
    await expect(desktopTradingLoginScreen).toBeVisible();

    //Launch HighLow CRM Screen In New Window
    const crmTab = await highlowSharedTestActions.launchHighLowCRM(page);

    //Log into HighLow CRM As An Admin User
    await highlowSharedTestActions.loginHighLowCRMAdmin(crmTab);

    //Search For Trader
    await highlowSharedTestActions.searchCRMForTrader(crmTab, traderUsername);

    //Access Trader's Snapshot
    await highlowSharedTestActions.viewCRMSnapshotForTrader(crmTab);

    //Check Trader's Account Balance
    const crmAccountBalanceField = crmTab.locator('//b[contains(text(), "Binary Platform")]/following::tr[1]/td');
    await expect(crmAccountBalanceField).toHaveText("¥" + wonBalanceFormatted);

    //View Trade Action History Report
    const crmSnapshotTradeReportButton = crmTab.locator('//button[contains(text(), " Report")]/following-sibling::button[contains(@data-toggle, "dropdown")]');
    await expect(crmSnapshotTradeReportButton).toBeVisible();
    await crmSnapshotTradeReportButton.click();
    await crmTab.waitForTimeout(1000);
    const crmTradeActionReportLink = crmTab.locator('//*[@title="BO Trade Action Report"]');
    await expect(crmTradeActionReportLink).toBeVisible({ timeout: 2000 });
    const [tradeActionReportTab] = await Promise.all([context.waitForEvent('page'), crmTradeActionReportLink.click(),]);

    //Switch Focus To Report Tab
    await tradeActionReportTab.bringToFront();
    await tradeActionReportTab.waitForLoadState('load');
    await tradeActionReportTab.setViewportSize({ width: 1920, height: 1080 });

    //Check History Item Is Displayed
    const crmTradeActionHistoryTable = tradeActionReportTab.locator('//table/tbody/tr[1]');
    await expect(crmTradeActionHistoryTable).toBeVisible();
    const crmTradeAsset = tradeActionReportTab.locator('//table/tbody/tr[1]/td[1]');
    await expect(crmTradeAsset).toHaveText(defaultHLMITradingAsset);
    const crmTradeAmount = tradeActionReportTab.locator('//table/tbody/tr[1]/td[4]');
    await expect(crmTradeAmount).toHaveText("¥1,000");
    const crmTradeOptionType = tradeActionReportTab.locator('//table/tbody/tr[1]/td[7]');
    await expect(crmTradeOptionType).toHaveText("Turbo");
    const crmTradeDate = tradeActionReportTab.locator('//table/tbody/tr[1]/td[10]');
    await expect(crmTradeDate).toContainText(currentUtcDateAndTimeYYYYMMDD);

    //Launch OM2Admin In New Window
    const om2Tab = await highlowSharedTestActions.launchOM2Admin(page);

    //Log into OM2Admin As An Admin User
    await highlowSharedTestActions.loginOM2Admin(om2Tab);

    //Select OM2 Admin Portal Operator
    await highlowSharedTestActions.selectOM2AdminPortalOperator(om2Tab, env);

    //Load Trader Search
    const OM2AdminPortalTraderSearchLink = om2Tab.locator('//tr[2]/td[3]/table/tbody/tr[2]/td/a[1]');
    await OM2AdminPortalTraderSearchLink.click();

    //Enter Trader ID In Search Field
    const OM2AdminPortalTraderSearchField = om2Tab.locator('//*[@id="ctl00_ContentBody_txtPlayerName"]');
    await OM2AdminPortalTraderSearchField.click();
    await OM2AdminPortalTraderSearchField.fill(traderUsername);

    //Search For Trader
    const OM2AdminPortalTraderSearchSubmitButton = om2Tab.locator('//*[@id="ctl00_ContentBody_cmdSearch"]');
    await OM2AdminPortalTraderSearchSubmitButton.click();

    //Access Trader Record
    const OM2AdminPortalTraderSearchResultOne = om2Tab.locator('//*[@id="ctl00_ContentBody_rpt_ctl01_hypID"]');
    await OM2AdminPortalTraderSearchResultOne.click();
    const OM2AdminPortalTraderDetailsScreen = om2Tab.locator('//*[@id="ctl00_ContentBody_pvGeneral"]');
    await expect(OM2AdminPortalTraderDetailsScreen).toBeVisible();

    //Check Trader Account Balance
    const mpAccountBalance = om2Tab.locator('//*[@id="ctl00_ContentBody_txtBalance"]');
    await expect(mpAccountBalance).toHaveValue("¥" + wonBalance);

    //Access Trade Actions Tab
    const OM2AdminPortalTraderTradeActionsTab = om2Tab.locator('//font[contains(text(), "Trade Actions")]');
    await OM2AdminPortalTraderTradeActionsTab.click();
    const OM2AdminPortalTraderTradeActionsScreen = om2Tab.locator('//*[@id="ctl00_ContentBody_pvTradeActions"]');
    await expect(OM2AdminPortalTraderTradeActionsScreen).toBeVisible();

    //Check History Item Is Displayed
    const defaultOM2TradingAssetName = await highlowSharedTestActions.getDefaultTradingAssetName("turbo", "om2");
    const OM2AdminTradeAsset = om2Tab.locator('//tr[2]/td[3]/a');
    await expect(OM2AdminTradeAsset).toHaveText(defaultOM2TradingAssetName);
    const OM2AdminTradeAmount = om2Tab.locator('//tr[2]/td[8]');
    await expect(OM2AdminTradeAmount).toHaveText("¥1,000.00");
    const OM2AdminTradeDate = om2Tab.locator('//tr[2]/td[12]');
    await expect(OM2AdminTradeDate).toContainText(currentUtcDateAndTimeDDMMYYYY);
});