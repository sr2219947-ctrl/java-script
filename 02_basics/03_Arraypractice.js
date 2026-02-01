// array is collection that stores multiple values in single variable , in ordered form.
const arr =[10,20,30];
// use of push() operation ( add the element at end of the array )
let array=[1,2];
arr.push(3);
console.log(array);// [1,2,3]
// use of pop() operation Removes the last element fprm the array
let ar=[1,2,3];
arr.pop();
console.log(ar); //[1,2]
// unshift add the element at the beginning of the array 
let a=[2,3];
a.unshift(1);
console.log(a); //[1,2,3]
// shift removes the first element from the array 
let b=[1,2,3];
b.shift();
console.log(b); //[2,3]
// use of include ( checks whether an element exists in array )
// it will return true and false 
let c=[10,20,30 ];
console.log(c.includes(20));  // true 
 // indecOf() it returns the index position of an element 
 // if not found -> -1
 let d= [20,34,56 ];
 console.log(d.indexOf(34));
  // use of concat() joins the two or more arrays and returns the new array 
  let e=[23,45]
 let f=[56,67]
 console.log(e.concat(f)); 
 // spread operator(...) expands array elements into individual values 
 let g=[6,7];
 let h=[8,9];
 let k=[...g,...h];
 console.log(k);
 // Nested array ( an array inside the another array)
 let n= [1,[2,3],[4,[5]]];
 console.log(n);
 // flat() converts nested array into single-level array 
 let z= [1,[2,[3,4]]];
 console.log(z.flat(Infinity));
 // infinity means removes all levels 
 // map ( create a new array by applying a function to each element )
 let l=[2,3,4];
 let squared =l.map(num=>num*num);
 console.log(squared); // [4,9,16]
 // does not change the original array 
 arr.map(num => num * num)
// Map will go element by element:
// First element: num = 1 → 1*1 = 1
// Second element: num = 2 → 2*2 = 4
// Third element: num = 3 → 3*3 = 9

// Another example 
let nums=[1,2,3];
let result =nums.map(n=>n+10);
console.log(result); //[11,12,13]
// converts the stirng to uppercase 
let names=["sakshi","ritu","harsh"];
let upper=names.map(n=>n.toUpperCase());
console.log(upper);
//add prefix "hero_" to each hero 
let heroes=["thor","batman"];
let prefixed=heroes.map(h=>"hero_"+h);
console.log(prefixed);
//map with  index 
let fruits =["apple","mango","banana"];
let numbered=fruits.map((fruit,index)=>`${index+1}.${fruit}`);
console.log(numbered);
//["1.apple", "2.mango" , "3.banana"]
//map with objects 
let students =[
    {Name:"Sakshi",marks:90},
    {Name:"manan",marks:80}
];
let Names=students.map(s=>s.Name);
console.log(Names);  //["Sakshi","manan"]

let marks=students.map(s=>s.marks);
console.log(marks); //[80,70]

let updateMArks= students.map(s=>s.marks+8);
console.log(updateMArks);
 
let newStudents=students.map(s=>({
name:s.Name,
passed:s.marks>=70
}));
console.log(newStudents);
//map() -> returns new array, same length usually , does not change original 
// splice()-> changes the original array, used to add / remove and replace inside array 
// filter() cretae s a new array wit elements that pass a condition
let ray= [8,9,5,7];
let even = ray.filter(num=>num%2===0);
console.log(even);

// reduce()
// it reduces the array to one single value ( sum, max,total)
let rr=[1,2,3];
let sum=rr.reduce((acc,curr)=>acc+curr,0);
console.log(sum);
//6


 

