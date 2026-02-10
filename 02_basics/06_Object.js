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
