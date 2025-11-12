//const {test,expect}= require('@playwright/test')
import { test , expect} from '@playwright/test';
test('mouse hove actiove by playwright',async function({page}){

await page.goto("https://www.amazon.com/")
await  page.getByText('Account & Lists').hover();
await page.getByText('Shipping list').click();
await page.waitForTimeout(5000)
})