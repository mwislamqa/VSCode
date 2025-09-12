const {test, expect }= require('@playwright/test')


test('all mouse actiion click operation', async ({page})=>{

await page.goto("")
//let mouse button clikc 
await page.locator('').click()
//right mouse button click

await page.locator('').click({button: 'right'})


await page.locator('').click({button: 'up'})



await page.locator('').click({button: 'down'})
/// bouble click
await page.locator("").dblclick();
//hidden element click
await page.locator('').click({force:true})


})