import loginPage from "../../pageobjects/login.page";

describe('Items in cart Scenarios', ()=>{
    it('Should login with valid credentials and add an item to the cart', async () => {
        await browser.url('https://www.saucedemo.com/')
        
        loginPage.login('standard_user','secret_sauce')
        loginPage.checkMessage('Products')

        await expect($('#add-to-cart-sauce-labs-backpack')).toBeExisting()
        await $('#add-to-cart-sauce-labs-backpack').click()

        await expect($('.shopping_cart_badge')).toBeExisting()
        await expect($('.shopping_cart_badge')).toHaveText('1')
})
})