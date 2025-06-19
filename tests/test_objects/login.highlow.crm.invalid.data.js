import { expect } from '@playwright/test';

import { crmInvalidCredentials } from '../data/crmInvalidCredentials.js';

export async function crmAttemptLoginInvalidData(page) {

    //Define UI Elements
    const crmUsername = await page.locator('//*[@name="_username"]');
    const crmPassword = await page.locator('//*[@name="_password"]');
    const crmLoginButton = await page.locator('//button');
    const crmBadCredsMessage = await page.locator('//*[@id="error"]');

    //Attempt To Login With Each Piece Of Invalid Data
    for (const { username, password } of crmInvalidCredentials) {
    await crmUsername.fill(username);
    await crmPassword.fill(password);
    await crmLoginButton.click();

    //Check That The Validation Message Is Displayed
    await expect(crmBadCredsMessage).toBeVisible();
    await expect(crmBadCredsMessage).toContainText("Error!");
    await expect(crmBadCredsMessage).toContainText("Bad credentials");

    //Refresh The Screen To Clear The Message And Data
    await page.reload();
    }
}