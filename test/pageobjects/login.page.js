const Page = require('./page');

class LoginPage extends Page {

    get inputUsername() { return $('input[formcontrolname=username]') }
    get inputPassword() { return $('input[formcontrolname=password]') }
    get btnSubmit() { return $('button[type="submit"]') }


    login(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    open() {
        return super.open('auth');
    }
}

module.exports = new LoginPage();
