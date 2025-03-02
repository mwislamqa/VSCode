const {test,expect}= require('@playwright/test')
import {data} from '../e2e/data/loginData.json'

test('login to the app', async ({page}) =>{
   
await page.goto('https://www.saucedemo.com/')
await page.locator('#user-name').fill(data.userName)
await page.locator('#password').fill('secret_sauce')
await page.click('#login-button')
await page.waitForTimeout(4000)


})