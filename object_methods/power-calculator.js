/*
Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

    Эта задача состоит из двух частей, которые можно решать одна за другой.

    Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2»,
    с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции),
    и возвращает результат. Понимает плюс + и минус -.
    Второй шаг – добавить калькулятору метод addMethod(name, func),
    который учит калькулятор новой операции.
    Он получает имя операции name и функцию от двух аргументов func(a,b),
    которая должна её реализовывать.
*/


function Calculator () {
    this['+'] = function (a, b) {
        return a + b;
    };

    this['-'] = function (a, b) {
        return a - b;
    };

    this.calculate = function (str) {
        let [a, op, b] = [...str.split(' ')];
        return this[op](parseInt(a), parseInt(b));
    };

    this.addMethod = function (name, func) {
        this[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
