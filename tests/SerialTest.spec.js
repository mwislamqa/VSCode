import { test } from '@playwright/test';
// Annotate entire file as serial.
// You can annotate inter-dependent tests as serial. If one of the serial tests fails, 
// all subsequent tests are skipped. All tests in a group are retried together
test.describe.configure({ mode: 'serial' });
//test.describe('Serial tests demo', () => {

let page;
test.beforeAll(async ({ browser }) => {
  // create a page from the provided browser fixture
  page = await browser.newPage();
    await page.goto('https://playwright.dev/');
});

test.afterAll(async () => {
    if (page)
        await page.close();
});
   


test('runs second', async () => {
    await page.getByText('Get Started').click();
});
test('runs third', async () => {
    await page.getByRole('link', { name: 'Installing Playwright', exact: true }).click();
});
//});