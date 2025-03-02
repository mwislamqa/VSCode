
const {test,expect} = require('@playwright/test')

test('handle iframe', async ({ page })=>{

await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
  let loctor= page.frameLocator('#iframe').locator("//div[@id='tnb-dark-mode-toggle-wrapper']/a")
await loctor.click()
await page.waitForTimeout(4000)
await page.close()


})

