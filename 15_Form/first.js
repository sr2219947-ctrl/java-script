const form = document.querySelector('form');

// form.addEventListener('input',(event)=>{ //input
//     console.log(event.target.value);
// });

// form.addEventListener('focusin',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('click',(event)=>{
//     console.log("single click");
// })

// form.addEventListener('dblclick',(event)=>{
//     console.log("dbclick click");
// }) 

//Submit 


// form.addEventListener('submit',()=>{
//     console.log("form submitted");
// }) 

//reset
// form.addEventListener('reset',(event)=>{
//     // console.log(event.target.value);
//       console.log("form Reset");
// }) 

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    // const first=document.getElementById("first");
    // console.log("first.value");

    // const second=document.getElementById("second");
    // console.log("second.value");

    // const third=document.getElementById("third");
    // console.log("third.value");
     
     const data=new FormData(form);
     for(let [key,value] of data.entries())
        console.log(key,value);
    //  console.log(Array.from(data.keys()));
    //  console.log(Array.from(data.value()));
    


     // keys value 
 
    // const result=document.getElementById('result');
    // result.innerText=`${first.value}${second.value}is a good gurly`;
    // document.body.append(result);
 
}) 





