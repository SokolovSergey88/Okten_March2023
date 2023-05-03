//
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    const arr1 = [1, 2, 'one', 'two', true, false, [1,2,3], {userName: "Sergey", userAge: 34}, 3, 'JS']
    console.log(arr1[0]);
    console.log(arr1[1]);
    console.log(arr1[2]);
    console.log(arr1[3]);
    console.log(arr1[4]);
    console.log(arr1[5]);
    console.log(arr1[6]);
    console.log(arr1[6][0]);
    console.log(arr1[6][1]);
    console.log(arr1[6][2]);
    console.log(arr1[7]);
    console.log(arr1[7].userName);
    console.log(arr1[7].userAge);
    console.log(arr1[8]);
    console.log(arr1[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
    const book1 = {
        title: "Kolobok",
        pageCount: 30,
        genre: "fairy tale"
    }

const book2 = {
    title: "war of the Worlds",
    pageCount: 600,
    genre: "fantastic"
}

const book3 = {
    title: "Nineteen Eighty-Four",
    pageCount: 312,
    genre: "dystopian novel"
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const book4 = {
    title: "Kolobok",
    pageCount: 30,
    genre: "fairy tale",
    authors: [
        {name: "folk"},
        {age: "not exactly known"}
    ]
}

const book5 = {
    title: "war of the Worlds",
    pageCount: 287,
    genre: "fantastic",
    authors: [
        {name: "H. G. Wells"},
        {age: 1898}
    ]
}

const book6 = {
    title: "Nineteen Eighty-Four",
    pageCount: 312,
    genre: "dystopian novel",
    authors: [
        {name: "George Orwell"},
        {age: "8 June 1949"}
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const arrOfObj = [
    {name: 'Olya', username: 'Olya111' , password: 21221},
    {name: 'Vasya', username: 'Vasya666', password: 2311111},
    {name: 'Sergey', username: 'Serg777', password: 9904440},
    {name: 'Valera', username: 'Valera15', password: 1515},
    {name: 'Ira', username: 'Irina222', password: 123},
    {name: 'Genna', username: 'Gen100', password: 100500},
    {name: 'Igor', username: 'Igor2', password: 100100},
    {name: 'Katya', username: 'Ekaterina999', password: 32893293293323231},
    {name: 'Inna', username: '54545Inna', password: 123456},
    {name: 'Ilon', username: 'Mask', password: 100000000000000000000000},
]
console.log(arrOfObj[0].password);
console.log(arrOfObj[1].password);
console.log(arrOfObj[2].password);
console.log(arrOfObj[3].password);
console.log(arrOfObj[4].password);
console.log(arrOfObj[5].password);
console.log(arrOfObj[6].password);
console.log(arrOfObj[7].password);
console.log(arrOfObj[8].password);
console.log(arrOfObj[9].password);

//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
    let x = -3;
    if(x !== 0) {
        console.log('Вірно');
    } else {
        console.log('Невірно')
    }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
    let time = Math.floor(Math.random() * 60);
    if(time >= 0 && time < 15) {
        console.log('Перша');
    } else if (time >= 15 && time < 30){
        console.log('Друга');
    } else if (time >= 30 && time < 45){
        console.log('Третя');
    } else if (time >= 45 && time < 60){
        console.log('Четверта');
    } else {
        console.log('Помилка');
    }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
    let day = Math.floor(Math.random() * (32 - 1)) + 1;
    if(day >= 1 && day < 10) {
        console.log('Перша декада місяця');
    } else  if(day >= 10 && day < 20) {
        console.log('Друга декада місяця');
    } else  if(day >= 20 && day <= 31) {
        console.log('Третя декада місяця');
    } else {
        console.log('Error');
    }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    let dayOfWeek = +prompt("Введіть порядковий номер дня тижня");
    switch (dayOfWeek) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
            case 3:
            console.log('Wednesday');
            break;
            case 4:
            console.log('Thursday');
            break;
            case 5:
            console.log('Friday');
            break;
            case 6:
            console.log('Saturday');
            break;
            case 7:
            console.log('Sunday');
            break;
        default:
            console.log('Не вірні данні');
    }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
    let num1 = +prompt('Введіть перше число', '');
    let num2 = +prompt('Введіть друге число', '');
    if(num1 > num2){
        console.log(`Число ${num1} більше ніж число ${num2}`);
    } else if(num2 > num1) {
        console.log(`Число ${num2} більше ніж число ${num1}`);
    } else if(num1 === num2){
        console.log('Числа рівні між собою');
    } else {
        console.log('Error');
    }


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if(coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if(coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if(coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if(coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if(coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}






















