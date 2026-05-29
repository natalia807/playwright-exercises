//Preencher usuário, preencher senha, clicar login, validar sucesso
const { test, expect } = require('@playwright/test');

test('deve preencher, fazer login e validar formulário', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/');


  await page.getByLabel('Contact name').fill('Peter');


  await page.getByLabel('Contact number').fill('0123456789');

  
  await page.locator('input[name="pickupdate"]').fill('2026-05-22');


  await page.locator('#validationCustom04').selectOption('card');

  // validações
  await expect(page.getByLabel('Contact name')).toHaveValue('Peter');
  await expect(page.getByLabel('Contact number')).toHaveValue('0123456789');
});