const {test, expect}=require('@playwright/test')

test('scroll page', async({page})=>{

    await page.goto('http://demo.guru99.com/test/guru99home/')
    await page.mouse.wheel(0,500)

    await page.waitForTimeout(4000)
    


})