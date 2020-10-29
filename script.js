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

// setting varible for elements and sections
var timeLeft= document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var contSec = document.querySelector("#container");
var secondsLeft = 75;
var timerInterval= 0;
var questionSec = document.getElementById("questionsSec");
var choiceSec = document.getElementById("choiceSec");
var ulSecBuild= document.createElement("ul");
var ulEl = document.querySelector("ul")
var questionIndex = 0;
var highScores = document.querySelector("#viewHighScore")

// display prompt
    // Display first screen with Start Button
// Set timer Function for the Quiz

startBtn.addEventListener("click", function () {
    // check for zero & set total time for the quiz
    if (timerInterval === 0) {
        timerInterval = setInterval(function () {
            secondsLeft--;
            timeLeft.textContent = "Time: " + secondsLeft;
                // stop timer when it reaches 0
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                result();
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
    //remove Start Button from initial page 
    startBtn.setAttribute("style","display:none");
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
        listItem.addEventListener("click", (solve));
    })
}

function solve(event) {
    var element = event.target;
    document.createElement ("hr")
    // setting function for matching each qestion to answer array
    if (element.matches("li")) {
        var divSecBuild = document.createElement("div");
        divSecBuild.setAttribute("id","promptDiv");

        if (element.textContent === questions[questionIndex].answer){
            secondsLeft++;
            divSecBuild.textContent= "GOOD JOB You are CORRECT"
            // penanty for worong answer 
        } else {
            secondsLeft=secondsLeft-10;
            divSecBuild.textContent= "You are WRONG";
        }
    }
    questionIndex++
    if (questionIndex >= questions.length) {
        // Finish Message and if question index reaches beyong number of index, finish the quiz and show finish message 
        result();
        divSecBuild.textContent = "Good Job you are Done!!"
        
    } else {
        showQuestion(questionIndex);
    }
    questionSec.appendChild(divSecBuild);
}
 

function result(){
 // Clears existing data 
    questionSec.innerHTML = "";
    ulSecBuild.innerHTML = "";
// create sections for result (score )to be shown
    if (secondsLeft>=0) {
    var Points = secondsLeft;
    var headingpEl = document.createElement("p");
    clearInterval(timerInterval)
    headingpEl.textContent = "Your Final Score is " + Points;
    }
 // create input section to save score and initial to local storage 
    var headingpEl2 = document.createElement("p");
    choiceSec.appendChild(headingpEl2);
    headingpEl2.textContent = "Submit Your Score NOW";

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.setAttribute("placeholder", "Your Initial");
    createInput.textContent = "";

    choiceSec.appendChild(createInput);
// create submit message button 
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    choiceSec.appendChild(createSubmit);
// give click event lister to button. 
    createSubmit.addEventListener("click",function(){
        var initials = createInput.value;
            //check of error 
        if (initials==="") {
            console.log("NO VALUE ENTERED")

        } else {
            var finalScore = {
                initials: initials,
                score: Points
            }
            console.log(finalScore);
        }

        // store value to local storage.
        localStorage.setItem("user", JSON.stringify(finalScore));
        var allScores = localStorage.getItem("allScores");
        if (allScores ===null){
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);          
        }
        allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
        highscore()

    });

}   