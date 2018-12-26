function debounce(func, ms) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            func(...[].slice.call(arguments));
        }, ms)
    }
}

function func(a) {
    console.log(a);
}

let f = debounce(func, 1000);

f(1); // вызов отложен на 1000 мс
f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызов f(2)

setTimeout(function () {
    f(3)
}, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout(function () {
    f(4)
}, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения будет выполнен вызов f(4)