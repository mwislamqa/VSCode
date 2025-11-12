//const { test, expect } = require('@playwright/test');
import { test , expect} from '@playwright/test';
test('flaky test', async ({ page }) => {
  await page.goto('https://example.com');
  const element = await page.locator('h1');
  await expect(element).toHaveText('Example Domain');
});