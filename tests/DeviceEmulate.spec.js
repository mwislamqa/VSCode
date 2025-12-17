
//need to configure.js file for device emulation as any phone then it semulate that phone

 //   name: 'iphone 14 ',
    //   use: { ...devices["iPhone 14"] },

//const { test, expect } = require('@playwright/test');
import { test , expect} from '@playwright/test';

test('Take a screenshot', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.screenshot({ path: 'heading.png' });// Screenshot of specific element



});
