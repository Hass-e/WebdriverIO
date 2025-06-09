class LoginPage {

    public get inputUsername () {
        return $('#user-name');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('#login-button');
    }

    public get LoginMessage () {
        return $('.title');
    }

    public async checkMessage(msg: string) {
        await expect(this.LoginMessage).toBeDisplayed();
        await expect(this.LoginMessage).toHaveText(msg);
    }

    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}
export default new LoginPage();