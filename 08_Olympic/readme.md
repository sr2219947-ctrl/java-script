// javascript logic 
1.) set target time -> Olympic 2028 opening date 
2.) get curent time by using Date.now() or new  Date(). T -> time seperator .getTime() converts it into milliseconds 

setInterval(()=>,1000)
runs the function every 1 second

**current time .**
const now =Date.now();

3.) find the difference between target time and current date . const distance =olympicDate - now;


4.) convert the difference milliseconds -> days , hours , minutes, seconds.
days = difference /(1000*60*60*24)
 1 sec=1000 ms , 1 min =60 *1000, 1 hour =60*60* 1000, 1 day =24*60*60*1000 


5.) use setInterval() to update every second.

6.) when time becomes 0 or negative -> Show "Olympics started" 

stops when finished 
if(distance<0){
    clearInterval(timer);
}
stops the time 

**Olympics 2028 will start on July 14, 2028 in Los Angeles during the 2028 Summer Olympics.**

days    = distance / day_ms
hours   = (distance % day_ms) / hour_ms
minutes = (distance % hour_ms) / minute_ms
seconds = (distance % minute_ms) / 1000

distance
│
├── days
│
├── remaining after days
│   └── hours
│
├── remaining after hours
│   └── minutes
│
└── remaining after minutes
    └── seconds


*CSS logic .* ------>
1.) The universal selector * resets default browser margin and padding and sets a common font for the whole page.

2.) box-sizing:--> border-box ensures padding and borders are included in the element’s width and height calculations.

3.) The body uses display: flex to apply Flexbox layout for easier alignment of elements.

4.) justify-content: center and align-items: center center the timer horizontally and vertically on the page.

5.) height: 100vh makes the layout take the full height of the screen.

6.) A linear-gradient background is used to create a colorful Olympic-themed design.
   
 7.)   The .container uses display: flex to arrange the countdown boxes in a horizontal row &The gap property creates equal spacing between the timer boxes.

8.) Each .box has a white background, padding, rounded corners, and a shadow to create a card-like appearance &text-align: center centers the numbers and labels inside each box.

9.) The countdown numbers (.box h2) use a large bold font to highlight the remaining time & labels (.box p) are smaller and lighter in color to maintain visual hierarchy.

10.) A hover effect using transform: scale() enlarges the boxes slightly when the mouse hovers over them.&#message element is styled with larger text and a gold color to display a special message when the countdown finishes.
