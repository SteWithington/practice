export async function launchNewBrowserTab(page) {

    //Launch a new page
    const context = page.context();
    const newPage = await context.newPage();

    return newPage;
}