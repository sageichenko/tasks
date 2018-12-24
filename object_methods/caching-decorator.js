/*
Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку,
которая кеширует её результаты.
*/


function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    let cach = {};
    return function (a) {
        if (!cach[a]) {
            cach[a] = f.call(this, a);
        }

        return cach[a];
    }
}

f = makeCaching(f);

let a, b;

a = f(1);
b = f(1);
console.log( a === b ); // true (значение закешировано)

b = f(2);

console.log( a === b ); // false, другой аргумент => другое значение