const {test,expect}= require('@playwright/test')

import { LognPage } from '../PageObjectModel/LoginPage';

test('login test',async({page})=>{

const login=new LognPage(page)
await login.launchUrl();
await login.logintotheAplicaiton()
await page.waitForTimeout(3000)
await page.close()
})
