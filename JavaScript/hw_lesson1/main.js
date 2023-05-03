//
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
    let hello = 'hello';
    let owu = 'owu';
    let com = 'com';
    let ua = 'ua';
    let number1 = 1;
    let number10 = 10;
    let numberNegative999 = -999;
    let number123 = 123;
    let Pi = 3.14;
    let floatNumber = 2.7;
    let number16 = 16;
    let boolTrue = true;
    let boolFalse = false;
    

    console.log(hello);
    console.log(owu);
    console.log(com);
    console.log(ua);
    console.log(number1);
    console.log(number10);
    console.log(numberNegative999);
    console.log(number123);
    console.log(Pi);
    console.log(floatNumber);
    console.log(number16);
    console.log(boolTrue);
    console.log(boolFalse);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
    const firstName = 'Sergiy';
    const middleName = 'Evgenovich';
    const lastName = 'Sokolov';

    let person = firstName + ' ' + middleName + ' ' + lastName;
    console.log(person);
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
        let a = 100;
        let b = '100';
        let c = true;
        console.log(typeof a);
        console.log(typeof b);
        console.log(typeof c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

    let firstName1 = prompt("Ваше ім'я", '');
    let middleName1 = prompt("Ваше ім'я по батькові", '');
    let age = +prompt("Скільки років", '');

    console.log(firstName1 + ' ' + middleName1 + ' ' + age);