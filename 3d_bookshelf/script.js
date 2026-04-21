const CATEGORIES = {
  "All":        { color:"#c9963a", dot:"#c9963a" },
  "Technology": { color:"#5a9ad0", dot:"#4a80b0" },
  "AI & ML":    { color:"#aa5aee", dot:"#8a3acc" },
  "Sci-Fi":     { color:"#4aaa6a", dot:"#3a8a52" },
  "Science":    { color:"#e09030", dot:"#c07020" },
  "Philosophy": { color:"#cc5050", dot:"#aa3030" },
  "Notes":      { color:"#5a8a5a", dot:"#3a6a3a" }
};

const BOOKS = [
  // ── Technology ──
  { id:1, cat:"Technology", shelf:0, icon:"💻", name:"Rise of Computing",
    tagline:"From room-sized machines to pocket supercomputers in 75 years.",
    overview:"Computing began with massive vacuum-tube machines in the 1940s. Transistors replaced tubes, microchips replaced transistors, and Moore's Law described how chip density doubled roughly every two years — a trend that shaped the modern world. Today a smartphone holds billions of transistors and more processing power than all of NASA during the Moon landings.",
    chips:["Transistors","Moore's Law","Microprocessors","Von Neumann","GPU"],
    insight:"The first hard drive (1956) weighed over one ton and stored just 5 MB of data. A modern microSD card smaller than your fingernail stores 1 million times more.",
    related:["AI & ML","Science"],
    link:"https://www.geeksforgeeks.org/computer-science-fundamentals/history-of-computers/",
    color:"#1a3a5a", light:"#2a5a8a", spine:"#3a70b0", w:28, h:118 },

  { id:2, cat:"Technology", shelf:0, icon:"🌐", name:"How the Internet Works",
    tagline:"A global mesh of wires, light, and shared protocols.",
    overview:"The internet is a network of networks bound by the TCP/IP protocol suite. Data is broken into packets, routed through dozens of hops via BGP, and reassembled at the destination. Undersea fiber-optic cables carry 95% of all intercontinental traffic, moving signals at nearly the speed of light. DNS translates human-readable names into numerical IP addresses billions of times every second.",
    chips:["TCP/IP","DNS","BGP","HTTP/3","Fiber Optics"],
    insight:"There are over 400 active undersea fiber-optic cables stretching more than 1.3 million kilometers — enough to wrap around Earth 32 times.",
    related:["Technology","AI & ML"],
    color:"#1a3a2a", light:"#2a5a3a", spine:"#3a8050", w:26, h:130 },

  { id:3, cat:"Technology", shelf:0, icon:"🔐", name:"Cybersecurity Decoded",
    tagline:"The invisible war fought in bits and bytes every second.",
    overview:"Cybersecurity protects systems, networks, and data from digital attacks. From Caesar's cipher to AES-256, humanity has always needed to keep secrets. Today's threat landscape includes ransomware, nation-state hacking, zero-day exploits, and social engineering — costing the global economy over $8 trillion annually. Defence relies on encryption, authentication, patching, and human vigilance.",
    chips:["Encryption","Zero-Day","Ransomware","2FA","Firewall"],
    insight:"The most common password worldwide is still '123456' — used in more than 3 million accounts exposed in breaches every single year.",
    related:["Technology","AI & ML"],
    color:"#2a1a0a", light:"#4a3010", spine:"#7a5020", w:30, h:105 },

  { id:4, cat:"Technology", shelf:0, icon:"☁️", name:"Cloud Computing",
    tagline:"Infinite compute, rented by the second.",
    overview:"Cloud computing delivers processing power, storage, and applications over the internet on demand. AWS, Azure, and Google Cloud host billions of workloads globally. The pay-per-use model replaced costly physical data centers, democratising access to enterprise-grade infrastructure for everyone from startups to governments. Serverless, containers, and Kubernetes define the modern cloud-native stack.",
    chips:["AWS","Kubernetes","Serverless","Microservices","CDN"],
    insight:"Netflix streams to 238 million subscribers worldwide using AWS infrastructure — they process 10 billion events per day just for their recommendation engine.",
    related:["Technology","AI & ML"],
    color:"#0a1a3a", light:"#1a3060", spine:"#2a5090", w:24, h:122 },

  // ── AI & ML ──
  { id:5, cat:"AI & ML", shelf:1, icon:"🤖", name:"Minds of Silicon",
    tagline:"Teaching machines to learn, reason, and create.",
    overview:"Artificial Intelligence started as rule-based systems in the 1950s. The deep learning revolution of the 2010s — powered by neural networks, large datasets, and GPUs — unlocked breakthroughs in vision, language, and games. Large Language Models (LLMs) learn statistical patterns across hundreds of billions of text tokens to generate fluent, contextual responses that can write, code, and reason.",
    chips:["Neural Networks","Transformers","Backprop","RL","LLMs"],
    insight:"GPT-4 was trained on roughly 1 trillion words. Reading that amount aloud at normal pace would take a single person over 31,000 years.",
    related:["Technology","Science"],
    color:"#2a0a3a", light:"#5a1a7a", spine:"#8a30b0", w:28, h:126 },

  { id:6, cat:"AI & ML", shelf:1, icon:"🧠", name:"How Neural Nets Learn",
    tagline:"Billions of tiny adjustments, one gradient at a time.",
    overview:"A neural network transforms inputs through weighted layers and nonlinear activation functions. Training uses gradient descent: the model predicts, measures error via a loss function, then backpropagates gradients to nudge every weight in a direction that reduces the error. Repeat this millions of times across diverse data, and the network learns to generalise patterns it was never explicitly programmed with.",
    chips:["Gradient Descent","Backprop","Loss Function","Attention","Dropout"],
    insight:"GPT-3 has 175 billion adjustable parameters. If each parameter were a person, you would need 22 planet Earths to fit them all standing shoulder-to-shoulder.",
    related:["AI & ML","Science"],
    color:"#1a0a2a", light:"#4a1a6a", spine:"#7a20a0", w:26, h:140 },

  { id:7, cat:"AI & ML", shelf:1, icon:"👁️", name:"Computer Vision",
    tagline:"Giving machines eyes to understand the world.",
    overview:"Computer vision enables machines to interpret images and video at scale. Convolutional Neural Networks learn hierarchical features — edges, then textures, then shapes, then objects. YOLO detects multiple objects in real-time. Modern vision models power autonomous vehicles, medical imaging diagnosis, facial recognition, and satellite analysis — routinely surpassing human performance on standard benchmarks.",
    chips:["CNN","YOLO","ResNet","GAN","Object Detection"],
    insight:"The ImageNet competition dropped from 28% error in 2010 to 2.25% by 2017 — beating the estimated 5% human error rate by a wide margin.",
    related:["AI & ML","Technology"],
    color:"#3a0a2a", light:"#6a1a4a", spine:"#a02060", w:30, h:112 },

  { id:8, cat:"AI & ML", shelf:1, icon:"💬", name:"Natural Language Processing",
    tagline:"From bag-of-words to billion-parameter language models.",
    overview:"NLP enables computers to understand and generate human language. Early approaches used rule-based systems and n-gram statistics. Word2Vec (2013) introduced dense semantic word embeddings. The Transformer architecture (2017) and the self-attention mechanism revolutionised the field, enabling BERT, GPT, and T5 — models that read, summarise, translate, and write with increasing fluency.",
    chips:["Tokenization","Embeddings","BERT","GPT","Attention"],
    insight:"Google Translate handles approximately 143 billion words every day — equivalent to every person on Earth writing 18 words each day.",
    related:["AI & ML","Technology"],
    color:"#1a1a3a", light:"#3a3a7a", spine:"#5060b0", w:25, h:134 },

  // ── Sci-Fi ──
  { id:9, cat:"Sci-Fi", shelf:2, icon:"🚀", name:"Imagining Tomorrow",
    tagline:"Fiction that became a blueprint for the future.",
    overview:"Science fiction is humanity's sandbox for testing ideas before technology catches up. Jules Verne described submarines and moon rockets a century before they existed. Arthur C. Clarke described the geostationary communications satellite in 1945. Today, neural interfaces, autonomous vehicles, and commercial space tourism directly mirror concepts that lived in science fiction for decades.",
    chips:["Dystopia","Space Opera","Cyberpunk","Hard SF","Transhumanism"],
    insight:"William Gibson coined the word 'cyberspace' in 1984 while writing Neuromancer on a manual typewriter — he had never used a personal computer.",
    related:["Philosophy","Technology"],
    color:"#0a2a1a", light:"#1a4a2a", spine:"#2a7040", w:28, h:118 },

  { id:10, cat:"Sci-Fi", shelf:2, icon:"⚡", name:"Cyberpunk Worlds",
    tagline:"High tech, low life — the neon-soaked future of inequality.",
    overview:"Cyberpunk envisions worlds where advanced technology coexists with social collapse and corporate megapower. Pioneered by Philip K. Dick and defined by William Gibson's Neuromancer, the genre explores identity, surveillance, transhumanism, and the commodification of consciousness. Blade Runner, Ghost in the Shell, and Snow Crash are its canonical texts — and its warnings feel ever more prescient.",
    chips:["Megacorp","Augmentation","Hackers","Noir","Surveillance"],
    insight:"Blade Runner (1982) is set in November 2019 Los Angeles. The filmmakers expected replicants and flying cars — we got algorithmic feeds and surveillance capitalism.",
    related:["Sci-Fi","Philosophy"],
    color:"#2a0a08", light:"#5a1a10", spine:"#9a2a18", w:26, h:130 },
    

  { id:11, cat:"Sci-Fi", shelf:2, icon:"🌌", name:"The Space Age Dream",
    tagline:"From Sputnik to SpaceX — humanity reaching for the stars.",
    overview:"The Space Age ignited on October 4, 1957, when Sputnik 1 beeped from orbit. Within 12 years, humans stood on the Moon. The 1970s brought Skylab, the 1980s the Space Shuttle, and the 1990s the International Space Station. Today private companies like SpaceX are rewriting the economics of orbit with reusable rockets — and the dream of Mars grows closer by the year.",
    chips:["Sputnik","Apollo","ISS","Falcon 9","Starship"],
    insight:"Voyager 1, launched in 1977, is now over 24 billion kilometres away — the farthest human-made object ever built — and still faithfully transmitting data home.",
    related:["Science","Sci-Fi"],
    color:"#0a0a2a", light:"#1a1a4a", spine:"#2a2a7a", w:24, h:142 },

  { id:12, cat:"Sci-Fi", shelf:2, icon:"🧬", name:"Genetic Futures",
    tagline:"Editing the code of life — one base pair at a time.",
    overview:"CRISPR-Cas9 allows precise, programmable editing of DNA sequences. In 2018, the first CRISPR-edited babies were born in China in a controversial experiment. Scientists are using gene drives to eradicate malaria-carrying mosquitoes, growing replacement organs in labs, and developing gene therapies for inherited diseases. The boundary between science fiction and genetic medicine has never been thinner.",
    chips:["CRISPR","Gene Drive","Synthetic Bio","mRNA","Bioethics"],
    insight:"The human genome contains 3 billion base pairs. Printing the sequence at 1,000 characters per page would fill 3,000 books of 1,000 pages each.",
    related:["Science","Philosophy"],
    color:"#0a2a0a", light:"#1a4a1a", spine:"#2a7020", w:30, h:120 },

  // ── Science ──
  { id:13, cat:"Science", shelf:3, icon:"⚛️", name:"Quantum Mechanics",
    tagline:"Where reality gets strange and probability rules.",
    overview:"Quantum mechanics describes physical behavior at subatomic scales. Particles exist in superposition — multiple states simultaneously — until measured. Quantum entanglement links particles across any distance instantaneously. These strange principles underpin transistors, lasers, and MRI machines — and promise quantum computers that could factorise large numbers and simulate complex molecules.",
    chips:["Superposition","Entanglement","Wave Function","Qubits","Decoherence"],
    insight:"Quantum particles are so sensitive to observation that measuring them changes them — meaning the act of knowing something about reality physically alters that reality.",
    related:["Science","Technology"],
    color:"#2a1a0a", light:"#5a3010", spine:"#8a5020", w:28, h:128 },

  { id:14, cat:"Science", shelf:3, icon:"🌍", name:"Climate Science",
    tagline:"The physics of a warming planet — and what we can do.",
    overview:"Earth's climate is driven by solar radiation, greenhouse gases, ocean heat transport, and surface reflectivity. Atmospheric CO₂ has risen from 280 ppm pre-industrial to over 422 ppm today — the highest level in 3 million years. The IPCC projects 1.5 to 4°C of warming by 2100 depending on emissions pathways. Renewable energy, electrification, carbon capture, and behaviour change are the primary levers.",
    chips:["CO₂","Greenhouse Effect","IPCC","Tipping Points","Net Zero"],
    insight:"97% of actively publishing climate scientists agree that current global warming is primarily human-caused — one of the strongest scientific consensuses in history.",
    related:["Science","Philosophy"],
    color:"#1a2a0a", light:"#3a4a10", spine:"#5a7018", w:26, h:115 },

  { id:15, cat:"Science", shelf:3, icon:"🔬", name:"The Human Microbiome",
    tagline:"38 trillion microbes that shape your body and mind.",
    overview:"The human microbiome comprises roughly 38 trillion microbial cells — approximately equal in number to the body's own cells. The gut microbiome influences digestion, immune function, mood, and even personality through the gut-brain axis. Dysbiosis (imbalance) is linked to obesity, depression, IBD, and autoimmune conditions. Fecal transplants have shown remarkable effectiveness for treating recurrent C. difficile infection.",
    chips:["Gut Flora","Probiotics","Dysbiosis","FMT","Immunity"],
    insight:"You share 99.9% of your DNA with every other human on Earth — but you likely share only 10 to 20% of your gut microbiome species with your closest relatives.",
    related:["Science","Philosophy"],
    color:"#2a0a0a", light:"#5a1a10", spine:"#8a2020", w:30, h:135 },

  // ── Philosophy ──
  { id:16, cat:"Philosophy", shelf:4, icon:"🧩", name:"Ethics of AI",
    tagline:"Who is responsible when the algorithm is wrong?",
    overview:"As AI systems make consequential decisions — medical diagnoses, loan approvals, parole recommendations, and hiring — questions of fairness, accountability, and transparency become urgent social and legal issues. Alignment research asks how to build AI that reliably pursues human values. Bias embedded in training data can entrench discrimination at scale. The trolley problem has become a literal engineering requirement.",
    chips:["Alignment","Fairness","Explainability","Bias","Value Loading"],
    insight:"Amazon scrapped its AI hiring tool in 2018 after discovering it had learned to systematically penalise CVs containing the word 'women's' — encoding historical bias at machine speed.",
    related:["AI & ML","Philosophy"],
    color:"#3a0a0a", light:"#7a1a1a", spine:"#aa2a2a", w:26, h:126 },

  { id:17, cat:"Philosophy", shelf:4, icon:"🪞", name:"Consciousness & Mind",
    tagline:"What is it like to be you — or an AI?",
    overview:"Consciousness remains one of the deepest unsolved problems in both philosophy and neuroscience. David Chalmers' 'hard problem' asks why any physical process gives rise to subjective experience at all. Physicalism, dualism, panpsychism, and functionalism offer competing answers. As AI systems become more sophisticated, questions about machine sentience, moral status, and the nature of understanding grow increasingly urgent and practically consequential.",
    chips:["Hard Problem","Qualia","Functionalism","IIT","Turing Test"],
    insight:"Thomas Nagel's 1974 paper 'What Is It Like to Be a Bat?' remains the clearest articulation of why consciousness may be impossible to fully explain in purely physical terms.",
    related:["Philosophy","AI & ML"],
    color:"#2a0a1a", light:"#5a103a", spine:"#8a1a5a", w:28, h:118 },
    {
  id:19,
  cat:"Philosophy",
  shelf:4,
  icon:"🍃",
  name:"The Art of Letting Go",
  tagline:"Release what you cannot control and find inner peace.",
  overview:"Letting go is not about giving up, but about accepting reality and freeing yourself from emotional burdens. Rooted in mindfulness and philosophical traditions, this concept teaches how attachment causes suffering and how awareness brings peace. By learning to release control, expectations, and past regrets, one can live more fully in the present moment.",
  chips:["Detachment","Mindfulness","Acceptance","Emotional Freedom","Inner Peace"],
  insight:"The more tightly you hold on to something, the more it controls you. True strength lies in the ability to let go.",
  related:["Philosophy","Notes"],
  link:"https://6319de2c787f6367e66a12713cdab094.cdn.bubble.io/f1735793339589x391509127595013570/The%20Art%20of%20Letting%20Go%20-%20Miles%20Niska.pdf",   // for reading
  buy:"https://www.flipkart.com/art-letting-go-go-move-beyond-hurt-find-emotional-freedom-restore-your-inner-peace/p/itm9f25dc9108773?pid=9780143465065&lid=LSTBOK9780143465065D6NPQT&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc",           // for purchase
  color:"#1a2a1a",
  light:"#3a5a3a",
  spine:"#5a8a5a",
  w:28,
  h:120
},

  // ── Notes ──
  { id:18, cat:"Notes", shelf:4, icon:"📝", name:"My Study Notes",
    tagline:"Your personal space for ideas, connections, and questions.",
    overview:"Use this space to capture your own insights as you explore the library. What patterns do you notice across technology, AI, and science? Where do the ethical questions from philosophy illuminate the technical topics? Where does science fiction anticipate scientific reality? Great thinkers keep notebooks because writing forces clarity. The deepest ideas come from unexpected connections between distant fields.",
    chips:["Your Ideas","Connections","Questions","Insights","Patterns"],
    insight:"Richard Feynman kept meticulous working notebooks. When asked what was in them, he replied: 'This IS my thinking. I don't think in my head — I think on paper.'",
    related:["All topics"],
    color:"#0a2a10", light:"#1a4a20", spine:"#2a7030", w:26, h:108 }
];

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
let activeFilter = "All";
let currentView  = "shelf";
let currentBook  = null;
let cIdx         = 0;
let readBooks    = new Set();
let lightMode    = false;

