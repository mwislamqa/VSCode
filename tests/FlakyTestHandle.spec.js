

import { test, expect } from '@playwright/test'

test('google search', async ({ page }) => {
    await page.goto('https://www.google.com');
   

     await expect(async () => {
        const search = await page.locator('[name=q]')
        await expect(search).toBeEmpty()
        await search.fill('selenium')
        await page.keyboard.press('Enter')
        
    }).toPass();

})

