 let str1="hello i am learning js\n";
 let str2='js is a programming language\n';
 let str3=`aur btao kaise ho?`;
 console.log(str1,str2,str3);
  
 let s1="hello";
 let s2="world";
 console.log(s1+" "+s2);
 console.log(str3.length);
 console.log(str3.toUpperCase());
 console.log(str3.toLowerCase());
 
 console.log('"Hello ji');
 console.log('\'Hello ji\'');
 let comment ="this is comment \\n this is not a new line ";
 console.log(comment);

// let price=80;
// console.log(`price of fresh tomato is ${price}, get it fast`);
// console.log(` the sum of 2 and 3 is ${2+3}`);

// let  mountains=" himalayas are beautiful";
// console.log(mountains.indexOf("are"));
// console.log(mountains.lastIndexOf("are"));
// console.log(mountains.includes("beautiful"));
//  //0123456

let newstring= "helodon" ; // -7 -6 -5 -4 -3 -2 -1  & -0 not exist in string
console.log(newstring.slice(0,3)); //includes 0 but excludes 3
console.log(newstring.slice(-6,5)); //includes -6 but excludes 5
console.log(newstring.slice(-2,4)); //includes -2 but excludes 4 so it returns empty string why? beacuse they are in same order .
console.log(newstring.slice(2,-1));//includes 2 but excludes -4" 
console.log(newstring.substring(0,3)); //cannot use negative index in substring 


// string practice
let rawName ="   SakshiRana   ";
console.log("---TRIM()--");
console.log("Before trim:", `"${rawName}"`);
console.log("After trim :",`"${rawName.trim()}"`);
console.log("\n");
//  replace  and trim
let url ="https://www.canva.com/photo-editor/";
console.log("--Replace()--");
console.log("Original URL:", url);
console.log("replace('canva','canvas stdio'):",url.replace("canva","canvas stdio"));
console.log("replaceAll('canva','canvas stdio'):",url.replaceAll("canva","canvas stdio"));
console.log("includes'canva'):",url.includes("canva"));
console.log("\n");
//slice()-> 
let gamename="chess-sc-com";
console.log("--slice()--");
console.log("Original string:", gamename);
console.log("slice(0,4):",gamename.slice(0,6)); 
console.log("slice(5,6) :",gamename.slice(5,6));
console.log("slice(7,9):",gamename.slice(7,9));
console.log("slice(6,9):",gamename.slice(6,9));
console.log("slice(9) :", gamename.slice(9));
console.log("slice(-3):",gamename.slice(-3));
console.log("slice(-6,-4):",gamename.slice(-6,-4));
console.log("\n");
 //mixed examples
//user input with spaces 
let userinput ="  sakshi   ";
let cleanname=userinput.trim();
console.log("user input: ", `${userinput}`);
console.log("clean name :",`${cleanname}`);
//url formatting
let blogurl ="https://www.canva.com/photo-editor/";
let cleanurl =blogurl.replaceAll("canva","canvas stdio");
 
console.log("original blog url:", blogurl);
console.log("seo friendly url:",cleanurl);
 
// extract domain part
let domain= blogurl.slice(8,21);
console.log("extracted domain:", domain);


 

   