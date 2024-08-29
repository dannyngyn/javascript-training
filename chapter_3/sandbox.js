// for loops

// for(let i = 0; i <5; i++){
//     console.log('in loop: ', i)
// }

// console.log('loop finished.')

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// let i = 0
// while(i < 5){
//     console.log('in loop: ', i)
//     i++;
// }

// let j = 0
// while(j < names.length){
//     console.log(names[j])
//     j++;
// }

//do while

// let i = 5;
// do{
//     console.log('val of i is: ', i);
//     i++;
// }
// while(i < 5)

//if statements
// const age = 20;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun','ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }

// const password = 'p@ssordssssss';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong')
// }
// else if(password.length >= 8 || password.inclues ('@')){
//     console.log('that password is strong enough')
// }
// else{
//     console.log('password is not long enough')
// }

// const scores = [50,25,0,30,100,20,10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you go the top score');
//         break;
//     }
// }

// switch statements

const grade = 'D';

switch(grade){
    case 'A':
        console.log('you go an A')
        break;
    case 'B':
        console.log('you go an B')
        break;
    case 'C':
        console.log('you go an C')
        break;
    case 'D':
        console.log('you go an D')
        break;
    case 'E':
        console.log('you go an E')
        break;
    default:
        console.log('not a valid grade')
}