const { test, expect } = require('@playwright/test');

test('deve esperar o elemento carregar', async ({ page }) => {

  // acessa o site
  await page.goto('https://example.com');

  // espera o h1 aparecer
  await page.waitForSelector('h1');

  // captura o elemento
  const titulo = page.locator('h1');

  // valida se está visível
  await expect(titulo).toBeVisible();

});