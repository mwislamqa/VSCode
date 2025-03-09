// @ts-check
const { test, expect } = require('@playwright/test');

<<<<<<< HEAD
test('i love to find title', async ({ page }) => {
=======
test('it has title validation', async ({ page }) => {
>>>>>>> e141f0099b9548fa16e294226a5838939cd4571b
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
