//number in java script
const score=400;
console.log("Score:",score);
// ouput:400
// number object 
const balance= new Number(100);
console.log("Balance:",balance);
 
//convert the number to string
console.log("to String:", balance.toString());
//output:"100"
 
//length of the number after converting to string
console.log("string length:", balance.toString().length);
//output:3

//fixed decimal points
console.log("fixed(2):",balance.toFixed(2));

//decimal and precision
const othernumber=123.8966;
 
//precision means total digits
console.log("precision(4):",othernumber.toPrecision(4));
// ouput:123.9
console.log("precision(3):",othernumber.toPrecision(3));
//124
console.log("precision(5):",othernumber.toPrecision(5));
//output: 123.90

// large numbers and locale
const bigNumber= 1000000;
///default locale(US)
console.log("US Format:",bigNumber.toLocaleString());
//output:1,000,000

//indian number system
console.log("Indian format:",bigNumber.toLocaleString('en-IN'));
//10,00,000

//math object Basics
console.log("Abs:",Math.abs(-4));

console.log("Round:",Math.round(4.6));
//5
console.log("Ceil:",Math.ceil(4.2));
//5
console.log("Floor:", Math.floor(4.9));
//4
console.log("Min:",Math.min(4,3,6,8));
//3
console.log("Max:",Math.max(4,3,6,8));
//8
 //power and root
 console.log("Power:",Math.pow(2,3));
 //8
 console.log("Square root:",Math.sqrt(25));
 //5

 //random numbers
//Random numbers between 0 ands 1
console.log("Random:",Math.random());
 //random between 1 and 10
 console.log("Random between 1-10:",Math.floor(Math.random()*10)+1);
 //random between 10 and 20
 const min =10;
 const max=20;
 const randomInRange=Math.floor(Math.random()*(max-min+1))+min;
 console.log("Random 10-20:", randomInRange);






