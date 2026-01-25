// JavaScript Array Practice 
//1️⃣Create Arrays
const myArr= [0,1,2,3,4,5];
const heroes=["Spiderman","Shaktiman"];
console.log("Original Array:",myArr);
console.log("Heroes Array:",heroes);
//2️⃣Push() and Pop()
myArr.push(6);
console.log("\nAfter Push(6):",myArr);
myArr.pop();
console.log("After pop():",myArr);
//-------------------------------------
//3️⃣unshift() and shift()
myArr.unshift(9);
console.log("\nAfter unshift(9):",myArr);

myArr.shift();
console.log("After Shift():",myArr);
//--------------------------------------
//4️⃣includes() and indexof()
console.log("\n Includes 3:",myArr.includes(3));//true
console.log("Index of 3:",myArr.indexOf(3)); //3
console.log("Index of 10:",myArr.indexOf(10));//-1
//---------------------------------------
//5️⃣join()- Array -> String
const joined =myArr.join();
console.log("\n After joined():",joined);
console.log("Type of joined:",typeof joined);
// try string methods 
console.log("Upper Case String:",joined.toUpperCase());
console.log("Length of the String:",joined.length);
// Array method will not work on the joned 
//joined.push(7); //Error
 //6️⃣Conver the string back to array using split()
 const backtoArray =joined.split(",");
 console.log("\nBack to Array using split():",backtoArray);
 console.log("Type:",typeof backtoArray);
//now  array methods work again 
backtoArray.push("6");
console.log("After push on backtoArray:",backtoArray);
 //----------------------------------------
 //7️⃣slice()=> does not modify original array 
 console.log("\nBefore slice:",myArr);
 const sliced= myArr.slice(1,4);
 console.log("Slice(1,4) result:",sliced);
 console.log("After slice ,original :",myArr);

 //8️⃣splice()- modifies original array 
 console.log("\n Before splice:",myArr);
 const spliced=myArr.splice(1,3);
 console.log("Spliced(1,3) removed:",spliced);
 console.log("After splice,original:",myArr);
  
 //9️⃣Mixed Data type array (dynamic typing)
 const mixedArray=[1,"hello",true,null,{name:"Sakshi"}];
 console.log("\nMixed Array:",mixedArray);
  
 //🔟Final Summary 
 console.log("\n===Summary===");
 console.log("join() converts array to string");
 console.log("slice() does not change the original array");
 console.log("Javascript arrays can store the mixed data types");


 console.log("\n array 01 practice completed ");


