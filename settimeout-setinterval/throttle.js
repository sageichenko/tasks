function throttle(func, ms) {
    let lastValue = null;
    let timer = null;
    return function () {
        let args = [].slice.call(arguments);
        if (!timer) {
            func(...args);
            timer = setTimeout(function tick() {
                lastValue && func(...lastValue);
                lastValue = null;
                setTimeout(tick, ms);
            }, ms);
            return;
        }
        lastValue = args;
    }
}


let f = function (a) {
    console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

setTimeout(function () {
    f1000(4)
}, 1200); // вызовется через 1000 после 3

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется