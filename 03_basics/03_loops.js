let obj4={
    name:"sakshi",
    age:22,
    gender:"female",
    city:"karnal"
};
for(let key in obj4){
    // console.log(key);
    console.log(key,obj4[key]);
}
// prototype creation 
let obj2= Object.create(obj4);
obj2.money=120;
obj2.id="arish",
console.log(obj2.name); // it can access the name also 
for(let key in obj2){
    console.log(key);
} // when obj2 can inherit the properties of obj1 why nor obj1 cannot inherit the propertie of Object.Prototype 
// beacuse there enumerable is false so they cannot be accessed let's see
let obj={};
obj.name="Sakshi";
// key value writeable enumerable configurable 
console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// writeable = true so value can be changed if it is false cannot be changed 
Object.defineProperty(obj,"name",{
    value: 'Sakshi',
    writable:false,
    enumerable:true,
    configurable:true
});
obj.value= 10000;
console.log(obj); 
// const customer={
//     name:"sakshi",
//     age:22,
//     account_number:12344,
//     balance:2000
// }
// Object.defineProperty(customer,"name",{
//     writable:false,
// })
// customer.name="mobin";
// console.log(customer);
// //enumerable 
let customer={
    name:"naina",
    age:22,
    account_number:342432,
    balance:34242433,
}
let customer2=Object.create(customer);
customer2.city="noida";
customer2.place="Up";  
Object.defineProperty(customer,"name",{
    enumerable:false,
})
for(let key in customer2)
    console.log(key); // name is not visible why because enumerable is false so if we customer2 can access or inherti the property of customer why not customer can inherit the propery of Object.prototypr beacuse there enumerable is false.
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));
/* in arrays usong for in loop is not a best practice because
 it access all the keys and  in array if it access indices(0,1,.. so on )it alse access name as access so basically it does not check data types and al
 */
//let's see
// const arr=[23,56,77,99,76,43];
// arr.name="Rashi";
// for(let key in arr){
//     console.log(key);
// }
const arr5=[45.6,32,99,43,32,3]
arr5.name="Sakshi";
arr5.age=22;
for(let index=0;index<arr5.length;index++)
    console.log(index,arr5[index]);
// if we want to print the string 
Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
})
for(let key in customer)
console.log(key);
//confiurable 
"use strict";
let ob={}
Object.defineProperty(ob,"id",{
    value:101,
    writeable:true,
    enumerable:true,
    configurable:false
});
delete ob.id;
// console.log(ob);
// strict mode version 
let data={};
Object.defineProperty(data,"secret",{
    value:"1232ab",
    writable:false,
    configurable:false,
    enumerable:false
});
data.secret="change";
delete data.secret;
 console.log(data.secret);
 console.log(Object.keys(data));
 // enumerable:false only hides the property from loops and Object.keys()
 //it does not block direct access 
 /*enumerable controls:

for...in

Object.keys()

Object.entries()

JSON.stringify()

It does NOT control:

data.secret

Object.getOwnPropertyDescriptor()*/
 console.log("-- prototype and Object.create")
 let parent={
    country:"India"
 };
 let child=Object.create(parent);
 child.city="Delhi";
 console.log(child.city); //delhi
 console.log(child.country); //India
 for(let key in child){
    console.log(key);
 }
// because for...in prints the inherited properties too 
//own/ inherited 
console.log(Object.keys(child));
console.log(child.hasOwnProperty("city"));
console.log(child.hasOwnProperty("country"));
//Shadowing
child.country="USA"
console.log(child.country); //USA 
console.log(parent.country); //India 
// it does not change the parent this is called the property shadowing 
const arr3=[10,20,23,18,13];
for(let value of arr3){
console.log(value);
}

let str="Sakshi is good gurl";
for(let value of str){
    console.log(value);
}
//don't use for of loop in object 
const obj0={ 

    name:"Chavi",
    age:22,
    gender:"Female"
};
console.log(obj0);
// for(let value of obj){
//     console.log(value );
// } // object is not iterable symbol.iterable not defined but for array and string it  is defined . 
//for of loop (String and array ) for in loop (Object )
for(let value of Object.keys(obj0))
    console.log(value,obj0[value] );
// for iterate over array using for each 
let arr6=[90,56,45,34,23];
arr6.forEach(function(num){
    console.log(num );
});
console.log("\n");

// arrow function 
let easyway=[10,90,56,34,45];
//single argument :number 
//second: index
//third : array then you can modiefy it also  
easyway.forEach((num,index,arr)=>{
   arr[index]=num*2;
});
console.log(easyway);
console.log("\n");
// as callback fn 
 let hii=[89,99,99,45,12,6];
 function greet(num){ // const greet =function(num){console.log(num);}
    console.log(num);
 }
// hii.forEach(greet); 
// // filter method {basically filter out the data }
// let arr =[10,22,99,88,55];
// const result =arr.filter((num)=>{
//      return num%2==0;
// })
// console.log(result);  // result is is global scope so console can access it 

const rry=[67,45,89,56,43];
const res=rry.filter((num)=>num%2!=0);
console.log(res);

const student=[
    {name:"Sakshi", age:22,marks:78},
    {name:"Muskan ", age:22,marks:88},
    {name:"Nancy", age:22,marks:58},
    {name:"harsh", age:21,marks:88},
    {name:"vanshu ", age:12,marks:98}
]
const  result =student.filter((value)=>value.marks>60);//(({marks})=>marks>50);
console.log(result);
 