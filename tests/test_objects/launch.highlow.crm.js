import { expect } from '@playwright/test';

export async function launchHighLowCRM(page, baseURL) {

    // Set the user agent to match the original page
    await page.setViewportSize({ width: 1920, height: 1080 });

    let env;
    if (baseURL.match(/stage.*/)) {
        await page.goto('https://crmstage.highlowmi.dev/login'); // STAGE Url
        env = 'stage';
    } else if (baseURL.match(/test1.*/)) {
        await page.goto('https://crmtest1.highlowmi.dev/login'); // TEST1 Url
        env = 'test1';
    } else if (baseURL.match(/highlow.com.*/)) {
        await page.goto('https://crm.highlow.com/login'); // PROD Url
        env = 'highlow.com';
    }

    //Expect the CRM login page to be visible
    const crmSignInBox = page.locator('//*[@class="signin-box"]');
    await expect(crmSignInBox).toBeVisible();
    await expect(page).toHaveURL(/crm/);
    await expect(page).toHaveURL(new RegExp(env));
    await expect(page).toHaveURL(/login/);

    return page;
}