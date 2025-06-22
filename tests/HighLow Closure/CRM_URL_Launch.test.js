import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../sharedTestActions/highlowSharedTestActions.js';

test('CRM URL Launch', async ({ page, context }) => {
        
    //Launch The HighLow Public Website
    await page.goto('/');

    //Get Trader Username For Future Use
    const env = await page.url();
    const traderUsername = await highlowSharedTestActions.getTestTraderID(env);
    console.log("Trader Account In Use = " + traderUsername);

    //Get Affiliate Details For Future Use
    const affiliateID = await highlowSharedTestActions.getTestAffiliateID(env);
    console.log("Affiliate Account In Use = " + affiliateID);
    
    //Launch HighLow CRM
    const crmTab = await highlowSharedTestActions.launchHighLowCRM(page);

    //Log into HighLow CRM As An Admin User
    await highlowSharedTestActions.loginHighLowCRMAdmin(crmTab);

    //Check Page Title Message is Displayed
    const crmHomeScreenDefaultScreenName = crmTab.locator('//h2[contains(@class, "page-title") and contains(text(), "Transaction Dashboard")]');
    await expect(crmHomeScreenDefaultScreenName).toHaveText("Transaction Dashboard");
    await expect(crmTab).toHaveURL(/crm/);
    const title = await crmTab.title();
    await expect(title).toMatch(/Transaction Dashboard - HighLow Binary Options/);

    //Search For Trader
    await highlowSharedTestActions.searchCRMForTrader(crmTab, traderUsername);

    //Access Trader's Snapshot
    await highlowSharedTestActions.viewCRMSnapshotForTrader(crmTab);
    const crmTraderUsername = crmTab.locator('//th[contains(text(), "Username")]/following::td[1]');
    await expect(crmTraderUsername).toHaveText(traderUsername);

    //Expand The Finance Menu
    const crmFinanceLeftNavLink = crmTab.locator('//a/span[text()="Finance"]');
    await crmFinanceLeftNavLink.click();

    //Expand The Deposit Menu
    const crmFinanceDepositLeftHandNavLink = crmTab.locator('//a/span[text()="Deposit "]');
    await expect(crmFinanceDepositLeftHandNavLink).toBeVisible();
    await crmFinanceDepositLeftHandNavLink.click();

    //Click Deposit List
    const crmFinanceDepositList = crmTab.locator('//a[contains(text(), "Deposit") and contains(text(), "- list")]');
    await crmFinanceDepositList.click();

    //Confirm The Screen Has Loaded
    const crmDepositScreenTitle = crmTab.locator('//h2[contains(text(), "Deposit list")]');
    await expect(crmDepositScreenTitle).toBeVisible();
    await expect(crmTab).toHaveURL(/deposit/);
    await expect(crmTab).toHaveTitle(/Deposit list - HighLow Binary Options/);

    //Expand The Withdrawal Menu
    const crmFinanceWithdrawalLeftNavLink = crmTab.locator('//a/span[text()="Withdrawal "]');
    await expect(crmFinanceWithdrawalLeftNavLink).toBeVisible();
    await crmFinanceWithdrawalLeftNavLink.click();

    //Click The Withdrawal List
    const crmFinanceWithdrawalList = crmTab.locator('//li[1]/a[contains(@href, "/withdrawal/") and contains(text(), "List")]');
    await expect(crmFinanceWithdrawalList).toBeVisible();
    await crmFinanceWithdrawalList.click();

    //Confirm The Screen Has Loaded
    const crmWithdrawalsScreenTitle = crmTab.locator('//h2[contains(text(), "Withdrawal list")]');
    await expect(crmWithdrawalsScreenTitle).toBeVisible();
    await expect(crmTab).toHaveURL(/withdrawal/);
    await expect(crmTab).toHaveTitle(/Withdrawal list - HighLow Binary Options/);

    //Click HL Back Office Link
    const crmHLBackOfficeLink = crmTab.locator('//a[contains(text(), "HL Back Office")]');
    const [hlBackOfficeTab] = await Promise.all([context.waitForEvent('page'), crmHLBackOfficeLink.click(),]);

    //Switch Focus To HL Back Office Tab
    await hlBackOfficeTab.bringToFront();
    await hlBackOfficeTab.waitForLoadState('load');
    await hlBackOfficeTab.setViewportSize({ width: 1920, height: 1080 });

    //Check The HL Back Office Screen Is Loaded
    const crmHLBackOfficeMainScreenTitle = hlBackOfficeTab.locator('//p[contains(text(), "Welcome to Back Office")]');
    await expect(crmHLBackOfficeMainScreenTitle).toBeVisible();
    await expect(hlBackOfficeTab).toHaveURL(/hlbo/);
    await expect(hlBackOfficeTab).toHaveURL(/home/);
    await expect(hlBackOfficeTab).toHaveTitle(/HLBO App/);

    //Close The HL Back Office Tab
    await hlBackOfficeTab.close();
    await crmTab.bringToFront();

    //Click Affiliate Admin Link
    const crmAffiliateAdminLink = crmTab.locator('//a[contains(text(), "Affiliate Admin")]');
    const [AffiliateAdminTab] = await Promise.all([context.waitForEvent('page'), crmAffiliateAdminLink.click(),]);

    //Switch Focus To Affiliate Admin Tab
    await AffiliateAdminTab.bringToFront();
    await AffiliateAdminTab.waitForLoadState('load');
    await AffiliateAdminTab.setViewportSize({ width: 1920, height: 1080 });

    //Check The Affiliate Admin Screen Is Loaded
    const crmAffiliateAdminScreenTitle = AffiliateAdminTab.locator('//span[contains(text(), "Affiliate Dashboard")]');
    await expect(crmAffiliateAdminScreenTitle).toBeVisible();
    await expect(AffiliateAdminTab).toHaveURL(/affbo/);
    await expect(AffiliateAdminTab).toHaveTitle(/Dashboard - Affiliate Admin/);
    
    //Launch OM2Admin In New Window
    const om2Tab = await highlowSharedTestActions.launchOM2Admin(page);

    //Log into OM2Admin As An Admin User
    await highlowSharedTestActions.loginOM2Admin(om2Tab);
    await expect(om2Tab).toHaveURL(/admin/);
    await expect(om2Tab).toHaveURL(/Home.aspx/);
    await expect(om2Tab).toHaveTitle(/MarketsPulse/);
    const om2AdminExecutiveDashboardSection = om2Tab.locator('//*[@id="ctl00_ContentBody_pnlGraphs"]');
    await expect(om2AdminExecutiveDashboardSection).toBeVisible();

    //Select OM2 Admin Portal Operator
    await highlowSharedTestActions.selectOM2AdminPortalOperator(om2Tab, env);

    //Load Trader Search
    const OM2AdminPortalTraderSearchLink = om2Tab.locator('//tr[2]/td[3]/table/tbody/tr[2]/td/a[1]');
    await OM2AdminPortalTraderSearchLink.click();

    //Enter Trader ID In Search Field
    const OM2AdminPortalTraderSearchField = om2Tab.locator('//*[@id="ctl00_ContentBody_txtPlayerName"]');
    await OM2AdminPortalTraderSearchField.click();
    await OM2AdminPortalTraderSearchField.fill(traderUsername);

    //Clear Date Fields
    const OM2AdminPortalTraderSearchFromDate = om2Tab.locator('//*[@id="ctl00_ContentBody_txtFromDate_datetime_cbx"]');
    await OM2AdminPortalTraderSearchFromDate.click();

    //Search For Trader
    const OM2AdminPortalTraderSearchSubmitButton = om2Tab.locator('//*[@id="ctl00_ContentBody_cmdSearch"]');
    await OM2AdminPortalTraderSearchSubmitButton.click();

    //Access Trader Record
    const OM2AdminPortalTraderSearchResultOne = om2Tab.locator('//*[@id="ctl00_ContentBody_rpt_ctl01_hypID"]');
    await OM2AdminPortalTraderSearchResultOne.click();
    const OM2AdminPortalTraderDetailsScreen = om2Tab.locator('//*[@id="ctl00_ContentBody_pvGeneral"]');
    await expect(OM2AdminPortalTraderDetailsScreen).toBeVisible();
});