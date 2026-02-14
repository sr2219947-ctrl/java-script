function printFullName(firstName,LastName){
    return firstName+" "+LastName;
}
console.log(printFullName("Sakshi","Rana"));
//check whether the number is even or odd
function checkEvenOdd(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd"; 
    }
}
console.log(checkEvenOdd(7));
//Create a login function like yours
function login(username="Sakshi",password="12345"){
    return `Username: ${username} and password: ${password}`;
}
console.log(login());
//rest operator use ...to take multiple values into a single array
// why we use rest operator because we don't know how many values we will get in the function.
// normal function
function sum(a,b){
    return a+b;
}
console.log(sum(2,3));
//rest operator function 
function sumAll(...numbers){ 
    // "Take all given arguments and pack them inside one array."
    return numbers;
}
console.log(sumAll(9,9,9,9,1));
//Add unlimited numbers using rest operator 
function sumAll(...numbers){
    let total=0; //start from first index
    for(let i=0;i<numbers.length;i++){ // run lopp until last element
        total+=numbers[i]; //increased i by 1 every time 
    }
    return total;
}
console.log(sumAll(9,3,4,6,1));
console.log(sumAll(1,2,3,4,5,6,7,8,9,10));

function sumAll(...numbers){
    let total=0; //start from first index
    for(let num of numbers){ ///run lopp until last element
        total+=num; //increased i by 1 every time
    }
    return total;
}
console.log(sumAll(95,37,47,69,199));
//pass object and print details 
const student={
    name:"Sakshi",
    age:22,
    city:"karnal"
}
function printDetails(obj){
    console.log(`Name: ${obj.name},Age: ${obj.age},City: ${obj.city}`);
}
printDetails(student);
//max of array
function findMax(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findMax([3,5,7,2,8,1]));
//return third value from the array
function getThirdValue(arr){
    return arr[2];
}
console.log(getThirdValue([10,20,30,40,50]));
//cart toal Calculator
function cartTotal(...prices){
    let total=0;
    for(let price of prices){
        total+=price;
    }
    return `total price is Rs${total}`;
}
console.log(cartTotal(100,300,900));
//function to reverse a string 
function reverseString(str){
    let reversed="";
    for(let i=str.length-1;i>=0;i--){ //start from last character
        reversed+=str[i]; //go backward and add each character to reversed string
    }
    return reversed;
}
console.log(reverseString("kevin"));
//functions to find the smallest number in Array
function findSmallest(arr){
    let smallest =arr[0];
    for(let num of arr){
        if(num<smallest){
            smallest=num;
        }    }
        return smallest;
}
console.log(findSmallest([5,2,9,1,7]));
//function to check the palindrome string 
//Palindrome = same forward and backward
function isPalindrome(str){//create a function to takes stirng as input 
    let reversed=""; //empty string to store reversed version
    for(let i=str.length-1;i>=0;i--){//loop backwards
        reversed+=str[i];//add characters
        }
        return str===reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
//function to multiply all the numbers using rest operator 
function multiplyAll(...numbers){
    let result=1;
    for(let num of numbers){
        result *=num;
    }
    return result;
}
console.log( multiplyAll(2,3,4))
//handle object(user)
function handleObject(anyobject){
 console.log(`Username is ${anyobject.username}, price is ${anyobject.price}`);
}
//handleObject (user)
handleObject({
    username:"Sakshi",
    price:399
})
//anyobject is just a parameter so internally it becomes anyobject={username:"Sakshi",price:399}
//so it is parameter that holds the object passed into function 
const myNewArray=[200,400,100,600]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));

