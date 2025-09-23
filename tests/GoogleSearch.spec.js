const { test, expect } = require('@playwright/test')

//page size
test.use({
  viewport: { width: 1500, height: 1200 },
  colorScheme: 'light'
});

//test.describe.configure({ mode: 'parallel' });//for parallel test

test('google search', async ({ page }) => {

  //await page.goto('https://www.google.com/')//https://www.google.com/
  // await page.pause()
  // const search =await page.locator('[name=q]').fill("selenium")
  // await page.waitForTimeout(2000)
  // await page.search.press("Enter");

  // await page.waitForTimeout(2000)
  // //await  locator.fill('Enter')
   
  await page.goto('https://www.google.com/');

  await page.getByRole('combobox', { name: 'Search' }).fill('playwright test');
   await page.waitForTimeout(4000)
  await page.locator('[name=q]').press("Enter")
 

})

// test('google search 1', async ({ page }) => {

//   page.on('console', msg => console.log('PAGE LOG:', msg.text()));
// })


// test('google search 2', async ({ page }) => {

//   page.on('console', msg => console.log('PAGE LOG:', msg.text()));
// })