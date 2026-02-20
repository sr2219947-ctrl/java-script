// let isloggedIn=" " this string has a space , so it is not empty
// let booleanIsloggedIn= Boolean(isloggedIn)
// console.log(booleanIsloggedIn);
let isloggedIn=null;
// console.log(Boolean(isloggedIn)); //false   case: isloggedIn=""
// console.log(Boolean(isloggedIn));
const score=100;
const scorevalue=100.3;
let userEmail;
const id=Symbol('123')
const anotherId= Symbol('123')
const bigNumber =32435454345352n
// console.log(id==anotherId);
const hero=["hanuman", "superman", "thor"] ;//array 
let myobj={
    name:"sakshi",
    age:22
};

//     const myfunction =function()
// {
//     console.log("hello world");
// };
// myfunction();
console.log(typeof bigNumber);
 //primitive data types 
 const num=10;
 console.log(num);
//  num=20;// error because num is a constant variable and cannot be reassigned
//  console.log(num);
 //non primitive data types
 const obj={
    id:10,
    balance:1000
 }
 obj.id=20;// we can change the properties of an object even if it is declared as const
console.log(obj);
let obj2={
    id:20,
    money:30
};
// obj=obj2;// we can reassign obj to obj2 because obj is declared as let
// console.log(obj); //error because obj is declared as const and cannot be reassigned and 
// **imp: adress of obj is changed to obj2 it **