/* ══════════════════════════════════════════
   UTILITIES
══════════════════════════════════════════ */
function showToast(icon, msg) {
  const t = document.getElementById("toast");
  document.getElementById("toast-icon").textContent = icon;
  document.getElementById("toast-msg").textContent  = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

function toggleTheme() {
  lightMode = !lightMode;
  if (lightMode) {
    document.body.style.filter = "invert(1) hue-rotate(180deg) brightness(1.1) contrast(1.15)";
    document.documentElement.style.fontWeight = "600";
  } else {
    document.body.style.filter = "";
    document.documentElement.style.fontWeight = "400";
  }
  document.getElementById("theme-btn").textContent = lightMode ? "🌙 Dark Mode" : "☀ Light Mode";
}

/* ══════════════════════════════════════════
   SHELF VIEW
══════════════════════════════════════════ */
const SHELF_LABELS = [
  "Row I — Technology",
  "Row II — AI & Machine Learning",
  "Row III — Science Fiction",
  "Row IV — Natural Sciences",
  "Row V — Philosophy & Notes"
];

const SHELF_IDS = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15],
  [16,17,18,19]
];


function buildShelfView() {
  const container = document.getElementById("shelf-view");
  container.innerHTML = "";

  const filteredIds = activeFilter === "All"
    ? null
    : new Set(BOOKS.filter(b => b.cat === activeFilter).map(b => b.id));

  SHELF_IDS.forEach((ids, si) => {
    const row = document.createElement("div");
    row.className = "shelf-row";


    const label = document.createElement("div");
    label.className = "shelf-row-label";
    label.textContent = SHELF_LABELS[si];
    row.appendChild(label);

    const surface = document.createElement("div");
    surface.className = "shelf-surface";

    const booksRow = document.createElement("div");
    booksRow.className = "shelf-books";

    ids.forEach(id => {
      const book = BOOKS.find(b => b.id === id);
      if (!book) return;

      const dimmed = filteredIds && !filteredIds.has(id);
      const isRead = readBooks.has(id);

      const el = document.createElement("div");
      el.className = "book" + (dimmed ? " dimmed" : "") + (isRead ? " is-read" : "");
      el.id = "book-" + id;

      el.innerHTML = `
        <div class="book-glow"></div>
        <div class="book-body" style="width:${book.w}px;height:${book.h}px;background:linear-gradient(160deg,${book.color},${book.light});">
          <div class="book-spine-groove"></div>
          <div class="book-spine-groove2"></div>
          <div class="book-emboss"></div>
          <div class="book-emboss2"></div>
          <div class="book-title-spine">${book.name}</div>
          <div class="book-read-badge"></div>
        </div>
        <div class="book-tooltip">
          <strong>${book.icon} ${book.name}</strong>
          <span>${book.cat}</span>
        </div>`;

      el.onclick = () => openReader(book);
      booksRow.appendChild(el);
    });

    // Decorative items
    const deco = document.createElement("div");
    deco.className = "shelf-deco";
    deco.innerHTML = si % 2 === 0
      ? `<div class="deco-candle"></div>`
      : `<span class="deco-globe">🌍</span>`;
    booksRow.appendChild(deco);

    surface.appendChild(booksRow);

    const plank = document.createElement("div");
    plank.className = "shelf-plank";
    surface.appendChild(plank);

    row.appendChild(surface);
    container.appendChild(row);
  });
}

