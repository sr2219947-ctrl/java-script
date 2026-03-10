//the this keyword in js is special keyword that refers to 
// context in which current code is beign executed .
// console.log(20);
// console.log(this==window);  //true
// function name(){ // function is part of global scope 
//     console.log("namaste everyone ");
// }
var c=20;
console.log(this.c); // var is part of global object 
console.log(this); //empty object in node js 
//1.) global context (outside any function )
// in browsers :window 
//2.) in node js Module's exports window 

//inside function 
// when this is used inside a regular function , it refers to global object 
// // strict mode -> this will be undefined inside the function 
// "use strict"// undefined  how hoga but if do not use then non strict 
// function greet(){
//     console.log(this);
// }
// greet();
// window.greet(); // now this will point the window object 

// a=10;
// console.log(a);
// "use strict"
let obj={
    name:"poja"
}
Object.freeze(obj);
obj.name="sneha";
// console.log(obj);
//3.) inside a  method (Object context)
// when this is used inside an object's method , it refers to the object that owns the method . 
// const obj={
//     name:"sakshi",
//     age:22,
//     greet:function(){
//         console.log(this); // this.name -> Sakshi but we can't print the name directly using name 
//     }
// }
// obj.greet(); // this will point the object 

//**  Arrow functions ->Arrow functions don't have their own this .
// Instead , they inherit this from the surrounding (lexical scope).   */
// let object={
//     name:"Sangeeta",
//     age:42,
//     greet:function(){
//         let ab=()=>{
//             console.log(this);
//         };
//         ab();
//     }
// }
// object.greet();
//block scope  if(){ .....}// functional scope -> functional{ }
//inside a class or constructor 
// in constructors and class, this refers to instance of the object being created .
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let a=new person("Rohan",20);
console.log(a);

// let greet=()=>{
//     console.log(this);
// }
// greet();
"use strict"
let greet=()=>{
    console.log(this);
}
greet(); // it cannot access the window.greet() because let is not part  the global object 