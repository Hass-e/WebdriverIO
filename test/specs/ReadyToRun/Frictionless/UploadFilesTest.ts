import visualValidation from "../../../helpers/visualValidation";

describe('Adobe Acrobat Frictionless page - GenAI feature - UPLOAD FILE', () => {

    it('In ChatAI landing page and test uploading a file', async () => {
        await browser.url('https://www.adobe.com/acrobat/online/ai-chat-pdf.html');

        //const filePath = path.join(__dirname, '../../TestFiles/Test_Doc_1.pdf');
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
    })

})