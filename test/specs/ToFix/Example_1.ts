describe('Google Search', () => {
    it('Debería buscar WebDriverIO en Google', async () => {
        await browser.url('https://webdriver.io/es/')

        //const searchBox = await $('[name="q"]')
        //await searchBox.setValue('WebDriverIO')
        //await browser.keys('Enter')
        await expect($('.button,button--outline,button--secondary button--lg,getStarted_Sjon')).toBeExisting()
        await $('.button,button--outline,button--secondary button--lg,getStarted_Sjon').click()
        await expect($('h1')).toHaveText('Primeros pasos')

        //await expect($('span[class=VuuXrf]')).toBeExisting()
        //await expect($('span[class=VuuXrf]')).toHaveText('WebdriverIO')

        await browser.pause(5000)

        //await expect(browser).toContain('WebDriverIO');
    });
});
