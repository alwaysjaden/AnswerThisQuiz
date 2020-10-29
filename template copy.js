var question1 = [[
    "1.Commony used data types DO NOT Include"],
    ["string","booleans","alerts","numbers"],
    [3]];
var question2 = [[
    "1.The Condition is an if/else statment is enclosed within ____"],
    ["quotes","bbbbb","ccccc","ddddd"],
    [3]];
var question3 = [[
    "3. Arrays in JavaScript can be used to store"],
    ["numbers and string","other arrays","booleans","all of above"],
    [3]];
var question4 = [[
    "4. String Value must be enclsed within ______ when being assigned to variable"],
    ["commas","curly btackets","ccccccc","dddddd"],
    [3]]; 
var question5 = [[
    "5. A very useful tool used during development and debugging for printing contents to the debugger is :"],
    ["JavaScript","Terminal/bah","for loop","console.log"],
    [3]];              
var question6 = [[
    "5. A very useful tool used during development and debugging for printing contents to the debugger is :"],
    ["JavaScript","Terminal/bah","for loop","console.log"],
    [3]];    



var timeEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var secondsLeft = 70;
var mainSec = document.getElementById("pageTitle");
var contSec = document.getElementById("content");
var footSec = document.getElementById("promts");
var btnEl = document.getElementById("start");
var totalPoint =0
/*

// display prompt
    // Display first screen with Start Button
*/
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      secondsLeft>=0;
      timeEl.textContent = secondsLeft ;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        timeOut(); 
      }
  
    }, 1000);
  }
  
function timeOut() {
      alert("Time is Up, Try Again")
    
  }

    var h1tag = document.createElement("h1");
    var ptag = document.createElement("p");
    mainSec.appendChild(h1tag);
    contSec.appendChild(ptag);

function firstPage() {

    h1tag.textContent = "Hello";
    ptag.textContent = "Try to answer the following code-related question within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!!";
    var btntag = document.createElement("button");
    btntag.textContent = "Start Quiz";
    footSec.appendChild(btntag);
    footSec.setAttribute("id", "start");
    footSec.setAttribute("onClick", "quizPage1()");
    return;
    
    //clear all changes by firstpage function
}

//display question
    // ID each buttons #1 ~ #4 : 
        // function Click to answer 
        // Give Correct answer choice [if click === x ] the +++ [Y] to total score Variable
        // click to next question (or Function)(maybe loop)


function quizPage1() {
    setTime();
    var h2tag = document.createElement("h2");
    h2tag.textContent = question1[0][0];
    for (var i=0; i<question1[1].length; i++){
        var btntag = document.createElement("button");btntag.setAttribute("id",i+1)
        btntag.textContent = question1[1][i];
        contSec.appendChild(btntag);
        footSec.setAttribute("onClick", "quizPage2()");

        // give each button ID point
        // if Correct answer is selected + to total point
        // id worng Answer is selected - to Total Point - secondsLeft-10 
    }
function quizPage2() {
    setTime();
    var h2tag = document.createElement("h2");
    h2tag.textContent = question1[0][0];
    for (var i=0; i<question1[1].length; i++){
        var btntag = document.createElement("button");btntag.setAttribute("id",i+1)
        btntag.textContent = question1[1][i];
        contSec.appendChild(btntag);
        footSec.setAttribute("onClick", "quizPage2()");

        // give each button ID point
        // if Correct answer is selected + to total point
        // id worng Answer is selected - to Total Point - secondsLeft-10 
    }   
     
}
firstPage();


// sum all scores from Question 

// display total score with input name [ input in HTML]

// Store Name 
submitBtn.addEventListener("click", function() {
    // var record = name from input
    // score from score 
    localStorage.setItem("Name", name);
    localStorage.setItem("score Record", totalPoint);
  });

/*
// display best scores via modal
  function renderScores() {
    var UserName = localStorage.getItem("name");
    var UserScore = localStorage.getItem("Record");
  
    if (!email || !password) {
      return;
    }
  
    userEmailSpan.textContent = UserName;
    userPasswordSpan.textContent = UserScore;
  }
  