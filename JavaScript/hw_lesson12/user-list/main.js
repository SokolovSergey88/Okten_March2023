// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        let container = document.getElementsByClassName('container')[0];

        for (user of users){
            let userDiv = document.createElement('div');
            userDiv.innerText = `#${user.id} ${user.name}`;
            container.appendChild(userDiv);

            let userBtn = document.createElement('button');
            userBtn.innerText = `user-details`;
            userDiv.appendChild(userBtn);

            userBtn.addEventListener('click', ()=>{
                location.href = `../user-details/index.html?userId=${user.id}`;
            })
        }

    })