
//const {test, expect} = require('@playwright/test')
import { test , expect} from '@playwright/test';
test('right mouse click', async ({page}) =>{

page.goto('https://www.google.com/')

page.locator('').click({button : 'right'})//right click

})