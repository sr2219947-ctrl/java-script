//create object 
//method 1
const user=new Object();
user.name="Sakshi";
user.age=20;
user.isStudent=true;
console.log("User Object:",user);
//method 2(boject literal syntax)
const user2={};
//adding properties dynamically (real life analogy:you buy a new phone andadd contacts leter and change detials  etc)
user2.name="Sangeeta";
user2.age=45;
user2.isStudent=false;
console.log("User2 Object:",user2);
//method 3 (object literal with properties)
const user3={
    name:"Harsh",
    age:21
};
console.log("User3 Object:",user3);
//Nested objects
const student={
    name:"Siya",
    age:19,
    address:{
        city:{
            name:"kurkshetra",
            pincode:136118
        },
        street:"xyz road"
        }
    };
console.log("Student Object:",student);
//accessing properties
console.log("Student Name:",student.name);
console.log("Student City:",student.address.city.name ); //how to display city pincode
console.log("Student Pincode:",student.address.city.pincode);
//how to display all properties of the studen object
console.log("All properties of student object:",Object.keys(student));
//how to display all values of the student object 
console.log("All values :",Object.values(student));
//how to display both keys and values of the student object
console.log("All entries:",Object.entries(student));
//Array of objects(that contains multiple objects)
const users=[
    {name:"Sakshi",age:21},
    {name:"Ritu",age:22},
    {name:"Harsh",age:20}
];
console.log("Array of Objects:",users);
//Acessing data from array of objects)
console.log("first user name:",users[0].name);
console.log("second user name:",users[1].name);
//Looping through array of objects
for(let i=0;i<users.length;i++){
console.log(`User ${i+1} Name:`,users[i].name);
};// explanation of for loop 
//for... in loop to iterate over objects properties
//${i+1} is used to display the user number in the console output, starting from 1 instead of 0.
//  It is a template literal syntax that allows us to embed expressions inside a string.
//user[i] refers to the current user object in the array at index i.
