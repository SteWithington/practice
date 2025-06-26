import { test, expect } from '@playwright/test';

import { confirmRedirectPageLoads } from '../test_objects/confirm.redirect.page.loads.js';

test('Desktop URL Launch', async ({ page, context }, testInfo) => {

    // Get the baseURL
    const env = testInfo.project.use.baseURL;

    let bankingUrl, newAffiliateUrl, oldAffiliateUrl, webAppUrl, accountUrl, cdnUrl, cfdUrl;

    if (env.match(/stage.*/)) {
        bankingUrl = 'https://bankingstage.highlowmi.dev';
        oldAffiliateUrl = 'https://affiliatestage.highlowmi.dev';
        newAffiliateUrl = 'https://affiliatesstage.highlowmi.dev';
        webAppUrl = 'https://wastage.highlowmi.dev';
        accountUrl = 'https://stage-account.highlowmi.dev';
        cdnUrl = 'https://cdnstage.highlowmi.dev';
        cfdUrl = 'https://cfdstage.highlowmi.dev';
    } else if (env.match(/highlow.com.*/)) {
        bankingUrl = 'https://banking.highlow.com';
        oldAffiliateUrl = 'https://affiliate.highlow.com';
        newAffiliateUrl = 'https://affiliates.highlow.com';
        webAppUrl = 'https://app.highlow.com';
        accountUrl = 'https://account.highlow.com';
        cdnUrl = 'https://cdn.highlow.com';
        cfdUrl = 'https://cfd.highlow.com';
    }
    const traderFaqUrl = 'https://help.highlow.com';
    const affiliateFaqUrl = 'https://affiliate-help.highlow.com';

    // === Trader Pages ===
    const traderPaths = [
    '/',
    '/account',
    '/migration',
    '/landing-page',
    '/trading-demo',
    '/loyalty',
    '/register',
    '/crypto',
    '/account?a_aid=633b62a35755b',
    '/landing-page?a_aid=633b62a35755b',
    '/trading-demo?a_aid=633b62a35755b',
    '/loyalty?a_aid=633b62a35755b',
    '/register?a_aid=633b62a35755b',
    '/crypto?a_aid=633b62a35755b',
    '/trade/trading-platforms',
    '/trade/option-types',
    '/trade/trade-conditions',
    '/trade/options-schedule',
    '/trade/expiry-rates',
    '/overview',
    '/banking',
    '/why-trade',
    '/points',
    '/company',
    '/help-and-support',
    '/resources/overview',
    '/resources/faq',
    '/resources/options-glossary',
    '/quick-demo',
    '/login',
    '/logout',
    '/terms-and-agreements',
    '/account/upload-document',
    '/trade/trading-platforms',
    '/trade/option-types',
    '/trade/trade-conditions',
    '/trade/options-schedule',
    '/trade/expiry-rates',
    '/overview',
    '/banking',
    '/why-trade',
    '/points',
    '/company',
    '/help-and-support',
    '/resources/overview',
    '/resources/faq',
    '/resources/options-glossary',
    '/my-account/dashboard',
    '/my-account/profile',
    '/my-account/deposit',
    '/my-account/trading/trade-action-history',
    '/my-account/trading/transaction-history',
    '/my-account/news',
    '/my-account/settings',
    webAppUrl,
    webAppUrl + '/login',
    webAppUrl + '/logout',
    webAppUrl + '/forgot-password',
    webAppUrl + '/forgot-username',
    webAppUrl + '/trade',
    webAppUrl + '/trade/12345',
    bankingUrl + '/deposit',
    bankingUrl + '/deposit/bank-transfer',
    bankingUrl + '/deposit/credit-card',
    bankingUrl + '/withdraw',
    bankingUrl + '/withdraw/bank-accounts',
    bankingUrl + '/withdraw/bank-accounts/add',
    accountUrl + '/signup/',
    accountUrl + '/register',
    accountUrl + '/crypto',
    accountUrl + '/signup/?a_aid=633b62a35755b',
    accountUrl + '/register?a_aid=633b62a35755b',
    accountUrl + '/crypto?a_aid=633b62a35755b',
    cfdUrl,
    cfdUrl + '/login',
    cfdUrl + '/login?redirect=cfd-platform-redirect'
    ];

    for (const path of traderPaths) {
    await page.goto(path);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await confirmRedirectPageLoads(page, env);
    }

    // === Affiliate Pages ===
    const affiliatePaths = [
    oldAffiliateUrl + '/ja/',
    newAffiliateUrl,
    newAffiliateUrl + '/ja/',
    newAffiliateUrl + '/ja/sign-in',
    newAffiliateUrl + '/ja/marketing-tools',
    newAffiliateUrl + '/ja/faq',
    newAffiliateUrl + '/ja/contact-us',
    newAffiliateUrl + '/ja/sign-up',
    newAffiliateUrl + '/ja/my-account/',
    newAffiliateUrl + '/ja/my-account/referral-links',
    newAffiliateUrl + '/ja/my-account/promotions/banners',
    newAffiliateUrl + '/ja/my-account/promotions/direct-links',
    newAffiliateUrl + '/ja/my-account/report/clicks',
    newAffiliateUrl + '/ja/my-account/report/conversion',
    newAffiliateUrl + '/ja/my-account/report/referral-clients',
    newAffiliateUrl + '/ja/my-account/payment-history',
    newAffiliateUrl + '/ja/my-account/settings/profile',
    newAffiliateUrl + '/ja/my-account/settings/bank',
    newAffiliateUrl + '/ja/my-account/settings/campaign-details',
    newAffiliateUrl + '/ja/my-account/live-notifications',
    newAffiliateUrl + '/ja/my-account/change-password',
    newAffiliateUrl + '/ja/logout'
    ];

    for (const path of affiliatePaths) {
    await page.goto(path);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await confirmRedirectPageLoads(page, env);
    }

    // === Visit Allowed Terms & Conditions URLs ===
    const response = await page.goto(cdnUrl + '/legal/jp/HLMI_Internationals_Affiliate_Terms_jp.pdf?v4.23.11');
    await expect(response.status()).toBe(200);
    await expect(response.headers()['content-type']).toContain('application/pdf');
    const buffer = await response.body();
    await expect(buffer.length).toBeGreaterThan(50);
    await expect(page).toHaveURL(/legal\/jp\/HLMI_Internationals_Affiliate_Terms_jp\.pdf\?v4\.23\.11/);

    const response1 = await page.goto(cdnUrl + '/legal/jp/HLMI_Internationals_Account_Terms_jp.pdf?v4.23.09');
    await expect(response1.status()).toBe(200);
    await expect(response1.headers()['content-type']).toContain('application/pdf');
    const buffer1 = await response1.body();
    await expect(buffer1.length).toBeGreaterThan(50);
    await expect(page).toHaveURL(/legal\/jp\/HLMI_Internationals_Account_Terms_jp\.pdf\?v4\.23\.09/);

    await page.goto('/');
    await page.setViewportSize({ width: 1920, height: 1080 });
    const redirectPageTermsConditionsLink = page.locator('//p[3]/a[contains(@href, "/legal/jp/HLMI_Internationals_Account_Terms_jp.pdf?v4.23.09") and contains (text(), "口座利用条件")]');
    await expect(redirectPageTermsConditionsLink).toBeVisible();
    const [traderPdf] = await Promise.all([context.waitForEvent('page'), redirectPageTermsConditionsLink.click(),]);
    await expect(traderPdf).toHaveURL(/legal\/jp\/HLMI_Internationals_Account_Terms_jp\.pdf\?v4\.23\.09/);

    //Check FAQs If Env Is Prod
    if (env.match(/highlow.com.*/)) {
        await page.goto(traderFaqUrl + '/support/solutions/articles/12000104263-highlow');
        await confirmRedirectPageLoads(page, traderFaqUrl + '/support/solutions/articles/12000104263-highlow');
        await page.goto(affiliateFaqUrl + '/support/solutions/12000005737');
        await confirmRedirectPageLoads(page, affiliateFaqUrl + '/support/solutions/12000005737');
    } else {
        // If not in production, skip the FAQ checks
        console.log('Skipping FAQ checks - This is not the production environment.');
    }
});