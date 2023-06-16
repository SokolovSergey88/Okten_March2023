// new Promise( (resolve)=> {
//
//     setTimeout( ()=>{
//         let x = 1;
//         console.log('Hello', x);
//         x++;
//         resolve(x);
//     },1000)
//
// })
//     .then((value)=>{
//
//         return new Promise((resolve) =>{
//             setTimeout(()=>{
//                 console.log('world', value);
//                 value++;
//                 resolve(value);
//             },2000);
//         })
//
//     })
//     .then((value)=>{
//         return new Promise(resolve => {
//             setTimeout(()=>{
//                 console.log('okten',value);
//                 value++;
//                 resolve(value);
//             },3000)
//         })
//     })
//
//
//
// new Promise((resolve, reject)=>{
//
//     setTimeout(()=>{
//         let x = 1;
//         console.log(x);
//         resolve(x);
//     }, 1000)
//
// })
//     .then(value => {
//         return new Promise((resolve, reject)=>{
//
//             setTimeout(()=>{
//
//                 console.log(value);
//                 value++;
//                 resolve(value);
//             }, 1000)
//
//         });
//     })

fetch('https://jsonplaceholder.typicode.com/users') // [HTTP METHOD GET]
    .then(response => response.json())
    .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/posts', {method: "POST", body: JSON.stringify({
        title: 'octen is cool',
        body: 'lorem ipsum',
        userId: 6
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}) // [HTTP METHOD POST]
    .then(response => response.json())
    .then(json => console.log(json))