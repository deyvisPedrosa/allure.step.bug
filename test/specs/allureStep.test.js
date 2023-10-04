import { step } from '@wdio/allure-reporter';

describe('My Login application', () => {

  it('Should login with valid credentials', async () => {

    await browser.url('https://the-internet.herokuapp.com/login');

    await $('#username').setValue('tomsmith');
    await $('#password').setValue('SuperSecretPassword!');

    await step('Trying failed steps inside allure step()', async (s1) => {

      // This assertion should fail since the user is not actually logged in
      await expect($('#flash')).toBeExisting();

    });

  });

  it('Should login with valid credentials (Throw error)', async () => {

    await browser.url('https://the-internet.herokuapp.com/login');

    await $('#username').setValue('tomsmith');
    await $('#password').setValue('SuperSecretPassword!');

    await step('Trying failed steps inside allure step() - throw error', async (s1) => {

      throw new Error('Should throw an error an make the test fail.')

    });

  });

});
