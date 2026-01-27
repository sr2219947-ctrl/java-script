//Original Arrays (Before)
const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros =["Superman","flash","batman"];
console.log("Before marvel_heros:",marvel_heros)
console.log("Before dc_heros:",dc_heros)
//Merging arrays(after)
const all_new_heros=[...marvel_heros,...dc_heros]
console.log("after merginf:",all_new_heros)
 //Nested Array practice 
 const nested_array=[
    "thor",["Ironman","spiderman"],["superman",["flash","batman"]]
 ]
 console.log("Nested array:",nested_array)
 //flatten nested array
 const flat_array =nested_array.flat(Infinity)
 console.log("After flat(Infinity ):",flat_array)
 //========================================
 //MAP(Transform data)
 const hero_with_prefix= flat_array.map(hero =>"hero_"+hero)
console.log("Map() ouput:",hero_with_prefix)
//map() returns a new array
//does not change the original 