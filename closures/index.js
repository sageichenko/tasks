
/*
 *Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
 */
function sum(a) {
    return function (b) {
        return a + b;
    }
}

//console.log(sum(2)(3));

/*
В некоторых языках программирования существует объект «строковый буфер»,
который аккумулирует внутри себя значения.
Его функционал состоит из двух возможностей:
    Добавить значение в буфер.
    Получить текущее содержимое.
    Задача – реализовать строковый буфер на функциях в JavaScript
    
Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), 
который будет очищать текущее содержимое буфера:
*/
function makeBuffer() {
    let string = '';
    function buffer(value) {
        if (value === undefined) {
            return string;
        }
        string += value;
    }
    buffer.clear = function () {
        string = '';
    }
    return buffer;
}

let buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
//console.log( buffer() ); // Замыкания Использовать Нужно!

buffer.clear();

//console.log( buffer() );


/*
Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:
*/

function makeArmy() {

    let shooters = [];

    function makeShooter (num) {
        return function () {
            console.log( num );
        };
    }

    for (let i = 0; i < 10; i++) {
        let shooter = makeShooter(i);
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

console.log(army[0]());
console.log(army[5]());