/* ══════════════════════════════════════════
   CAROUSEL VIEW
══════════════════════════════════════════ */
/* ══════════════════════════════════════════
   CAROUSEL VIEW
══════════════════════════════════════════ */
let cFiltered = [];
let cAutoPlay = true;
let cAutoTimer = null;

function buildCarousel() {
  cFiltered = activeFilter === "All"
    ? BOOKS.slice(0, 9)
    : BOOKS.filter(b => b.cat === activeFilter).slice(0, 9);

  const ring  = document.getElementById("c-ring");
  const dots  = document.getElementById("c-dots");
  const thumbs = document.getElementById("c-thumbs");
  ring.innerHTML = "";
  dots.innerHTML = "";
  thumbs.innerHTML = "";

  const n = cFiltered.length;
  const radius = 200;

  cFiltered.forEach((book, i) => {
    const angle = (360 / n) * i;
    const card = document.createElement("div");
    card.className = "c-card";
    card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    card.style.background = `linear-gradient(160deg,${book.color},${book.light})`;
    card.innerHTML = `
      <div class="c-card-spine" style="background:${book.spine}"></div>
      <div class="c-card-meta">
        <span class="c-card-icon">${book.icon}</span>
        <div class="c-card-cat">${book.cat}</div>
        <div class="c-card-name">${book.name}</div>
        <span class="c-card-tag" style="background:rgba(0,0,0,0.2)">${book.chips[0]}</span>
      </div>`;
    card.onclick = () => { rotateCarousel(i); openReader(book); };
    ring.appendChild(card);

    const dot = document.createElement("button");
    dot.className = "c-dot" + (i === cIdx ? " on" : "");
    dot.onclick = () => rotateCarousel(i);
    dots.appendChild(dot);

    const thumb = document.createElement("div");
    thumb.className = "c-thumb" + (i === cIdx ? " active" : "");
    thumb.id = "c-thumb-" + i;
    thumb.style.cssText = `background:linear-gradient(160deg,${book.color},${book.light})`;
    thumb.innerHTML = `<div class="c-thumb-spine" style="background:${book.spine}"></div><span class="c-thumb-icon">${book.icon}</span>`;
    thumb.onclick = () => rotateCarousel(i);
    thumbs.appendChild(thumb);
  });

  rotateCarousel(cIdx, false);
  resetCarouselAuto();
}

