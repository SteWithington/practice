import { expect } from '@playwright/test';

export async function launchDesktopHighLowPublicWebsite(page) {

    //Access the public website
    await page.goto('/');

    //Expect the public website to be visible
    const baseURL = page.context()._options.baseURL;
    await expect(page).toHaveURL(new RegExp(baseURL));
    const publicWebsiteCommonNavBar = page.locator('//*[@id="common-nav"]');
    await expect(publicWebsiteCommonNavBar).toBeVisible();

    //Set the user agent to match the original page
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    return page;
}