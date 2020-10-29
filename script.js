var questions = [{
    question: "1. How do you write 'Hello World' in an alert box?",
    answers: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctAnswer: 3
}, {
    question: "2. How to empty an array in JavaScript?",
    answers: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
    correctAnswer: 2
}, {
    question: "3. What function to add an element at the begining of an array and one at the end?",
    answers: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: 1
}, {
    question: "4. What will this output? var a = [1, 2, 3]; console.log(a[6]);",
    answers: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0
}, {
    question: "5. What would following code return? console.log(typeof typeof 1);",
    answers: ["string", "number", "Syntax error", "undefined"],
    correctAnswer: 0
}];


var timeLeft= document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var secondsLeft = 70;
var timerInterval= 0;
var questionSec = document.getElementById("questionsSec");
var choiceSec = document.getElementById("choiceSec");
var ulSecBuild= document.createElement("ul");
var questionIndex = 0;



// display prompt
    // Display first screen with Start Button
// Set timer Function for the Quiz

startBtn.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (timerInterval === 0) {
        timerInterval = setInterval(function () {
            secondsLeft--;
            timeLeft.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                allDone();
                alert("Time's up!");
            }
        }, 1000);
    }
    showQuestion(questionIndex);
});


function showQuestion(questionIndex) {
    // Clears existing data 
    questionSec.innerHTML = "";
    ulSecBuild.innerHTML = "";
    //remove Start Button
    startBtn.parentNode.removeChild(startBtn);
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].answers;
        questionSec.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionSec.appendChild(ulSecBuild);
        ulSecBuild.appendChild(listItem);
    })
}


 



/*
// sum all scores from Question 

// display total score with input name [ input in HTML]

// Store Name 
submitBtn.addEventListener("click", function() {
    // var record = name from input
    // score from score 
    localStorage.setItem("Name", name);
    localStorage.setItem("score Record", totalPoint);
  });
*/