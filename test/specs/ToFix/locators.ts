describe('Selectors demo', () =>{
    beforeEach(async () =>{
        await browser.url('https://demoqa.com/links')
    })

    it('css example', async () =>{
        const createdLink = await $('#created')
        const responseLink = await $('#linkResponse')
        
        createdLink.scrollIntoView()
        createdLink.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveText('Link has responded with staus 201 and status text Created')
    })

    it('css by index  example', async () =>{
        const noContentLink = await $('#linkWrapper p:nth-child(7) a')
        const responseLink = await $('#linkResponse')
        
        noContentLink.scrollIntoView()
        noContentLink.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveText('Link has responded with staus 204 and status text No Content')
    })

    it('Xpath example', async () =>{
        const badRequest = await $('//*[@id="bad-request"]')
        const responseLink = await $('#linkResponse')
        
        badRequest.scrollIntoView()
        badRequest.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveText('Link has responded with staus 400 and status text Bad Request')
    })

})