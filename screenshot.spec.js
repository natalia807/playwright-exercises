//tirar screenshot da página e salvar
const { test, expect } = require('@playwright/test');

test('deve abrir o site example.com corretamente', async ({ page }) => {

  await page.goto('https://example.com');

  await page.screenshot({ 
  path: 'screenshot-completa.png', 
  fullPage: true 
});

});