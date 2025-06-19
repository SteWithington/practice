import { expect } from '@playwright/test';

import { crmCredentials } from '../data/crmCredentials.js';

export async function loginHighLowCRMAdmin(page) {

    //Grab the CRM URL from the original page to determine the environment
    const baseURL = page.context()._options.baseURL;

    //Check the environment and define the correct credentials
    let credentials;
    let env;
    if (baseURL.includes('stage')) {
        credentials = crmCredentials.stage;
        env = 'stage';
    } else if (baseURL.includes('test1')) {
        credentials = crmCredentials.test1;
        env = 'test1';
    } else {
        credentials = crmCredentials.prod;
        env = 'highlow.com';
    }

    //Login using the correct credentials based on the environment
    const crmUsername = page.locator('//*[@name="_username"]');
    await crmUsername.fill(credentials.username);
    const crmPassword = page.locator('//*[@name="_password"]');
    await crmPassword.fill(credentials.password);
    const crmLoginButton = page.locator('//button');
    await crmLoginButton.click();

    //Expect the CRM dashboard to be visible
    const crmDashboard = page.locator('//div[@class="sidebar"]');
    await expect(crmDashboard).toBeVisible();
    await expect(page).toHaveURL(/crm/);
    await expect(page).toHaveURL(new RegExp(env));
    const title = await page.title();
    await expect(title).toMatch(/Transaction Dashboard - HighLow Binary Options/);
}