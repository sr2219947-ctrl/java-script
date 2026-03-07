//reduce 
let z=[10,20,30,40,50];
// const result = arr.reduce((calback function, initiallization )
const end=z.reduce((acc,curr)=>{
    console.log(acc,curr);
    acc=acc+curr;
    return acc; //acc => 0 ,0+10 ,10+20, 10+20+30,10+20+30+40, 10+20+30+40+50
},0)
console.log(end); //curr= 10,20,30,40,5 
// one line 
// const arr=[20,50,78,49,44];
// const result=arr.reduce((acc,curr)=>acc+curr,0);
// console.log(result);
let arr=["Pineapple","Orange", "Apple","Avacado", "Grapes","Guava","Pineapple","Orange", "Apple"];
const result=arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
    acc[curr]++;
    else
        acc[curr]=1;
    return acc;
},{});
console.log(result); 
/*final result is in object form 
1.) it checks how many orange if there is not anyone in {} empty fn then it  prints 1, now it have 1 to it increment it by 1
orange:1
then orange =2 ir increment by 1 so on */
let obj ={
    name:"sakshi",
    age:18
}
let curr= "name"; 
console.log(obj.hasOwnProperty(curr)); // curr is variable and value insode it is name if it present it prints true 
//but it not readable 
 let y=["yellow","Black","pink","White","pink","White"];
 const res= y.reduce((acc,curr)=>{acc.hasOwnProperty(curr)? acc[curr]++ : acc[curr]=1;
    return acc;
 },{})
console.log(res); 


