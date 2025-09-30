
import { test, expect } from '@playwright/test';

test('file download in playwright', async ({ page }, testInfo) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');
    await page.locator('#textbox').click();
    await page.locator('#textbox').fill('fkljdlkfjdlkjdlkfjdlkfjd');
    const generateButton = await page.getByRole('button', { name: 'Generate File' });
    await expect(generateButton).toBeVisible();
 
    await generateButton.click({force:true});

    const downloadlink = page.getByRole('link', { name: 'Download' })
    await expect(downloadlink).toBeVisible();
    downloadlink.click();

    // Start waiting for the download
    const downloadPromise = page.waitForEvent('download');
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