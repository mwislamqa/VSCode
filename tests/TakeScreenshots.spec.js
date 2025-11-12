//const { test } = require('@playwright/test');
import { test , expect} from '@playwright/test';

test('Take a screenshot', async ({ page }) => {
    await page.goto('https://example.com');
    await page.locator('h1').screenshot({ path: 'heading.png' });// Screenshot of specific element
    await page.screenshot({ path: 'example.png' });// Full page screenshot
});