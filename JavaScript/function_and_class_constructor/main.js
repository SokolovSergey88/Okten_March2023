
// function constructor

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let u1 = new User('Oleg', 43);
// console.log(u1);

// let simpleUsers = [
//     new User('Gnida', 15),
//     new User('Gubka', 19)
// ];
// console.log(simpleUsers);


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function Customer(name, age, id){
//     this.name = name;
//     this.age = age;
//     this.id = id;
// }
//
// users.map(value => new Customer(value.name,value.age, new Date().getMilliseconds()));


// call  bind   подмена контекста this
function User(name, age,wifename, wifeage) {
    this.name = name;
    this.age = age;
    this.wife = {
        wifename, wifeage
    };
    this.greeting = function (msg) {
        console.log(`${msg}, my name is ${this.name}`)
    }
}

let user = new User('vasya', 31, 'anna', 29);
user.greeting('hello');


let friend = {
    name: 'kokos',
    skills: ['java', 'js']
}
//
// user.greeting.call(friend,['hi']);

let greetingCopy = user.greeting.bind(friend);

greetingCopy('Hello');

// prototype

User.prototype.foo = function () {
    console.log('foo works');
};

User.prototype.bar = 'whisky';

let user1 = new User('petya', 40, 'olya', 28);
user1.foo();
console.log(user1.bar);























