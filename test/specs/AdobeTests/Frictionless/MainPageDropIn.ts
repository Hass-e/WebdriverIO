describe('Adobe Frictionless general validation', () => {

    it('In Acrobat check if the main button exists and it is displayed, then clicks it', async () => {
        await browser.url('https://www.adobe.com/acrobat/online.html');

        const bestWorkAdobeTitle = await $('#do-your-best-work-online-with-adobe-acrobat');
        const ToolsAdobeTitle = await $('#try-25-powerful-pdf-and-e-signing-tools-for-free');
        await expect(bestWorkAdobeTitle).toBeExisting();
        await expect(bestWorkAdobeTitle).toHaveText('Do your best work online with Adobe Acrobat');
        await expect(ToolsAdobeTitle).toBeExisting();
        await expect(ToolsAdobeTitle).toHaveText('Try 25+ powerful PDF and e-signing tools for free');
        
        const signInButtonAcrobat = await $('a[href="https://acrobat.adobe.com/link/home/"]');
        await signInButtonAcrobat.isDisplayed();
        await signInButtonAcrobat.click();
        await expect(browser).toHaveUrl(expect.stringContaining('https://auth.services.adobe.com/en_US/index.html'));
    });

    it('Trying to Log in to Acobat', async () => {
        await expect($('#EmailPage-EmailField')).toBeExisting();
        await $('#EmailPage-EmailField').setValue('joce.29.95@gmail.com');
        await browser.keys('Enter');
        const ButtonValidateIdAcrobat = await $('button[data-id="Page-PrimaryButton"]');
        await expect(ButtonValidateIdAcrobat).toBeExisting();
        //await ButtonValidateIdAcrobat.click();
    })

    it('Trying to Log in to gmail', async () => {
        await browser.newWindow('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASSHykpU74tymC9Cr0eiI6QxGRbUTA9sMhaJ_eOXP1f28GXguLo7jD1lai4I6qblcCDORWEaP2Y6NQ&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-417064723%3A1741665268722855&ddm=1');
        const inputEmailGoogle = await $('input[id="identifierId"]');
        await inputEmailGoogle.setValue('joce.29.95@gmail.com');
        await browser.keys('Enter');
        await browser.closeWindow();
    })

    it('Going back to Acobat', async () => {
        for (let i = 0; i < 2; i++) {
            await browser.back();
            await browser.pause(500);
        }

        const bestWorkAdobeTitle = await $('#do-your-best-work-online-with-adobe-acrobat');
        const ToolsAdobeTitle = await $('#try-25-powerful-pdf-and-e-signing-tools-for-free');
        await expect(bestWorkAdobeTitle).toBeExisting();
        await expect(bestWorkAdobeTitle).toHaveText('Do your best work online with Adobe Acrobat');
        await expect(ToolsAdobeTitle).toBeExisting();
        await expect(ToolsAdobeTitle).toHaveText('Try 25+ powerful PDF and e-signing tools for free');
        await browser.pause(5000);
    })
    
});