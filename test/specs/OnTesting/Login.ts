import loginPage from "../../pageobjects/login.page";

describe('Login Test Scenarios', ()=>{
    it('Should login with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com/')

        loginPage.login('standard_user','secret_sauce')
        loginPage.checkMessage('Products')
})
})