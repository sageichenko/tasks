'use strict';

/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
function rle(value) {
    let result = '';
    let letter = value[0]; // текущая обрабатываемая буква
    let letterQty = 1; // количество подрял идущих обрабатываемых букв
    for (let i = 1; i < value.length; i++){
            // счет одинаковых букв
        if(letter === value[i]) letterQty++;
            // встретилась другая буква, фиксируем полученный результат
            // начинаем счет следующей буквы
        else {
            result+=letter;
            if (letterQty !== 1) result+=letterQty;
            letter = value[i];
            letterQty = 1;
        }
    }
        // запись последней последовательности
    result+=letter;
    if (letterQty !== 1) result+=letterQty;
    return result;
}


console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
