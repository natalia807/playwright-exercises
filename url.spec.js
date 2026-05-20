//acessar um site, validar URL atual
const { test, expect } = require('@playwright/test');

test('deve validar a URL da página', async ({ page }) => {

  // acessa o site
  await page.goto('https://example.com');

  // valida a URL atual
  await expect(page).toHaveURL('https://example.com/');

});