const quotes = [
    "Dream big, work hard",
    "Believe in yourself",
    "Make it happen.",
    "Focus on the goal.",
    "Be fearless.",
    "Create your future.",
    "Stay consistent.",
    "Never give up.",
    "Think positive.",
    "Progress over perfection.",
    "Do it with passion.",
    "Start now.",
    "Keep moving forward.",
    "You are capable.",
    "Success is a journey.",
    "Stay strong.",
    "Work smart.",
    "Be your best self.",
    "Stay motivated.",

    "Push your limits.",
    "Rise and shine.",
    "Keep learning.",
    "Trust the process.",
    "Be unstoppable.",
    "Act with purpose.",
    "Stay humble.",
    "Chase your dreams.",
    "Win your day.",
    "Be disciplined.",
    "Create opportunities.",
    "Stay focused.",
    "Make it count.",
    "Never settle.",
    "Stay inspired.",
    "Be bold.",
    "Keep improving.",
    "Stay dedicated.",
    "Be positive.",
    "Work for it.",
    "Turn dreams into reality.",
    "Stay determined.",
    "Be consistent.",
    "Keep pushing.",
    "Success starts now.",
    "Make yourself proud.",
    "Be confident.",
    "Stay driven.",
    "Keep grinding.",
    "Win every day."
];
const colors = ["#ff6b6b", "#6bcB77", "#4d96ff", "#f7b801", "#9d4edd"];

// function generateQuotes() {
//     const text = document.getElementById("quotes");
// //now Change the background color in every  1  second 
//     const colorIndex = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[colorIndex];

//     const index = Math.floor(Math.random() * quotes.length);
//     text.textContent = quotes[index];
// }
// setInterval(generateQuotes, 2000);

//now we generate a button and by clicking it color and quote will be changed.  when click operation performed 
const button = document.querySelector('button');
button.addEventListener('click', (event) => {  //click , dblclick , mousemove, mouseover
    console.log(event.target);
    console.log(event.type);//which type (click or dbclick )
    console.log(event.clientX); //435,112,479 position how many pixels you click from left . 
    console.log(event.clientY);//viewpost se height 
    const text = document.getElementById("quotes");
    const colorIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];

    const index = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[index];
})
//<--keyboard Event -->
// document.addEventListener('keydown',(event)=>{ //keyup when you press, after releasing the button  ,keydown chnages when you press it 
// if(event.key==="Enter"){
//     // console.log(event.key);
// const text = document.getElementById("quotes");
//     const colorIndex = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[colorIndex];

//     const index = Math.floor(Math.random() * quotes.length);
//     text.textContent = quotes[index];
// }
// console.log(event.target);
// })



