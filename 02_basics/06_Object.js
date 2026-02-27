const course={
    title:"Javascript Basics",
    duration:"3 hours",
    instructor:"Sakshi",
    "course level":"Beginner"
};
console.log("Course object:",course);
//accessing properties
console.log("Course title:",course.title);
console.log("Course duration:",course.duration);
//.dot notation works only when the property name is a valid identifier(no spaces or special chacters and does not start with a number)
//if the property name has spaces or special characters we can use bracket notation also it accepts any string works with dynamic keys(variables)
console.log("course duration:",course["duration"]);// this also works
// console.log("Course level:",course.course level); //error because of space in property name
console.log("Course level:",course["course level"]);//this works because we are using bracket notation and the property name is a string
//json stands for javascript object notation and it is a format for storing and exchanging data
//json converted into array of objects: means storing multiple similar json objects in an array so that they can hadled ,looped and processed together"
const courses=[
    {
        name:"Sakshi",
        coursename:"Javascript Basics",
        price:"free"
    },
{
    name:"Rita",
    coursename:"React",
    price:"Free"
}
];
//looping through array of objects
//it means accessing each object one by one from the array in order to read or use its properties.
// why we loop :
// array has multiple objects and js cannot read all objects loops helps process each item seperately
for(let i=0;i<courses.length;i++){
    console.log(`course ${i+1} name:`,courses[i].name);
}
console.log("use of forEach loop to loop through array of objects");
courses.forEach(course=>{
    console.log(`Course Name:`,course.coursename);
});
//summary
console.log("\n===Summary===");
console.log("{}-> one object")
console.log("[]->list")
console.log("[{},{}]->mulitple records");
console.log("forEach-> arrays");
console.log("for...in->objects");

console.log("\n===examples of  for .. in loop with objects===");
const car={
    make:"Toyota",
    model:"Camry",
    year:2020
};
for(let key in car){
    console.log(`${key}:${car[key]}`);
}
//key->property name 
//car[key]-> value of the property
// “Template literals create a single formatted string, while comma-separated console.log preserves data types and is better for debugging.”
//summary
// const obj={
//     0:20,
//     1:50,
//     2:100,
//     name:"Sakshi",
//     account_baalance:5000,
//     gender:"Female",
//     age:30,
//     "account type":"Savings",
//     undefinedValue:undefined,
//     nullValue:null
// }
// console.log(obj["undefinedValue"]);
// console.log(obj["nullValue"]);
// console.log(obj.gender);
// console.log(obj["account type"]);
// console.log(obj[0]);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj);

const arr=[10,20,30];
console.log(arr);
 //second method 
 const person =new Object();
 console.log(person);
 //property add
 person.name="ashna";
 person.age=25;
 person.gender="Female";
 console.log(person);
 //modify property
 person.age=26;
    console.log(person);
 //third method 
 class people{
    constructor(na,ag,ge){
        this.name=na;
        this.age=ag;
        this.gender=ge;
    }
 }
 let p1=new people("sakshi",22,"Female");
 let p2=new people("ritu",25,"Female");
 console.log(p1,p2);

 let say ={
    name:"aarti",
    age:24,
    gender:"Female"
 };
 const a=Object.values(say);
console.log(a);
// const a2=Object.entries(say);
// console.log(a2);
// //assign method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
// const obj1={rollNo:101};
// const obj2={name:"Kajal"};
// const obj4={age:22};
// const obj3=Object.assign({},obj1,obj2,obj4);
// console.log(obj3);
// console.log(obj1.rollNo);
// const obj9={...obj1,...obj2,...obj4};
// console.log(obj9);

// let r2={
//     a:1,
//     b:2
// };
// let r3=r2; //both r2 and r3 point to same object in memory
// r3.a=10; //if we change r3 it will affect r2 as well because they point to same object in memory
// console.log(r3,r2);
// // deep copy
// let r4=structuredClone(r2);
// r4.a=100; //if we change r4 it will not affect r2 because r4 is a deep copy of r2 and they are different objects in memory
// console.log(r4,r2);
// //nested object
 let obj = {
   name: "Rohit",
    money: 430,
     balance: 30,
     age: 20,
    aadhar: "hfdsiohsai"
 };
const{name,age,...rest}=obj;
console.log(rest);
//note: rest operator is used to collect remaining properties of an object after destructuring and it creates a new object with those remaining properties. In this example, rest will contain money, balance, and aadhar properties of the obj object.