function rotateCarousel(idx, animate = true) {
  cIdx = ((idx % cFiltered.length) + cFiltered.length) % cFiltered.length;
  const step = 360 / cFiltered.length;
  const ring = document.getElementById("c-ring");
  if (!animate) ring.style.transition = "none";
  ring.style.transform = `rotateY(${-cIdx * step}deg)`;
  if (!animate) setTimeout(() => ring.style.transition = "", 50);

  document.querySelectorAll(".c-dot").forEach((d,i) => {
    d.className = "c-dot" + (i === cIdx ? " on" : "");
  });
  document.querySelectorAll(".c-thumb").forEach((t,i) => {
    t.className = "c-thumb" + (i === cIdx ? " active" : "");
  });

  updateCarouselInfo();
  resetCarouselAuto();
}

function updateCarouselInfo() {
  const book = cFiltered[cIdx];
  document.getElementById("c-info-name").textContent = book.name;
  document.getElementById("c-info-cat").textContent = book.cat;
}

function resetCarouselAuto() {
  clearInterval(cAutoTimer);
  if (cAutoPlay) cAutoTimer = setInterval(() => rotateCarousel(cIdx + 1), 800);
}

function toggleCarouselAuto() {
  cAutoPlay = !cAutoPlay;
  const btn = document.getElementById("c-auto-btn");
  btn.className = "c-auto-btn" + (cAutoPlay ? " on" : "");
  btn.textContent = cAutoPlay ? "\u23F8 Pause" : "\u25B6 Auto";
  resetCarouselAuto();
}

