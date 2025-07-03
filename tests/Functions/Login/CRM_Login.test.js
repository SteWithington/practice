import { test, expect } from '@playwright/test';

import { launchDesktopHighLowPublicWebsite } from '../../test_objects/launch.highlow.desktop.public.website.js';
import { launchNewBrowserTab } from '../../test_objects/launch.new.browser.tab.js';
import { launchHighLowCRM } from '../../test_objects/launch.highlow.crm.js';
import { crmAttemptLoginInvalidData } from '../../test_objects/login.highlow.crm.invalid.data.js';
import { clearLocalStorageAndCookies } from '../../test_objects/clear.local.storage.and.cookies.js';
import { loginHighLowCRMAdmin } from '../../test_objects/login.highlow.crm.admin.js';

test('CRM Login', async ({ page }) => {

    //Launch The HighLow Public Website
    await launchDesktopHighLowPublicWebsite(page);
    const baseURL = page.context()._options.baseURL;

    //Launch HighLow CRM
    const crmTab =  await launchNewBrowserTab(page);
    await launchHighLowCRM(crmTab, baseURL);

    //Attempt To Login Using Invalid data
    await crmAttemptLoginInvalidData(crmTab);

    //Attempt To Access The CRM Deposit List Page Without Logging In
    if (baseURL.match(/stage.*/)) {
        await crmTab.goto('https://crmstage.highlowmi.dev/deposit/?maxMonthRange=2'); // STAGE Url
    } else if (baseURL.match(/test1.*/)) {
        await crmTab.goto('https://crmtest1.highlowmi.dev/deposit/?maxMonthRange=2'); // TEST1 Url
    } else if (baseURL.match(/highlow.com.*/)) {
        await crmTab.goto('https://crm.highlow.com/deposit/?maxMonthRange=2'); // PROD Url
    }
    const crmSignInBox = crmTab.locator('//*[@class="signin-box"]');
    await expect(crmSignInBox).toBeVisible();

    //Clear URL History To Stop Redirecting To The CRM Deposit List Page
    await clearLocalStorageAndCookies(crmTab);

    //Log into HighLow CRM As An Admin User
    await loginHighLowCRMAdmin(crmTab);
});