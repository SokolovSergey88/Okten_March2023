// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

const userBox = document.getElementsByClassName('userBox')[0];
const postBox = document.getElementsByClassName('postBox')[0];
const userId = new URL(location.href).searchParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then(user => {
       const block = document.getElementsByClassName('userBox')[0];
       const ul = document.createElement('ul');
       recursiveBuild(user, ul);
       block.appendChild(ul);
    });

    function liCreator(key, value, parent) {
        const li = document.createElement('li');
        li.innerText = `${key} ${value}`;
        parent.appendChild(li);
    }

    function ulBuilder(key, object, parent){
        const li = document.createElement('li');
        const ul = document.createElement('ul');
        li.innerText = `${key}`;
        parent.appendChild(li);
        li.appendChild(ul);
        recursiveBuild(object, ul);
    }


    function recursiveBuild(object, parent) {
        for (const key in object){
            typeof object[key] === 'object' ? ulBuilder(key, object[key], parent) : liCreator(key, object[key], parent)
        }
    }

let btn = document.createElement('button');
btn.innerText = `post of current user`;
userBox.appendChild(btn);
btn.addEventListener('click', function (){

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((res)=> res.json())
        .then(posts => {
            for (const post of posts){
                let h3 = document.createElement('h3');
                h3.innerText = `${post.title}`;
                let btn = document.createElement('button');
                btn.innerText = `post-details`;
                btn.addEventListener('click', function (){
                    location.href = `../post-details/post-details.html?postId=${post.id}`;

                })
                h3.appendChild(btn);
                postBox.appendChild(h3);
            }
        })

})


































