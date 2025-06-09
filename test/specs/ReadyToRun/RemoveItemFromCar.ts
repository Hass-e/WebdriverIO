import loginPage from "../../PageObjects/login.page";

describe('Items in cart Scenarios', ()=>{
    it('Should login with valid credentials, add an item to cart and remove it', async () => {
        await browser.url('https://www.saucedemo.com/')
        loginPage.login('standard_user','secret_sauce')
        loginPage.checkMessage('Products')
        await browser.pause(1500)

        for (let i = 0; i<4; i++) {
            //Adds the first item to the cart
            const AddToCartBtn = await $('#add-to-cart-sauce-labs-backpack')
            await expect($(AddToCartBtn)).toBeExisting() 
            await expect($(AddToCartBtn)).toHaveText('Add to cart') 
            await $(AddToCartBtn).click()
            await AddToCartBtn.waitForExist({ reverse: true });  //Verifies "Add to cart" button disappears

            //Verifies red Badge=1 is added
            const CartBadge = await $('span[data-test=shopping-cart-badge]')
            await expect($(CartBadge)).toBeExisting()
            await expect($(CartBadge)).toHaveText('1')

            //Removes added item from the cart
            const RemoveFromCartBtn = await $('#remove-sauce-labs-backpack')
            await expect($(RemoveFromCartBtn)).toBeExisting()
            await $(RemoveFromCartBtn).click()
            await CartBadge.waitForExist({ reverse: true }) //Returns TRUE if the badge item doesn't axist in the DOM
          }

})
})