import visualValidation from "../../../helpers/visualValidation";

describe('Adobe Acrobat Frictionless page general validations', () => {

    it('In Acrobat check if the main button exists and it is displayed, then clicks it', async () => {
        await browser.url('https://www.adobe.com/acrobat/online.html');
        const bestWorkAdobeTitle = await $('#do-your-best-work-online-with-adobe-acrobat');
        const ToolsAdobeTitle = await $('#try-25-powerful-pdf-and-e-signing-tools-for-free');
        visualValidation.validateTitles(bestWorkAdobeTitle, 'Do your best work online with Adobe Acrobat');
        visualValidation.validateTitles(ToolsAdobeTitle, 'Try 25+ powerful PDF and e-signing tools for free');
        
        const signInButtonAcrobat = await $('a[href="https://acrobat.adobe.com/link/home/"]');
        visualValidation.validateTitles(signInButtonAcrobat, 'Sign in to Adobe Acrobat');
        await signInButtonAcrobat.click();
        await expect(browser).toHaveUrl(expect.stringContaining('https://auth.services.adobe.com/en_US/index.html'));
    });

    it('Trying to Log in to Acobat', async () => {
        const acrobatEmailInput = await $('#EmailPage-EmailField');
        await expect($(acrobatEmailInput)).toBeDisplayed();
        await $(acrobatEmailInput).setValue('joce.29.95@gmail.com');
        await browser.keys('Enter');
        const ButtonValidateIdAcrobat = await $('button[data-id="Page-PrimaryButton"]');
        await expect(ButtonValidateIdAcrobat).toBeDisplayed();
        //await ButtonValidateIdAcrobat.click();
    })

    it('Trying to Log in to gmail', async () => {
        await browser.newWindow('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ASKV5MjYUm5O3L-jmMidcAIBMcRnK7RilboHi07BMiCWUE8wNRmY9P4RK_-Ss3h5hU3UAIRG52CItg&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1077462343%3A1745689655821051');
        const inputEmailGoogle = await $('input[id="identifierId"]');
        await inputEmailGoogle.setValue('joce.29.95@gmail.com');
        await browser.keys('Enter');
        await browser.closeWindow();
    })

    it('Going back to Acobat', async () => {
        for (let i = 0; i < 2; i++) {
            await browser.back();
        }

        const bestWorkAdobeTitle = await $('#do-your-best-work-online-with-adobe-acrobat');
        const ToolsAdobeTitle = await $('#try-25-powerful-pdf-and-e-signing-tools-for-free');
        visualValidation.validateTitles(bestWorkAdobeTitle, 'Do your best work online with Adobe Acrobat');
        visualValidation.validateTitles(ToolsAdobeTitle, 'Try 25+ powerful PDF and e-signing tools for free');
        await browser.pause(5000);
    })
    
});