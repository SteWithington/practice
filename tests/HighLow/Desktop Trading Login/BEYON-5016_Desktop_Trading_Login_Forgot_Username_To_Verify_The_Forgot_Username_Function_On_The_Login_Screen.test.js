import { test, expect } from '@playwright/test';

import * as highlowSharedTestActions from '../../sharedTestActions/highlowSharedTestActions.js';

test('BEYON-5016 - Desktop Trading Login - Forgot Username - To Verify The Forgot Username Function On The Login Screen', async ({ page, context }) => {

    //Launch The HighLow Public Website
    await highlowSharedTestActions.launchDesktopHighLowPublicWebsite(page);
    
    //Get Trader Username For Future Use
    const env = testInfo.project.use.baseURL;
    const traderUsername = await highlowSharedTestActions.getTestTraderID(env);
    console.log("Trader Account In Use = " + traderUsername);

    //Launch HighLow CRM Screen In New Window
    const crmTab = await highlowSharedTestActions.launchHighLowCRM(page);

    //Log into HighLow CRM As An Admin User
    await highlowSharedTestActions.loginHighLowCRMAdmin(crmTab);

    //Search For Trader 
    await highlowSharedTestActions.searchCRMForTrader(crmTab, traderUsername);

    //Access Trader's Snapshot
    await highlowSharedTestActions.viewCRMSnapshotForTrader(crmTab);

    //Grab Trader Information
    const crmTraderEmailField = crmTab.locator('(//tr[6]/td/a)[1]');
    const crmTraderEmail = await crmTraderEmailField.textContent();
    const traderEmail = crmTraderEmail.trim();
    console.log(traderEmail);
    const crmTraderDOBField = crmTab.locator('//*[contains(text(), "Born on")]/following::td[1]');
    const crmTraderDOB = await crmTraderDOBField.textContent();

    //Access the Login Screen
    await page.bringToFront();
    await highlowSharedTestActions.launchDesktopTradingLoginScreen(page);

    //Click Forgot Username Link
    const desktopTradingLoginForgotUsernameLink = page.locator('//a[contains(text(),"ユーザー名、")]');
    await desktopTradingLoginForgotUsernameLink.click();

    //Enter Invalid Details
    const desktopTradingLoginForgotUsernameDOBField = page.locator('//*[@id="forgot-username-dob"]');
    await expect(desktopTradingLoginForgotUsernameDOBField).toBeVisible();
    await desktopTradingLoginForgotUsernameDOBField.click();
    await desktopTradingLoginForgotUsernameDOBField.fill(crmTraderDOB);
    const desktopTradingLoginForgotUsernameEmailField = page.locator('//*[@id="forgot-username-email"]');
    await expect(desktopTradingLoginForgotUsernameEmailField).toBeVisible();
    await desktopTradingLoginForgotUsernameEmailField.click();
    await desktopTradingLoginForgotUsernameEmailField.fill("invalidemailaddress@gmail.com");
    const desktopTradingLoginForgotUsernameSubmitButton = page.locator('//*[@id="forgot-username-submit-button"]');
    await desktopTradingLoginForgotUsernameSubmitButton.click();

    //Check Displayed Error Message
    const accountNotFoundErrorMessage = page.locator('//div[text()="口座が見つかりませんでした。"]');
    await expect(accountNotFoundErrorMessage).toBeVisible();

    //Enter Valid Details
    const desktopTradingForgotUsernameClearEmailButton = page.locator('//div[3]/div[3]/div[1]/div/div');
    await desktopTradingForgotUsernameClearEmailButton.click();
    await desktopTradingLoginForgotUsernameEmailField.fill(""); //Clear Field
    await desktopTradingLoginForgotUsernameEmailField.click();
    await desktopTradingLoginForgotUsernameEmailField.fill(traderEmail);

    //Submit Form
    await desktopTradingLoginForgotUsernameSubmitButton.click();

    //Confirm Success Screen Is Displayed
    const desktopTradingLoginForgotUsernameSuccessMessage = page.locator('//div[contains(@class, "LoginScreen_paragraph__") and contains(text(), "ユーザー名を送信しましたのでメールボックスをご確認ください。迷惑フォルダもご確認ください。")]');
    await expect(desktopTradingLoginForgotUsernameSuccessMessage).toBeVisible();

    //Click Email Log Tab
    await crmTab.bringToFront();
    const crmSnapshotEmailLogTab = await crmTab.locator('//descendant::ul[contains(@class, "nav-pills")][1]/li[5]/a');
    await crmSnapshotEmailLogTab.scrollIntoViewIfNeeded();
    await expect(crmSnapshotEmailLogTab).toBeVisible();
    const [emailLog] = await Promise.all([context.waitForEvent('page'), crmSnapshotEmailLogTab.click(),]);

    //Switch Focus To Email Log
    await emailLog.bringToFront();
    await emailLog.waitForLoadState('load');
    await emailLog.setViewportSize({ width: 1920, height: 1080 });
    const crmEmailLogWindow = emailLog.locator('//h2[contains(text(), "Mail Log")]');
    await expect(crmEmailLogWindow).toBeVisible();
    
    //Check Forgot Username Email Is Listed
    const mailLogForgotUsernameEmailTemplate = emailLog.locator('(//tbody/tr/td[2]/a[contains(text(), "FORGOT_USERNAME")])[1]');
    await expect(mailLogForgotUsernameEmailTemplate).toBeVisible( { wait : 3000 } );
    const mailLogEmailSubject = emailLog.locator('//table/tbody/tr[1]/td[5]');
    await expect(mailLogEmailSubject).toContainText(/ユーザーID再送のお知らせ/);

    //Launch Forgot Username Email
    await mailLogForgotUsernameEmailTemplate.click();
    const mailLogForgotUsernameEmailMessage = emailLog.locator('//tbody/tr[2]/td[contains(text(), "FORGOT_USERNAME")]');
    await expect(mailLogForgotUsernameEmailMessage).toBeVisible();

    //Check Email Subject Is Correct
    const emailLogSubject = emailLog.locator('//th[contains(text(), "Subject")]/following-sibling::td[contains(text(), "ユーザーID再送のお知らせ")]');
    await expect(emailLogSubject).toBeVisible();

    //Switch To The iFrame
    const iFrame = emailLog.frameLocator('#email-body-preview');

    //Check That The Username Variable is displayed
    const emailUsername = iFrame.locator('//p[3]/span[contains(text()[1], "%USERNAME%")]');
    await expect(emailUsername).toBeVisible();

    //Launch MailTrap
    const mailTrapTab = await highlowSharedTestActions.launchMailTrap(page);

    //Login MailTrap
    await highlowSharedTestActions.loginMailTrap(mailTrapTab);

    //Access The Mailtrap Inbox
    if (env.match(/stage.*/)) {
        await mailTrapTab.goto("https://mailtrap.io/inboxes/1459974/messages"); //STAGE Inbox
    } else if (env.match(/test1.*/)) {
        await mailTrapTab.goto("https://mailtrap.io/inboxes/1487667/messages"); //TEST1 Inbox
    }

    //Search For Email
    const mailTrapSearchField = mailTrapTab.locator('//*[@name="quick_filter"]');
    await mailTrapSearchField.click();
    await mailTrapSearchField.fill(traderEmail);
    await mailTrapTab.waitForTimeout(3000);

    //Click Email
    const mailTrapFirstListedEmailMessage = mailTrapTab.locator('//div[@data-test-id="messages_list"]/ul/li[1]/a');
    await mailTrapFirstListedEmailMessage.click();
    const firstEmailSubject = mailTrapTab.locator('//div[@data-test-id="messages_list"]/ul/li[1]/a/span[1]');
    const emailSubject = await firstEmailSubject.textContent();
    const firstEmailDetailsSubject = mailTrapTab.locator("//*[@id='detailsView']//h1[contains(text(), '"+emailSubject+"')]");
    await expect(firstEmailDetailsSubject).toBeVisible();
    await mailTrapTab.waitForTimeout(1000);
    const firstEmailHighlighted = mailTrapTab.locator('//div[@data-test-id="messages_list"]/ul/li[1]/a[contains(@class, "isActive")]');
    await expect(firstEmailHighlighted).toBeVisible();

    //Check Email Meta Data
    const emailMetaDataSubject = mailTrapTab.locator('//*[@class="mail_info"]/div/h1');
    await expect(emailMetaDataSubject).toHaveText("ユーザーID再送のお知らせ");
    let emailFrom = mailTrapTab.locator('//strong[contains(text(), "From:")]/following-sibling::span/small');
    if (env.match(/stage.*/)) {
        await expect(emailFrom).toHaveText("HighLow Accounts <accounts@highlow.com>");
    } else if (env.match(/test1.*/)) {
        await expect(emailFrom).toHaveText("HighLow Accounts <test-accounts@highlow.com>");
    }
    const emailTo = mailTrapTab.locator('//strong[contains(text(), "To:")]/following-sibling::span/small');
    await expect(emailTo).toContainText(traderEmail);

    //Switch To The iFrame
    const iFrame1 = mailTrapTab.frameLocator('iframe[data-test-id="message_view_iframe"]');

    //Check Email Content
    const mailTrapEmailBodyText1 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "このメールは")]');
    await expect(mailTrapEmailBodyText1).toBeVisible();
    const mailTrapEmailBodyText2 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "お客様の")]');
    await expect(mailTrapEmailBodyText2).toBeVisible();
    const mailTrapEmailBodyText3 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "要請により、")]');
    await expect(mailTrapEmailBodyText3).toBeVisible();
    const mailTrapEmailBodyText4 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "ユーザー名を")]');
    await expect(mailTrapEmailBodyText4).toBeVisible();
    const mailTrapEmailBodyText5 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "送付しております。")]');
    await expect(mailTrapEmailBodyText5).toBeVisible();
    const mailTrapEmailBodyText6 = iFrame1.locator('//span[contains(@class, "word")]/b[contains(text(), "ユーザーID：")]');
    await expect(mailTrapEmailBodyText6).toBeVisible();
    const mailTrapEmailBodyText7 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "'+traderUsername+'")]');
    await expect(mailTrapEmailBodyText7).toBeVisible();
    const mailTrapEmailBodyText8 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "こちらの")]');
    await expect(mailTrapEmailBodyText8).toBeVisible();
    const mailTrapEmailBodyText9 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "ユーザー名と")]');
    await expect(mailTrapEmailBodyText9).toBeVisible();
    const mailTrapEmailBodyText10 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "お客様で")]');
    await expect(mailTrapEmailBodyText10).toBeVisible();
    const mailTrapEmailBodyText11 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "ご設定されている")]');
    await expect(mailTrapEmailBodyText11).toBeVisible();
    const mailTrapEmailBodyText12 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "パスワードを")]');
    await expect(mailTrapEmailBodyText12).toBeVisible();
    const mailTrapEmailBodyText13 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "使って")]');
    await expect(mailTrapEmailBodyText13).toBeVisible();
    const mailTrapEmailBodyText14 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "ログインしてください。")]');
    await expect(mailTrapEmailBodyText14).toBeVisible();
    const mailTrapEmailBodyText15 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "当案件につきまして")]');
    await expect(mailTrapEmailBodyText15).toBeVisible();
    const mailTrapEmailBodyText16 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "ご不明点が")]');
    await expect(mailTrapEmailBodyText16).toBeVisible();
    const mailTrapEmailBodyText17 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "ございましたら、")]');
    await expect(mailTrapEmailBodyText17).toBeVisible();
    const mailTrapEmailBodyText18 = iFrame1.locator('//a[contains(text(), "カスタマーサポート")]');
    await expect(mailTrapEmailBodyText18).toBeVisible();
    const mailTrapEmailBodyText19 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "ご連絡下さい。")]');
    await expect(mailTrapEmailBodyText19).toBeVisible();
    const mailTrapEmailBodyText20 = iFrame1.locator('//span[contains(@class, "word") and contains(text(), "HighLowサポート・チーム")]');
    await expect(mailTrapEmailBodyText20).toBeVisible();

    //Check Footer Is Displayed
    const mailTrapEmailMessageFooter = iFrame1.locator('//body/span[1]');
    await expect(mailTrapEmailMessageFooter).toBeVisible();
    const mailTrapEmailFooterTermsAndAgreementsLink = iFrame1.locator('//a[contains(@href, "/terms-and-agreements")]');
    await expect(mailTrapEmailFooterTermsAndAgreementsLink).toBeVisible();
    const mailTrapEmailFooterTermsAndAgreementsLinkText = iFrame1.locator('//font[contains(text(), "契約条件")]');
    await expect(mailTrapEmailFooterTermsAndAgreementsLinkText).toBeVisible();
});