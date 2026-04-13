//create a basic astrology app that gives a horoscope based on the user's zodiac sign and also provides a random compliment from a list of compliments.
  const zoadiacSigns = [
    "Capricorn",
    "Aquarius",
    "Pisces",   "Aries",
    "Taurus",
    "Gemini",   " Cancer",
    "Leo",
    "Virgo",   "Libra",
    "Scorpio",
    "Sagittarius"
  ];
  //Based on the date  size 30
  const compliments = [
  "You have a beautiful soul.",
  "Your smile can brighten anyone’s day.",
  "You are stronger than you think.",
  "You have an amazing sense of humor.",
  "You make people feel comfortable.",
  "Your positivity is contagious.",
  "You are incredibly thoughtful.",
  "You have a great sense of style.",
  "You inspire others around you.",
  "You are very creative.",
  "You have a kind heart.",
  "You are intelligent and wise.",
  "You bring out the best in people.",
  "You are full of great ideas.",
  "You have a calming presence.",
  "You are confident and brave.",
  "You make a difference in people’s lives.",
  "You are truly unique.",
  "You are a great listener.",
  "You have a beautiful personality.",
  "You are hardworking and dedicated.",
  "You light up every room you enter.",
  "You are full of potential.",
  "You have a positive mindset.",
  "You are caring and compassionate.",
  "You are naturally charming.",
  "You handle challenges gracefully.",
  "You are full of energy and enthusiasm.",
  "You are an amazing friend.",
  "You have a brilliant mind.",
  "You are simply awesome!"
];
// based on the month  //size 20
const victimLines = [
  "You always give your best to others, but rarely get the same in return.",
  "People often take your kindness for granted.",
  "You care deeply, but not everyone values it.",
  "You are always there for others, but feel alone when you need support.",
  "Your efforts go unnoticed more often than they should.",
  "You sacrifice a lot, yet people don’t always see it.",
  "You forgive easily, even when you shouldn’t have to.",
  "You give people chances, but they don’t always deserve them.",
  "You expect little, yet still get disappointed.",
  "You put others first, even when it hurts you.",
  "You stay strong for everyone, but who stays strong for you?",
  "You often hide your pain behind a smile.",
  "You understand others, but feel misunderstood yourself.",
  "You try to keep everyone happy, but forget about your own happiness.",
  "You trust people easily, even after being hurt before.",
  "You keep giving, even when your heart feels tired.",
  "You are loyal, but not everyone values loyalty like you do.",
  "You help others heal, but ignore your own wounds.",
  "You believe in people, even when they let you down.",
  "You deserve more appreciation than you actually receive."
];
// size 30  "Sakshi" "Rana" 6*4*1=24 %30 = 0 to 29 
const recommendations = [
  "Feed a street dog today.",
  "Help someone without expecting anything in return.",
  "Spend some time with your family.",
  "Take a break from social media for a day.",
  "Go for a morning walk and enjoy nature.",
  "Drink more water and take care of your health.",
  "Read a few pages of a good book.",
  "Practice gratitude and write down 3 things you're thankful for.",
  "Call a friend you haven’t talked to in a while.",
  "Do one act of kindness today.",
  "Wake up early and start your day positively.",
  "Avoid negative people and focus on your growth.",
  "Spend time doing something you love.",
  "Meditate for at least 10 minutes.",
  "Learn something new today.",
  "Organize your workspace or room.",
  "Forgive someone and free your mind.",
  "Smile more and spread positivity.",
  "Save a small amount of money today.",
  "Help someone in need if you can.",
  "Respect your time and avoid procrastination.",
  "Take care of your mental health.",
  "Exercise for at least 20 minutes.",
  "Stay honest in your actions.",
  "Listen more and speak less today.",
  "Try to stay calm in difficult situations.",
  "Eat healthy food instead of junk.",
  "Write down your goals and work towards them.",
  "Be patient — good things take time.",
  "Believe in yourself and your journey."
];
//size 20  
const futurePredictions = [
  "You will achieve great financial success in the future.",
  "You are destined to become a crorepati one day.",
  "A big opportunity is coming that will change your life.",
  "Your hard work will soon pay off in a big way.",
  "You will build a life others dream of.",
  "Success will follow you wherever you go.",
  "You are on the path to greatness.",
  "Your future is full of wealth and happiness.",
  "You will soon achieve something you once thought impossible.",
  "Your name will be known for success and excellence.",
  "You will create multiple sources of income.",
  "Your dreams are closer to reality than you think.",
  "You will rise above all challenges and shine.",
  "A powerful breakthrough is waiting for you.",
  "You will inspire many people with your journey.",
  "Your future holds luxury and comfort.",
  "You are meant to live a successful and abundant life.",
  "You will turn your ideas into reality.",
  "Great achievements are written in your destiny.",
  "You will soon enjoy the rewards of your efforts."
];
document.addEventListener("DOMContentLoaded", () => {
const form =document.getElementById("astroForm");
form.addEventListener("submit",(event)=>{
event.preventDefault();// Get user input

const  name=document.getElementById('name').value;
const surname=document.getElementById('surname').value;
// console.log(name,surname);
const day=Number(document.getElementById('day').value);
const month=Number(document.getElementById('month').value);
const year=Number(document.getElementById('year').value)    ;
const result=document.getElementById('result');
// result.innerHTML="Hello Everyone";
const first_message=`Hello ${name} ${surname}!Welcome to AstroInsight!`;
const zodaic_sign=`your zodiac sign is ${zoadiacSigns[month-1]}`;
const compliment=compliments[day-1];

let index=Math.floor(Math.random()*victimLines.length);
const victim_line=victimLines[index];

index =name.length*surname.length*year%recommendations.length;
const recommendation=recommendations[index];

index=day*month*year%futurePredictions.length;
const future_prediction=futurePredictions[index];

result.innerText=`${first_message}\n${zodaic_sign}\n${compliment}\n${victim_line}\n Our Recommendation: ${recommendation}\n Your Future Prediction: ${future_prediction}`;

});
});