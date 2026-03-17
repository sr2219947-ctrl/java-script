Accessing by css selectore 
i.) single element 
Method : document.querySeletor(selector)
DEscription: Returns the first element matching the specified selector .
ii.) Multiple Elements:
Method: document.querySelectorAll(selector)
Description:Returns a static NodeList of all elements matching the specified CSS selector .

iii.) let obj=document.querySelectorAll('li')
Accessing by Tag Name 

Method :document.getElementByTagNmae(tagName)
Description : Returns a live HTMl Collection of all elements 

**let team =document.getElementByTagName('li')
team

//Accessing using  Relationships
i.) parent Node:
Method: element.parentnode or element.parentELement
Description : Access all parent  of an element 

ii.) child Node: 
MEthod:
const par=document.querySelector('ul');
console.log(par);
console.log(par.childNodes); it also counts the empty space as text.

element.childNodes(includes text nodes) or element.children(only element nodes )
Description: Access all child nodes of an element.


iii.) First child or last child 
Methods: element.firtchild, element.lastchild,
element.firstElementChild, element.lastElementChild

iv.) Sibling Nodes :
Methods: element.nextSibling, element.previousSibling
Element Siblings: element.nextElementSibling , element.previousElementSibling







