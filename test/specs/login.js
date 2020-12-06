const loginPage = require("../pageobjects/login.page");
const {pageUrl, users} = require("../settings");


describe('Авторизация', () => {
    it('Успешный логин', () => {
        loginPage.open()
        loginPage.login('ed', users.ed)
        $('.auth').saveScreenshot('./lala1.png')
        expect(browser).toHaveUrl(pageUrl)
    })
})