//const { test, expect } = require('@playwright/test')
import { test, expect } from '@playwright/test';

// create array of list 

const parmeterData = ['selenium', 'cypress', 'playwright']

// create for loop and inside the loop add test then add ${searchData} in test discription 
for (const searchData of parmeterData) {


    test.skip(`parameterize test for data driven ${searchData}`, async ({ page }) => {

        await page.goto('https://www.google.com/')

        await page.locator('[name =q]').fill(searchData)

        // await page.locator('[name =q]').press('Enter')

        // await page.waitForTimeout(15000)

    })

}


const loginData = [

    { username: 'standard_user', password: 'secret_sauce' },

    { username: 'standard_user', password: 'secret_sauce' },

    { username: 'standard_user', password: 'secret_sauce' }
]
for (const [index, data] of loginData.entries()) {

    test(`login again and again ${data.username} [#index${index}]`, async ({ page }) => {



        // 1. Navigate to application
        await page.goto('https://www.saucedemo.com/');

        // 2. Enter username
        await page.getByPlaceholder('Username').fill(data.username);
        // await page.fill('[data-test="username"]', 'standard_user');

        // 3. Enter password
        await page.getByPlaceholder('Password').fill(data.password);
        // await page.fill('[data-test="password"]', 'secret_sauce');

        // 4. Click login button
        await page.getByRole('button', { name: /login/i }).click();
        //await page.click('[data-test="login-button"]');
        //await page.close();
        // 5. Verify user login successfully
        await expect(page).toHaveURL(/inventory/);
        await expect(page.getByText('Products')).toBeVisible();

        await page.close();



    })
}

