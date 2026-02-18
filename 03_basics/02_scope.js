//block scope 
let a=300
if(true){
    let a=10 //if let is declare outside of any block {},it belongs to global 
    const b=20
}
console.log(a); //var function scope ,let (block scope ), const(block scope)
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

