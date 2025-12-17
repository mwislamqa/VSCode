//const { test, expect } = require('@playwright/test')

import { test , expect} from '@playwright/test';
import { env } from 'node:process'
//test.describe('all test', async ({page})=>{


test.skip('alert diolog handle', async ({ page }) => {
  console.log(process.env.NODE_ENV)
  console.log(process.env.USER_NAME)

})
test.only('handle dropdown ', async ({ page }) => {


  // Wait for the new page to open
  const newPagePromise = context.waitForEvent('page');
  //await page.click('text=Open New Tab');
  const newPage = await newPagePromise;

  // const browser = await chromium.launch();
  //  const context = await browser.newContext();
  //   const page = await context.newPage();
  //In Playwright, the await keyword is used to pause the execution of a script until an asynchronous operation is complete.
  tag: '@smoke'//taggin concetp
  await page.goto('https://www.facebook.com/r.php')
  await expect(page).toHaveURL('https://www.facebook.com/r.php')
  const fbimge = await page.locator("//div[@class='_9bp-']/img")
  await expect(fbimge).toBeVisible()


  await expect(page).toHaveTitle('Sign Up for Facebook');
  await page.locator("#month").selectOption("Jan")
  await page.locator("#day").selectOption('6')
  await page.waitForTimeout(5000)
  //multiple selection in dropdown

  await page.selectOption("#year", [{ value: '1990' }, { value: '2000' }, { value: '1993' }])
  await expect(page.locator("#year")).toHaveValues(['1990', '2000', '1993'])

await page.close()
   

})
//})


