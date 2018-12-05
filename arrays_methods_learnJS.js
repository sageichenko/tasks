/*
    Как получить последний элемент из произвольного массива?
    У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
    Напишите код для получения последнего элемента goods.
*/
let goods = [1, 2, 3];
let lastItem = goods[goods.length - 1];

/*
    Как добавить элемент в конец произвольного массива?
    У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».
*/
goods.push('компьютер');
goods[goods.length] = 'компютер';

/*
Задача из 5 шагов-строк:
Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».
*/
/*let styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-Ролл');
console.log(styles);
styles[styles.length - 2] = 'Классика';
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift('Рэп','Регги');
console.log(styles);*/

/*
    В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
    Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
*/
let obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    if (obj.className.indexOf(cls) !== -1) {
        return;
    }
    if (obj.className !== '') {
        obj.className += ' ';
    }
    obj.className += cls;
}

//console.log(obj);
addClass(obj, 'open');
addClass(obj, 'ololo');
addClass(obj, 'close');
//console.log(obj);

/*
    Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
*/
function camelize(str) {
    return str
        .split('-')
        .reduce((result, current) => {
            result += current[0].toUpperCase() + current.slice(1);
            return result;
        });
}

//console.log(camelize('my-short-string'));


/*
    У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
    Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
    P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке
*/
function removeClass(obj, cls) {
    obj.className = obj.className
        .split(' ')
        .filter(name => name !== cls)
        .join(' ');
}

obj.className += ' ololo';
//console.log(obj);
removeClass(obj, 'ololo');
//console.log(obj);

/*
    Как отсортировать массив чисел в обратном порядке?
*/
let arr1 = [5, 2, 1, -10, 8];
arr1.sort( (a, b) => b - a);
//console.log(arr1);

/*
    Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
    Исходный массив не должен меняться.
*/
let arr2 = ["HTML", "JavaScript", "CSS"];
let arrSorted = [...arr2].sort();
//console.log(arrSorted);

/*
Напишите код, который отсортирует массив объектов people по полю age.
 */
let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vovochka = { name: "Вовочка", age: 6 };

let people = [ vasya , masha , vovochka ];

people.sort( (person1, person2) => person1.age - person2.age);

//console.log(people)

/*
Код ниже получает из массива строк новый массив, содержащий их длины:
    var arr = ["Есть", "жизнь", "на", "Марсе"];
    var arrLength = [];
    for (var i = 0; i < arr.length; i++) {
        arrLength[i] = arr[i].length;
    }
    alert( arrLength ); // 4,5,2,5
Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
*/
let arr3 = ["Есть", "жизнь", "на", "Марсе"];
let arrLength = arr3.map( word => word.length);
//console.log(arrLength); // 4,5,2,5

/*
Задачи:

    Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
    Напишите функцию printList(list) при помощи рекурсии.
    Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
    Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
*/

const list = {value: 1};
list.next = {value: 2};
list.next.next = {value: 3};
list.next.next.next = {value: 4};

function printListR(list) {
    console.log(list.value);
    if(list.next !== undefined) {
        printListR(list.next)
    }
}

//printListR(list);

function printListI(list) {
    let it = list;
    while(it !== undefined) {
        console.log(it.value);
        it = it.next;
    }
}

//printListI(list);

function printReverseListR(list) {
    if(list.next !== undefined) {
        printReverseListR(list.next)
    }
    console.log(list.value);
}

//printReverseListR(list);

function printReverseListI(list) {
    let lastItem = undefined;
    do {
        let it = list;
        while (it.next !== lastItem) {
            it = it.next;
        }
        console.log(it.value);
        lastItem = it;
    } while (lastItem !== list)
}

//printReverseListI(list);