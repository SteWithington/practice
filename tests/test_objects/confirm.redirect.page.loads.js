import { expect } from '@playwright/test';

export async function confirmRedirectPageLoads(page, env) {
    if (env.match(/stage.*/)) {
        await expect(page).toHaveURL('https://stage.highlowmi.dev');
    } else if (env.match(/highlow.com.*/)) {
        await expect(page).toHaveURL('https://highlow.com');
    }
    // const iFrame = page.frameLocator('#landing');
    const redirectPageMainText = page.locator('//h1[contains(text(), "HighLowからのお知らせ")]');
    await expect(redirectPageMainText).toBeVisible();
    const redirectPageBodyText1 = page.locator('//p[1]/span[1][contains(text(), "は、")]'); 
    await expect(redirectPageBodyText1).toBeVisible();
    const redirectPageBodyText2 = page.locator('//p[1]/span[2][contains(text(), "事業の終了に伴い、")]'); 
    await expect(redirectPageBodyText2).toBeVisible();
    const redirectPageBodyText3 = page.locator('//p[1]/span[3][contains(text(), "全ての取引サービスの提供を")]'); 
    await expect(redirectPageBodyText3).toBeVisible();
    const redirectPageBodyText4 = page.locator('//p[1]/span[4][contains(text(), "廃止いたしました。")]'); 
    await expect(redirectPageBodyText4).toBeVisible();
    const redirectPageBodyText5 = page.locator('//p[2]/span[1]/span[1][contains(text(), "ご不明な点がございましたら、")]');
    await expect(redirectPageBodyText5).toBeVisible();
    const redirectPageBodyText6 = page.locator('//p[2]/span[1]/span[2][contains(text(), "サポートチーム")]');
    await expect(redirectPageBodyText6).toBeVisible();
    const redirectPageSupportEmailLink = page.locator('//p[2]/a[contains(@href, "mailto:support@highlow.com") and contains (text(), "support@highlow.com")]');
    await expect(redirectPageSupportEmailLink).toBeVisible();
    const redirectPageBodyText7 = page.locator('//p[2]/span[2]/span[1][contains(text(), "まで")]');
    await expect(redirectPageBodyText7).toBeVisible();
    const redirectPageBodyText8 = page.locator('//p[2]/span[2]/span[2][contains(text(), "お問い合わせください。")]');
    await expect(redirectPageBodyText8).toBeVisible();
    const redirectPageTermsConditionsLink = page.locator('//p[3]/a[contains(@href, "/legal/jp/HLMI_Internationals_Account_Terms_jp.pdf") and contains (text(), "口座利用条件")]');
    await expect(redirectPageTermsConditionsLink).toBeVisible();
}