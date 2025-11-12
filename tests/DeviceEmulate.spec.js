

//const { test, expect } = require('@playwright/test');
import { test , expect} from '@playwright/test';

test('Take a screenshot', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.screenshot({ path: 'heading.png' });// Screenshot of specific element



});
