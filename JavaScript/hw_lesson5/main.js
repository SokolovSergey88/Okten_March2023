// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calculateTheAreaOfRectangle = (height, width) => height * width;

console.log(calculateTheAreaOfRectangle(10, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let calculateTheAreaOfCircle = radius => {
    return `площу кола з радіусом ${radius} = ${3.14 * Math.pow(radius, 2)}`;
};

console.log(calculateTheAreaOfCircle(15));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calculateTheAreaOfCylinder = (height, radius) => {
    return `площу циліндру висотою ${height}, та радіутом ${radius} = ${2 * 3.14 * radius * (height + radius)}`;
};

console.log(calculateTheAreaOfCylinder(7, 5));


// - створити функцію яка приймає масив та виводить кожен його елемент
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
let iteratorOfArr = arr =>  {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};
iteratorOfArr(users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let creatorParagraph = text => {
    document.write(`<p>${text}</p>`);
};
creatorParagraph('gggg');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let creatorList = textLi => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++){
        document.write(`<li>${textLi}</li>`);
    }
    document.write('</ul>')
};
creatorList('trtrtrt');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    let creatorList2 = (textLi, countLi) => {
    document.write('<ul>');
    for (let i = 0; i < countLi; i++){
        document.write(`<li>${textLi}</li>`);
    }
    document.write('</ul>')
};
creatorList2('hi', 10);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arr1 = [1, 'two', true, 4, 100];
    let creatorList3 = arr => {
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write('</ul>');
};
creatorList3(arr1);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const arr2 = [
    {id:1, name: 'vasya', age: 40},
    {id:2, name: 'olya', age: 10},
    {id:3, name: 'ira', age: 22}
];
    let createDivOfObj = arr => {
    for (const arrElement of arr) {
        document.write(`<div>id - ${arrElement.id}, name - ${arrElement.name}, age - ${arrElement.age}</div>`);
    }
};

createDivOfObj(arr2);


// - створити функцію яка повертає найменьше число з масиву
const arr3 = [33, 0, -17, -5, 11];
    let minValueInArr = arr=> {
    let min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement;
        }
    }
    return min;
};
console.log(`найменьше число з масиву :${minValueInArr(arr3)}`);


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
    let sumElementsInArr = arr => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return `сума значення елементів масиву: ${sum}`;
};
sumElementsInArr(arr3);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const arr4 = [11,22,33,44];
let swap = (arr, index1, index2) => {
    let value;
    value = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = value;
};
swap(arr4, 0, 1);
console.log(arr4)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
    let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if(currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value;
        }
    }
};

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));