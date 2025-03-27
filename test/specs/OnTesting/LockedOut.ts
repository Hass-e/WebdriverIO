import loginPage from "../../pageobjects/login.page";

describe('Login Test Scenarios', ()=>{
    it('Should login with a locked out user', async () => {
        await browser.url('https://www.saucedemo.com/')
        const locked_out_user = $('#user-name')   //Locked out user 
        await locked_out_user.setValue('locked_out_user') 
        await loginPage.inputPassword.setValue('secret_sauce')
        await loginPage.btnSubmit.click()

        await expect($('h3')).toBeExisting()
        await expect($('h3')).toHaveText('Epic sadface: Sorry, this user has been locked out.')
})
})