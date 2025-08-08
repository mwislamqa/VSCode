
const {test,expect}= require('@playwright/test')
import { chromium } from 'playwright'

test('alert diolog handle', async () => {
    //`await page.goto('/' +'test/delete_customer.php')`
   
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
   await  page.goto('https://demo.guru99.com/test/delete_customer.php')
    
//alert listener //diolog alert listener fuction
    page.on('dialog', async (dialog) => {
      //  expect(dialog.type()).toContain('alert')
     let text= dialog.message()
     console.log(text)
       // expect(text).toEqual('Do you really want to delete this Customer?')

     await dialog.accept()
     //await dialog.dismiss()

     await expect(page).toHaveURL('https://demo.guru99.com/test/delete_customer.php');
       
    })

    
    await page.locator('[name=cusid]').fill('md islam')
    await page.locator("//input[@name='submit']").click()
   
   
   // dialog.expect()
    //dialog.dismiss();
   
    await page.waitForTimeout(4000)
    page.close();

})
