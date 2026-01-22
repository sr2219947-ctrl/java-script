// string practice
const name="Sakshi";
const repocount=15;
console.log(name+repocount +"value");

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
console.log(domain);


 

   