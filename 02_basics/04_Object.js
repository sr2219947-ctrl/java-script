const user={
    name:"Sakshi",
    age:21,
    city:"Karnal",
    hobbies:["reading","coding", "travelling"],
    isStudent:true,
};
console.log("User Object:",user);
//accesing object properties
console.log("User name:",user.name);
console.log("user age:",user["age"]);
//adding new property
user.age=22;
console.log("After updating age:",user);
user.country="India";
console.log("After adding country:",user);
delete user.isStudent;
console.log("After deleting is Student:",user);
// symbols as object keys
const mySum=Symbol("id");
const student={
    name:"Sakshi",
    [mySum]:12345,
    course:"MCA"
};
console.log("Student Object:",student);
console.log(student[mySum]);
//Symbols are unique even if they have same desrciption so they prevent name collisions [symbol]to use symbol as key you must wrap it in square brackets
const internalId=Symbol("internalId");
const product={
    name:"Laptop",
    price:60000,
    [internalId]:"prod123"
}
console.log(product.name);
console.log(Object.keys(product));
console.log(Object.values(product));
console.log(product[internalId]);
const person={
    name:"Sakshi",
    greet:function(){
        console.log("Hello!");
    },
    greetWithName:function(){
        console.log(`Hello,my name is ${this.name}`);
    }
};
person.greet();
person.greetWithName();
// use of object.freeze() to make object immutable
const account={
    username:"Sakshi",
    balance:50000
};
Object.freeze(account);
account.balance=60000;//won't change
console.log("After trying to change balance:",account);
//Object.keys(),Object.values(),Object.entries()
const car={
    brand:"BMW",
    price:50000000,
    color:"black"
};
console.log(Object.keys(car));//["brand,"price","color"]
console.log(Object.values(car));//["BMW",5000000,"black]
console.log(Object.entries(car));//key-values pair
//loops over object
// we use let key in user to loop over the keys of the object
//for(repeat code multiple times)let key is a variable that takes each key of the object in each iteration) in(inside the object we want to loop over)user (is object we want to loop through)
for(let key in car){
    console.log(`${key}:${car[key]}`);
}
//console.log(key,":",car[key])); using commas will print key and value with space in between
//console.log(`${key}:${car[key]}`); using template literals to print keysand values in formatting way means single string with pleaceholders ${ to insert variables 
//IN TOTAL Comma in console.log prints multiple values with automatic spacing, while template literals create one formatted string where you fully control the output.

//.......Nested Objects........
const userprofile={
    name:"Aman",
    address:{
        city:"delhi",
        pincode:110001
    }
};
console.log(userprofile.address.pincode);
//Object Destructuring
//means taking values of and object and storing them in variables
const{name,age,city}=user;
console.log(name);
console.log(age);
console.log(city);
//destructuring with nested objects
const{address:{city:pincode}}=userprofile;
console.log(pincode);
 //destruncturing with renaming variables
 const{name: userName, age:userAge}=user;
 console.log(userName);
 console.log(userAge);
 //destructruing with default values
 const{country="India"}=user;
 console.log(country);
  //Spread operator with objects
  const obj1={rollNo:101};
  const obj2={name:"Kajal"};
  const mergedObj={...obj1,...obj2};
  console.log(mergedObj);
  // without Spread operator //merg
const obj3 = { a: 1 };
const obj4= { b: 2 };

const obj5 = {
  a: obj3.a,
  b: obj4.b
};
// console.log(obj5);
//merged object using Object.assign()
const mergedObj2=Object.assign({},obj3,obj4);
console.log("Merged Object using Object.assign():",mergedObj2);
//Spread operator to update the objects
const updateUser={
    ...user,
    age:21
};
console.log("Updates User Object:",updateUser);
//summary
console.log("\n===Summary===");
console.log("Objects store key-value pairs");
//Creat objects using {} and access properties with dot notation or bracket notation
console.log("Symbols can be used as unique keys in objects");
console.log("Object.freeze()makes an object immutable");
console.log("Object.keys(),Object.values(),Object.entries() ,to get keys,values ,and key-value pairss of an object");
console.log("for... in loop to iterate over object properties");
console.log("Nested objects can be accessed using multiple dot notation");
console.log("Object destructruring to extract values into vaiables");
console.log("Spread operator(...),Object.assign() to merge and update objects");
console.log("refernce type means when we assign an object to another variable we are copying the refernce not the actual object so changes in one variable will affect the other variable as they point to same object in memeory");
console.log("to create a copy of an object we can use spread operator or Object.assign() to avioid reference issues");
const user1={
    name:"Sakshi",
    age:21
};
const user2=user1;//both user1 and user2 point to same object in memory
// //if we change user2 it will affect user1 as well ")
user2.age=22;
console.log("User1:",user1);
console.log("User2:",user2);
//to aviod this we can create a copy 
const user3={...user1};//creates a shallow copy of user1
user3.age=23;
console.log(user3);
console.log(user1);//user1 remians unchanged
//summary of reference type and copying objects
console.log("\n===Summary of Refernce type and copying objects===");
// refernce type when you assign an object to another variabl javaScript copies refernce(address, not the object itself.
//there is only one object in memory.
//both variables point to the same object
//changes in one variable will affect the other variable as they point to same object in memory)
//to create a copy of an object we can use spread operator or Object.assign() to avoid reference issues