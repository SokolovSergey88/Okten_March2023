// --створити масив з:
//     - з 5 числових значень
    const arr1 = [1, 2, 3, 4, 5];


// - з 5 стічкових значень
    const arr2 = ['one', 'two', 'three', 'four', 'five'];


// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
    const arr3 = [1, 'two', 3, 'four', true];
    console.log(arr1,arr2,arr3);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
    const arr4 = [];
    arr4[0] = 1;
    arr4[1] = 'two';
    arr4[2] = false;
    console.log(arr4);
//
//
// - є масив
    const arr5 = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
    let i = 0;
    while (i < arr5.length) {
        console.log(arr5[i]);
        i++;
    }

//     2. перебрати його циклом for
    for (let i = 0; i < arr5.length; i++){
        console.log(arr5[i]);
    }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
        i = 0;
        while (i < arr5.length){
            if(i % 2 == 1){
                console.log(arr5[i]);
            }
            i++;
        }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
    for (let i = 0; i < arr5.length; i++) {
        if (i % 2 != 0) {
            console.log(`индекс: ${i} значение: ${arr5[i]}`);
        }
    }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
    i = 0;
    while (i < arr5.length) {
        if (i % 2 != 1) {
            console.log(`индекс: ${i} значение: ${arr5[i]}`);
        }
        i++;
    }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arr5.length; i++) {
    if (i % 2 != 1) {
        console.log(`индекс: ${i} значение: ${arr5[i]}`);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
    for (let i = 0; i <arr5.length; i++){
        if (i % 3 == 0 && i !== 0) {
            arr5[i] = 'okten';
        }
    }
    console.log(arr5);

// 8. вивести масив в зворотньому порядку.
    for (let i = arr5.length - 1; i >= 0; i--){
        console.log(arr5[i]);
    }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = arr5.length - 1; i >= 0; i--){
    if (i % 3 == 0 && i !== 0) {
        arr5[i] = 'okten';
    }
}
console.log(arr5);


// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = arr5.length - 1; i >= 0; i--) {
    if (i % 2 != 1) {
        console.log(`индекс: ${i} значение: ${arr5[i]}`);
    }
}


// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = arr5.length - 1;
while (i >= 0) {
    if (i % 2 != 1) {
        console.log(`индекс: ${i} значение: ${arr5[i]}`);
    }
    i--;
}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = arr5.length - 1; i >= 0; i--) {
    if (i % 2 != 0) {
        console.log(`индекс: ${i} значение: ${arr5[i]}`);
    }
}


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = arr5.length - 1;
while (i >= 0){
    if(i % 2 == 1){
        console.log(arr5[i]);
    }
    i--;
}

//     2. перебрати його циклом for
for (let i = arr5.length - 1; i >= 0; i--){
    console.log(arr5[i]);
}


// 1. перебрати його циклом while
 i = arr5.length - 1;
while (i >= 0) {
    console.log(arr5[i]);
    i--;
}


//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор