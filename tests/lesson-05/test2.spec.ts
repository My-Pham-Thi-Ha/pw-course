import { test } from '@playwright/test';
test('add product', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='02-xpath-product-page.html']");
    for (let i = 1; i <= 2; i++) {
        await page.locator("//button[@data-product-id=1]").click();
    }
    for (let i = 1; i <= 3; i++) {
        await page.locator("//button[@data-product-id=2]").click();
    }
    await page.locator("//button[@data-product-id=3]").click();
})