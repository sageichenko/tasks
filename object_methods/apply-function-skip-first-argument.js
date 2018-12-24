/*
Напишите функцию applyAll(func, arg1, arg2...),
которая получает функцию func и произвольное количество аргументов.
Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы,
начиная со второго, и возвратить результат.*/

function applyAll(func) {
    return func.apply( null, [].slice.call(arguments, 1) );
}

console.log( applyAll(Math.max, 2, -2, 3) );
console.log( applyAll(Math.min, 2, -2, 3) );