document.getElementById("c-prev").onclick = () => rotateCarousel(cIdx - 1);
document.getElementById("c-next").onclick = () => rotateCarousel(cIdx + 1);

/* ══════════════════════════════════════════
   FILTERS
══════════════════════════════════════════ */
function buildFilters() {
  const row = document.getElementById("filter-row");
  // Keep the label, rebuild buttons
  row.querySelectorAll(".filter-btn").forEach(b => b.remove());

  Object.entries(CATEGORIES).forEach(([name, meta]) => {
    const count = name === "All"
      ? BOOKS.length
      : BOOKS.filter(b => b.cat === name).length;

    const btn = document.createElement("button");
    btn.className = "filter-btn" + (name === activeFilter ? " active" : "");
    btn.innerHTML = `<span class="filter-dot" style="background:${meta.dot}"></span>${name}<span class="filter-count">${count}</span>`;
    btn.onclick = () => {
      activeFilter = name;
      cIdx = 0;
      buildFilters();
      buildShelfView();
      buildCarousel();
    };
    row.appendChild(btn);
  });
}

/* ══════════════════════════════════════════
   VIEW TOGGLE
══════════════════════════════════════════ */
function setView(v) {
  currentView = v;
  document.getElementById("shelf-view").style.display    = v === "shelf" ? "" : "none";
  const cv = document.getElementById("carousel-view");
  cv.classList.toggle("visible", v === "carousel");
  document.getElementById("btn-shelf").classList.toggle("active",    v === "shelf");
  document.getElementById("btn-carousel").classList.toggle("active", v === "carousel");
  if (v === "carousel") {
    buildCarousel();
    cAutoPlay = true;
    resetCarouselAuto();
  } else {
    clearInterval(cAutoTimer);
  }
}

