
const { test, expect } = require('@playwright/test')
import { chromium } from 'playwright';

test('playwight context test in plallal', async () => {

    const browser = await chromium.launch()
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto('https://www.google.com/')
    await page.waitForTimeout(3000)

    const browserContext1 = await browser.newContext()
    const page1 = await browserContext1.newPage()

    await page1.goto('https://www.facebook.com')
    await page1.waitForTimeout(3000)

})