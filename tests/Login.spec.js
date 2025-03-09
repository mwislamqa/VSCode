const {test,expect}= require('@playwright/test')
import { Console } from 'console'
import {data} from '../e2e/data/loginData.json'

test('login to the app', async ({page}) =>{
   
await page.goto(process.env.URL)
//await page.locator('#user-name').fill(data.userName)
//file is overloading method we can pass single param or 2 param.
await page.fill('#user-name',data.userName)
await page.locator('#password').fill(process.env.password)//process.env.USER_PASSWORD//secret_sauce
await page.click('#login-button')
await page.waitForTimeout(4000)
console.log(process.env.password)

})



//multi element handle 
test('multi webElemnt ', async ({page})=>{

    await page.goto(process.env.URL)
    await page.fill('#user-name',data.userName)
    await page.locator('#password').fill(process.env.password)//process.env.USER_PASSWORD//secret_sauce
    await page.click('#login-button')
    await page.waitForTimeout(4000)
    console.log(process.env.password)



    const elements =  await page.$$('a');

  //loop
  for(const link of elements){
   const alllink = await link.textContent();
   console.log(alllink)
  }

})
