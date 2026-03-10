//global object :Object 
//chrome browser :window 
//window.math.random() global object :can access like anywhere var but let an const are not 
// a =10 window.a var a= 10; window is global object name in chrome  and in vs code is global
console.log(global);
console.log(global.Math.random()); /*error because window is not accessible here so we use global here 
but globalThis point global object irrespective of environment -> window  & in vs  code also  */
console.log(globalThis.Math.random());
console.log("Hello world");
console.log(Math.random());
//setInterval();
//new Object(); 
//new String();
//they are present in global object as key 
let obj={
    name:"sakshi",
    age:56
};
obj.name