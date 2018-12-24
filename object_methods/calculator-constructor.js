/*
Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

    Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
    Метод sum() возвращает сумму запомненных свойств.
    Метод mul() возвращает произведение запомненных свойств.
    */

function Calculator () {
    this.operand1 = 0;
    this.operand2 = 0;

    this.read = function () {
        this.operand1 = parseInt(prompt('Enter first number: '));
        this.operand2 = parseInt(prompt('Enter second number: '));
    };

    this.sum = function () {
        return this.operand1 + this.operand2;
    };

    this.mul = function () {
        return this.operand1 * this.operand2;
    };
}

let calculator = new Calculator();

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );