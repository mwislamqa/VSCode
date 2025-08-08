const {test, expect } = require('@playwright/test')

test('handle hidden element in playwright' , async ({page})=>{

await page.goto('')
await page.locator('').click({fource: true})// for hidden elememnt 

//combind xpath and , or
const button = page.getByRole('button').and(page.getByTitle('Subscribe'));

// button is visible then click
await page.locator('button').filter({ visible: true }).click();


})


test('drop down testing for the app', async ({page}) => {

    await page.goto('https://www.fcbcc.com')

  

})