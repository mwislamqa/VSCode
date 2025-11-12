

import { test , expect} from '@playwright/test';

test('data table handling test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dynamic-table');
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0, 1500); // Scroll down by 500 pixels
    // .all() method to get all rows in the table
    for (const row of await page.locator('tbody tr td').all()) {
        // Add your test logic here
        await row.click();

        await page.pause();
    }
});