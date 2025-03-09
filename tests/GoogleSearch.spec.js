const {test, expect}= require('@playwright/test')


test('google search', async ({page}) =>{

    await page.goto('https://www.google.com/')//https://www.google.com/
    const locator =await page.locator('[name=q]').fill("selenium")
    await page.waitForTimeout(4000)
    await page.keyboard.press('Enter');

    await page.waitForTimeout(4000)
    //await  locator.fill('Enter')

    

})