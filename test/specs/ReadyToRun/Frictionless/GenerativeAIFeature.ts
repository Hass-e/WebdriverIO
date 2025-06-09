import visualValidation from "../../../helpers/visualValidation";

describe('Adobe Acrobat Frictionless page - GenAI feature', () => {

    it('In Acrobat frictionless main page, validate landing and clickign ChatAI button', async () => {
        await browser.url('https://www.adobe.com/acrobat/online.html');

        //Validating correct main page display and clicking ChatAI try with demo file button
        const bestWorkAdobeTitle = await $('#do-your-best-work-online-with-adobe-acrobat');
        const ToolsAdobeTitle = await $('#try-25-powerful-pdf-and-e-signing-tools-for-free');
        await visualValidation.validateTitles(bestWorkAdobeTitle, 'Do your best work online with Adobe Acrobat');
        await visualValidation.validateTitles(ToolsAdobeTitle, 'Try 25+ powerful PDF and e-signing tools for free');
        
        const chatwihAITryforFreeButton = await $('a[aria-label="Try for free Chat with PDF"]');
        await visualValidation.validateTitles(chatwihAITryforFreeButton, 'Try for free');
        await chatwihAITryforFreeButton.click();
        await browser.pause(3000);
    })
    
    it('In ChatAI page, validate Try with a demo file button', async () => {
        await expect(browser).toHaveUrl('https://www.adobe.com/acrobat/online/ai-chat-pdf.html');
        const tryWithDemoFileButton = await $('button[data-testid="dropzone-secondary-cta"]');
        await visualValidation.validateTitles(tryWithDemoFileButton, 'Try with a demo file');
        await tryWithDemoFileButton.click();
        await expect(browser).toHaveUrl('https://acrobat.adobe.com/blob/JTdCJTIyc291cmNlJTIyJTNBJTIyY2RuJTIyJTJDJTIyZmlsZVBhdGglMjIlM0ElMjIlMkZkYy1maWxlczItZHJvcGluJTJGZGVtby1maWxlcyUyRmVuLVVTJTJGY2hhdC1wZGYtZGVtby12NCUyRmNoYXQtcGRmLWRlbW8tdjQucGRmJTIyJTJDJTIyaXRlbU5hbWUlMjIlM0ElMjJBSSUyMEFzc2lzdGFudCUyMGRlbW8lMjBmaWxlLnBkZiUyMiUyQyUyMm5hbWUlMjIlM0ElMjJjaGF0LXBkZi1kZW1vLXY0JTIyJTJDJTIyaXRlbVR5cGUlMjIlM0ElMjJhcHBsaWNhdGlvbiUyRnBkZiUyMiU3RA/?defaultRHPFeature=verb-qanda&x_api_client_id=ChatPDFTryDemoFile&x_api_client_location=chat_pdf&try-ai-demo=true&demo-mode=true&promoid=HHJ4X8CS&mv=product&mv2=acrobat-web');
        await browser.pause(3000);
    })

    it('Go back to ChatAI landing page and test Select files button with one file', async () => {
        await browser.back();
        await expect(browser).toHaveUrl('https://www.adobe.com/acrobat/online/ai-chat-pdf.html');

        const filePath = "./TestFiles/Test_Doc_1.pdf";
        const remoteFilePath = await browser.uploadFile(filePath);
        const fileInput = await $('input[data-testid="file-upload-input"]');    
        await browser.pause(1000);
        await fileInput.setValue(remoteFilePath);
        await browser.pause(10000);

        const url = await browser.getUrl();
        await expect(url).toContain('https://acrobat.adobe.com/blob/');
        const singInBtn = await $('button[data-test-id="unav-profile--sign-in"]');
        await visualValidation.validateTitles(singInBtn, 'Sign in');        
        

        await browser.pause(3000);
    })

});