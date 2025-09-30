const { test, expect, chromium } = require('@playwright/test')

test('scroll page', async () => {

    const browser = await chromium.launch({
        headless: false,
        // args: ['--start-maximized']
    });
    const context = await browser.newContext({ visualViewport: { width: 1280, height: 720 } });
    const page = await context.newPage();
    await page.goto('/');
   // await page.goto('https://playwright.dev/', { waitUntil: 'load', timeout: 30000 });
    const viewport = page.viewportSize();
    console.log('Viewport size:', viewport);
    await page.mouse.wheel(0, 1200);

    await page.waitForTimeout(5000)

    await browser.close();

})