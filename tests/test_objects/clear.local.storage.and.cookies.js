export async function clearLocalStorageAndCookies(page) {    
//Clear URL History To Stop Redirecting To The CRM Deposit List Page
    await page.evaluate(() => {
        sessionStorage.clear();
        localStorage.clear();
    });
    const context = page.context();
    await context.clearCookies();
}