const users = [
    {name: 'Vasya', age: 19, rate: 900},
    {name: 'Dima', age: 18, rate: 1000},
    {name: 'Sveta', age: 13, rate: 85},
    {name: 'Petya', age: 14, rate: 100},
    {name: 'Seryozha', age: 18, rate: 900},
    {name: 'Valera', age: 14, rate: 150}
];

// Сортировка по возрасту
console.log('Сортировка по возрасту ');

let usersSorted = [...users].sort((a, b) => a.age - b.age);

console.log(usersSorted);

// Массив имен
let namesUsers = users.map(a => a.name);

console.log('Массив имен ');
console.log(namesUsers);

// Фильтр на совершеннолетие
let adultUsers = users.filter(a => a.age >= 18);

console.log('Фильтр на совершеннолетие ');
console.log(adultUsers);

// Свертка
// самый старший
let oldestUser = users.reduce( (oldest, current) => {
    if (oldest.age < current.age) {
        oldest = current;
    }

    return oldest;
});

console.log('Самый старший пользоваетель');
console.log(oldestUser);

// средний возраст
let averageAge = users.reduce( (sumAge, current) => sumAge + current.age, 0) / users.length;

console.log('Средний возраст ');
console.log(averageAge);

// группировка пользователей по возрасту
let ageGroups = users.reduce( (groups, current) => {
    if (groups[current.age] === undefined) {
        groups[current.age] = [];
    }

    groups[current.age].push(current);

    return groups;
}, new Object(null));

console.log('Группировка по возрасту ');
console.log(ageGroups);

// средний рейтинг внутри возрастной группы
let avrRateGroupByAge = new Object(null);

for (let key in ageGroups) {
    avrRateGroupByAge[key] = ageGroups[key]
                            .reduce( (averRate, current) => averRate + current.rate, 0)
                            / ageGroups[key].length;
}

console.log('Средний рейтинг внутри возрастной группы ');
console.log(avrRateGroupByAge);

// максимальный рейтинг среди средних рейтингов внутри возрастной группы
let maxRate = 0;

for (let key in averRateGroupByAge) {
    if (maxRate < averRateGroupByAge[key]) {
        maxRate = averRateGroupByAge[key];
    }
}

console.log('максимальный рейтинг среди средних рейтингов внутри возрастной группы ');
console.log(maxRate);

// ИЛИ

// средний рейтинг внутри возрастной группы
averRateGroupByAge = [];

for (let key in ageGroups) {
    averRateGroupByAge.push(ageGroups[key]
                            .reduce( (averRate, current) => averRate + current.rate, 0)
                            / ageGroups[key].length
                            );
}

console.log('Средний рейтинг внутри возрастной группы (вариант2) ');
console.log(averRateGroupByAge);

// максимальный рейтинг среди средний рейтингов внутри возрастной группы
maxRate = averRateGroupByAge.reduce( (maxRate, current) => {
    if (maxRate < current) {
        maxRate = current;
    }
    return maxRate;
});

console.log('максимальный рейтинг среди средних рейтингов внутри возрастной группы(вариант2) ');
console.log(maxRate);
