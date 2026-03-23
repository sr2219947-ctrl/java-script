const grandparent=document.getElementById('grandparent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');

// // event bubbling and event capturing
// child.addEventListener('click',()=>{
//     console.log("child Clicked");
// },true) //false --> event capturing 

// parent.addEventListener('click',()=>{
//     console.log("parent Clicked");
// },true)

// grandparent.addEventListener('click',()=>{
//     console.log("grandparent Clicked");
// },true)
//when child is true and grandparent is true  and parent is false
// event bubbling and event capturing
// child.addEventListener('click',()=>{
//     console.log("child Clicked");
// },true) //false --> event bubble  

// parent.addEventListener('click',()=>{
//     console.log("parent Clicked");
// },false) //true 

// grandparent.addEventListener('click',()=>{
//     console.log("grandparent Clicked");
// },true) //false 

//event targeting  ----> 
child.addEventListener('click',(event)=>{
    console.log("child Clicked");
    event.stopPropagation(); //only child propogate hoga 
    // console.log(event.target);
},false) //false --> event bubble  

parent.addEventListener('click',(event)=>{
    console.log("parent Clicked"); //if stop propagation not applied parent and grandparent shows but if so sp is applied then only parent shows 
    event.stopPropagation(); 
    // console.log(event.target);
    // console.log(event.currentTarget)
},false) //true 

grandparent.addEventListener('click',(event)=>{
    console.log("grandparent Clicked");
    // console.log(event.target);
},false) 
//event target tells who target trigger the , currenttarget tells who is current like if parent is current and trigger by child when currenttarget is shows parent 
//addEventListener(first_event,callback,capture);
//by default event capturing is false 

