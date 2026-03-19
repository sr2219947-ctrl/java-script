**Main Function** 
function generateQuotes() {

This function runs repeatedly.

It handles both:

Quote generation

Background color change 

<!-- 🎯 Selecting Element -->

const text = document.getElementById("quotes");

Targets the HTML element where the quote will be shown.

Uses DOM manipulation.
<!-- 
Random Color Logic -->
const colorIndex = Math.floor(Math.random() * colors.length);

Generates a random index.

Ensures a different color is selected each time.

Apply Background Color
document.body.style.backgroundColor = colors[colorIndex];

Changes the background color of the entire page dynamically.

🎲 Random Quote Logic
const index = Math.floor(Math.random() * quotes.length);

*********Math.random()  imp logic 

Generates a random decimal number between 0 and 1

Example: 0.23, 0.78, 0.45

Math.random() * quotes.length

Multiplies the random number by the total number of quotes

Gives a value between 0 and quotes.length - 1 (in decimal)

Math.floor()

Converts the decimal into a whole number (integer)

Example: 4.7 → 4, 2.9 → 2

Picks a random quote index from the array.********

📝 Display Quote
text.textContent = quotes[index];

Updates the text inside the selected HTML element.

Displays a new quote instantly.

⏱️ Auto Execution
setInterval(generateQuotes, 1000);

Calls the function every 1 second.

Automatically updates:

Quote

Background color

🧠 Concepts Used

Arrays

Functions

DOM Manipulation

Random Number Generation

Timing Functions (setInterval)