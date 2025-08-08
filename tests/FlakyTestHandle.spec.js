

import { test, expect } from '@playwright/test'

test('google search', async ({ page }) => {
    await page.goto('https://www.google.com');
   
//approach one
     await expect(async () => {
        const search = await page.locator('[name=q]')
        await expect(search).toBeEmpty()
        await search.fill('selenium')
        await search.press('Enter')
       // await page.keyboard.press('Enter')
        
    }).toPass()

    //approach two
    //page.timeout(30000) // set timeout for the test
    //page.pageloadTimeout(30000) // set timeout for the page load
    //page.waitforloadState('networkidle') // wait for the page to load completely
    //page.getByRole('textbox', { name: 'Search' }).fill('selenium')
    //page.getbytext('Search').press('Enter')
    //page.getbyattribute('aria-label', 'Search').fill('selenium')

})

