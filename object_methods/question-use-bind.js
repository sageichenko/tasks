"use strict";

function ask(question, answer, ok, fail) {
    let result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

let user = {
    login: 'Василий',
    password: '12345',

    loginOk: function () {
        alert(this.login + ' вошёл в сайт');
    },

    loginFail: function () {
        alert(this.login + ': ошибка входа');
    },

    checkPassword: function () {
        ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
    }
};

user.checkPassword();