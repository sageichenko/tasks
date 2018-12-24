function sumArgs() {
    return [].reduce.call(arguments, (accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

console.log( sumArgs(1, 2, 3) );