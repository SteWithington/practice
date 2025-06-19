import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-6714 - Mobile Trading - Trading - Turbo - Verify Traders Can Trade On Turbo Options', async ({ page, context }) => {

    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Get Trader Username For Future Use
    const env = await page.url();
    const traderUsername = await highlowSharedTestActions.getTestTraderID(env);
    console.log("Trader Account In Use = " + traderUsername);

    //Launch The HighLow Public Website 
    const mobile = await highlowSharedTestActions.launchMobileHighLowPublicWebsite();

    //Log Trader In
    await highlowSharedTestActions.launchMobileTradingLoginScreen(mobile);
    await highlowSharedTestActions.loginMobileTraderUserID(mobile, traderUsername);
    await highlowSharedTestActions.dismissAnyMobileNotifications(mobile);

    //Clear Guided Tour Toast If Required
    await highlowSharedTestActions.clearGuidedTourModalMobile(mobile);

    //Check That There Are No Active Trades
    const mobileTradingOpenTradesIcon = mobile.locator('//*[@id="app-bar-open-trades-counter"]/div[1]');
    await expect(mobileTradingOpenTradesIcon).toHaveClass(/.*style_disabled__.*/, { timeout: 3000 });

    //Click TURBO Tab
    const mobileTradingTurboTab = mobile.locator('//*[@id="turbo"]');
    await mobileTradingTurboTab.click();
    const mobileTradingTurboOptionsScreen = mobile.locator('//*[contains(@id, "turbo") and contains(@class, "style_active__")]');
    await expect(mobileTradingTurboOptionsScreen).toBeVisible();
    await mobile.waitForTimeout(1000);

    //Click The Required Option
    const defaultHLMITradingAsset = await highlowSharedTestActions.getDefaultTradingAssetName("turbo", "hlmi");
    const defaultTradingDuration = await highlowSharedTestActions.getDefaultTradingDuration("turbo");
    const mobileTradingTurboOptionCard = mobile.locator("//div[contains(text(), '"+defaultHLMITradingAsset+"')]/following::div[2]/div/div/div//div[contains(@class, 'optionCard_duration__') and contains (text(), '"+defaultTradingDuration+"')]")
    await mobileTradingTurboOptionCard.click();
    const mobileTradingTradingScreenChart = mobile.locator('//*[@id="chart-container"]');
    await expect(mobileTradingTradingScreenChart).toBeVisible();

    //Check The Correct Asset Chart Screen Is Loaded
    const mobileTradingTradingAsset = mobile.locator("//*[@id='tradeBox-assetName']");
    await expect(mobileTradingTradingAsset).toContainText(defaultHLMITradingAsset);
    const mobileTradingGameType = mobile.locator("//span[@id='tradeBoxItem-duration']");
    await expect(mobileTradingGameType).toContainText("Turbo");
    const mobileTradingDuration = mobile.locator("//div[@id='duration-dropdown-container']");
    await expect(mobileTradingDuration).toContainText(defaultTradingDuration);

    //Enable 1 Click If Required
    await highlowSharedTestActions.enableMobile1ClickIfRequired(mobile);

    //Set The Trade Amount To 1000
    const mobileTradingTradeAmountField = mobile.locator('//*[@id="trade-form-input-field"]');
    await expect(mobileTradingTradeAmountField).toBeVisible();
    await mobileTradingTradeAmountField.click();
    const mobileTradingTradeAmountTextField = mobile.locator('//*[@id="tradeAmountTextField"]');
    await expect(mobileTradingTradeAmountTextField).toBeVisible();
    const mobileTradingTradeAmount1Key = mobile.locator('//*[@id="numpadKey1"]');
    await mobileTradingTradeAmount1Key.click();
    const mobileTradingTradeAmount0Key = mobile.locator('//*[@id="numpadKey0"]');
    await mobileTradingTradeAmount0Key.click();
    await mobileTradingTradeAmount0Key.click();
    await mobileTradingTradeAmount0Key.click();
    const mobileTradingTradeAmountConfirmKey = mobile.locator('//*[@id="numpadKeyConfirm"]');
    await mobileTradingTradeAmountConfirmKey.click();
    await expect(mobileTradingTradeAmountField).toHaveText("¥1,000", { wait : 3000 } );
    await mobile.waitForTimeout(1000);

    //Grab Starting Account Balance
    const accountBalanceField = mobile.locator('//descendant::span[@id="balanceValue"][2]');
    await expect(accountBalanceField).toBeVisible();
    var startingAccountBalance = await accountBalanceField.textContent();
    var startBalance = Number(startingAccountBalance.toString().replace(/[^0-9.-]+/g,""));

    //Place A HIGH And LOW Trade
    await highlowSharedTestActions.placeHIGHMobileTrade(mobile, 1);
    await highlowSharedTestActions.placeLOWMobileTrade(mobile, 2);
    
    //Calculate Current Date And Time
    const currentLocalDateAndTimeYYYYMMDD = await highlowSharedTestActions.calculateCurrentLocalDateTimeYYYYMMDD();
    const currentUtcDateAndTimeYYYYMMDD = await highlowSharedTestActions.calculateCurrentUtcDateTimeYYYYMMDD();
    const currentUtcDateAndTimeDDMMYYYY = await highlowSharedTestActions.calculateCurrentUtcDateTimeDDMMYYYY();

    //Wait For Balance Update
    await mobile.waitForTimeout(3000);

    //Calculate New Account Balance
    const tradedBalance = (startBalance - 2000);
    const tradedBalanceFormatted = (tradedBalance).toLocaleString("ja-JP");
    await expect(accountBalanceField).toContainText("¥" + tradedBalanceFormatted);

    //Wait For Trade End
    await expect(mobileTradingOpenTradesIcon).toHaveClass(/.*style_disabled__.*/, { timeout: 60000 });

    //Confirm Updated Account Balance
    const payoutField = mobile.locator('//descendant::div[contains(@class,"tradeForm_value__")][3]');
    const payout = await payoutField.textContent();
    const wonBalance = ((startBalance - 2000) + (1000 * payout));
    const wonBalanceFormatted = (wonBalance).toLocaleString("ja-JP");
    await expect(accountBalanceField).toContainText("¥" + wonBalanceFormatted, { wait : 15000 } );

    //Close Trade Screen
    const mobileTradingTradingScreenChartCloseButton = mobile.locator('//*[@id="global-trade-screen-close"]');
    await mobileTradingTradingScreenChartCloseButton.click();
    const mobileTradingAssetTypeSelectorBar = mobile.locator('//*[@id="asset-overview-option-types"]');
    await expect(mobileTradingAssetTypeSelectorBar).toBeVisible();

    //Click the App Menu Button
    const mobileTradingAccountMenuButton = mobile.locator('//*[@id="my-account-menu-avatar-trigger"]');
    await expect(mobileTradingAccountMenuButton).toBeVisible();
    await mobileTradingAccountMenuButton.click();

    //Expand The Transaction History Menu Option
    const mobileTradingAccountMenuHistoryLink = mobile.locator('//*[@id="appMenu_historyLink"]');
    await mobileTradingAccountMenuHistoryLink.click();

    //Click the Trade Action History Button
    const mobileTradingAccountMenuTradeActionHistoryLink = mobile.locator('//*[@id="appMenu_historyLink"]/div[3]/div/div[1]');
    await mobileTradingAccountMenuTradeActionHistoryLink.click();
    const myAccountTradeActionHistoryScreen = mobile.locator('//*[@id="trade-actions-history"]');
    await expect(myAccountTradeActionHistoryScreen).toBeVisible();
    await expect(mobile).toHaveTitle(/取引履歴 | HighLow/);
    await expect(mobile.url()).toContain('/my-account/trading/trade-action-history');
    
    //Check History Item Is Displayed
    const webTradeAsset = mobile.locator('//*[@id="trade-actions-history-table"]/tbody/tr[1]/td[1]');
    await expect(webTradeAsset).toBeVisible();
    const tradeOptionType = mobile.locator('//*[@id="trade-actions-history-table"]/tbody/tr[1]/td[1]/span');
    const classList = await tradeOptionType.getAttribute('class');
    expect(classList).toContain('turbo');
    await expect(webTradeAsset).toContainText(defaultHLMITradingAsset);
    const tradeDate = mobile.locator('//*[@id="trade-actions-history-table"]/tbody/tr[1]/td[2]');
    await expect(tradeDate).toContainText(currentLocalDateAndTimeYYYYMMDD);
    await webTradeAsset.click();
    const webTradeAssetDetails = mobile.locator('//*[@id="trade-actions-history-table"]/tbody/tr[2]/td[1]/ul/li[1]');
    await expect(webTradeAssetDetails).toBeVisible();
    const webTradeAssetDetailsTradeAmount = mobile.locator('//*[@id="trade-actions-history-table"]/tbody/tr[2]/td[1]/ul/li[4]');
    await expect(webTradeAssetDetailsTradeAmount).toContainText("¥1,000");

    //Launch HighLow CRM Screen In New Window
    const crmTab = await highlowSharedTestActions.launchHighLowCRM(page);
    await crmTab.bringToFront();

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