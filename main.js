// 1 
// const fetchDataAndCopyArray = async () => {
//     const response = await fetch(' https://jsonplaceholder.typicode.com/posts');
  
//     if (!response.ok) {
//       console.error('Ошибка', response.status);
//       return []; 
//     }
//     const data = await response.json();
//     const array = data.slice();
//     return array;
//   };
//   const processArray = async () => {
//     const array = await fetchDataAndCopyArray();
    
//     if (array.length === 0) {
//       console.log('Пустой массив');
//       return;
//     }
//     const first10 = array.slice(0, 10);
//     console.log("Первые 10 элементов", first10);
//     const last10 = array.slice(-10);
//     console.log("Последние 10 элементов", last10);
//   };
//  processArray();


// 2
// const fetchDataAndCopyArray = async () => {
//   const response = await fetch(' https://jsonplaceholder.typicode.com/posts'); 
//   if (!response.ok) {
//     console.error('Ошибка', response.status);
//     return []; 
//   }
//   const data = await response.json();
//   const newArray = data.map(({ userId, title }) => ({ userId, title }));
//   return newArray;
// };
// const processArray = async () => {
//   const newArray = await fetchDataAndCopyArray();
//   if (newArray.length === 0) {
//     console.log('Пустой массив');
//     return;
//   }
//   console.log("Новый массив", newArray);
// };
// processArray();


//3
// const fetchDataAndDisplayPosts = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     if (response.status !== 200) {
//       console.error('Ошибка', response.status);
//       return;
//     };
//     const data = await response.json();
//     if (!Array.isArray(data)) {
//       console.error('Данные не являются массивом');
//       return;
//     };
//     const postContainer = document.getElementById('post-container');
//     postContainer.innerHTML = '';
//     data.forEach((post, index) => {
//       const postElement = document.createElement('div');
//       postElement.classList.add('post-frame');
//       postElement.innerHTML = `
//         <p>№${index + 1}</p>
//         <p>name: ${post.name}</p>
//         <p>phone: ${post.phone}</p>
//         <p>username: ${post.username}</p>
//          <p>website: ${post.website}</p>
//          <p>email: ${post.email}</p>
//       `;
//       postContainer.appendChild(postElement);
//     });
// };
//   fetchDataAndDisplayPosts();
  
  

//4
// const fetchDataAndCopyArray = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
//     const posts = await response.json();
//     const evenPosts = [];
//     const oddPosts = [];
//     for (let i = 0; i < posts.length; i++) {
//       if (posts[i].id % 2 === 0) {
//         evenPosts.push(posts[i]);
//       } else {
//         oddPosts.push(posts[i]);
//       }
//     }
//     console.log('четные id:');
//     console.log(evenPosts);
//     console.log('нечетные id:');
//     console.log(oddPosts);
//   }
//   fetchDataAndCopyArray();



//5
// const fetchDataAndCopyArray = async () => {
//     const response = await fetch(' https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     const copyArray = [];
//     for (let i = 0; i < data.length; i += 10) {
//       copyArray.push(data[i]);
//     }
//     console.log('Копия с каждым 10-м элементом');
//     console.log(copyArray);
//   }
//   fetchDataAndCopyArray();
