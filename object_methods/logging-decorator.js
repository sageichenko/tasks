/*
Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает
(«логирует») аргументы в log, а затем передает вызов в f.
*/

function work() {
    return 'qweqwe';
}

function makeLogging(f, log) {
    return function () {
        log.push([].slice.call(arguments));
        f.apply(this, arguments)
    }
}

let log = [];
work = makeLogging(work, log);

work(1, 8); // 1, добавлено в log
work(5); // 5, добавлено в log

for (let item of log) {
    console.log( 'Лог: ' + item.join(', ') );
}
