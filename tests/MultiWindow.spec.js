//const { test, expect } = require('@playwright/test')
import { test , expect} from '@playwright/test';
import { chromium } from 'playwright';


test('multi window ', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');
  const titlfrontpage = await page.title();
  console.log(`homepage title::${titlfrontpage}`)

  // Click a link that opens a new tab
  await page.click('id=newWindowBtn');

  // Wait for the new page to open
  const newPagePromise = context.waitForEvent('page');
  //await page.click('text=Open New Tab');
  const newPage = await newPagePromise;

  // Interact with the new page
  await newPage.waitForLoadState();
  const newPageTitle = await newPage.title();
  console.log(`New page title: ${newPageTitle}`);

  // Switch back to the original page
  await page.bringToFront();
  await page.goBack();



  // Close the new page
  await newPage.close();

  const titleofOrgPage = await page.title();
  console.log(`homepage title::${titleofOrgPage}`)
  await page.click('id=newWindowBtn');
  await page.waitForTimeout(5000)



  await browser.close();
})