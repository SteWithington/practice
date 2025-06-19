// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect, devices, chromium } from '@playwright/test';
//--------------------------------------------------------------------------------------------------------------------------
// STORED VARIABLES
//--------------------------------------------------------------------------------------------------------------------------
export async function getTestTraderID(env) {
    const traderID = [
        { username: 'HLMI159369', env: 'highlow.com' },
        { username: 'HLMI493754', env: 'highlow.com' },
        { username: 'HLMI549184', env: 'highlow.com' },
        { username: 'HLMI569785', env: 'highlow.com' },
        { username: 'HLMI548797', env: 'highlow.com' },
        { username: 'HLMI498874', env: 'highlow.com' },
        { username: 'HLMI549152', env: 'highlow.com' },
        { username: 'HLMI569785', env: 'highlow.com' },
        { username: 'HLMI656399', env: 'highlow.com' },
        { username: 'HLMI689669', env: 'highlow.com' },
        { username: 'HLMI732312', env: 'highlow.com' },
        { username: 'HLMI733212', env: 'highlow.com' },
        { username: 'HLSSNCOM286023', env: 'stage' },
        { username: 'HLSSNCOM286024', env: 'stage' },
        { username: 'HLSSNCOM286025', env: 'stage' },
        { username: 'HLSSNCOM286026', env: 'stage' },
        { username: 'HLSSNCOM286027', env: 'stage' },
        { username: 'HLSSNCOM286028', env: 'stage' },
        { username: 'HLSSNCOM286030', env: 'stage' },
        { username: 'HLSSNCOM286034', env: 'stage' },
        { username: 'HLSSNCOM286035', env: 'stage' },
        { username: 'HLSSNCOM286037', env: 'stage' },
        { username: 'HLSSNCOM286038', env: 'stage' },
        { username: 'HLSSNCOM286039', env: 'stage' },
        { username: 'HLSSNCOM286040', env: 'stage' },
        { username: 'HLSSNCOM286043', env: 'stage' },
        { username: 'HLSSNCOM286044', env: 'stage' },
        { username: 'HLSSNCOM286045', env: 'stage' },
        { username: 'HLSSNCOM286046', env: 'stage' },
        { username: 'HLSSNCOM286196', env: 'stage' },
        { username: 'HLSSNCOM286197', env: 'stage' },
        { username: 'HLSSNCOM286198', env: 'stage' },
        { username: 'HLSSNCOM286199', env: 'stage' },
        { username: 'HLSSNCOM286423', env: 'stage' },
        { username: 'HLSSNCOM287674', env: 'stage' },
        { username: 'HLSSNCOM287677', env: 'stage' },
        { username: 'HLSSNCOM287680', env: 'stage' },
        { username: 'HLSSNCOM287682', env: 'stage' },
        { username: 'HLSSNCOM287685', env: 'stage' },
        { username: 'HLSSNCOM287686', env: 'stage' },
        { username: 'HLSSNCOM287683', env: 'stage' },
        { username: 'HLSSNCOM287615', env: 'stage' },
        { username: 'HL72336', env: 'stage' },
        { username: 'HL350705', env: 'stage' },
        { username: 'HL51371', env: 'stage' },
        { username: 'HM30685', env: 'stage' },
        { username: 'HN9185', env: 'stage' },
        { username: 'HLSSNCOM302586', env: 'stage' },
        { username: 'HLSSNCOM302596', env: 'stage' },
        { username: 'HLSSNCOM302598', env: 'stage' },
        { username: 'HLSSNCOM302600', env: 'stage' },
        { username: 'HLSSNCOM302609', env: 'stage' },
        { username: 'HLSSNCOM302611', env: 'stage' },
        { username: 'HLSSNCOM302619', env: 'stage' },
        { username: 'HLSSNCOM302633', env: 'stage' },
        { username: 'HLSSNCOM302656', env: 'stage' },
        { username: 'HLSSNCOM302686', env: 'stage' },
        { username: 'T1MI3646', env: 'test1' },
        { username: 'T1MI3645', env: 'test1' },
        { username: 'T1MI3644', env: 'test1' },
        { username: 'T1MI3747', env: 'test1' },
        { username: 'T1MI3748', env: 'test1' },
        { username: 'T1MI3749', env: 'test1' },
        { username: 'T1MI3750', env: 'test1' },
        { username: 'T1MI3755', env: 'test1' },
        { username: 'T1MI4010', env: 'test1' },
        { username: 'T1MI4003', env: 'test1' },
        { username: 'T1MI4001', env: 'test1' },
        { username: 'T1MI3999', env: 'test1' },
        { username: 'T1MI3997', env: 'test1' },
        { username: 'T1MI3992', env: 'test1' },
        { username: 'T1MI3966', env: 'test1' },
        { username: 'T1MI3963', env: 'test1' },
        //Add more user accounts with their respective environments here
    ];

    //Filter the traderID array to only include accounts with matching env
    const filteredAccounts = traderID.filter((account) => env.includes(account.env));
  
    //If no accounts are found with matching env, return null
    if (filteredAccounts.length === 0) {
        return null;
    }
  
    //Generate a random index between 0 and the length of the filteredAccounts array
    const index = Math.floor(Math.random() * filteredAccounts.length);
  
    //Return the username at the randomly generated index from the filteredAccounts array
    return filteredAccounts[index].username;
}
//--------------------------------------------------------------------------------------------------------------------------
export async function getTestAffiliateID(env) {
    const affiliateIDNumber = [
        { affiliate: '6012359d1db06', env: 'highlow.com' },
        { affiliate: '635ef22940710', env: 'highlow.com' },
        { affiliate: '6427a434852bb', env: 'highlow.com' },
        { affiliate: '646ec31c49e44', env: 'highlow.com' },
        { affiliate: '633b61ba17cc6', env: 'stage' },
        { affiliate: '633b61f04bcdb', env: 'stage' },
        { affiliate: '633b622bb0574', env: 'stage' },
        { affiliate: '633b6266d1ef8', env: 'stage' },
        { affiliate: '633b62a35755b', env: 'stage' },
        { affiliate: '633b633f7ba7b', env: 'stage' },
        { affiliate: '633b64164cf45', env: 'stage' },
        { affiliate: '633b64171139c', env: 'stage' },
        { affiliate: '633b64170b514', env: 'stage' },
        { affiliate: '633b64284f9d9', env: 'stage' },
        { affiliate: '668212cd3594a', env: 'test1' },
        { affiliate: '66821431daf15', env: 'test1' },
        { affiliate: '6682144fc9400', env: 'test1' },
        { affiliate: '66821482eee13', env: 'test1' },
        { affiliate: '6682149a2018d', env: 'test1' },
        { affiliate: '66821542bf714', env: 'test1' },
        //Add more affiliate accounts with their respective environments here
    ];

    //Filter the affiliateIDNumber array to only include accounts with matching env
    const filteredAccounts = affiliateIDNumber.filter((account) => env.includes(account.env));
  
    //If no accounts are found with matching env, return null
    if (filteredAccounts.length === 0) {
        return null;
    }
  
    //Generate a random index between 0 and the length of the filteredAccounts array
    const index = Math.floor(Math.random() * filteredAccounts.length);
  
    //Return the affiliate at the randomly generated index from the filteredAccounts array
    return filteredAccounts[index].affiliate;
}
//--------------------------------------------------------------------------------------------------------------------------
export async function getDefaultTradingDuration(type) {
    const arr = [
            {type: "turbo", duration: "15秒"}, //15秒, 30秒, 1分, 3分, 5分
            {type: "turboSpread", duration: "1分"}, //30秒, 1分, 3分, 5分
            {type: "highlow", duration: "15分"}, //15分, 1時間
            {type: "highlowSpread", duration: "15分"} //15分, 1時間
        ];
    const typeObj = arr.find((item) => item.type === type);
    return typeObj.duration;
}
//--------------------------------------------------------------------------------------------------------------------------
export async function getDefaultTradingAssetName(type, platform) {
    const arr = {
        hlmi: [
            {type: "turbo", assetName: "USD/JPY"},
            {type: "turboSpread", assetName: "USD/JPY"},
            {type: "highlow", assetName: "USD/JPY"},
            {type: "highlowSpread", assetName: "USD/JPY"}
        ],
        //USD/JPY, BTC/USD, BTC/JPY, ETH/JPY, ETH/USD, EUR/USD, etc
        om2: [
            {type: "turbo", assetName: "USDJPY"},
            {type: "turboSpread", assetName: "USDJPY"},
            {type: "highlow", assetName: "USDJPY"},
            {type: "highlowSpread", assetName: "USDJPY"}
        ]
        //USDJPY, XBTUSD, BTCJPY, ETHJPY, ETHUSD, EURUSD,  etc - We DO NOT have the slash in OM2 Portal
    };
    const typeObj = arr[platform].find((item) => item.type === type);
    return typeObj.assetName;
}
//--------------------------------------------------------------------------------------------------------------------------
//LAUNCH SPECIFIC PAGES
//--------------------------------------------------------------------------------------------------------------------------
export async function launchDesktopHighLowPublicWebsite(page) {
    await page.goto('/');
    // const publicWebsiteCommonNavBar = page.locator('//*[@id="common-nav"]');
    // await expect(publicWebsiteCommonNavBar).toBeVisible();
    await page.setViewportSize({ width: 1920, height: 1080 });
    return page;
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchMobileHighLowPublicWebsite() {
    
    const browser = await chromium.launch();
    const context = await browser.newContext({ ...devices['iPhone 14'] });
    const mobile = await context.newPage();
    await mobile.goto('/');
    // const publicWebsiteCommonNavBar = mobile.locator('//*[@id="common-nav"]');
    // await expect(publicWebsiteCommonNavBar).toBeVisible();
    await mobile.setViewportSize({ width: 450, height: 1070});
    return mobile;
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchHighLowCRM(page) {
    const context = page.context();
    const crmTab = await context.newPage();

    await crmTab.setViewportSize({ width: 1920, height: 1080 });

    const env = await page.url(); // We use the original page to detect the current env
    if (env.match(/stage.*/)) {
        await crmTab.goto('https://crmstage.highlowmi.dev/login'); // STAGE Url
    } else if (env.match(/test1.*/)) {
        await crmTab.goto('https://crmtest1.highlowmi.dev/login'); // TEST1 Url
    } else if (env.match(/highlow.com.*/)) {
        await crmTab.goto('https://crm.highlow.com/login'); // PROD Url
    }

    const crmSignInBox = crmTab.locator('//*[@class="signin-box"]');
    await expect(crmSignInBox).toBeVisible();

    return crmTab;
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchDesktopTradingLoginScreen(page) {
    const desktopTradingLoginButton = page.locator('//a[starts-with(@class, "btn") and @href="/login"]');
    await desktopTradingLoginButton.click();
    const desktopTradingLoginScreen = page.locator('//div[contains(@class, "LoginScreen_loginScreen__")]');
    await expect(desktopTradingLoginScreen).toBeVisible();
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchMobileTradingLoginScreen(page) {
    const mobileTradingPublicWebsiteLoginButton = page.locator('//a[contains(@href, "/login") and contains(@class, "menu-bar-logIn")]');
    await mobileTradingPublicWebsiteLoginButton.click();
    const mobileTradingLoginScreen = page.locator('//*[@id="login-page"]');
    await expect(mobileTradingLoginScreen).toBeVisible();
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchOM2Admin(page) {
    const context = page.context();
    const om2Tab = await context.newPage();

    await om2Tab.setViewportSize({ width: 1920, height: 1080 });

    const env = await page.url(); // We use the original page to detect the current env
        if (env.match(/stage.*/)) {
            await om2Tab.goto("https://adminstage.highlowmi.dev/Home.aspx"); //STAGE Url
        } else if (env.match(/test1.*/)) {
            await om2Tab.goto("https://admintest.highlowmi.dev/Home.aspx"); //TEST1 Url
        } else {
            await om2Tab.goto("https://admin.highlow.com/Home.aspx"); //PROD Url
        }
    const OM2AdminPortalLoginScreen = om2Tab.locator('//*[@id="pnlLogin"]');
    await expect(OM2AdminPortalLoginScreen).toBeVisible();

    return om2Tab;
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchMailTrap(page) {
    const context = page.context();
    const mailTrapTab = await context.newPage();

    await mailTrapTab.setViewportSize({ width: 1920, height: 1080 });

    await mailTrapTab.goto("https://mailtrap.io/signin");
    const mailTrapUserEmailField = await mailTrapTab.locator('//*[@id="user_email"]');
    await expect(mailTrapUserEmailField).toBeVisible();
    return mailTrapTab;
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchDesktopAffiliatePublicWebsite(page) {
    const context = page.context();
    const affiliateTab = await context.newPage();

    await affiliateTab.setViewportSize({ width: 1920, height: 1080 });

    const env = await page.url();
        if (env.match(/stage.*/)) {
            await affiliateTab.goto("https://affiliatesstage.highlowmi.dev/ja/"); //STAGE Url
        } else if (env.match(/test1.*/)) {
            await affiliateTab.goto("https://affiliatestest1.highlowmi.dev/ja/"); //TEST1 Url
        } else {
            await affiliateTab.goto("https://affiliates.highlow.com/ja/"); //PROD Url
        }
    const affiliatePublicWebsite = affiliateTab.locator('//*[@id="common-nav"]');
    await expect(affiliatePublicWebsite).toBeVisible();
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchMobileAffiliatePublicWebsite(page) {

    const browser = await chromium.launch();
    const context = await browser.newContext({ ...devices['iPhone X'] });
    const mobile = await context.newPage();

    const env = await page.url();
        if (env.match(/stage.*/)) {
            await mobile.goto("https://affiliatesstage.highlowmi.dev/ja/"); //STAGE Url
        } else if (env.match(/test1.*/)) {
            await mobile.goto("https://affiliatestest1.highlowmi.dev/ja/"); //TEST1 Url
        } else {
            await mobile.goto("https://affiliates.highlow.com/ja/"); //PROD Url
        }
    const affiliatePublicWebsite = mobile.locator('//*[@id="common-nav"]');
    await expect(affiliatePublicWebsite).toBeVisible();
    await mobile.setViewportSize({ width: 450, height: 1070});
    return mobile;
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchDesktopAffiliateLogin(page) {
    const affiliateDesktopLoginButton = page.locator('//a[@class="highlight"]');
    await affiliateDesktopLoginButton.click();
    const affiliateDesktopLoginModal = page.locator('//*[@id="login-form"]');
    await expect(affiliateDesktopLoginModal).toBeVisible();
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchMobileAffiliateLogin(mobile) {
    const affiliatePublicWebsiteMobileHamburgerMenuButton = mobile.locator('//button[@data-toggle-class="show-mobile-menu"]');
    await affiliatePublicWebsiteMobileHamburgerMenuButton.click();
    const affiliatePublicWebsiteMobileHamburgerMenuLoginButton = mobile.locator('//a[@data-target="#signin-popup"]');
    await affiliatePublicWebsiteMobileHamburgerMenuLoginButton.click();
    const affiliatesLoginScreen = mobile.locator('//*[@id="signin-popup"]');
    await expect(affiliatesLoginScreen).toBeVisible();
}
//--------------------------------------------------------------------------------------------------------------------------
export async function loginDesktopAffiliate(page, affiliateID) {
    const affiliateDesktopLoginEmailField = page.locator('(//*[@id="login-username"])[1]');
    await affiliateDesktopLoginEmailField.fill(affiliateID);
    const affiliateDesktopLoginPasswordField = page.locator('(//*[@id="login-password"])[1]');
    await affiliateDesktopLoginPasswordField.fill("Load12");
    const affiliateDesktopLoginSubmitButton = page.locator('(//*[@class="p-form--fields"])[1]');
    await affiliateDesktopLoginSubmitButton.click();
    const affiliateDashboardLogoutButton = page.locator('//*[@class="navbar-logout-link"]');
    await expect(affiliateDashboardLogoutButton).toBeVisible();
    const affiliateDashboardScreenPageTitle = page.locator('//div[contains(@class, "page-heading")]/h3[contains(text(), "管理画面")]');
    await expect(affiliateDashboardScreenPageTitle).toBeVisible( { timeout : 3000 } );
    await expect(page).toHaveURL(/ja\/my-account/, { timeout : 3000 } );
}
//--------------------------------------------------------------------------------------------------------------------------
export async function loginMobileAffiliate(mobile, affiliateID) {
    const affiliateMobileLoginEmailField = mobile.locator('(//*[@id="login-username"])[1]');
    await affiliateMobileLoginEmailField.fill(affiliateID);
    const affiliateMobileLoginPasswordField = mobile.locator('(//*[@id="login-password"])[1]');
    await affiliateMobileLoginPasswordField.fill("Load12");
    const affiliateMobileLoginSubmitButton = mobile.locator('(//*[@class="p-form--fields"])[1]');
    await affiliateMobileLoginSubmitButton.click();
    const affiliateDashboardLogoutButton = mobile.locator('//*[@class="navbar-logout-link"]');
    await expect(affiliateDashboardLogoutButton).toBeVisible();
    const affiliateDashboardScreenPageTitle = mobile.locator('//div[contains(@class, "page-heading")]/h3[contains(text(), "管理画面")]');
    await expect(affiliateDashboardScreenPageTitle).toBeVisible( { timeout : 3000 } );
    await expect(mobile).toHaveURL(/ja\/my-account/, { timeout : 3000 } );
}
//--------------------------------------------------------------------------------------------------------------------------
//COMMON USER ACTIONS
//--------------------------------------------------------------------------------------------------------------------------
export async function loginHighLowCRMAdmin(crmTab) {
    const env = await crmTab.url();
    if (env.match(/stage.*/)) {
        const crmUsername = crmTab.locator('//*[@name="_username"]');
        await crmUsername.fill("automatedtest");
        const crmPassword = crmTab.locator('//*[@name="_password"]');
        await crmPassword.fill("kYf5WLm9");
        const crmLoginButton = crmTab.locator('//button');
        await crmLoginButton.click();
    } else if (env.match(/test1.*/)) {
        const crmUsername = crmTab.locator('//*[@name="_username"]');
        await crmUsername.fill("automatedtest");
        const crmPassword = crmTab.locator('//*[@name="_password"]');
        await crmPassword.fill("SbVp7T6z");
        const crmLoginButton = crmTab.locator('//button');
        await crmLoginButton.click();
    } else {
        const crmUsername = crmTab.locator('//*[@name="_username"]');
        await crmUsername.fill("qa");
        const crmPassword = crmTab.locator('//*[@name="_password"]');
        await crmPassword.fill("KG8wtxS1");
        const crmLoginButton = crmTab.locator('//button');
        await crmLoginButton.click();
    }
    const crmDashboard = crmTab.locator('//div[@class="sidebar"]');
    await expect(crmDashboard).toBeVisible();
}
//--------------------------------------------------------------------------------------------------------------------------
export async function loginDesktopTraderUserID(page, traderUsername) {
    const desktopTradingLoginScreenUsernameField = page.locator('//*[@id="login-username"]');
    await desktopTradingLoginScreenUsernameField.fill(traderUsername);
    const desktopTradingLoginScreenPasswordField = page.locator('//*[@id="login-password"]');
    await desktopTradingLoginScreenPasswordField.fill("Load12");
    const desktopTradingLoginScreenSubmitButton = page.locator('//*[@id="login-submit-button"]');
    await desktopTradingLoginScreenSubmitButton.click();
    const desktopTradingGlobalNavBar = page.locator('(//div[contains(@class, "NavigationBar_container__")])[1]');
    await expect(desktopTradingGlobalNavBar).toBeVisible();
}
//--------------------------------------------------------------------------------------------------------------------------
export async function loginMobileTraderUserID(page, traderUsername) {
    const mobileTradingLoginUsernameField = page.locator('//*[@id="username"]');
    await mobileTradingLoginUsernameField.fill(traderUsername);
    const mobileTradingLoginPasswordField = page.locator('//*[@id="password"]');
    await mobileTradingLoginPasswordField.fill("Load12");
    const mobileTradingLoginSubmitButton = page.locator('//*[@id="pwa-login"]');
    await mobileTradingLoginSubmitButton.click();
    // const mobileTradingAccountMenuButton = page.locator('//*[@id="my-account-menu-avatar-trigger"]');
    const mobileTradingAccountMenuButton = page.locator('//*[@data-toggle-class="show-mobile-menu"]');
    await expect(mobileTradingAccountMenuButton).toBeVisible();
}
//--------------------------------------------------------------------------------------------------------------------------
export async function loginOM2Admin(om2Tab) {
    const env = await om2Tab.url();
    if (env.match(/highlow.com/)) {
        const OM2AdminPortalLoginEmailField = om2Tab.locator('//*[@id="txtEMail"]');
        await OM2AdminPortalLoginEmailField.click();
        await OM2AdminPortalLoginEmailField.fill("ste@hanasoft.com");
        const OM2AdminPortalLoginPasswordField = om2Tab.locator('//*[@id="txtPassword"]');
        await OM2AdminPortalLoginPasswordField.click();
        await OM2AdminPortalLoginPasswordField.fill("Mg44SVMJs9IC5");
        const OM2AdminPortalLoginButton = om2Tab.locator('//*[@id="Image1"]');
        await OM2AdminPortalLoginButton.click();
    } else {
        const OM2AdminPortalLoginEmailField = om2Tab.locator('//*[@id="txtEMail"]');
        await OM2AdminPortalLoginEmailField.click();
        await OM2AdminPortalLoginEmailField.fill("test-team@hanasoft.com");
        const OM2AdminPortalLoginPasswordField = om2Tab.locator('//*[@id="txtPassword"]');
        await OM2AdminPortalLoginPasswordField.click();
        await OM2AdminPortalLoginPasswordField.fill("testteamhanasoft"); //The account needs to be recreated if we copy the PROD database over again
        const OM2AdminPortalLoginButton = om2Tab.locator('//*[@id="Image1"]');
        await OM2AdminPortalLoginButton.click();
    }
    const OM2AdminPortalHomeScreen = om2Tab.locator('//*[@id="aspnetForm"]');
    await expect(OM2AdminPortalHomeScreen).toBeVisible();
}
//--------------------------------------------------------------------------------------------------------------------------
export async function loginMailTrap(mailTrapTab) {
    const mailTrapLoginEmailField = mailTrapTab.locator('//*[@id="user_email"]');
    await mailTrapLoginEmailField.fill("test-team@hanasoft.com");
    const mailTrapLoginNextButton = mailTrapTab.locator('//a[contains(text(), "Next")]');
    await mailTrapLoginNextButton.click();
    const mailTrapLoginPasswordField = mailTrapTab.locator('//*[@id="user_password"]');
    await mailTrapLoginPasswordField.fill("t35tT3am2025");
    const mailTrapLoginSubmitButton = mailTrapTab.locator('//*[@name="commit"]');
    await mailTrapLoginSubmitButton.click();
    const mailTrapMainScreen = mailTrapTab.locator('//*[@id="falconApp"]');
    await expect(mailTrapMainScreen).toBeVisible({ timeout : 10000 });
    try {
        const mailTrapCookieBannerAllowButton = mailTrapTab.locator('//*[@id="CybotCookiebotDialogBodyButtonAccept"]');
        await expect(mailTrapCookieBannerAllowButton).toBeVisible( { timeout : 3000 } );
        await mailTrapCookieBannerAllowButton.click();
        await expect(mailTrapCookieBannerAllowButton).toBeHidden( { timeout : 3000 } );
    }
    catch(err) {

    }
}
//--------------------------------------------------------------------------------------------------------------------------
export async function selectOM2AdminPortalOperator(om2Tab, env) {
    let om2OperatorField = om2Tab.locator('//*[@id="ddlOperator"]');
    if (env.match(/stage.*/)) {
        await om2OperatorField.selectOption({ label: "MarketsPulse" });
    } else if (env.match(/test1.*/)) {
        await om2OperatorField.selectOption({ label: "MarketsPulse" });
    }
}
//--------------------------------------------------------------------------------------------------------------------------
export async function dismissAnyDesktopNotifications() {
    //Dismiss Any Notifications If Displayed
    try {
        let notifications = 0;
        while (notifications < 10) {

            //Clear Any Notification
            await browser.pause(500);
            const desktopTradingNotificationCloseButton = page.locator('//div[contains(@class, "WhatsNewModal__StyledModalCloseButton")]');
            await desktopTradingNotificationCloseButton.waitForDisplayed({ timeout : 5000 });
            await desktopTradingNotificationCloseButton.waitForClickable();

            if (await desktopTradingNotificationCloseButton.isDisplayed()) {
                await desktopTradingNotificationCloseButton.click();
                await desktopTradingNotificationCloseButton.waitForDisplayed({ reverse: true });
                await browser.pause(500);
                await browser.refresh();
                notifications++;
            } else {
                // No notifications found, exit the loop
                console.log("No Notificiations Displayed");
                break;
            }
        }
    }
    catch(err) {

    }
}
//--------------------------------------------------------------------------------------------------------------------------
export async function dismissAnyMobileNotifications() {
    //Dismiss Any Notifications If Displayed
    try {
        let notifications = 0;
        while (notifications < 10) {

            //Clear Any Notification
            const mobileTradingNotificationCloseButton = page.locator('//div[contains(@class, "WhatsNewModal__StyledModalCloseButton")]');
            await mobileTradingNotificationCloseButton.waitForDisplayed({ timeout : 5000 });
            await mobileTradingNotificationCloseButton.waitForClickable();

            if (await mobileTradingNotificationCloseButton.isDisplayed()) {
                await mobileTradingNotificationCloseButton.click();
                await mobileTradingNotificationCloseButton.waitForDisplayed({ reverse: true });
                await browser.refresh();
                notifications++;
            } else {
                // No notifications found, exit the loop
                console.log("No Notificiations Displayed");
                break;
            }
        }
    }
    catch(err) {

    }
}
//--------------------------------------------------------------------------------------------------------------------------
export async function enableDesktop1ClickIfRequired(page) {
    const placeDesktopTradeConfirmButton = page.locator('//div[contains(@class, "TradePanel_confirmButton__")]');
    try {
        await expect(placeDesktopTradeConfirmButton).toBeVisible({ timeout: 1000 });
        const desktop1ClickToggle = page.locator('//descendant::div[@class="react-switch-bg"][2]');
        await desktop1ClickToggle.click();
        const snackBarMessage = page.locator('//span[contains(text(),"ワンクリック注文が有効です。承認なしで約定可能です。")]');
        await expect(snackBarMessage).toBeVisible();
        await expect(placeDesktopTradeConfirmButton).toBeHidden({ timeout: 1000 });
        console.log("1-Click Now Enabled");
      }
      catch(err) {
        await expect(placeDesktopTradeConfirmButton).toBeHidden({ timeout: 1000 });
        console.log("1-Click Already Enabled");
      }
}
//--------------------------------------------------------------------------------------------------------------------------
export async function placeHIGHDesktopTrade(page, tradeNumber) {
    const placeHighDesktop1ClickTradeButton = page.locator('//div[contains(@id, "TradePanel_oneClickHighButton__")]');
    let attemptCount = 0;
    let tradeSold = false;
    while (attemptCount < 5 && !tradeSold) { //Max 5 attempts including the first normal attempt
        try {
            await placeHighDesktop1ClickTradeButton.click();
            const desktopTradingOpenTradeCount = page.locator('//div[contains(@id, "RECENTLY_OPENED_OPTION_TAB")]/preceding-sibling::div[contains(@class, "OpenTradesBadgeCount_openTradesCountBadge__") and contains(text(), "' + tradeNumber + '")]');
            await expect(desktopTradingOpenTradeCount).toBeVisible({ timeout: 5000 });
            console.log("HIGH TRADE " + tradeNumber + " PLACED SUCCESSFULLY");

            return; //Exit the function after successful placement
        } catch (err) {
            attemptCount++;
            if (attemptCount < 5) {
                console.log("FAILED HIGH TRADE " + tradeNumber + " PLACEMENT - RETRYING: ", attemptCount);
            } else {
                console.log("FAILED HIGH TRADE PLACEMENT - 5 TIMES - QUITTING");
            }
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------------
export async function placeLOWDesktopTrade(page, tradeNumber) {
    const placeLowDesktop1ClickTradeButton = page.locator('//div[contains(@id, "TradePanel_oneClickLowButton__")]');
    let attemptCount = 0;
    let tradeSold = false;
    while (attemptCount < 5 && !tradeSold) { //Max 5 attempts including the first normal attempt
        try {
            await placeLowDesktop1ClickTradeButton.click();
            const desktopTradingOpenTradeCount = page.locator('//div[contains(@id, "RECENTLY_OPENED_OPTION_TAB")]/preceding-sibling::div[contains(@class, "OpenTradesBadgeCount_openTradesCountBadge__") and contains(text(), "' + tradeNumber + '")]');
            await expect(desktopTradingOpenTradeCount).toBeVisible({ timeout: 5000 });
            console.log("LOW TRADE " + tradeNumber + " PLACED SUCCESSFULLY");

            return; //Exit the function after successful placement
        } catch (err) {
            attemptCount++;
            if (attemptCount < 5) {
                console.log("FAILED LOW TRADE " + tradeNumber + " PLACEMENT - RETRYING: ", attemptCount);
            } else {
                console.log("FAILED LOW TRADE PLACEMENT - 5 TIMES - QUITTING");
            }
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------------
export async function placeHIGHMobileTrade(page, tradeNumber) {
    const placeHighMobile1ClickTradeButton = page.locator('//descendant::div[@id="placeHighTrade"][2]');
    await expect(placeHighMobile1ClickTradeButton).toBeVisible({ timeout: 5000 });
    let attemptCount = 0;
    let tradeSold = false;
    while (attemptCount < 5 && !tradeSold) { //Max 5 attempts including the first normal attempt
        try {
            await placeHighMobile1ClickTradeButton.click();
            const mobileTradingOpenTradeMarker = page.locator('//descendant::span[contains(@class, "badgeCounter_number__") and contains(text(), "' + tradeNumber + '")][2]');
            await expect(mobileTradingOpenTradeMarker).toBeVisible({ timeout: 5000 });
            console.log("HIGH TRADE " + tradeNumber + " PLACED SUCCESSFULLY");

            return; //Exit the function after successful placement
        } catch (err) {
            attemptCount++;
            if (attemptCount < 5) {
                console.log("FAILED HIGH TRADE " + tradeNumber + " PLACEMENT - RETRYING: ", attemptCount);
            } else {
                console.log("FAILED HIGH TRADE PLACEMENT - 5 TIMES - QUITTING");
            }
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------------
export async function placeLOWMobileTrade(page, tradeNumber) {
    const placeLowMobile1ClickTradeButton = page.locator('//descendant::div[@id="placeLowTrade"][2]');
    await expect(placeLowMobile1ClickTradeButton).toBeVisible({ timeout: 5000 });
    let attemptCount = 0;
    let tradeSold = false;
    while (attemptCount < 5 && !tradeSold) { //Max 5 attempts including the first normal attempt
        try {
            await placeLowMobile1ClickTradeButton.click();
            const mobileTradingOpenTradeMarker = page.locator('//descendant::span[contains(@class, "badgeCounter_number__") and contains(text(), "' + tradeNumber + '")][2]');
            await expect(mobileTradingOpenTradeMarker).toBeVisible({ timeout: 5000 });
            console.log("LOW TRADE " + tradeNumber + " PLACED SUCCESSFULLY");

            return; //Exit the function after successful placement
        } catch (err) {
            attemptCount++;
            if (attemptCount < 5) {
                console.log("FAILED LOW TRADE " + tradeNumber + " PLACEMENT - RETRYING: ", attemptCount);
            } else {
                console.log("FAILED LOW TRADE PLACEMENT - 5 TIMES - QUITTING");
            }
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------------
export async function searchCRMForTrader(page, traderUsername) {
    const crmTraderGlobalSearchField = page.locator('//*[@id="global-search-simple"]');
    await crmTraderGlobalSearchField.click();
    await crmTraderGlobalSearchField.fill(traderUsername);
    await page.waitForTimeout(1000);
    await crmTraderGlobalSearchField.press('Space');
}
//--------------------------------------------------------------------------------------------------------------------------       
export async function viewCRMSnapshotForTrader(page) {
    const crmSearchResults = page.locator('//li[1]/a/div/p[contains(@class, "search-key")]');
    await crmSearchResults.click();
    const crmTraderSnapshot = page.locator('//h2[contains(@class, "page-title") and contains (text(), "Account Snapshot")]');
    await expect(crmTraderSnapshot).toBeVisible();
    await page.waitForTimeout(1000);
}
//--------------------------------------------------------------------------------------------------------------------------
export async function clearGuidedTourModalMobile(page) {
    const mobileTradingGuidedTourModalCloseButton = page.locator('//div[contains(@class, "snackbar_dismissButton__")]'); 
    try {     
        await expect(mobileTradingGuidedTourModalCloseButton).not.toBeVisible({ timeout: 3000 });
    }
    catch(err) {
        await mobileTradingGuidedTourModalCloseButton.click();
        await expect(mobileTradingGuidedTourModalCloseButton).not.toBeVisible();
    }
}
//--------------------------------------------------------------------------------------------------------------------------
export async function enableMobile1ClickIfRequired(page) {
    const enabledMobile1ClickTradeToggle = page.locator('//descendant::div[contains(@id, "oneClickTradeToggle") and contains(@class, "oneClickTradeToggle_enabled")][2]');
        try {
            await expect(enabledMobile1ClickTradeToggle).toBeVisible( { timeout: 5000 } );
        }
        catch(err) {
            const mobileTrading1ClickTradeToggle = page.locator('//descendant::div[@id="oneClickTradeToggle"][2]');
            await mobileTrading1ClickTradeToggle.click();
            await expect(enabledMobile1ClickTradeToggle).toBeVisible( { timeout: 5000 } );
            const mobileTrading1ClickEnabledSnackbar = page.locator('//div[contains(@class, "snackbar_content")]');
            await expect(mobileTrading1ClickEnabledSnackbar).toBeVisible();
            await page.waitForTimeout(2000);
        }
}
//--------------------------------------------------------------------------------------------------------------------------
//CALCULATE DATE AND TIME
//--------------------------------------------------------------------------------------------------------------------------
export async function calculateCurrentLocalDateTimeYYYYMMDD() {
    var currentDateTime = new Date();
    var yyyy = currentDateTime.getFullYear();
    var mm = String(currentDateTime.getMonth() + 1).padStart(2, '0'); //January is 0!
    var dd = String(currentDateTime.getDate()).padStart(2, '0');
    var hrs = currentDateTime.getHours()<10?'0' + currentDateTime.getHours():'' + currentDateTime.getHours();
    var mins = currentDateTime.getMinutes()<10?'0' + currentDateTime.getMinutes():'' + currentDateTime.getMinutes();
    var currentLocalDateAndTimeYYYYMMDD = yyyy + '/' + mm + '/' + dd + ' ' + hrs + ':' + mins;
    return currentLocalDateAndTimeYYYYMMDD
}
//--------------------------------------------------------------------------------------------------------------------------
export async function calculateCurrentUtcDateTimeYYYYMMDD() {
    var currentDateTime = new Date();
    var yyyy = currentDateTime.getUTCFullYear();
    var mm = String(currentDateTime.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
    var dd = String(currentDateTime.getUTCDate()).padStart(2, '0');
    var hrs = currentDateTime.getUTCHours()<10?'0' + currentDateTime.getUTCHours():'' + currentDateTime.getUTCHours();
    var mins = currentDateTime.getUTCMinutes()<10?'0' + currentDateTime.getUTCMinutes():'' + currentDateTime.getUTCMinutes();
    var currentUtcDateAndTimeYYYYMMDD = yyyy + '/' + mm + '/' + dd + ' ' + hrs + ':' + mins;
    return currentUtcDateAndTimeYYYYMMDD
}
//--------------------------------------------------------------------------------------------------------------------------
export async function calculateCurrentUtcDateTimeDDMMYYYY() {
    var currentDateTime = new Date();
    var yyyy = currentDateTime.getUTCFullYear();
    var mm = String(currentDateTime.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
    var dd = String(currentDateTime.getUTCDate()).padStart(2, '0');
    var hrs = currentDateTime.getUTCHours()<10?'0' + currentDateTime.getUTCHours():'' + currentDateTime.getUTCHours();
    var mins = currentDateTime.getUTCMinutes()<10?'0' + currentDateTime.getUTCMinutes():'' + currentDateTime.getUTCMinutes();
    var currentUtcDateAndTimeDDMMYYYY = dd + '/' + mm + '/' + yyyy + ' ' + hrs + ':' + mins;
    return currentUtcDateAndTimeDDMMYYYY
}
//--------------------------------------------------------------------------------------------------------------------------
// ADDITIONAL HELPERS
//--------------------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------------------
export async function clearLocalAndSessionStorageAndCookies(page) {    
//Clear URL History To Stop Redirecting To The CRM Deposit List Page
    await page.evaluate(() => {
        sessionStorage.clear();
        localStorage.clear();
    });
    const context = page.context();
    await context.clearCookies();
}
//--------------------------------------------------------------------------------------------------------------------------
export async function launchANewBrowserTab(page) {

    //Launch a new page
    const context = page.context();
    const newPage = await context.newPage();

    return newPage;
}
//--------------------------------------------------------------------------------------------------------------------------