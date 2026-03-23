**Event Bubbling.** Important 🎯

Event Bubbling is when an event starts from the target element (child) and then moves upward to its parent elements.

👉 Flow: Child → Parent → Document

🧠 Visual Diagram (dig)
        document
           ↑
          body
           ↑
          div
           ↑
        button  👈 (click here)

**Code Example.**
document.querySelector("button").addEventListener("click", () => {
    console.log("Button Clicked");
});

document.querySelector("div").addEventListener("click", () => {
    console.log("Div Clicked");
});

document.body.addEventListener("click", () => {
    console.log("Body Clicked");
});


**Output.**
Button Clicked
Div Clicked
Body Clicked

**Stop Event Bubbling.**

document.querySelector("button").addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Button Clicked");
});

**Key Points.**
Default behavior in JS events
Flow: Child → Parent
Useful for event delegation
Use stopPropagation() to stop it

“Event happens at child first, then moves to parent step by step”

**Opposite is Event Capturing.**

