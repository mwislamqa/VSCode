
//import { LogFiles as Logggers } from '../Utility/LogFiles';
import { test , expect} from '@playwright/test';
test('log function', async ({ page }) => {
   
   // Alternatively, you can directly listen to console errors without the utility function
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.error(msg.text());
        }
    });
    try {
        await page.goto('https://www.amazon.fr/dkjd;l');
    } catch (error) {
        console.error('Navigation error:', error.message);
    }
    await page.close();
});

test('log function with utility', async ({ page }) => {

});