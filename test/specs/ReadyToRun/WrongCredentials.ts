describe('Login Test Scenarios', ()=>{
    it('Should login with qrong credentials', async () => {
        await browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('problem_user')
        await $('#password').setValue('secret_sauce_wrong') //This password is wrong to verify that the error message is displayed
        await $('#login-button').click()
        
        await expect($('h3')).toBeExisting()
        await expect($('h3')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
})