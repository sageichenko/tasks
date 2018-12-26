function throttle(func, ms) {
    let lastValue = null;
    let timer = null;
    return function () {
        let args = [].slice.call(arguments);
        if (!timer) {
            func(args);
            timer = setTimeout(() => {
                lastValue && func(lastValue);
                timer = null;
                lastValue = null;
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

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется