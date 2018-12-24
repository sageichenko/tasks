/*
Создайте объект calculator с тремя методами:
read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений
*/
let calculator = {
    operand1: 0,
    operand2: 0,
    read: function () {
        this.operand1 = parseInt(prompt('Enter first number: '));
        this.operand2 = parseInt(prompt('Enter second number: '));
    },

    sum: function () {
        return this.operand1 + this.operand2;
    },

    mul: function () {
        return this.operand1 * this.operand2;
    }
};


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );