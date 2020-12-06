const Page = require('./page');

class CreateTaskPage extends Page {

    get inputTitle() { return $('input[formcontrolname=title]') }


    fillForm() {
        this.inputTitle.setValue('пизда в рот')
    }

    open() {
        return super.open('task/create');
    }
}

module.exports = new CreateTaskPage();
