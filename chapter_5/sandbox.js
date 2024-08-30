///// object literals
// let user = {
//     name: 'crystal',
//     age: '30',
//     email: 'crystal@rrc.ca',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);
// user.age = 30;
// console.log(user.age);

// console.log(user['name']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

///// object literals
// let user = {
//     name: 'crystal',
//     age: '30',
//     email: 'crystal@rrc.ca',
//     location: 'berlin',
//     blogs:  [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logBlogs(){
//         console.log('this user has written the following blogs: ');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// user.login();
// user.logout();
// user.logBlogs();

///// math object
console.log(Math)
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.trunc(area));
console.log(Math.ceil(area));

