const arr=[10,2,3,4,5]
const result =arr.map((num)=>num*num); // (num,index,arr)
console.log(result); // map can modify whole array and filter=>  filtre out 
// in forEach nothing going to store the in the const like const result= arr.forEach()
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
 //key value pair :key should be unique 
 const map =new Map();
 map.set(3,10);
 map.set("Sakshi",22);
 map.set(20,"Rana");
 map.set("Sakshi",20); //key is unique but value get updated 
//  console.log(map); 
map.delete(3);
console.log(map);
console.log(map.has("Sakshi"));
map.clear();
console.log(map.size);
 const map1=new Map([ [4,"sakshi"],[5,"riya"],[9,"siya"],[89,900]]);
//  console.log(map1);
//for of loop 
// for(let value of map1)
//     console.log(value);
for(let [key,value]of map1)
    console.log(key,value);
//object  keys: should be  as string or symbol 
//maps: keys: number, string object anything 
// map vs object 
// how js code works 



