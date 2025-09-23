
import { test, expect } from '@playwright/test';

test('file download in playwright', async ({ page  }, testInfo) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');


    await page.locator('#textbox').click();
    await page.locator('#textbox').fill('download this file using playwright automation');
    await page.waitForTimeout(3000)
    await page.locator("#create").click({button: 'force'});
  
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;

    // Start waiting for download before clicking. Note no await.


    // Wait for the download process to complete and save the downloaded file somewhere.
    const downloadPath = download.suggestedFilename();
    download.saveAs(downloadPath);
    console.log(await downloadPath)
    // Expect the file to be downloaded successfully.
    expect(await downloadPath).toBe('info.txt');
    await testInfo.attach('downloaded-file', { path: downloadPath });

})