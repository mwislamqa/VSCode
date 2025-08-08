const { test, expect } = require('@playwright/test');

test('login scenario', async ({ page }) => {
  // 1. Navigate to application
  await page.goto('https://www.saucedemo.com/');

  // 2. Enter username
  await page.fill('[data-test="username"]', 'standard_user');

  // 3. Enter password
  await page.fill('[data-test="password"]', 'secret_sauce');

  // 4. Click login button
  await page.click('[data-test="login-button"]');

  // 5. Verify user login successfully
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();
});
