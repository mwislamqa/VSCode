
//const { test, expect } = require('@playwright/test')
import { test , expect} from '@playwright/test';
test('handle iframe', async ({ page }) => {

  // await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
  //   const iFrameloctor= page.frameLocator('#iframe').locator("//div[@id='tnb-dark-mode-toggle-wrapper']/a")
  // await iFrameloctor.click()
  // await page.waitForTimeout(4000)
  // await page.close()

  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
  await page.locator('iframe[name="iframeResult"]').contentFrame().locator('iframe[title="W3Schools Free Online Web Tutorials"]')
    .contentFrame().getByRole('button', { name: 'Button to open search field' }).click();
  await page.locator('iframe[name="iframeResult"]').contentFrame().locator('iframe[title="W3Schools Free Online Web Tutorials"]')
  .contentFrame().getByRole('textbox', { name: 'Search field' }).click();
  await page.locator('iframe[name="iframeResult"]').contentFrame().locator('iframe[title="W3Schools Free Online Web Tutorials"]')
  .contentFrame().getByRole('textbox', { name: 'Search field' }).fill('Java');
  await page.locator('iframe[name="iframeResult"]').contentFrame().locator('iframe[title="W3Schools Free Online Web Tutorials"]')
  .contentFrame().getByRole('button', { name: 'Button to search' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Get your own website' }).click();
  const page1 = await page1Promise;
  await page1.locator('.spaces-button').first().click();


})

