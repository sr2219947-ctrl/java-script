// console.log(x);
// console.log(y); //cannot accessed when they are defined here 

// console.log(b); //b is not defined 
// var x=10; //undefined 
// let x=10; //cannot access x before initialization 

var x = 10;
let y = 20;
console.log(x);
console.log(y); // but now they are printing 10 &20  
//exection context ** divided into two parts **
/*memrory  allocation  ||           code
var x: undefined     x=10   <-      when code execution start then
key  : value
let y :  } temporal dead zone  y=20 <-
const z: }temporal dead zone   z=30 <- */
//java script is single threaded language synchronous
//single threaded -> one time one  instruction execution in synchrnize way .
//console.log(x)  // code execution undefined 
//console.log(y)  // error y is not intialized yet 
//var x=40; firstly memory allocation x: undefined 
// let y=20; but y is not initialize yet 

/* what is temporal dead zone -> time period when in memory allocation phase let y: and const z: has nothing until value is not initialized 
but when y : 20 and z: 79 or some value then is is out tdz */
// console.log(z); refernce error because z is not defined 

//** Hoisting is where var and fn declaratio =n  move to top of their containing scope during compilation phase befire code has  been executed **
/* let z;
var x=undefined 
let y*/ 
console.log(x); //undefined 
console.log(z);
let z=50; // Cannot access 'z' before initialization
let i =70;
console.log(i); // 70 
