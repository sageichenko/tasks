/*
Напишите функцию-конструктор Accumulator(startingValue).
    Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то,
    что вводит посетитель.
*/

function Accumulator (startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += parseInt(prompt('Enter the value', 0));
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert( accumulator.value );
