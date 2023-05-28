

// JSON.(stringify, parse) можно клонировать объекты, но без функционала


// let user = {
//     name: 'cocos',
//     age: 123,
//
// };
//
// let str = JSON.stringify(user);
// console.log(typeof str);
// let newObj = JSON.parse(str);
// console.log(typeof newObj)
//
// let clone = structuredClone(user);
// console.log(clone);

// Деструктуризация, удобно делать переменные из обьектов , но лучше локально(в функциях)



// let name = 'kokos';
// let age = 123;
// let user = {
//     name,
//     age,
//     foo(){
//
//     },
// };

let user = {
    name: 'kokos',
    age: 123,
    foobar(){

    },
    wife: {
        name: 'anna',
        surname: 'ivanova'
    }
}

let {name,age,foobar, wife, wife: {name: wifeName, surname}} = user;

console.log(wifeName);


function  poopo({name, age}){
    console.log(name, age);
}


poopo(user);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let [a, b,c] = users;
console.log(a,b,c);

// Деструктуризация

let user2 = {
    name: 'vasya',
    age: 31,
    skills: ['js', 'java']
};

let copy = {...user2, skills: [...user2.skills]};
console.log(copy);



















