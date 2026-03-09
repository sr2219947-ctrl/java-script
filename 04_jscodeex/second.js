greet(); //memory allocation hogi to who greet and greet is fn
function greet(){ // greet :function code 
    console.log("Hello world"); // code execution 
}
//  meet(); // error   // but is is empty here initially 
let meet=function(){ // memory allocation hoga to meet and is is let then at first meet : tmeporal dead zone
    console.log("Hello second"); //code execution phase : function goes to meet then at last it executes 
}
meet();  // hello second  
yes(); //undefined error meet is not function 
var yes =function(){
    console.log("hi ");
}

/* let a=10                 memory ->  a: temporal dead zone then a=10  || code 
let b=20                           -> b:     ""              then b=20    
function add(num1,num2)             ->add:{}                              mem code 
                                                                         num 1 :10
                                                                         num2 :20 
let result=num1+num2;                                                    result:30
return result ;
}
var ans=add(a,b)                     ->ans : undefined 
console.log(ans);*/
//stack gec(gloabl execution context )