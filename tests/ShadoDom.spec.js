



const { test } = require('@playwright/test');

test('shaddow dom', async ({ page }) => {
    await page.goto('https://books-pwakit.appspot.com/')
    //await page.locator("book-app[apptitle='BOOKS'] #input").fill('Selenium');
    await page.locator("book-app >>> app-header >>> app-toolbar >>> book-input-decorator >>> input#input").fill('Selenium');

    await page.locator("book-app[apptitle='BOOKS'] #input").press('Enter');
    await page.waitForTimeout(4000)
})