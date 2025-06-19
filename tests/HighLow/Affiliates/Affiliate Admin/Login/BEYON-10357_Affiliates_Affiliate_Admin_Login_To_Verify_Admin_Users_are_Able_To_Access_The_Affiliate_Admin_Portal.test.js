import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-10357 - CRM - Affiliate Admin - Login - To Verify Admin Users Are Able To Access To The Affiliate Admin Portal', async ({ page, context }) => {

    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);

    //Launch HighLow CRM Screen In New Window
    const crmTab = await highlowSharedTestActions.launchHighLowCRM(page);

    //Log into HighLow CRM As An Admin User
    await highlowSharedTestActions.loginHighLowCRMAdmin(crmTab);

    //Confirm That The Affiliate Admin Link Is Displayed
    const crmAffiliateAdminLink = crmTab.locator('//a[normalize-space()="Affiliate Admin"]');
    await expect(crmAffiliateAdminLink).toBeVisible();

    //Click The Affiliate Admin Link
    const [affiliateAdminTab] = await Promise.all([context.waitForEvent('page'), crmAffiliateAdminLink.click(),]);

    //Switch Focus To Email Log
    await affiliateAdminTab.bringToFront();
    await affiliateAdminTab.waitForLoadState('load');
    await affiliateAdminTab.setViewportSize({ width: 1920, height: 1080 });

    //Check That The Affiliate Dashboard Is Launched
    const crmAffiliateDashboardLink = affiliateAdminTab.locator('//a/span[contains(text(), "Affiliate Dashboard")]');
    await expect(crmAffiliateDashboardLink).toBeVisible();
});