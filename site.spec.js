const { test, expect } = require('@playwright/test');

test('deve abrir o site example.com corretamente', async ({ page }) => {

  await page.goto('https://example.com');

  await expect(page).toHaveTitle('Example Domain');

});
