//<li>TS</li>
//create the element 
// function attach(content){
// const element=document.createElement('li');
// element.innerHTML=content; 

// const element2=document.createElement('li');
// element2.innerHTML=content+"v2.0"

// const parent=document.getElementById("root");
// parent.appendChild(element);  // append the TS **append child node
// parent.append(element,element2); // here we can attach multiple append(node1,node2,...) adds multiple Node as the last child of parent.
// };
// attach("TS");
// attach("React");
// attach("Node");

//how to create a text node 
// const element=document.createTextNode("Hello coder Army");
// const parent=document.getElementById("root");
// parent.append(element);

//3.) Create a Attribute nodes 
// const element=document.createAttribute("id");
// element.value="first";

//access to first list 
// const curr_list=document.querySelector('li');
// curr_list.setAttributeNode(element);

//access to second list 
// const parent=document.getElementById("root");
// console.log(parent.children[1].setAttributeNode(element));

//Accessing attributes of a element 
// const element= document.getElementById("root"); //getAttribue use to get th attribute 
// // console.log(element.getAttribute("style"));
// element.setAttribute("custom","20");
// element.setAttribute("class","Sakshi"); // set is used to set custom attributes or we have to change the attribute 

// element.removeAttribute("custom");

//*******Add Nodes to the Dom  *********/
// const parent=document.getElementById("root"); //like it is array 
// const element= document.createElement('li');
// element.innerHTML="YSL"; // data 
// parent.prepend(element); // at first 
// parent.append(element); //at last 
 
// ***Insert Before ***//
// const child2=parent.children[1];
// parent.insertBefore(element,child2); //insertBefore(newNode, referenceNode)
// parent.replaceChild(element,child2); //html replaced by YSL 

const parent=document.getElementById("root");
// parent.innerHTML="TS"; //only TS visible 
//but 
parent.innerHTML +="<li>TS</li>"; // to ts is added to the last 

const element=document.createElement("div");
element.innerHTML ="Hello Coder Army ";

// // parent.insertAdjacentElement("beforebegin",element);
// parent.insertAdjacentElement("afterend",element);
// parent.insertAdjacentElement("afterbegin",element);

//Deleting Node 
// const element2= document.querySelector('li').remove;
const element2=document.querySelector('li');
element2.remove();
//removeChild(node)











