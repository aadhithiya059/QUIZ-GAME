
const quizData = [
    {
        question: "What is the capital of India?",
        options: ["DELHI", "MUMBAI", "PUNE", "RANCHI"],
        correct: 0
    },
    {
        question: "What is the National Language of India?",
        options: ["TAMIL", "HINDI", "TELUGU", "KANADA"],
        correct: 1
    },
    {
        question: "Who is the Prime Minister of INDIA ?",
        options: ["NARENDRA MODI", "RAGUL GANDHI", "R.P.SINGH", "AMIT SHA"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
    restartButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.textContent = '';
    restartButton.style.display = 'none';
    loadQuestion();
}

loadQuestion();
