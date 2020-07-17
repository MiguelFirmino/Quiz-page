const startSection = document.getElementById("quiz-start");
const questionBox = document.getElementById("question-box");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const resultsBox = document.getElementById("results-box");
const answerList = document.getElementById("answer-list");
const questionResult = document.getElementById("question-result");

startBtn.addEventListener("click", function(){changeSection(startSection, questionBox);});
nextBtn.addEventListener("click", updateQuestion);

var questionHeader = document.getElementById("question-header");
var questionText = document.getElementById("question-text");
var altInputs = document.getElementsByName("alternative");
var labelA = document.getElementById("label-a");
var labelB = document.getElementById("label-b");
var labelC = document.getElementById("label-c");
var labelD = document.getElementById("label-d");

var questionAmmount = questions.length;
var questionNumber = 1;
var correctAnswers = 0;
var answerResults = [];

function changeSection(currentSection, nextSection) {
    currentSection.style.opacity = 0;
    currentSection.addEventListener("transitionend",
    function(){
        currentSection.remove();
        nextSection.classList.remove("hide");
    })
}

function updateQuestion() {
    registerAnswer();
    questionNumber++;
    if (questionNumber === questionAmmount) {
        nextBtn.innerHTML = "FINISH";
        nextBtn.addEventListener("click", function(){changeSection(questionBox, resultsBox);});
    }
    if (questions.length > 0) {
        curQuestion = questions.pop();
        updateText(curQuestion);
    }
}

function updateText(curQuestion) {
    questionHeader.innerHTML = `Question ${questionNumber} out of ${questionAmmount}:`;
    questionText.innerHTML = curQuestion.text;
    labelA.innerHTML = curQuestion.altA;
    labelB.innerHTML = curQuestion.altB;
    labelC.innerHTML = curQuestion.altC;
    labelD.innerHTML = curQuestion.altD;
}

function registerAnswer() {
    let answer;
    for (var input of altInputs) {
        if (input.checked === true) {
            answer = input.value;
            input.checked = false;
            break
        }
    }
    if (answer === undefined) {
        addAnswer("null-answer");
    } else if (answer === curQuestion.correct) {
        addAnswer("right-answer");
        correctAnswers++;
    } else {
        addAnswer("wrong-answer");
    }
    questionResult.innerHTML = `You got ${correctAnswers} out of ${questionAmmount} questions right`;
}

function addAnswer(className) {
    var newAnswer = document.createElement("li");
    newAnswer.classList.add(className);

    var answerNumber = document.createElement("h3");
    answerNumber.innerHTML = questionNumber;

    newAnswer.appendChild(answerNumber);

    answerList.appendChild(newAnswer);
}

var curQuestion = questions.pop();
updateText(curQuestion);