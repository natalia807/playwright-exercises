//Objetivo: senha incorreta, validar mensagem de erro
const { test, expect, chromium } = require('@playwright/test');

test('deve exibir erro ao logar com senha incorreta', async () => {
  //para ver o preenchimento
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const page = await browser.newPage();
  
    await page.goto('https://practice.expandtesting.com/login');


  await page.getByLabel('Username').fill('practice');


  await page.getByLabel('Password').fill('0123456789');

  //clica no botão de login
  await page.getByRole('button', { name: 'Login' }).click();

  // validando mensagem de erro
  await expect(
    page.getByText('Your password is invalid!')
  ).toBeVisible();
});
//expect(...).toBeVisible() na mensagem de erro — isso é o que valida que o sistema
//se comportou corretamente ao receber credenciais inválidas