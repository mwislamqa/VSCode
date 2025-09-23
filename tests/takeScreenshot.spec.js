//inbuild take the screenshots


const {test, expect} = require('@playwright/test')

test('take screenshot ', async  ({page}) =>{

await page.goto('http://www.google.com/')
//Here is a quick way to capture a screenshot and save it into a file:
await page.screenshot({path: 'screenshots.png'})
//full screenshot
await page.screenshot({ path: 'screenshot.png', fullPage: true });

//screenshot for element
await page.locator('[name=q]').screenshot({ path: 'screenshot.png' });

})





