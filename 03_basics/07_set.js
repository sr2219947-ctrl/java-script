//set allows you to store the unique values  . 
const set1=new Set([10,20,30,40,10, 20,50,60]); //it does not accept the duplicate values 
console.log(typeof set1);
console.log(set1);

const set2=new Set();
set2.add(4);
set2.add("Sakshi");
set2.add(7);
set2.add(30);
set2.add(45);
// delete 
set2.delete(7);
console.log(set2);
console.log(set2.size);
 //ig:id user_id.has(new_user)
 const user_id= new Set(["Sakshi_rana9","Jiya_09","sarika_08","vibha_06","Chanchal_05"]);
 let new_user ="Sakshi_rana9";
 console.log(user_id.has(new_user));
 // clear
//  user_id.clear();
//  console.log(user_id); 
let arr=[10,20,30,40,50,10,20,40];
//convert it  into set to remove the duplicate value 
const set4=new Set(arr);
// console.log(set4);  // if we have to convert it into array 
arr=[...set1];
console.log(arr); // [10,20,30,40,50] now it visible as array spread operator takes every value from object set and convert it into the array 
// what spread operator does it allow us to unpack the elements from array or properties from objects into another array or objects 
// without spread array share the same refernce 
let arr8=[1,2,4];
let arr9=[arr8.push(8)];
arr9.push(5); //.push have length of the array not copy 
console.log(arr8);
 //[1,2,4,8] original array changes 
console.log(arr9);// [4]a.push(4) → returns 4 (new length) array beacomes [1,2,4,8] but the returns value of push() 4 length of the array now 
// wo why we use spread opearator to  make a copy that contains the elements of array but does not chnage the original array 
let arr0=[1,2,3,4];
// arr0.push(8); ther is no need to push 
let arr1=[...arr0,6,7];
console.log(arr1);
//Union of two sets
let set5=new Set([10,20,30,40,50]);
let set6=new Set([10,20,30,80,90]);
let set3=new Set([...set5,...set6]);
console.log(set3);
// intersection of two sets 
// const  conclusion= [...set5].filter((num)=>set6.has(num));
// console.log(conclusion);
// if we want it as set 
//filter :array
const  conclusion=new  Set([...set5].filter((num)=>set6.has(num)));
console.log(conclusion);
