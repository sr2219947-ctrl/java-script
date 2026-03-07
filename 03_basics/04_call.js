//call back function 
function names(fun){
    console.log("Hello i am sakshi "); 
    fun();  
}
function greet(){
    console.log("I am call Back function ");
}
// inside function we pass anpther function as argument 
names(greet); // in name we  pass greet another fn as argument and then  fun call greet and both statments print .
/*names(greet) is called.

greet function is passed as an argument to names().

Inside names(), "Hello i am sakshi" is printed.

fun() is executed.

fun refers to greet, so greet() runs.

"I am call Back function" is printed.*/

function say(fun){
    console.log("Hello hi ");
    fun();
}
say(function greet(){
    console.log("namaskar ");
});
// another way 
function hey(fun){
    console.log("Hello sakshi");
    fun();
}
const welcome = function(){
    console.log("ho gya kam");
}
names(welcome);
// one more method to declare call back fn
function ji(fun){
    console.log("kr diya define");
    fun();
}
ji(function(){
    console.log("i say it is call back function ");
});
// arrow fn as call back function
function callback(fun){
console.log("Money is Imp");
fun();
}
callback(()=>{
    console.log("lo ji m wapas a gyi");
})
 function fetchData(){
    console.log("I am fetching the data ");
 }
 setInterval(fetchData,5000); // 5000ms=5sec