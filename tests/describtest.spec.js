
const { test, expect } = require('@playwright/test')
test.describe('my login test', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.fill('#user-name', 'standard_user')
        await page.fill('#password', 'secret_sauce')
        await page.click('#login-button')
    })

    test.afterEach(async ({ page }) => {
        page.close()
    })

    test('First test -add to the cart', async ({ page }) => {
        await page.click('#add-to-cart-sauce-labs-backpack')
    })

    test('Second test -remove to the cart', async ({ page }) => {
        await page.click('#add-to-cart-sauce-labs-backpack')
        await page.waitForTimeout(4000)
        await page.click('#remove-sauce-labs-backpack')
        await page.waitForTimeout(4000)
    })

    test('Third test -check out ', async ({ page }) => {
        await page.click('#add-to-cart-sauce-labs-backpack')
        await page.locator("//div[@id='shopping_cart_container']/a").click()
        await page.waitForTimeout(4000)
        const checkout = await page.locator('#checkout')
        await expect(checkout).toHaveText('Checkout')
       // await expect(checkout).toContainText('Check')
    })

})


