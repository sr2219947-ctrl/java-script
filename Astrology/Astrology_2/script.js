/* ═══════════════════════════════════════════════════
   AstroInsight — script.js
   ═══════════════════════════════════════════════════ */

// ── Data ────────────────────────────────────────────

const zodiacSigns = [
  { name: "Capricorn",   sym: "♑", dates: "Dec 22 – Jan 19",  emoji: "🐐" },
  { name: "Aquarius",    sym: "♒", dates: "Jan 20 – Feb 18",  emoji: "🏺" },
  { name: "Pisces",      sym: "♓", dates: "Feb 19 – Mar 20",  emoji: "🐟" },
  { name: "Aries",       sym: "♈", dates: "Mar 21 – Apr 19",  emoji: "🔥" },
  { name: "Taurus",      sym: "♉", dates: "Apr 20 – May 20",  emoji: "🌿" },
  { name: "Gemini",      sym: "♊", dates: "May 21 – Jun 20",  emoji: "🌪️" },
  { name: "Cancer",      sym: "♋", dates: "Jun 21 – Jul 22",  emoji: "🌊" },
  { name: "Leo",         sym: "♌", dates: "Jul 23 – Aug 22",  emoji: "👑" },
  { name: "Virgo",       sym: "♍", dates: "Aug 23 – Sep 22",  emoji: "🌾" },
  { name: "Libra",       sym: "♎", dates: "Sep 23 – Oct 22",  emoji: "⚖️" },
  { name: "Scorpio",     sym: "♏", dates: "Oct 23 – Nov 21",  emoji: "🦂" },
  { name: "Sagittarius", sym: "♐", dates: "Nov 22 – Dec 21",  emoji: "🏹" }
];

const compliments = [
  "You have a beautiful soul.",
  "Your smile can brighten anyone's day.",
  "You are stronger than you think.",
  "You have an amazing sense of humour.",
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
  "You make a difference in people's lives.",
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

const victimLines = [
  "You always give your best to others, but rarely get the same in return.",
  "People often take your kindness for granted.",
  "You care deeply, but not everyone values it.",
  "You are always there for others, but feel alone when you need support.",
  "Your efforts go unnoticed more often than they should.",
  "You sacrifice a lot, yet people don't always see it.",
  "You forgive easily, even when you shouldn't have to.",
  "You give people chances, but they don't always deserve them.",
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

const recommendations = [
  "Feed a street dog today.",
  "Help someone without expecting anything in return.",
  "Spend some time with your family.",
  "Take a break from social media for a day.",
  "Go for a morning walk and enjoy nature.",
  "Drink more water and take care of your health.",
  "Read a few pages of a good book.",
  "Practice gratitude and write down 3 things you're thankful for.",
  "Call a friend you haven't talked to in a while.",
  "Do one act of kindness today.",
  "Wake up early and start your day positively.",
  "Avoid negative people and focus on your growth.",
  "Spend time doing something you love.",
  "Meditate for at least 10 minutes.",
  "Learn something new today.",
  "Organise your workspace or room.",
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

const futurePredictions = [
  "You will achieve great financial success in the future.",
  "You are destined to accomplish something truly remarkable one day.",
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
  "Your future holds comfort and abundance.",
  "You are meant to live a successful and fulfilling life.",
  "You will turn your ideas into reality.",
  "Great achievements are written in your destiny.",
  "You will soon enjoy the rewards of your efforts."
];

// ── Stars ────────────────────────────────────────────

function createStars() {
  const container = document.getElementById('stars');
  const count = 120;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.2 + 0.5;
    star.style.cssText = `
      width:${size}px;
      height:${size}px;
      top:${Math.random() * 100}%;
      left:${Math.random() * 100}%;
      --d:${(Math.random() * 3 + 2).toFixed(1)}s;
      --delay:-${(Math.random() * 5).toFixed(1)}s;
      --min-op:${(Math.random() * 0.15 + 0.05).toFixed(2)};
      --max-op:${(Math.random() * 0.5 + 0.4).toFixed(2)};
    `;
    container.appendChild(star);
  }
}

// ── Validation ───────────────────────────────────────

function showErr(msg) {
  const el = document.getElementById('errMsg');
  el.textContent = msg;
  el.classList.add('show');
}
function clearErr() {
  const el = document.getElementById('errMsg');
  el.textContent = '';
  el.classList.remove('show');
}

function validate(name, surname, day, month, year) {
  if (!name) return 'Please enter your first name.';
  if (!surname) return 'Please enter your last name.';
  if (!day || day < 1 || day > 31) return 'Enter a valid day (1–31).';
  if (!month || month < 1 || month > 12) return 'Enter a valid month (1–12).';
  if (!year || year < 1900 || year > 2025) return 'Enter a valid year (1900–2025).';
  return null;
}

// ── Main Logic ───────────────────────────────────────

function generateReading() {
  clearErr();

  const name    = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const day     = parseInt(document.getElementById('day').value);
  const month   = parseInt(document.getElementById('month').value);
  const year    = parseInt(document.getElementById('year').value);

  const err = validate(name, surname, day, month, year);
  if (err) { showErr(err); return; }

  // Pick values
  const sign         = zodiacSigns[month - 1];
  const compliment   = compliments[(day - 1) % compliments.length];
  const victimIdx    = Math.floor(Math.random() * victimLines.length);
  const recIdx       = (name.length * surname.length * year) % recommendations.length;
  const futureIdx    = (day * month * year) % futurePredictions.length;

  // Hero
  document.getElementById('zodiacSymbol').textContent = sign.sym;
  document.getElementById('greetingName').textContent = `Hello, ${name} ${surname}`;
  document.getElementById('zodiacName').textContent   = sign.name;
  document.getElementById('zodiacDates').textContent  = sign.dates;

  // Cards
  const cards = [
    {
      type:  'compliment',
      icon:  '✦',
      label: "Today's compliment",
      text:  compliment
    },
    {
      type:  'reflection',
      icon:  '◈',
      label: 'Cosmic reflection',
      text:  victimLines[victimIdx]
    },
    {
      type:  'tip',
      icon:  '◉',
      label: 'Cosmic tip',
      text:  recommendations[recIdx]
    },
    {
      type:  'future',
      icon:  '✧',
      label: 'Future forecast',
      text:  futurePredictions[futureIdx]
    }
  ];

  const grid = document.getElementById('resultGrid');
  grid.innerHTML = cards.map(c => `
    <div class="result-card card-${c.type}">
      <div class="card-header">
        <div class="card-icon">${c.icon}</div>
        <span class="card-label">${c.label}</span>
      </div>
      <p class="card-body">${c.text}</p>
    </div>
  `).join('');

  // Show result, hide form
  document.getElementById('formSection').classList.add('hidden');
  document.getElementById('resultSection').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetForm() {
  ['name', 'surname', 'day', 'month', 'year'].forEach(id => {
    document.getElementById(id).value = '';
  });
  clearErr();
  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('formSection').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Event Listeners ──────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  createStars();
  document.getElementById('submitBtn').addEventListener('click', generateReading);
  document.getElementById('resetBtn').addEventListener('click', resetForm);

  // Allow Enter key to submit
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !document.getElementById('formSection').classList.contains('hidden')) {
      generateReading();
    }
  });
});
