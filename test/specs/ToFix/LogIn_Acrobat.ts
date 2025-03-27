describe('Login Test to Acrobat Web with Google email', ()=>{
    it('Should login with valid credentials', async () => {
        await browser.url('https://auth.services.adobe.com/es_MX/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FDocumentCloud1Yolo%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.adobe.com%252Fmx%252F%2523old_hash%253Dref_dc%2526from_ims%253Dtrue%253Fclient_id%253DDocumentCloud1Yolo%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Ccreative_cloud%252Cgnav%252Csao.cce_private%252Cadditional_info.roles%252Cread_organizations%252Cpps.read%252Cfirefly_api%252Caccount_cluster.read%26state%3D%257B%2522ac%2522%253A%2522%2522%252C%2522jslibver%2522%253A%2522v2-v0.45.0-8-gd14e654%2522%252C%2522nonce%2522%253A%25222488404241944724%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=DocumentCloud1Yolo&scope=AdobeID%2Copenid%2Ccreative_cloud%2Cgnav%2Csao.cce_private%2Cadditional_info.roles%2Cread_organizations%2Cpps.read%2Cfirefly_api%2Caccount_cluster.read&state=%7B%22ac%22%3A%22%22%2C%22jslibver%22%3A%22v2-v0.45.0-8-gd14e654%22%2C%22nonce%22%3A%222488404241944724%22%7D&relay=2627a349-670e-44a2-a02a-9d10f58e7983&locale=es_MX&flow_type=token&idp_flow_type=login&s_p=google%2Cfacebook%2Capple%2Cmicrosoft%2Cline%2Ckakao&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.adobe.com%2Fmx%2F%23old_hash%3Dref_dc%26from_ims%3Dtrue%3Fclient_id%3DDocumentCloud1Yolo%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Ccreative_cloud%2Cgnav%2Csao.cce_private%2Cadditional_info.roles%2Cread_organizations%2Cpps.read%2Cfirefly_api%2Caccount_cluster.read&use_ms_for_expiry=true#/')
        await expect($('#EmailPage-EmailField')).toBeExisting()
        await $('#EmailPage-EmailField').setValue('joce.29.95@gmail.com')
        await expect($('button[data-id=EmailPage-ContinueButton]')).toBeExisting()
        await $('button[data-id=EmailPage-ContinueButton]').click()
        await expect($('#PasswordPage-PasswordField')).toBeExisting()
        await $('#PasswordPage-PasswordField').setValue('1234567890')
        
        await expect('label[data-id=PasswordPage-PasswordField-Error]').toBeExisting()
        await expect('label[data-id=PasswordPage-PasswordField-Error]').toHaveText('Contraseña incorrecta. Vuelve a intentarlo.')

        
        //await expect($('h1')).toBeExisting()
        //await expect($('h1')).toHaveText('Verifica tu identidad')
        //await expect($('.spectrum-Button,spectrum-Button--cta,SpinnerButton,SpinnerButton--right Page__spinner-btn')).toBeExisting()
        //await $('.spectrum-Button,spectrum-Button--cta,SpinnerButton,SpinnerButton--right Page__spinner-btn').click()

        //await browser.newWindow('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASSHykpU74tymC9Cr0eiI6QxGRbUTA9sMhaJ_eOXP1f28GXguLo7jD1lai4I6qblcCDORWEaP2Y6NQ&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-417064723%3A1741665268722855&ddm=1')
        //await browser.switchWindow('417064723%3A1741665268722855&ddm=1')
        //await expect($('#identifierId')).toBeExisting()
        //await $('#identifierId').setValue('joce.29.95@gmail.com')
        //await expect($('.whsOnd,zHQkBf')).toBeExisting()
        //await $('.whsOnd,zHQkBf').setValue('papasfritas21')
        //await expect($('.whsOnd,zHQkBf')).toBeExisting()
        //await $('.whsOnd,zHQkBf').click()
        //await browser.closeWindow()
})
})