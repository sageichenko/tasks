/*
Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:
Имя и фамилия всегда разделяются пробелом.
    Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение,
    но и на запись.
Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set.
Лишнее дублирование здесь ни к чему.
*/


function User(fullName) {
    this.fullName = fullName;
    Object.defineProperty(this, "firstName", {
        get: function () {
            return this.fullName.split(' ')[0];
        },

        set: function (firstName) {
            this.fullName = firstName + ' ' + this.secondName;
        }
    });

    Object.defineProperty(this, "secondName", {
        get: function () {
            return this.fullName.split(' ')[1];
        },

        set: function (secondName) {
            this.fullName =this.firstName + ' ' + secondName;
        }
    });
}


let user = new User('Григорий Григорьев');

// console.log(user.fullName);
//
// console.log(user.firstName);
// console.log(user.secondName);
//
// user.firstName = 'Павел';
// console.log(user.fullName);
//
// user.secondName = 'Павлов';
// console.log(user.fullName);
//
// console.log(user.firstName);
// console.log(user.secondName);