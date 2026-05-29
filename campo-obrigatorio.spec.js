//Objetivo: enviar formulário vazio, validar erro
const { test, expect, chromium } = require('@playwright/test');

test('deve exibir erro ao logar com senha incorreta', async () => {
  //para ver o preenchimento
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const page = await browser.newPage();
  
  await page.goto('https://practice.expandtesting.com/register');


  await page.getByLabel('Username').fill('');

  await page.getByLabel('Password', { exact: true }).fill('');

  await page.getByLabel('Confirm Password').fill('');

  //clica no botão de login
  await page.getByRole('button', { name: 'Register' }).click();

  // validando mensagem de erro
  await expect(
    page.getByText('All fields are required.')
  ).toBeVisible();
});
//exact:true evita ambiguidade entre Password e Confirm Password