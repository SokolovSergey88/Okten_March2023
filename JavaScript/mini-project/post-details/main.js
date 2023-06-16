// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

const postId = new URL(location.href).searchParams.get('postId');
const userBox = document.getElementsByClassName('userBox')[0];
const userComments = document.getElementsByClassName('userComments')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.json())
    .then(post => {
        let h1 = document.createElement('h1');
        h1.innerText = `${post.title}`;
        let p = document.createElement('p');
        p.innerText = `${post.body}`;
        userBox.append(h1, p);
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((res) => res.json())
    .then(comments => {
        console.log(comments)
        for (const comment of comments){
            let divComments = document.createElement('div');
            divComments.classList.add('divComment');
            divComments.innerText = `${comment.body}`;
            userComments.appendChild(divComments);
        }
    })
