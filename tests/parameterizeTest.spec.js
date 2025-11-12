//const { test, expect } = require('@playwright/test')
import { test , expect} from '@playwright/test';

// create array of list 

const parmeterData = ['selenium', 'cypress', 'playwright']

// create for loop and inside the loop add test then add ${searchData} in test discription 
for (const searchData of parmeterData) {


    test(`parameterize test for data driven ${searchData}`, async ({ page }) => {

        await page.goto('https://www.google.com/')
    
        await page.locator('[name =q]').fill(searchData)
    
       // await page.locator('[name =q]').press('Enter')
    
       // await page.waitForTimeout(15000)
    
    })

}

