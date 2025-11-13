import { test, expect } from '@playwright/test';
//const {test, expect} = require('@playwright/test');

test('login scenario', async ({ page }) => {
  // 1. Navigate to application
   await page.goto('https://www.saucedemo.com/');

  // 2. Enter username
  await page.getByPlaceholder('Username').fill('standard_user');
 // await page.fill('[data-test="username"]', 'standard_user');

  // 3. Enter password
  await page.getByPlaceholder('Password').fill('secret_sauce');
  // await page.fill('[data-test="password"]', 'secret_sauce');

  // 4. Click login button
  await page.getByRole('button', { name: /login/i }).click();
  //await page.click('[data-test="login-button"]');
 //await page.close();
  // 5. Verify user login successfully
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();

  //await page.close();
});
