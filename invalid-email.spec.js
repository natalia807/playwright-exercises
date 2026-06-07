//Objetivo: preencher email sem @ e validar mensagem
const { test, expect, chromium } = require('@playwright/test');

test('deve exibir erro ao preencher email sem @', async () => {
  //para ver o preenchimento
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const page = await browser.newPage();
  
  await page.goto('https://practice.qabrains.com/');


  await page.getByLabel('Username').fill('practice');


  await page.getByLabel('Password').fill('0123456789');

  //clica no botão de login
  await page.getByRole('button', { name: 'Login' }).click();

  // validando mensagem de erro
  await expect(
    page.getByText('Your password is invalid!')
  ).toBeVisible();
});