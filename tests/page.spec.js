const { test, expect } = require('@playwright/test')

import { LognPage } from '../PageObjectModel/LoginPage';

test.only('login test page object model', async ({ page }) => {
    await expect(async () => {
        const login = new LognPage(page)
        await login.launchUrl();
        await login.logintotheAplicaiton()
        await page.waitForTimeout(3000)
        await login.addtothecart()
        await page.waitForTimeout(3000)
        // await login.removeCart()
        // await page.waitForTimeout(3000)

        await page.close()

    }).toPass()
})
