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

let cartArray = [];

for (const user of users) {
    let htmlDivElement = document.createElement('div');
    htmlDivElement.innerText = user.name;
    htmlDivElement.classList.add('divStyle');
    let btn = document.createElement('button');
    btn.innerText = 'В Корзину';
    htmlDivElement.appendChild(btn);

    btn.addEventListener('click', function (e){
        htmlDivElement.classList.toggle('innerColor');
        cartArray.push(user);
        let JSONcartArray = JSON.stringify(cartArray);
        localStorage.setItem('cart', JSONcartArray);
    })




    document.body.appendChild(htmlDivElement);

}