const createTaskPage = require("../pageobjects/create-task.page")

describe('Создание таски', () => {
    it('Вводим тайтл', () => {
        createTaskPage.open()
        createTaskPage.fillForm()
    })
})