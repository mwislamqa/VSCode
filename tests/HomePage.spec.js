
const {test,expect}= require('@playwright/test')
//const { describe } = require('node:test')

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    console.log('test start')
  });


//test.describe('HomePage', async({page})=>{

test('login aplication',async ({page})=>{
//await test.setTimeout(5_000)//set max time for runing this test.
//await page.goto('https://www.saucedemo.com/');
let pagetitle=page.title()
await console.log(pagetitle)
//soft assertion
await expect.soft(page).toHaveTitle('Swag Labs')
await page.locator('id=user-name').fill('standard_user')
await page.locator('id=password').fill('secret_sauce')
await page.click('id=login-button');
//await page.getByAltText('Sauce Labs Backpack').click()
///await page.click('id=add-to-cart')
await page.close()
});

test('home page ',async({page})=>{
    await page.locator('id=user-name').fill('standard_user')
    await page.locator('id=password').fill('secret_sauce')
    await page.click('id=login-button');
    await page.getByAltText('Sauce Labs Backpack').click()
    await page.click('id=add-to-cart')
    await  page.waitForTimeout(5000)
    //hard assertion
    await page.expect(page).toHaveTitle('Swag Labs')
});





//})