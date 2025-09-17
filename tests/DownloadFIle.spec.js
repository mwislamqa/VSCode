
import { test, expect } from '@playwright/test';

test('file download in playwright', async ({ page }) => {

    await page.goto('https://www.fcbcc.com')

    // Start waiting for download before clicking. Note no await.
    const downloadPromise = page.waitForEvent('download');
    await page.getByText('Download file').click();
    const download = await downloadPromise;

    // Wait for the download process to complete and save the downloaded file somewhere.
    await download.saveAs('/path/to/save/at/' + download.suggestedFilename());

})