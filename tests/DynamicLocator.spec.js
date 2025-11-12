// Handling Dynamic Locators in Playwright
//For the dynamic pages that handle focus events, you can focus the given element with locator.focus().
//await page.getByLabel('Password').focus();

// Example: Button with changing ID but stable text
//await page.click('button:has-text("Submit")');

import { test , expect} from '@playwright/test';
test('Handling dynamic locators example', async ({ page }) => {
  await page.goto('https://example.com/login');

// ID starting with "user_"
const userField = page.locator('[id^="user_"]');
await userField.fill('testuser');

/*
^ - starts with

$ - ends with

*= - contains

*/

await page.getByRole('button', { name: /sign in/i }).click();
await page.getByLabel('Email').fill('example@test.com');

//list with dynamic items
<ul id="items">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>

page.locator('#items > li.item');//list of items

// Using XPath to locate element with dynamic attributes
const items = page.locator('li.item');
const target = items.filter({ hasText: /Item \d+/ });
await target.first().click();

// create lopp to click on all matching items
for (let i = 0; i < await target.count(); i++) {
    await target.nth(i).click();
}

// Using regular expressions to match dynamic text
await page.click('text=/^Order #\\d{5}$/');

});