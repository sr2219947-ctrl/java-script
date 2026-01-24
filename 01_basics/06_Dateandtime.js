// Current Date and time
let now= new Date();
console.log("Current Date object:",now);
console.log("Type:",typeof now);
// Different String Formats
console.log("\n--Date Formats--");
console.log("toString():",now.toString());
console.log("toDateString():",now.toDateString());
console.log("toLocaleString():",now.toLocaleString());
console.log("toLocaleDatestring():",now.toLocaleDateString());
console.log("toLocaleTimrString():",now.toLocaleTimeString());
 // Extracting Date parts
 console.log("\n--Extracting Date parts --");
//year
console.log("Year:",now.getFullYear());
//Month(0-11)
console.log("Month(0-based):",now.getMonth());

//moth (1-12)
console.log("Month:",now.getMonth()+1);
//Date of month 
console.log("Date:",now.getDate());
//day of week(0-6)
console.log("Day number:",now.getDay());
//Time Parts 
console.log("Hours:",now.getHours());
console.log("Minutes:",now.getMinutes());
console.log("Seconds:",now.getSeconds());
// Template Literals 
console.log("\n--Template Literals--");
console.log(`Today is ${now.getDate()}:${now.getMonth()}:${now.getFullYear()}`);
console.log(`Today is ${now.getHours()}:${now.getMinutes()}:${now.getSeconds}`);
console.log(`current time is ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
console.log(`Today is Day ${now.getDay()} of the week `);
// Locale Formatting with Options 
console.log("\n --Locale Formatting");
//toLocaleString() converts date & time into a format that matches a country/region (locale).
console.log(now.toLocaleString("en-In",{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
})
);
console.log(now.toLocaleString("en-In",{
    hour: "2-digit",
    minute:"2-digit",
    second:"2-digit",
    hour12:true, //“Use 12-hour clock with AM / PM.”
})
); 
// CReated Custom Dates 
console.log("\n--Custom Dates--");
//Numeric Format (Month is 0-based )
let created1= new Date(2025,0,12);
console.log("Numeric date:", created1.toDateString());
//with time
let created2= new Date(2024,0,14,10,30);
console.log("Date with time:" , created2.toLocaleString());
//string format 
let created3=new Date("2023-01-14");
console.log("String date:",created3.toLocaleString());
// Timestamp 
console.log("\n--TimeStamp--");
console.log("Date.now():",Date.now());
console.log("now.getTime():",now.getTime());
console.log("Secods timestamp:",Math.floor(Date.now()/1000));//A timestamp is a number that represents a specific moment in time.
1769234567
//that number = timestamp.

// ----comparison between Dates ----
console.log("\n --Date Comparison");
let d1= new Date("2026-01-01");
let d2= new Date("2025-01-09");
console.log("d1<d2:",d1<d2);
console.log("d1>d2:",d1>d2);
console.log("Same Time?:",d1.getTime()===d2.getTime());

let deadlineDate =new Date("2026-01-31");
if(new Date()> deadlineDate){
console.log("Deadline crossed");
}else{
    console.log("You still have time ");
}

//If you want deadline till end of the day
const deadline= new Date(2026,0,31,23,59,59);
if(Date.now()>deadline.getTime()){
    console.log("Deadline crossed");
}
// const deadline = new Date(2026, 2, 10, 23, 59, 59); // 10 March 2026

// if (new Date() > deadline) {
//   console.log("Assignment late");
// } else {
//   console.log("You can submit");
// }

