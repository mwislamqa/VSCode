const {test,expect}= require('@playwright/test')
import { env } from 'node:process' 
//test.describe('all test', async ({page})=>{


test.skip('alert diolog handle', async ({ page }) => {
  console.log(process.env.NODE_ENV)
  console.log(process.env.USER_NAME)
  
})
test.only('handle dropdown ',  async ({page}) =>{
   await  page.goto('https://www.facebook.com/r.php')
   await expect(page).toHaveURL('https://www.facebook.com/r.php')
   const fbimge= await page.locator("//div[@class='_9bp-']/img")
   await expect(fbimge).toBeVisible


   await expect(page).toHaveTitle('Sign Up for Facebook');
   await page.locator("#month").selectOption("Jan")
   await page.locator("#day").selectOption('6')
   await page.waitForTimeout(5000)



   await page.close()
   
  



})
//})


