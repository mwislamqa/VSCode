import { test , expect} from '@playwright/test';
import { chromium } from 'playwright'

test('handle basic auth in application',async ({page})=>{

//add userName and password before momain 
await page.goto('https://www.userName:passwor@saucelab.com/')

})