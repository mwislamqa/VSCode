const {test, expect}= require('@playwright/test')

//page size
test.use({
    viewport: { width: 1500, height: 1200 },
    colorScheme: 'light' 
  });

test('google search', async ({page}) =>{

    await page.goto('https://www.google.com/')//https://www.google.com/
   // await page.pause()
    const locator =await page.locator('[name=q]').fill("selenium")
    await page.waitForTimeout(2000)
    await page.page.locator('[name=q]').press("Enter");

    await page.waitForTimeout(2000)
    //await  locator.fill('Enter')

    

})