/* ══════════════════════════════════════════
   READER
══════════════════════════════════════════ */
function openReader(book) {
  currentBook = book;

  // Hero strip
  const strip = document.getElementById("r-strip");
  strip.style.background = `linear-gradient(145deg, ${book.color}, ${book.light})`;
  document.getElementById("r-icon").textContent = book.icon;
  document.getElementById("r-title").textContent = book.name;

  const badge = document.getElementById("r-badge");
  const meta = CATEGORIES[book.cat] || CATEGORIES["All"];
  badge.textContent = book.cat;
  badge.style.background = meta.dot + "33";
  badge.style.color = meta.dot;
  badge.style.border = "0.5px solid " + meta.dot + "55";

  document.getElementById("r-tagline").textContent  = book.tagline;
  document.getElementById("r-overview").textContent = book.overview;
  document.getElementById("r-insight").textContent  = book.insight;

  // Chips
  document.getElementById("r-chips").innerHTML =
    book.chips.map(c => `<span class="r-chip">${c}</span>`).join("");

  // Related
  document.getElementById("r-rel-chips").innerHTML =
    book.related.map(r => `<span class="r-rel-chip" onclick="filterByRelated('${r}')">${r} →</span>`).join("");

  // Progress
  const prog = readBooks.has(book.id)
    ? 100
    : Math.round(Math.random() * 55 + 20);
  setTimeout(() => {
    document.getElementById("r-prog-fill").style.width = prog + "%";
    document.getElementById("r-prog-val").textContent  = prog + "%";
  }, 220);

  // Ask button
//   document.getElementById("ask-more-btn").onclick = () => {
//     closeReader();
//     if (typeof sendPrompt === "function")
//       sendPrompt("Tell me more about: " + book.name);
//   };

document.getElementById("ask-more-btn").onclick = () => {
  const query = encodeURIComponent(book.name + " " + book.cat);
  const url = `https://www.google.com/search?q=${query}`;
  window.open(url, "_blank");
};
  document.getElementById("reader").classList.add("open");
  document.body.style.overflow = "hidden";
}
// Buy button
document.getElementById("buy-book-btn").onclick = () => {
  if (!currentBook) return; 
    if (currentBook.buy) {
        window.open(currentBook.buy, "_blank");
    } else {
        showToast("❌", "Sorry, no purchase link available for this book.");
    }
};

