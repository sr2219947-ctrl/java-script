//Accessing by query selector 

const id = document.querySelector('#first');
id.innerHTML = "Hello Money ";

const id2 = document.querySelector('.header2');
// console.log(id2);
id2.style.backgroundColor = "skyblue";
//how to iteate over node list
//const obj=document.querySelectorAll('.header1')

//obj.forEach((val)=>{
//console.log(val)
//})

//for(i=0;i<obj.length;i++)
//obj[i].style.color="red";

//convert Nodelist into Array
//Array.from(obj)
const obj=document.getElementsByTagName('h1');
// console.log(obj);
let team =document.getElementsByTagName('li');
//how to iterate over it 
// for(let i=0;i<team.length;i++)
// team[i].style.color="black";

//Array.from(team).forEach((val)->{
// console.log(val);})
const list=document.querySelector('li');
console.log(list.parentNode);

const par=document.querySelector('ul');
console.log(par);
console.log(par.childNodes);
console.log(par.children); //html collection only html element 

console.log(par.firstChild);
console.log(par.lastElementChild);
console.log(par.lastChild);
