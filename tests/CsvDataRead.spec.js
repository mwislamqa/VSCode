const { test, expect } = require('@playwright/test')
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

//npm install --save csv-parse    need to install
const records = parse(

    fs.readFileSync('e2e/data/userData.csv'),

    {
        columns: true,
        skip_empty_lines: true
    }

)

// for each loop
records.forEach((record) => {

    test(`data read form cvs ${record.ID}`, async ({ page }) => {

        console.log(records)
        await page.goto('https://www.saucedemo.com/')
        await page.fill('#user-name', record.userName)
        await page.locator('#password').fill(record.password)
        await page.click('#login-button')


    })
});