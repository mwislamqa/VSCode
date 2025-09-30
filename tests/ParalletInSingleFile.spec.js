

import { test } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test('runs in parallel 1', async ({ page }) => { 

await page.goto('https://books-pwakit.appspot.com/')
    //firt way to access shadow dom
    await page.locator("book-app[apptitle='BOOKS'] #input").fill('Selenium');
    //second way to access shadow
   // await page.locator("book-app >>> app-header >>> app-toolbar >>> book-input-decorator >>> input#input").fill('Selenium');

    await page.locator("book-app[apptitle='BOOKS'] #input").press('Enter');
    await page.waitForTimeout(4000)

});
test('runs in parallel 2', async ({ page }) => { 

    await page.goto('https://books-pwakit.appspot.com/')
    //firt way to access shadow dom
    //await page.locator("book-app[apptitle='BOOKS'] #input").fill('Selenium');
    //second way to access shadow
    await page.locator("book-app >>> app-header >>> app-toolbar >>> book-input-decorator >>> input#input").fill('Selenium');

    await page.locator("book-app[apptitle='BOOKS'] #input").press('Enter');
    await page.waitForTimeout(4000)
});