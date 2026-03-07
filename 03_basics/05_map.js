const arr=[10,2,3,4,5]
const result =arr.map((num)=>num*num); // (num,index,arr)
console.log(result); // map can modify whole array and filter=>  filtre out 
// in forEach nothing goind to store the in the const like const result= arr.forEach()
const index=[6,7,8,9]
const resul=index.map((num,index)=>num*index);
console.log(resul);
//only index 
const only=[8,9,7,6,5];
const res=only.map((num,index)=>index);
console.log(res); 
//cleaner way 
const y=[9,8,4,5,2];
const lt=y.map((_,index)=>index);
console.log(lt);

let say=[1,2,3,4,5,6];
const sol= say.filter((num)=>num%2==0).map((num)=>num*num).map((num)=>num/2);
console.log(sol); //chaining 1.) num is extracting as even by  using filter 
//then by map using we store it as square and return it 
 