function closeReader() {
  document.getElementById("reader").classList.remove("open");
  document.getElementById("r-prog-fill").style.width = "0%";
  document.getElementById("r-prog-val").textContent  = "0%";
  document.body.style.overflow = "";
}

function overlayClick(e) {
  if (e.target === document.getElementById("reader")) closeReader();
}

function markRead() {
  if (!currentBook) return;
  readBooks.add(currentBook.id);
  document.getElementById("r-prog-fill").style.width = "100%";
  document.getElementById("r-prog-val").textContent  = "100%";
  updateStats();
  buildShelfView();
  showToast("✓", `"${currentBook.name}" marked as read!`);
}

function randomBook() {
  const filtered = activeFilter === "All"
    ? BOOKS
    : BOOKS.filter(b => b.cat === activeFilter);
  const pick = filtered[Math.floor(Math.random() * filtered.length)];
  if (pick) { closeReader(); setTimeout(() => openReader(pick), 150); }
}

function shareBook() {
  if (!currentBook) return;
  const text = `📚 Reading "${currentBook.name}" — ${currentBook.tagline}`;
  navigator.clipboard.writeText(text).catch(() => {});
  showToast("⎘", "Book info copied to clipboard!");
}

function filterByRelated(cat) {
  closeReader();
  if (CATEGORIES[cat]) {
    activeFilter = cat;
    buildFilters();
    buildShelfView();
    buildCarousel();
  }
}

