// // const original_answer = ["Sachin Tendulkar", "West Indies", "Sachin Tendulkar", "264", "Muttiah Muralitharan"]
// const original_answer = {
//     q1: "Sachin Tendulkar",
//     q2: "West Indies",
//     q3: "Sachin Tendulkar",
//     q4: "264",
//     q5: "Muttiah Muralitharan"
// }

// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const data = new FormData(form);
//     // const answer = Array.from(data.values());
//     // let result = 0;
//     // for (let i = 0; i <= answer.length; i++) {
//     //     if (answer[i] === original_answer[i])
//     //         result++;
//     // }
//     // console.log(result);
//     let result=0;
//     for (let [key, value] of data.entries()) {
//         if (value === original_answer[key])
//             result++;
//     } 
//     const out = document.getElementById('out');
//     out.innerText = `${result} out of  5 is correct`;
//     // document.getElementById('container').append(out);
//     form.reset();
// }) 

const questionBank = [
    {
        question: "Who has the most centuries in international cricket?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rohit Sharma"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the 2011 Cricket World Cup?",
        options: ["Australia", "India", "England", "Pakistan"],
        answer: "India"
    },
    {
        question: "Who is the captain of Indian ODI team (2023)?",
        options: ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Hardik Pandya"],
        answer: "Rohit Sharma"
    },
    {
        question: "Who has the highest individual score in ODI cricket?",
        options: ["Rohit Sharma", "Chris Gayle", "Virender Sehwag", "Martin Guptill"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "Which country hosted the 2019 Cricket World Cup?",
        options: ["India", "Australia", "England", "South Africa"],
        answer: "England"
    },
    {
        question: "Who hit six sixes in an over in T20 World Cup?",
        options: ["Chris Gayle", "Yuvraj Singh", "AB de Villiers", "MS Dhoni"],
        answer: "Yuvraj Singh"
    },
    {
        question: "Which player is known as 'Captain Cool'?",
        options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Steve Smith"],
        answer: "MS Dhoni"
    },
    {
        question: "Which team has won most IPL titles?",
        options: ["Mumbai Indians", "CSK", "RCB", "KKR"],
        answer: "Mumbai Indians"
    },
    {
        question: "Who is known as 'Hitman'?",
        options: ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Hardik Pandya"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which country won the first Cricket World Cup?",
        options: ["India", "West Indies", "Australia", "England"],
        answer: "West Indies"
    },
    {
        question: "Who has the fastest century in ODI?",
        options: ["AB de Villiers", "Virat Kohli", "Corey Anderson", "Shahid Afridi"],
        answer: "AB de Villiers"
    },
    {
        question: "Which Indian bowler took 10 wickets in a Test innings?",
        options: ["Kapil Dev", "Anil Kumble", "Jasprit Bumrah", "Zaheer Khan"],
        answer: "Anil Kumble"
    },
    {
        question: "Which country is known as Proteas?",
        options: ["Australia", "South Africa", "New Zealand", "England"],
        answer: "South Africa"
    },
    {
        question: "Who is called 'Run Machine'?",
        options: ["Rohit Sharma", "Virat Kohli", "Steve Smith", "Joe Root"],
        answer: "Virat Kohli"
    },
    {
        question: "Which team won IPL 2023?",
        options: ["CSK", "MI", "GT", "RCB"],
        answer: "CSK"
    },
    {
        question: "Who is the fastest bowler in cricket history?",
        options: ["Brett Lee", "Shoaib Akhtar", "Mitchell Starc", "Jofra Archer"],
        answer: "Shoaib Akhtar"
    },
    {
        question: "Which stadium is the largest in the world?",
        options: ["MCG", "Eden Gardens", "Narendra Modi Stadium", "Lords"],
        answer: "Narendra Modi Stadium"
    },
    {
        question: "Who is known as 'Universe Boss'?",
        options: ["Chris Gayle", "Andre Russell", "Kieron Pollard", "Dwayne Bravo"],
        answer: "Chris Gayle"
    }
];

//  get only 5 random questions
function getRandomQuestions(count) {
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const form = document.getElementById('quizForm');
const resultDiv = document.getElementById('result');
const submitBtn = document.getElementById('submitBtn');

const questions = getRandomQuestions(5);

// render questions
questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';

    const p = document.createElement('p');
    p.textContent = `${index + 1}. ${q.question}`;
    div.appendChild(p);

    q.options.forEach(option => {
        const label = document.createElement('label');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${index}`;
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));

        div.appendChild(label);
    });

    form.appendChild(div);
});

// submit logic
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let score = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const allOptions = document.querySelectorAll(`input[name="q${index}"]`);

        allOptions.forEach(input => {
            const label = input.parentElement;

            if (input.value === q.answer) {
                label.classList.add('correct');
            }

            if (selected && input.value === selected.value && input.value !== q.answer) {
                label.classList.add('wrong');
            }
        });

        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    resultDiv.textContent = `Your Score: ${score} / ${questions.length}`;

    submitBtn.disabled = true;
});