// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const yellow = document.getElementById('yellow');
// const orange = document.getElementById('orange');
// const purple = document.getElementById('purple');

// const body =document.body;
// // document.getElementById('body');
// red.addEventListener('click',()=>{
// body.style.backgroundColor='red';
// })

// blue.addEventListener('click',()=>{
// body.style.backgroundColor='blue';
// })

// yellow.addEventListener('click',()=>{
// body.style.backgroundColor='yellow';
// })

// orange.addEventListener('click',()=>{
// body.style.backgroundColor='orange';
// })

// purple.addEventListener('click',()=>{
// body.style.backgroundColor='purple';
// })
//  We apply eventListner to all buttons at once but it takes memory and if buttons are maybe 100 it slow down the process.
// const button =document.querySelectorAll('button');
// const body=document.body;
// // console.log(button);
// button.forEach((buttons)=>{
//     buttons.addEventListener('click',()=>{
//        console.log(buttons.id);
//        body.style.backgroundColor=buttons.id;
//     })
// })

//Event Delegation ---> 

// const root= document.getElementById('root');
// root.addEventListener('click',(event)=>{
//     document.body.style.backgroundColor=event.target.id;
// //  console.log(event.target.id);
// })
//


const root= document.getElementById('root');
root.addEventListener('click',(event)=>{
    // console.log(event.target.tagName);
    if(event.target.tagName==='BUTTON')
    document.body.style.backgroundColor=event.target.id;
})




