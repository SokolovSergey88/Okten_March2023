


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





























