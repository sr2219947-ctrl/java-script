window.document
document //
1.)** document object model is way to repersent a web page so that porgrams (like js) interact with it **

**Browser take your HTMl document and turns it  into the DOM. 

2.)html page first convert into dom so that  i cam implement js in web page.

3.)dom-> web page-> convert it into  object # benefits js knows now how to manipulate it ..
            DOM:document object model
            /
      |Html page  |  --> object <-- js apply 

4.)|Window| ->global object -> one of object is -> |document| ->html file ->1.) head & body 
                    |
            1.)meta 2.)meta.name 3.)title 
                                      |
                                     text node<- dom learning 
👉in body -> 1.) div 
                   |
                1.)<h1> 2.)<h2> 3.) <ul>
                     |
               1.)-> text node hello everyone
               2.) (attributes ) node   -> id="first"  
👉and every element is treated as  object                 
if <h1 id ="first" class="header"> Hello coder army</h1>
then it cnvert into object and like this 
const obj{
    id:"first",
    class:"header",
    innerHTML:"Hello coder army",
    tag:"h1"
}
if we want to change hello coder army ->hi sakshi -> 
 obj.innerHTMl="i am ok" ; if we have to chnage id ->obj.id="second" , and if we have to delete obj.class ,
if want to remove whole object then refer the object to null -> obj= null ; 

**//when we have to class we have to write className because class has been reserved for class person{ constructor} .. so to avoid errors we write className to access class from html .**
 
**//  A.) How to access by ID : .**
Method :document.getElementById(id)
description :Reterives a single element with specified id attribute ..
 
**// B.) Accessing by Class Name : .**
Method: document.getElementByClassName(className)
Description :Returns a live HTMLcollection of all elements with the specified class name.  
when const obj1= document.getElementByClassName("header1")
**obj1 -> HTML collection because multiple elements can have same className but id should be different .** 