/* ══════════════════════════════════════════
   SEARCH
══════════════════════════════════════════ */
function doSearch() {
  const q = document.getElementById("search-inp").value.toLowerCase().trim();
  if (!q) return;

  const match = BOOKS.find(b =>
    b.name.toLowerCase().includes(q) ||
    b.overview.toLowerCase().includes(q) ||
    b.chips.some(c => c.toLowerCase().includes(q)) ||
    b.cat.toLowerCase().includes(q)
  );

  if (match) {
    // Switch to shelf view, reset filter
    activeFilter = "All";
    setView("shelf");
    buildFilters();
    buildShelfView();
    setTimeout(() => {
      const el = document.getElementById("book-" + match.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("search-hit");
        setTimeout(() => {
          el.classList.remove("search-hit");
          openReader(match);
        }, 750);
      }
    }, 120);
  } else {
    showToast("🔍", `No results found for "${q}"`);
  }
}

document.getElementById("search-inp").addEventListener("keydown", e => {
  if (e.key === "Enter") doSearch();
});

/* ══════════════════════════════════════════
   STATS
══════════════════════════════════════════ */
function updateStats() {
  const r = readBooks.size;
  document.getElementById("stat-read").textContent  = r;
  document.getElementById("badge-read").textContent = r;
}

/* ══════════════════════════════════════════
   KEYBOARD SHORTCUTS
══════════════════════════════════════════ */
document.addEventListener("keydown", e => {
  if (e.key === "Escape")     closeReader();
  if (e.key === "ArrowLeft")  rotateCarousel(cIdx - 1);
  if (e.key === "ArrowRight") rotateCarousel(cIdx + 1);
  if (e.key.toLowerCase() === "r" && !document.getElementById("reader").classList.contains("open"))
    randomBook();
});

/* ══════════════════════════════════════════
   DUST PARTICLES
══════════════════════════════════════════ */
function spawnDust() {
  const c = document.getElementById("dust-container");
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "dust-particle";
    const size = Math.random() * 2.5 + 1;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      bottom:${Math.random() * 50}%;
      background:rgba(201,150,58,${(Math.random() * 0.25 + 0.08).toFixed(2)});
      animation-duration:${(Math.random() * 9 + 7).toFixed(1)}s;
      animation-delay:${(Math.random() * 10).toFixed(1)}s;
    `;
    c.appendChild(p);
  }
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
window.addEventListener("DOMContentLoaded", () => {
  spawnDust();
  buildFilters();
  buildShelfView();

  // Hide loading, show app
  setTimeout(() => {
    document.getElementById("loading").classList.add("hide");
    setTimeout(() => {
      document.getElementById("app").classList.add("visible");
    }, 200);
  }, 1900);
});

