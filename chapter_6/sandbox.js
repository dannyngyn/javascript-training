/////query selector and selector all
// const para = document.querySelector('.morning')

// console.log(para)

// const paras = document.querySelectorAll('p')
// paras.forEach(para => console.log(para));

//////get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

//////get an element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log('for statement for errors')
// for(i = 0; i < errors.length; i++){
//     console.log(errors[i]);
// }

//////get an element by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome'

// const paras = document.querySelectorAll('p');
// paras.forEach(para => para.innerText += ' new text');

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2>New H2</h2>'

///// Links
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.google.com');
// link.innerText = 'google';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: yellow;');

////// to not override styling
// const para = document.querySelector('p');

// console.log(para.style);
// console.log(para.style.color);
// para.style.margin = '50px';
// para.style.color = 'blue';

const paras = document.querySelectorAll('.practice > p');
paras.forEach(p=>{
   if(p.innerText.includes('success')){
      p.classList.add('success');
   }
   elseif(p.innerText.includes('error')){
      p.classList.add('error');
   }
});



