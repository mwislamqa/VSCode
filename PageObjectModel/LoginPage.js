const {test,expect}= require('@playwright/test')

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '..', 'confiq.env') });
exports.LognPage=
class LognPage{

   constructor(page){
    this.page =page;
    this.userName ="#user-name"
    this.password ="#password"
    this.submitButton ="#login-button"


    }

   async launchUrl(){
   await this.page.goto("https://www.saucedemo.com/")

    }
    async  logintotheAplicaiton(){

         await this.page.locator(this.userName).fill("standard_user")
        await this.page.locator(this.password).fill("secret_sauce")
        // await this.page.locator(this.userName).fill(process.env.USER_NAME)

        // await this.page.locator(this.password).fill(process.env.USER_PASSWORD)
        await this.page.locator(this.submitButton).click();
        
    }



}