//block scope 
// let a=300
if(true){
    // let a=10 //if let is declare outside of any block {},it belongs to global 
    // const b=20
}
// console.log(a); //var function scope ,let (block scope ), const(block scope)
// console.log(b);
//nseted functions and lexical scope
function one(){
    const username="Sakshi"
    function two(){
        const website="youtube"
        console.log(username);
        // console.log(website);
    }
    two()
}
one()
//two() can access username because child can access parent
// one() cannot access website because parent cannot access child 
function one(){
    function two(){
        const website="youtube"
         console.log(website)// return website
    }
    return two()
}
console.log(one())


// let z=10;
// let b=20;
// let c=30;
// console.log(z,b,c); //global scope ,local scope(functional scope) and block scope 
 
// function greet(){
//     console.log(z,b,c);
// }
// greet();
 
console.log("-------functional scope()");
function greet(){
    let a= 10;
    let b=20;
    let c=30;
    console.log("Hello function ");
    console.log(a,b,c);
}
greet();
// console.log(a,); //does not accesed because a,b,c are function scope and we are trying to access them outside the function .

//block scope 
if(true){
    let z=10;
    var t=20;
    const d=30;
    // console.log(z,t,d);
}
console.log(t);
// let amount =20;
// if(true){
//     let amount =30;
//     console.log(amount);
// }
// console.log(amount);
// let amount =30; 

// console.log(c);
// const  c=30;

// console.log(b);
// var b=50; // undefined show 




