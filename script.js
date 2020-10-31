var questions = [{
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2
}, {
    question: "The condition in an if / else statement is enclosed within ____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2
}, {
    question: "Arrays in Javascript can be used to store ____.",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3
}, {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: 2
}, {
    question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    answers: ["Javascript", "terminal / bash", "for loops", "console log"],
    correctAnswer: 3
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
var modalCont = document.getElementById("modal-content")

// display prompt
  


// Modal Elements in variable
var modal = document.getElementById("myModal");
var btn = document.getElementById("viewHighScore");
var span = document.getElementsByClassName("close")[0];

// Open Modal
btn.onclick = function() {
  modal.style.display = "block";
}
// Close Modal
// x bttn
span.onclick = function() {
  modal.style.display = "none";
}
// anywhere in box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Set timer Function for the Quiz on Start of Quiz
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

// Display  quiz Questions with Start Button
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
// Modal to Show High Scores

function ModalContent(){
    // display current score and high score history 
        var h1El = document.createElement("h1")
        h1El.textContent=" High Scores";
        modalCont.appendChild(h1El);
    
        var allScores = localStorage.getItem("allScores");
    
        allScores = JSON.parse(allScores);
        if (allScores !== null) {
    // crate list element to display all previous scores + Initial 
    // if no scores are stored display there is no scores to display
    for (var i = 0; i < allScores.length; i++) {
    
        var liEl = document.createElement("li");
        liEl.textContent = allScores[i].initials + " " + allScores[i].score;
        modalCont.appendChild(liEl);
    }} else {
        h1El.textContent="No High Scores Yet";
    };
       
    }
// final page 
function highscore(){
        questionSec.innerHTML = "";
        ulEl.innerHTML = "";
// display current score and high score history 
        var h1El = document.createElement("h1")
        h1El.textContent=" High Scores";
        questionSec.appendChild(h1El);

        var allScores = localStorage.getItem("allScores");

        allScores = JSON.parse(allScores);
        if (allScores !== null) {
// crate list element to display all previous scores + Initial 
    for (var i = 0; i < allScores.length; i++) {

        var liEl = document.createElement("li");
        liEl.textContent = allScores[i].initials + " " + allScores[i].score;
        choiceSec.appendChild(liEl);
    }};

    returnBtn() 
}
function returnBtn() {

// create re-set button to erase local storage memmory
    var clearBtn = document.createElement("button");
    clearBtn.setAttribute("id", "clear");
    clearBtn.setAttribute("class", "btn btn-success");
    clearBtn.setAttribute("margin-top", "25px");
    clearBtn.textContent = "Clear Score";
    choiceSec.appendChild(clearBtn);

    clearBtn.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    })
// create button to go back to beginning of the quiz page. 
    var returnBtn = document.createElement("button");
    returnBtn.setAttribute("id", "clear");
    returnBtn.setAttribute("class", "btn btn-warning");
    returnBtn.setAttribute("margin-top", "25px");
    returnBtn.textContent = "Re-Start Your Quiz";
    choiceSec.appendChild(returnBtn);

    clearBtn.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    })

    returnBtn.addEventListener("click", function(){
        window.location.replace("./index.html");


})
}



ModalContent();
